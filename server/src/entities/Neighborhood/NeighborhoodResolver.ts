import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { getConnection, getRepository } from "typeorm";
import { ID_NOT_FOUND_ERROR, REPEATED_ENTITY_ERROR } from "../../utils/Errors";
import { Neighborhood } from "./Neighborhood";
import { NeighborhoodResponse } from "./NeighborhoodResponse";

@Resolver()
export class NeighborhoodResolver {
  @Query(() => [Neighborhood])
  async neighborhoods(): Promise<Neighborhood[]> {
    return Neighborhood.find();
  }

  @Query(() => Neighborhood, { nullable: true })
  async neighborhood(@Arg("id") id: number): Promise<Neighborhood | undefined> {
    return Neighborhood.findOne(id);
  }

  @Mutation(() => NeighborhoodResponse)
  async insertNeighborhood(
    @Arg("neighborhood") neighborhood: string
  ): Promise<NeighborhoodResponse> {
    const result = await getRepository(Neighborhood)
      .createQueryBuilder("neighborhood")
      .where("neighborhood.name = :name", {
        name: neighborhood,
      })
      .getOne();
    if (result) return { errors: [REPEATED_ENTITY_ERROR] };
    else {
      const newNeighborhoodId = await (
        await Neighborhood.insert({ name: neighborhood })
      ).raw[0];
      let id = parseInt(newNeighborhoodId.id);
      let newNeighborhood = await Neighborhood.findOne(id);
      return { neighborhood: newNeighborhood };
    }
  }

  @Mutation(() => NeighborhoodResponse)
  async updateNeighborhood(
    @Arg("id") id: number,
    @Arg("neighborhood") neighborhood: string
  ): Promise<NeighborhoodResponse> {
    const selectedNeighborhood = await Neighborhood.findOne(id);
    if (!selectedNeighborhood) return { errors: [ID_NOT_FOUND_ERROR] };
    const result = await getConnection()
      .createQueryBuilder()
      .update(Neighborhood)
      .set({ name: neighborhood })
      .where("id = :id", {
        id,
      })
      .returning("*")
      .execute();
    let updatedNeighborhood = await Neighborhood.findOne(id);
    return { neighborhood: updatedNeighborhood };
  }

  @Mutation(() => Boolean)
  async deleteNeighborhood(@Arg("id") id: number): Promise<boolean> {
    await Neighborhood.delete(id);
    return true;
  }
}

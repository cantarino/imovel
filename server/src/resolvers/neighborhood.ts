import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Neighborhood } from "../entities/Neighborhood";

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

  @Mutation(() => Int)
  async insertNeighborhood(
    @Arg("neighborhood") neighborhood: string
  ): Promise<Neighborhood> {
    return await (await Neighborhood.insert({ name: neighborhood })).raw[0];
  }

  @Mutation(() => Neighborhood, { nullable: true })
  async updateNeighborhood(
    @Arg("id") id: number,
    @Arg("neighborhood") neighborhood: string
  ): Promise<Neighborhood | null> {
    const selectedNeighborhood = await Neighborhood.findOne(id);
    if (!selectedNeighborhood) return null;
    const result = await getConnection()
      .createQueryBuilder()
      .update(Neighborhood)
      .set({ name: neighborhood })
      .where("id = :id", {
        id,
      })
      .returning("*")
      .execute();
    return result.raw[0];
  }

  @Mutation(() => Boolean)
  async deleteNeighborhood(@Arg("id") id: number): Promise<boolean> {
    await Neighborhood.delete(id);
    return true;
  }
}

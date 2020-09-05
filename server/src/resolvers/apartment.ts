import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Apartment } from "../entities/Apartement";
import { ApartmentInput } from "../input/ApartmentInput";

@Resolver()
export class ApartmentResolver {
  @Query(() => [Apartment])
  async apartments(): Promise<Apartment[]> {
    return Apartment.find();
  }

  @Query(() => Apartment, { nullable: true })
  async apartment(@Arg("id") id: number): Promise<Apartment | undefined> {
    return Apartment.findOne(id);
  }

  @Mutation(() => Int)
  async insertApartment(@Arg("data") data: ApartmentInput): Promise<number> {
    return await (await Apartment.insert(data)).raw[0];
  }

  @Mutation(() => Apartment, { nullable: true })
  async updateApartment(
    @Arg("id") id: number,
    @Arg("data") data: ApartmentInput
  ): Promise<Apartment | null> {
    const apartment = await Apartment.findOne(id);
    if (!apartment) return null;
    const result = await getConnection()
      .createQueryBuilder()
      .update(Apartment)
      .set({ ...data })
      .where("id = :id", {
        id,
      })
      .returning("*")
      .execute();
    return result.raw[0];
  }

  @Mutation(() => Boolean)
  async deleteApartment(@Arg("id") id: number): Promise<boolean> {
    await Apartment.delete(id);
    return true;
  }
}

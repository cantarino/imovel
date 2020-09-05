import { Arg, Int, Mutation, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { House } from "../entities/House";
import { HouseInput } from "../input/HouseInput";

@Resolver()
export class HouseResolver {
  @Query(() => [House])
  async houses(): Promise<House[]> {
    return House.find();
  }

  @Query(() => House, { nullable: true })
  async house(@Arg("id") id: number): Promise<House | undefined> {
    return House.findOne(id);
  }

  @Mutation(() => Int)
  async insertHouse(@Arg("data") data: HouseInput): Promise<number> {
    return await (await House.insert(data)).raw[0];
  }

  @Mutation(() => House, { nullable: true })
  async updateHouse(
    @Arg("id") id: number,
    @Arg("data") data: HouseInput
  ): Promise<House | null> {
    const house = await House.findOne(id);
    if (!house) return null;
    const result = await getConnection()
      .createQueryBuilder()
      .update(House)
      .set({ ...data })
      .where("id = :id", {
        id,
      })
      .returning("*")
      .execute();
    return result.raw[0];
  }

  @Mutation(() => Boolean)
  async deleteHouse(@Arg("id") id: number): Promise<boolean> {
    await House.delete(id);
    return true;
  }
}

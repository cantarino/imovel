import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1601184088517 implements MigrationInterface {
    name = 'Initial1601184088517'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "home" ("id" SERIAL NOT NULL, "bedrooms" integer NOT NULL, "suites" integer NOT NULL, "livingRooms" integer NOT NULL, "parkingSpots" integer NOT NULL, "size" double precision NOT NULL, "hasCloset" boolean NOT NULL, "description" character varying, "rent" double precision NOT NULL, "addressId" integer NOT NULL, CONSTRAINT "PK_012205783b51369c326a1ad4a64" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "apartment" ("id" SERIAL NOT NULL, "bedrooms" integer NOT NULL, "suites" integer NOT NULL, "livingRooms" integer NOT NULL, "parkingSpots" integer NOT NULL, "size" double precision NOT NULL, "hasCloset" boolean NOT NULL, "description" character varying, "rent" double precision NOT NULL, "addressId" integer NOT NULL, "floor" integer NOT NULL, "apartmentNumber" integer NOT NULL, "buildingRent" double precision NOT NULL, "hasDoorman" boolean NOT NULL, CONSTRAINT "PK_c3d874d9924f6f16223162b3d3a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "house" ("id" SERIAL NOT NULL, "bedrooms" integer NOT NULL, "suites" integer NOT NULL, "livingRooms" integer NOT NULL, "parkingSpots" integer NOT NULL, "size" double precision NOT NULL, "hasCloset" boolean NOT NULL, "description" character varying, "rent" double precision NOT NULL, "addressId" integer NOT NULL, CONSTRAINT "REL_310c503180e468fbcd36d886f3" UNIQUE ("addressId"), CONSTRAINT "PK_8c9220195fd0a289745855fe908" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "neighborhood" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "UQ_89cc9ebd57f06da908f288dab2c" UNIQUE ("name"), CONSTRAINT "PK_97797961be30242a5170d17caec" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "postalCode" character varying NOT NULL, "neighborhoodId" integer NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "apartment" ADD CONSTRAINT "FK_a3c2e39081335abf04606a75f07" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "house" ADD CONSTRAINT "FK_310c503180e468fbcd36d886f3b" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_b015d504b3f933943a1f2451eb8" FOREIGN KEY ("neighborhoodId") REFERENCES "neighborhood"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_b015d504b3f933943a1f2451eb8"`);
        await queryRunner.query(`ALTER TABLE "house" DROP CONSTRAINT "FK_310c503180e468fbcd36d886f3b"`);
        await queryRunner.query(`ALTER TABLE "apartment" DROP CONSTRAINT "FK_a3c2e39081335abf04606a75f07"`);
        await queryRunner.query(`DROP TABLE "address"`);
        await queryRunner.query(`DROP TABLE "neighborhood"`);
        await queryRunner.query(`DROP TABLE "house"`);
        await queryRunner.query(`DROP TABLE "apartment"`);
        await queryRunner.query(`DROP TABLE "home"`);
    }

}

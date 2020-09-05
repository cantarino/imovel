import { Request, Response } from "express";

export type ImovelDbContext = {
  req: Request;
  res: Response;
};

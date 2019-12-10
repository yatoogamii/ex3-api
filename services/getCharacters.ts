import {Request, Response, NextFunction} from "express";
import CharacterModel from '../models/CharacterModel';

export default async (req: Request, res: Response, next: NextFunction) => {
  const data = await CharacterModel.find({})
  res.status(200).json(data)
}

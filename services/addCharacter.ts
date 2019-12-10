import {Request, Response, NextFunction} from "express";
import CharacterModel from '../models/CharacterModel';

export default async (req: Request, res: Response, next: NextFunction) => {
  const nameOfNewCharacter = req.body.name;
  const newCharacter = new CharacterModel({
    name: nameOfNewCharacter,
    cond1: false,
    cond2: true
  })

  await newCharacter.save();

  res.status(200);
}

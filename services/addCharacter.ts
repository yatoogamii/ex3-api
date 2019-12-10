import {Request, Response, NextFunction} from "express";
import CharacterModel from '../models/CharacterModel';

function randomizedCond() {
  const randomNumber = Math.random();
  return Math.round(randomNumber) === 1 ? true : false;
}

export default async (req: Request, res: Response, next: NextFunction) => {
  const nameOfNewCharacter = req.body.name;
  const newCharacter = new CharacterModel({
    name: nameOfNewCharacter,
    cond1: randomizedCond(),
    cond2: randomizedCond()
  })

  await newCharacter.save();

  res.status(200);
}

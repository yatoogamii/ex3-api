import express from 'express';
import {Request, Response, NextFunction} from "express";
import cors from 'cors';

if(process.env.NODE_ENV !== "production") {
  if(!require("dotenv").config()) {
    throw new Error("You must add a .env file.");
  }
}

import './database/database';

const app: express.Application = express();
// import services
import getCharacters from './services/getCharacters';
import filteredCharacters from './services/filteredCharacters';
import addCharacter from './services/addCharacter';

// middleware

app.use(cors({
  origin: 'http://localhost:8181',
  credentials: true
}))

// routing

app.get('/filter/characters', filteredCharacters)
app.get('/get/characters', getCharacters)
app.post('/add/character', addCharacter)

// start the Express server
app.listen( 8080, () => { console.log( `server started at http://localhost:${ 8080 }` ); } );

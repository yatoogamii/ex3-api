import {Request, Response, NextFunction} from "express";
import CharacterModel from '../models/CharacterModel';

/*
  Je t'explique en deux mots ce qui se passe ici : Il est rare qu'on envoie directement le résultat d'une requête à la base de donnée vers le front, on risque de donner beaucoup trop d'informations sensibles d'un coup ... ou inutiles. Ce qu'on fait c'est qu'on va modeler une réponse a enoyer vers le front.
  Le but de cette api est de récupérer des données, et de les séparer suivant des conditions (je me suis pas embêté je les ai nommées cond1 et cond2). 
  Ne t'embête pas à réfléchir a des nouvelles requêtes, on pourrait effectivement en faire une seule et trier dedans mais ça ne règlerai pas non plus le problème ;)  (et dans le cas d'une grosse base de donnée on ne va pas tout charger pour trier dedans ...)
 */




export default (req: Request,res: Response,next: NextFunction) => {

  const OkNo: any = [];	
  const NoOk: any = [];	
  const OkOk: any = []; 
  const NoNo: any = []; 

  CharacterModel.find({cond1:true}, (err: any, data: any)=>{
    for(let element of data) {
      if(!element.cond2)
      {
        OkNo.push(element);
      }
      else
      {
        OkOk.push(element);
      }
    }
  })

  CharacterModel.find({cond2:false}, (err: any, data2: any)=>{
    for(let element of data2) {
      if(!element.cond2)
      {
        NoNo.push(element);
      }
      else
      {
        NoOk.push(element);
      }
    }
  })


  res.status(200).json({
    OkOk: OkOk,
    OkNo: OkNo,
    NoOk: NoOk,
    NoNo: NoNo
  })

}

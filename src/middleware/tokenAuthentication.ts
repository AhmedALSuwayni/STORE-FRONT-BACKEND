import * as express from 'express';
import * as jwt from 'jsonwebtoken';

export const authenticateToken = (req: express.Request, res: express.Response, next: express.NextFunction):void=>{
    try{
        jwt.verify(req.body.token,process.env.TOKEN_SECRET as string);
        next();
    }catch(err){
        res.status(401).send("can't access"+err);
    }
};
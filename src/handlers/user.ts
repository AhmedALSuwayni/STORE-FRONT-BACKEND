import * as express from 'express';
import {authenticateToken} from '../middleware/tokenAuthentication';
import {User, UserStore} from '../models/user';
import * as jwt from 'jsonwebtoken';

const store = new UserStore();

const Index =async(req: express.Request,res: express.Response) =>{
    try{
        const users = await store.Index();
        res.json(users);
    }catch(error){
        res.status(400);
        res.json(`rejected token ${error}`);
    }
};

const Show = async (req: express.Request, res: express.Response) => {
    try {
      const user = await store.Show(req.params.id);
      res.json(user);
    } catch (error) {
      res.status(400);
      res.json(error);
    }
  };
  
  const Create = async (req: express.Request, res: express.Response) => {
    let data = req.body;
    const user: User = {
      name: data.name,
      username: data.username,
      password: data.password
    };
    try {
      const newUser = await store.Create(user);
      const token = jwt.sign(
        { name: newUser.name},process.env.TOKEN_SECRET+"");
      res.json({idToken:token});
    } catch (error) {
      res.status(400);
      res.json(error +"for The user: "+ user);
    }
  };
  
  const signin = async (req: express.Request, res: express.Response) => {
    let data = req.body;
    const userinput: User = {
      username: data.username,
      password: data.password
    };
  
    try {
      const user = await store.Authntication(userinput);
      if (user === null) {res.json('You Need To Sign up First');
    
    } else {
        const token = jwt.sign(
          {name: user.name}, process.env.TOKEN_SECRET+"");
         res.json({idToken:token});
      }
    } catch (error) {
      res.status(401);
      res.json({ error });
    }
  };

  const DecodedToken = async (req: express.Request, res: express.Response) => {
    res.send(res.locals.decoded.user);
}

  const user_routes = (app: express.Application) => {
    app.get('/users', authenticateToken, Index);
    app.get('/users/:id', authenticateToken, Show);
    app.post('/signin', signin);
    app.post('/signup', Create);
    app.get("/user/decoded", authenticateToken, DecodedToken);
  };
  
  export default user_routes;



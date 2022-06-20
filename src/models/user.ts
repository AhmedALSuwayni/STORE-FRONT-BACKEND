import client from '../database';
import * as bcrypt from 'bcrypt';

const{ BCRYPT_PASSWORD, SALT_ROUND} =process.env;

export type User = {
    id?: number;
    name?: string;
    username: string;
    password: string;
};

export class UserStore{
    async Authntication(user:User): Promise<User | null>{
        const conn = await client.connect();
        const sql ='SELECT id,name,username,password FROM users WHERE username=$1;';
        const result = await conn.query(sql, [user.username]);
        conn.release();
        if(result.rows.length){
            const resUser:User = result.rows[0];
            if (bcrypt.compareSync(user.password+ BCRYPT_PASSWORD,resUser.password)){
                console.log(resUser);
              return resUser;  
            }
        }
            return null;
    }

    async Index(): Promise<User[]> {
        try {
          // @ts-ignore
          const conn = await client.connect();
          const sql = 'SELECT * FROM users;';
          const result = await conn.query(sql);
          conn.release();

          return result.rows;
        } catch (error) {
          throw new Error(`Can Not Get Users The Error Is : ${error}`);
        }
      }
    
      async Show(id: string): Promise<User> {
        try {
          // @ts-ignore
          const sql = `SELECT * FROM users WHERE id=$1;`;
          const conn = await client.connect();
          const result = await conn.query(sql, [id]); 
          conn.release();
    
          return result.rows[0];
        } catch (error) {
          throw new Error(`Can Not Get The User By ID: ${id} The Error Is : ${error}`);
        }
      }
    
      async Create(u: User): Promise<User> {
        try {
          // @ts-ignore
          const conn = await client.connect();
          const sql = 'INSERT INTO users (name,username, password) VALUES($1,$2,$3) RETURNING *';
          const hash = bcrypt.hashSync(
            u.password + BCRYPT_PASSWORD,
            parseInt(SALT_ROUND as string)
          );
          const result = await conn.query(sql, [u.name,u.username, hash]);
          const user = result.rows[0];
          conn.release();
    
          return user;
        } catch (error) {
          throw new Error(`Can Not Create User By Name: ${u.username} The Error Is : ${error}`);
        }
      }
    
      async Delete(id: string): Promise<User> {
        try {
          const sql = `DELETE FROM users WHERE id=$1`;
          // @ts-ignore
          const conn = await client.connect();
          const result = await conn.query(sql, [id]);
          const user = result.rows[0];
    
          conn.release();
          return user;
        } catch (error) {
          throw new Error(`Can Not Delete The User By ID: ${id} The Error Is : ${error}`);
        }
      }
      async Update(id: number,name: string): Promise<User> {
        try {
          const sql = `UPDATE users set name=$1 WHERE id=$2 RETURNING *;`;
          // @ts-ignore
          const conn = await client.connect();
          const result = await conn.query(sql, [name, id]);
          const user = result.rows[0];
    
          conn.release();
          return user;
        } catch (error) {
          throw new Error(`Can Not Update User Name At ID: ${id} The Error Is : ${error}`);
        }
      }
}
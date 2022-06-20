
import client from '../database';

export type product = {
  id?: number;
  name: string;
  price: number;
  category:string
};

export class productStore {
  async Index(): Promise<product[]> {
    try {
      // @ts-ignore
      const conn = await client.connect();
      const sql = 'SELECT * FROM products;';
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (error) {
      throw new Error(`Can Not Get Products The Error Is : ${error}`);
    }
  }

  async Show(id: number): Promise<product> {
    try {
       // @ts-ignore
      const sql = `SELECT * FROM products WHERE id=$1;`;
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(`Can Not Get Product ${id} The Error Is : ${error}`);
    }
  }

  async Create(p: product): Promise<product> {
    try {
      // @ts-ignore
      const conn = await client.connect();
      const sql ='INSERT INTO products(name, price,category) VALUES($1, $2, $3) RETURNING *;';
      const result = await conn.query(sql, [p.name, p.price, p.category]);
      const product = result.rows[0];
      conn.release();

      return product;
    } catch (error) {
      throw new Error(`Can Not Create product (${p.name}): ${error}`);
    }
  }

  async Delete(id: number): Promise<product> {
    try {
      // @ts-ignore
      const sql = `DELETE FROM products WHERE id=$1`;
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      const product = result.rows[0];
      conn.release();

      return product;
    } catch (error) {
      throw new Error(`Can Not Delete Product ${id}The Error Is : ${error}`);
    }
  }
  async Update(name: string, price: number, id: number): Promise<product> {
    try {
      // @ts-ignore
      const sql = `UPDATE products set name=$1 ,price=$2 WHERE id=$3 RETURNING *;`;
      const conn = await client.connect();
      const result = await conn.query(sql, [name, price, id]);
      const product = result.rows[0];
      conn.release();

      return product;
    } catch (error) {
      throw new Error(`Can Not Update Product ${id} The Error Is : ${error}`);
    }
  }
}
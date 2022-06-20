import client from '../database';

export type order = {
  id?: number;
  userId: string;
  productId?:number
};

export class orderStore {
  async Index(): Promise<order[]> {
    try {
      // @ts-ignore
      const conn = await client.connect();
      const sql = `SELECT * FROM orders`;
      const result = await conn.query(sql);
      conn.release();

      return result.rows;
    } catch (error) {
      throw new Error(`Can Not Get The Orders The Error Is : ${error}`);
    }
  }

  async Show(id: number): Promise<order> {
    try {
      // @ts-ignore
      const sql = `SELECT orders.id,orders.user_id,OrderItems.productId,OrderItems.quantity FROM
                  "orders" INNER JOIN OrderItems ON orders.id=OrderItems.orderid WHERE orders.id=$1;`;
      const conn = await client.connect();
      const result = await conn.query(sql, [id]);
      conn.release();

      return result.rows[0];
    } catch (error) {
      throw new Error(`Can Not Get The Product ${id} The Error Is : ${error}`);
    }
  }

  async Create(o: order): Promise<order> {
    try {
      // @ts-ignore
      const conn = await client.connect();
      const sql ='INSERT INTO orders (user_id) VALUES($1) RETURNING *';
      const result = await conn.query(sql, [o.userId]);
      const order = result.rows[0];
      conn.release();

      return order;
    } catch (error) {
      throw new Error(`Can Not Create The Order The Error Is :${error}`);
    }
  }

  async Delete(id: string): Promise<order> {
    try {
      // @ts-ignore
      const sql = `DELETE FROM orders WHERE id=${id}`;
      const conn = await client.connect();
      const result = await conn.query(sql);
      const order = result.rows[0];
      conn.release();

      return order;
    } catch (error) {
      throw new Error(`Can Not Delete The Order ${id} The Error Is :${error}`);
    }
  }

  async AddProduct(
    quantity: number,
    orderId: string,
    productId: string
  ): Promise<order> {
    try {
      // @ts-ignore
      const sql = `INSERT INTO  OrderItems(quantity, orderid,productid) VALUES($1,$2,$3) RETURNING *;`;
      const conn = await client.connect();
      const result = await conn.query(sql, [quantity, orderId, productId]);
      const order = result.rows[0];
      conn.release();

      return order;
    } catch (error) {
      throw new Error(`Can Not Add The Product ${productId} To The Order ${orderId} The Error Is :${error}`);
    }

  }
}
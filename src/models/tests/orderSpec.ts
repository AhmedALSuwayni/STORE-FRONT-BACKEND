import { orderStore } from '../order';
const store = new orderStore();

describe("Check The Respone in Order Module", (): void =>{

    it("Creating New Order", async (): Promise<void> => {
        const res = await store.Create({
            userId: '1'
        });
        expect(res).toBeDefined;
    })

    it("Add Product To Order ", async (): Promise<void> => {
        const orderId: number = 1;
        const productId: string = '1';
        const quantity: string = '5';
        const res = await store.AddProduct(orderId,productId,quantity);
        expect(res).toBeDefined;
    })

    it("Checking All Orders", async (): Promise<void> => {
        const res = await store.Index();
        expect(res).toBeDefined;
    })
})
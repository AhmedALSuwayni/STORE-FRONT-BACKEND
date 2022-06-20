import { productStore } from "../product";
const store = new productStore();

describe("Check The Respone in Product Module", (): void =>{

    it("Creating New Product", async (): Promise<void> => {
        const res = await store.Create({
            name: 'Spoon',
            price: 20,
            category:'iron'
        });
        expect(res).toBeTrue;
    })

    it("Checking All Products", async (): Promise<void> => {
        const res = await store.Index();
        expect(res).toBeDefined;
    })
})
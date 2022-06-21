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
    
    it("Checking Show Product", async (): Promise<void> => {
        const id : number = 1;
        const res = await store.Show(id);
        expect(res).toBeDefined;
    })

    it("Checking All Products", async (): Promise<void> => {
        const res = await store.Index();
        expect(res).toBeDefined;
    })
})
import { User,UserStore } from "../user";
const store = new UserStore();

describe("Check The Respone in User Module", (): void =>{

    it("Creating New User", async (): Promise<void> => {
        const res = await store.Create({
            name: 'Ahmad',
            username: 'AhmadSw',
            password:'123456'
        });
        expect(res).toBeDefined;
    })

    it("Checking All Users", async (): Promise<void> => {
        const res = await store.Index();
        expect(res).toBeDefined;
    })


})
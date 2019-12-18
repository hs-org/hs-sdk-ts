import {HSStore} from "./store.interface";

export const DummyStore: HSStore = {
    id: "124164003885748224",
    name: "Dummy Store",
    description: "Just any predefined store.",
    owner: {
        id: "124164003885748224",
        firstName: "John",
        lastName: "Doe"
    },
    createdAt: new Date(),
    updatedAt: new Date(),
};

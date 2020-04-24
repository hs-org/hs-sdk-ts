import {HSStore} from "./store";

export const DummyStore: HSStore = {
    id: "124164003885748224",
    name: "Dummy Store",
    description: "Just any predefined store.",
    owner: {
        id: "124164003885748224",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@happyshop.net",
        visibility: 0
    },
    category: "games",
    domain: "https://dummy.happyshop.net",
    status: "online",
    createdAt: new Date(),
    updatedAt: new Date()
};

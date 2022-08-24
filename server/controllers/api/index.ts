import { postRegistration } from "./postRegistration";
import { getUsers } from "./getUsers";
import { infoById } from "./infoById";
import { getUserContacts } from "./getUserContacts";
import { postContacts } from "./postContacts";
import { deleteContacts } from "./deleteContacts";

const api = {
    postRegistration,
    getUsers,
    infoById,
    getUserContacts,
    postContacts,
    deleteContacts
};

export { api };

// const { writeFile, readFile } = require('../../src/utils/promisify');
import { writeFile, readFile } from "../../src/utils/promisify"
import { Request, Response } from "express";

export async function deleteContacts(req:Request, res:Response):Promise<any> {
    try {
        const userList = JSON.parse(await readFile(`${__dirname}/../../../db/db.json`));
        const userIdRequest = req.params.id;
        const contactsToDelete = req.body.contacts;

        userList.users.forEach((user:Record<string, any>) => {
            if (user.id === userIdRequest) {
                for(let contact of contactsToDelete) {
                    user.contacts.includes(contact) 
                        ? user.contacts.splice(user.contacts.indexOf(contact), 1) 
                        : null;
                }
            }
        });
        await writeFile(`${__dirname}/../../../db/db.json`, JSON.stringify(userList));
        return res.status(200).send("Контакты успешно удалены!");
    } catch (error) {
        console.log(error);
        return res.status(400).send("Произошла ошибка");
    }
}


import { readFile, writeFile } from "../../src/utils/promisify"
import { Request, Response } from "express";

export async function postContacts(req:Request, res:Response):Promise<any> {
    try {
        const userList = JSON.parse(await readFile(`${__dirname}/../../../db/db.json`));
        const userIdRequest = req.params.id;
        const contactsToAdd = req.body.contacts;
        userList.users.forEach((user:Record<string,any>) => {
            if (user.id === userIdRequest) {
                for(let contact of contactsToAdd) {
                    user.contacts.indexOf(contact) === -1 ? user.contacts.push(contact) : null;
                }
            }
        });
        await writeFile(`${__dirname}/../../../db/db.json`, JSON.stringify(userList));
        return res.status(200).send("Контакты успешно добавлены!");
    } catch (error) {
        console.log(error);
        return res.status(400).send("Произошла ошибка");
    }
}
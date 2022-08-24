import { readFile } from "../../src/utils/promisify"
import { Request, Response} from "express";

export async function getUserContacts(req:Request, res:Response):Promise<any> {
    try {
        const userList = JSON.parse(await readFile(`${__dirname}/../../../db/db.json`)).users
        const userIdRequest = req.params.id;
        for(let user of userList) {
            if (user.id === userIdRequest) {
                return res.status(200).json(user.contacts);
            } else {
                return res.status(400).send("Пользователя с таким id не существует");
            }
        }
    } catch (error) {
        console.log(error);
        return res.status(400).send("Произошла ошибка");
    }
}

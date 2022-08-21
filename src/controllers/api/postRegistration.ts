import { readFile, writeFile } from "../../src/utils/promisify"
import { Request, Response } from "express";
import { generateId } from "../../src/utils/generateId";


export async function postRegistration(req:Request, res:Response):Promise<any> {
    try {
        const { first_name, last_name, email, password } = req.body;
        const id = generateId();
        const usersList = JSON.parse(await readFile(`${__dirname}/../../../db/db.json`));
        try {
            usersList.users.forEach((user:Record<string,any>) => {
                if (user.email === email) {
                    throw new Error;
                }
            });
        } catch(e) {
            console.log(e);
            return res.status(400).send("Пользователь с таким email уже существует");
        }
        usersList.users.push({
            id,
            first_name,
            last_name,
            email,
            password,
            contacts: Array<string>
        });
        await writeFile(`${__dirname}/../../../db/db.json`, JSON.stringify(usersList));
        return res.status(200).send("Пользователь успешно зарегистрирован!");
    } catch (error) {
        console.log(error);
        return res.status(400).send("Произошла ошибка");
    }

}
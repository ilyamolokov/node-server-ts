import { readFile } from "../../src/utils/promisify"
import { Request, Response } from "express";

export async function getUsers(req:Request, res:Response):Promise<any> {
    try {
        const usersList = JSON.parse(await readFile(`${__dirname}/../../../db/db.json`)).users;
        return res.status(200).json(usersList);
    } catch (error) {
        console.log(error);
        return res.status(400).send("Произошла ошибка");
    }
}
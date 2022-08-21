import { readFile } from "../../src/utils/promisify"
import { Request, Response, NextFunction } from "express";


export async function infoById(req:Request , res:Response, next:NextFunction):Promise<any> {
    try {
        const userList = JSON.parse(await readFile(`${__dirname}/../../../db/db.json`)).users
        const userIdRequest = req.params.id;
        userList.forEach((user:Record<string,any>) => {
            if (user.id === userIdRequest) {
                return res.status(200).json(user);
            } else {
                next();
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(400).send("Произошла ошибка");
    }
}
import { Response, Request } from "express";
import { database } from "./../database";

export class FindAllLoginController{
    async handle(req: Request, res: Response) {
        const login = await database.login.findMany()
        return res.json(login)
    }
}

export class FindLoginController{
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const login = await database.login.findUnique({
            where: {
                id: Number(id)
            }
        })
        return res.json(login)
    }
}

export class CreateLoginController{
    async handle(req: Request, res: Response) {
        const { email, name, senha } = req.body;
        const login = await database.login.create({
            data:{
                email, name, senha
            }
        })
        return res.json(login)
    }
}

export class UpdateLoginController{
    async handle(req: Request, res: Response) {
        const { email, name, senha } = req.body;
        const { id } = req.params;
        const login = await database.login.update({
            where: {
                id: Number(id)
            },
            data: {
                email, name, senha
            }
        })
        return res.json({login})
    }
}

export class DeleteLoginController{
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const login = await database.login.delete({
            where: {
                id: Number(id)
            }
        })
        return res.json("Login:: Deletado com sucesso")
    }
}
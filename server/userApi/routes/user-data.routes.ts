import * as express from 'express'
import { User } from "../models/users.models"
import { Status } from '../models/met-value.models'

export class UserData {
    router = express.Router()

    async getData(req: any, res: any) {
        try {
            const users = await User.find({ status: Status.ACTIVE }).sort({ "creationDate": -1 })
            res.json(users)
        } catch (err) {
            res.send("Error" + err)
        }
    }
    async postData(req: any, res: any) {
        const data = req.body
        const user = new User({ ...data, creationDate: new Date(), status: Status.ACTIVE })
        try {
            const a1 = await user.save()
            res.json(a1)
        } catch (err) {
            res.send("Error" + err)
        }
    }
    async getSingle(req: express.Request, res: express.Response, id: any) {
        const re = req.params.id

        try {
            const users = await User.find({ "_id": re })
            res.json(users)
        } catch (err) {
            res.send("Error" + err)
        }
    }
    async deleteData(req: express.Request, res: express.Response, id: any) {
        const re = req.params.id
        try {
            const users = await User.updateOne({ "_id": re }, { $set: { status: Status.DELETE } as any })
            console.log(users)
            res.json(users)
        } catch (err) {
            res.send("Error" + err)
        }
    }
    async updateData(req: express.Request, res: express.Response, id: any) {
        const re = req.params.id
        try {
            const users = await User.updateOne({ "_id": re })
            res.json(users)
        } catch (err) {
            res.send("Error" + err)
        }
    }
}
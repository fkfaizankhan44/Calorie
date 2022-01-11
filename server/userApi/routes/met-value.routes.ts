import * as express from 'express'
import { MetValue } from "../models/met-value.models"
import { Status } from '../models/met-value.models'

export class MetValueData {
    router = express.Router()
    async getData(req: express.Request, res: express.Response) {

        try {
            const objectData = { status: Status.ACTIVE } as any

            if (req.query && req.query.userId) {
                objectData.userId = req.query.userId

                if (req.query && req.query.creationDate) {
                    const data = req.query.creationDate
                    const data1 = JSON.parse(String(data))
                    const startDate = data1.startDate
                    const endDate = data1.endDate
                    const start = new Date(startDate)
                    const end = new Date(endDate)
                    if (start && end) {
                        objectData.creationDate = { $lte: end, $gte: start }
                    }
                }
            }
            const metValue = await MetValue.find(objectData).sort({ "creationDate": -1 })
            res.json(metValue)
        } catch (err) {
            res.send("Error" + err)
        }
    }
    async postData(req: express.Request, res: express.Response) {
        const data = req.body
        const met = new MetValue({ ...data, creationDate: new Date(), status: Status.ACTIVE })
        try {
            const a1 = await met.save()
            res.json(a1)
        } catch (err) {
            res.send("Error" + err)
        }
    }
    async deleteData(req: express.Request, res: express.Response, id: any) {
        const re = req.params.id
        try {
            const mets = await MetValue.updateOne({ "_id": re }, { $set: { status: Status.DELETE } as any })
            res.json(mets)
        } catch (err) {
            res.send("Error" + err)
        }
    }
}



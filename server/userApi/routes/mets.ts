import * as express from 'express'
import { Met } from "../models/met"

export class MetData {
    router = express.Router()

    async getData(req: any, res: any) {
        try {
            const mets = await Met.find()
            res.json(mets)
        } catch (err) {
            res.send("Error" + err)
        }
    }
    async postData(req: any, res: any) {
        const met = new Met({
            id: req.body.id,
            activity: req.body.activity,
            specific_motion: req.body.specific_motion,
            met: req.body.met
        })
        try {
            const a1 = await met.save()
            res.json(a1)
        } catch (err) {
            res.send("Error" + err)
        }
    }
    async getActivity(req: express.Request, res: express.Response, id: any) {
        const re = req.params.id

        try {
            const mets = await Met.find({ "activity": re })
            res.json(mets)
        } catch (err) {
            res.send("Error" + err)
        }
    }
    async getMotion(req: express.Request, res: express.Response, id: any) {
        const re = req.params.id
        try {
            const mets = await Met.find({ "specific_motion": re })
            res.json(mets)
        } catch (err) {
            res.send("Error" + err)
        }
    }



}
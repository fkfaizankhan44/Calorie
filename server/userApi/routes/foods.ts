import * as express from 'express'
import { Food } from "../models/food"

const foodRoute = express.Router();

export class FoodData {
    router = express.Router()

    async getData(req: express.Request, res: express.Response) {

        try {
            const foods = await Food.find()
            res.json(foods)
        } catch (err) {
            res.send("Error" + err)
        }

    }
    async getFoodGroup(req: express.Request, res: express.Response, id: any) {
        const re = req.params.id

        try {
            const foods = await Food.find({ "food_group": re })
            res.json(foods)
        } catch (err) {
            res.send("Error" + err)
        }
    }
    async getFoodName(req: express.Request, res: express.Response, id: any) {
        const re = req.params.id

        try {
            const foods = await Food.find({ "name": re })
            res.json(foods)
        } catch (err) {
            res.send("Error" + err)
        }
    }

    async postData(req: express.Request, res: express.Response) {
        const food = new Food(req.body)
        try {
            const a1 = await food.save()
            res.json(a1)
        } catch (err) {
            res.send("Error" + err)
        }
    }
}

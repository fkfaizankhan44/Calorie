import mongoose from 'mongoose'


const calorieSchema = new mongoose.Schema({

    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true

    },
    food_group: {
        type: String,
        require: true

    },
    calories: {
        type: Number,
        require: true

    },
    fat: {
        type: Number,
        require: true

    },
    protein: {
        type: Number,
        require: true

    },
    carbohydrate: {
        type: Number,
        require: true

    },
    serving_description: {
        type: String,
        require: true

    },
    meal: {
        type: String,
        require: true
    },
    userId: {
        type: String,
        require: true
    },
    userName: {
        type: String,
        require: true
    },
    userBmr: {
        type: Number,
        require: true
    },
    creationDate: {
        type: Date,
        require: true
    },
    status: {
        type: Number,
        require: true
    }
})

const Calorie = mongoose.model('Calorie', calorieSchema)
export { Calorie }
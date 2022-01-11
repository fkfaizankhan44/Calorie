import mongoose from 'mongoose'


const foodSchema = new mongoose.Schema({

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

    }

})

const Food = mongoose.model('Food', foodSchema)
export { Food }
import mongoose from 'mongoose'


const metValueSchema = new mongoose.Schema({

    id: {
        type: Number,
        require: true
    },
    activity: {
        type: String,
        require: true

    },
    specific_motion: {
        type: String,
        require: true

    },
    met: {
        type: Number,
        require: true

    },
    duration: {
        type: Number,
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
    userWeight: {
        type: Number,
        require: true
    },
    userBmr: {
        type: Number,
        require: true
    },
    calorieOut: {
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
export enum Status {
    ACTIVE = 1,
    DELETE = 2
}

const MetValue = mongoose.model('MetValue', metValueSchema)
export { MetValue }
import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({


    name: {
        type: String,
        require: true
    },
    weight: {
        type: Number,
        require: true

    },
    height: {
        type: Number,
        require: true

    },
    gender: {
        type: String,
        require: true

    },
    age: {
        type: Number,
        require: true

    },
    dob: {
        type: Date,
        require: true

    },
    bmr: {
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

const User = mongoose.model('User', userSchema)
export { User }
import mongoose from 'mongoose'


const metSchema = new mongoose.Schema({

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

    }

})

const Met = mongoose.model('Met', metSchema)
export { Met }
import express = require('express')
import mongoose from 'mongoose'
import { MetData } from './routes/mets';
import { UserData } from './routes/user-data.routes';
import { FoodData } from './routes/foods'
import { CalorieData } from './routes/calorie.routes';
import { MetValueData } from './routes/met-value.routes';

let u1 = new UserData;
let m1 = new MetData;
let f1 = new FoodData;
let c1 = new CalorieData
let m = new MetValueData
const url = 'mongodb://localhost/CalorieDBex'


const app = express()

mongoose.connect(url)

const con = mongoose.connection

con.on('open', function () {
    console.log("connected...")
})
// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)

    res.setHeader('Access-Control-Allow-Credentials', "true");

    // Pass to next layer of middleware
    next();
});
app.use(express.json())
app.get('/users', u1.getData)
app.post('/users_post', u1.postData)
app.get('/users_get/:id', u1.getSingle)
app.delete('/users_delete/:id', u1.deleteData)
app.put('/users_update/:id', u1.updateData)


app.get('/met', m1.getData)
app.post('/met_post', m1.postData)
app.get('/met_get/:id', m1.getActivity)
app.get('/met_getMotion/:id', m1.getMotion)

app.get('/food', f1.getData)
app.post('/food_post', f1.postData)
app.get('/food_get/:id', f1.getFoodGroup)
app.get('/food_getName/:id', f1.getFoodName)


app.get('/calorie', c1.getData)
app.post('/calorie_post', c1.postData)
app.delete('/calorie_delete/:id', c1.deleteData)

app.get('/metValue', m.getData)
app.post('/metValue_post', m.postData)
app.delete('/metValue_delete/:id', m.deleteData)
app.listen(9001, () => {
    console.log('server started')
})
import express from "express";
import mongoose from "mongoose";
import Cards from './dbCards.js'
import Cors from 'cors'
//App config

const app = express();
const port = process.env.PORT || 5000;
const connection_url = "mongodb+srv://new:6KetWdXT3KO3Greh@cluster0.x14frdo.mongodb.net/?retryWrites=true&w=majority"

//middleWares

app.use(express.json());
app.use(Cors());



//db config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiesTopology: true,

});
//api endpoints
app.get('/', (req, res) => res.status(200).send('Welcome here'))

app.post('/tinder/cards', (req, resp) => {
    const dbCard = req.body;
    Cards.create(dbCard, (err, data) => {
        if (err) {
            resp.status(500).send(err)
        } else {
            resp.status(201).send(data)
        }
    });
    app.get('/tinder/cards', (req, resp) => {
        Cards.find((err, data) => {
            if (err) {
                resp.status(500).send(err)
            } else {
                resp.status(200).send(data)
            }
        });
    })

})
//listener
app.listen(port, () => console.log(`Listening to clever port ${port}`))
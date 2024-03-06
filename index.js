import express from 'express'
import routerProduct from "./src/routes/product.router.js"
import MongoSingleton from './singleton.js';

const app = express();
app.use(express.json())
const PORT = 8080;

const SingletonClass = require('./singleton.js')

// Router
app.use('/api', routerProduct)

app.listen(PORT, () => {
    console.log(`Sever run on port: ${PORT}`);
})

const mongoInstance = async () => {
    try {
        await MongoSingleton.getInstance()
    } catch (error) {
        console.log(error);
    }
}
mongoInstance()
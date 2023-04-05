import express from 'express'
import cors from 'cors'
import userRouters from './routes/users.js'

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRouters)

const PORT = 8800;

app.listen(PORT, () => {
    console.log(`Your application starts listening at Port ${PORT}`);
});
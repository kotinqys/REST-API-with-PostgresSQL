import express from 'express';
import userRouter from './routes/user.router.js'
import postRouter from './routes/post.router.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', postRouter)

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON ${PORT}`);
})
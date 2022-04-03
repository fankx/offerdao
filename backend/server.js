import express from 'express'

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

const PORT = process.env.PORT || 4000

app.listen(PORT)
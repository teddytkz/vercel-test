const express = require('express')

const app = express()

const router = express.Router()

router.get('/', (req, res) => {
    res.json({ msg: 'Hello World' })
})

app.use('/', router)

app.listen(3000, () => console.log(`Listen Port`))
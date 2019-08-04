const express = require('express')
const app = express()
const routes = require('./routes/users')

const port = process.env.PORT || 4000
const bodyParser = require('body-parser')
app.use('/users', routes)
app.get('/', (req, res) => res.send('default route'))

app.listen(port, () => {
  console.log('app is listening on:', port)
})





































// const express = require('express')
// const app = express()
// const products = require('./routers/products')
// const vehicles = require("./routers/vehicles")
// const comments = require("./routers/comments")
// const contacts = require("./routers/contacts")
// const port = process.env.PORT || 4001
// const bodyParser = require('body-parser')

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json())
// app.use(products)
// app.use(comments)
// app.use(vehicles)
// app.use(contacts)
// app.use(express.static('public'))

// app.listen(port, () =>
//   console.log(`Example app listening on port ${port}!`))
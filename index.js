const express = require('express');
const graphql = require('graphql');
const graphqlHTTP = require('express-graphql');

const schema = require('./schema.js')

const app = express()

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}))

app.listen(3000, () => {
  console.log('App listening on port 3000')
})


// Register app and middleware. Required for better
// performance when running from play.js
try { pjs.register(app, middleware); } catch (error) { }
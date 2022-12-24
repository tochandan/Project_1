require('dotenv').config();
const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');


const YAML = require('yamljs');
const swaggerDocuments = YAML.load('./swagger.yaml');

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocuments));

const port = process.env.PORT;

app.get('/', (req, res) => res.send('Hello World! from dev'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
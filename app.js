require('dotenv').config();
const express = require('express')
const app = express()
const swaggerUi = require('swagger-ui-express');
const port = process.env.PORT;
const YAML = require('yamljs');
const swaggerDocuments = YAML.load('./swagger.yaml');



app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocuments));


app.get('/', (req, res) => res.send('Hello from dev site under development'))



app.listen(port, () => console.log(`Example app listening on port ${port}!`))

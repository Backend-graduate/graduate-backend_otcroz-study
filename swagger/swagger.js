const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  swaggerDefinition: {
    info: {
        title: 'Backend-Graduate',
        version: '1.0.0',
        description: 'swagger로 api 문서 만들기',
    },
    host: 'localhost:8000',
    basePath: '/'
},
apis: ['./routes/*.js', './swagger/*']

}

const specs = swaggerJsdoc(options);


module.exports = {
  swaggerUi,
  specs,
};
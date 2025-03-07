import express from "express";
import cors from "cors";
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const port = process.env.PORT || 3000;
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API',
      version: '1.0.0',
      description: 'API',
    },
    servers: [
      {
        url: `http://localhost:${port}/v1/`,
        description: 'Development server',
      },
      {
        url: `https://<PROD_URL>/v1/`,
        description: 'Production server',
      },
    ],
  },
  apis: ['./src/modules/*/**.swagger.ts'],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Add swagger documentation to your Express app
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

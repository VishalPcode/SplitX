import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const router = express.Router();

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "SplitX API Documentation",
      version: "1.0.0",
      description: "API documentation for the SplitX application",
    },
    tags: [
      {
        name: "Users",
        description: "User management and authentication",
      },
    ], 
    servers: [
      {
        url: "http://localhost:8000/api/v1",
        description: "Development server",
      },
    ],
  },
  apis: ["./src/routes/*.js", "./src/models/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

router.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;

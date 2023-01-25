import fastify from "fastify";
import { config } from "dotenv";
config();
const app = fastify();

app.listen({ port: parseInt(process.env.PORT!) });

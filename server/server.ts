import { config } from "dotenv";
config();
import fastify from "fastify";
const app = fastify();

app.listen({ port: parseInt(process.env.PORT!) });

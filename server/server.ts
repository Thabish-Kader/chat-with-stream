import { config } from "dotenv";
config();
import fastify from "fastify";
import { userRoutes } from "./routes/user";
const app = fastify();

app.register(userRoutes);
app.listen({ port: parseInt(process.env.PORT!) });

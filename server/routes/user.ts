import { FastifyInstance } from "fastify";

export const userRoutes = (app: FastifyInstance) => {
	app.post<{ Body: { username: string; name: string; image: string } }>(
		"/login",
		(req, res) => {
			const { username, name, image } = req.body;
		}
	);
};

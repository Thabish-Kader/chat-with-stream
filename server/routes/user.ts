import { FastifyInstance } from "fastify";
import { StreamChat } from "stream-chat";

const streamChat = StreamChat.getInstance(
	process.env.STREAM_API_KEY!,
	process.env.STREAM_PRIVATE_API_KEY!
);

export const userRoutes = (app: FastifyInstance) => {
	app.post<{ Body: { id: string; name: string; image: string } }>(
		"/login",
		async (req, res) => {
			const { id, name, image } = req.body;
			if (id == null || id === "" || name == null || name === "") {
				return res.status(400).send("id and name is empty");
			}
			const existingUser = await streamChat.queryUsers({ id });
			if (existingUser.users.length > 0) {
				return res.status(400).send("User Id is taken");
			}
			streamChat.upsertUser({ id, name, image });
		}
	);
};

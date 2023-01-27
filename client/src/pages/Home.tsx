import { useNavigate } from "react-router-dom";
import {
	LoadingIndicator,
	Chat,
	ChannelList,
	Channel,
	Window,
	MessageInput,
	MessageList,
	ChannelHeader,
} from "stream-chat-react";
import { ChannelListMessengerProps } from "stream-chat-react/dist/components";
import { useChatContext } from "stream-chat-react/dist/context";
import { Button } from "../components/Button";
import { useLoggedInAuth } from "../context/AuthContext";
const Home = () => {
	const { user, streamChat } = useLoggedInAuth();
	if (streamChat == null) return <LoadingIndicator />;
	return (
		<Chat client={streamChat}>
			<ChannelList
				List={Channels}
				sendChannelsToList
				filters={{ members: { $in: [user.id] } }}
			/>
			<Channel>
				<Window>
					<ChannelHeader />
					<MessageList />
					<MessageInput />
				</Window>
			</Channel>
		</Chat>
	);
};

export default Home;

function Channels({ loadedChannels }: ChannelListMessengerProps) {
	const navigate = useNavigate();
	const { setActiveChannel, channel: activeChannel } = useChatContext();

	return (
		<div className="w-60 flex flex-col gap-4 ,-3 h-full">
			<Button onClick={() => navigate("/channel/new")}>
				New Coversation
			</Button>
			<hr className="border-gray-500" />
			{loadedChannels != null && loadedChannels.length > 0
				? "test"
				: "No conversation"}
		</div>
	);
}

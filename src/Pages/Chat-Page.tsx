import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ChatProvider from "../components/SimpleChatBody";
import MessageInput from "../components/SimpleMessageInput";
import Signout from "../components/Signout";

type ChatPageProps = {
  socket: any;
};

const ChatPage: React.FC<ChatPageProps> = ({ socket }) => {
  return (
    <Container>
      <Row>
        <Col className="pt-3">
          <Signout socket={socket} />
        </Col>
      </Row>
      <Container>
        <ChatProvider socket={socket} />
      </Container>
      <MessageInput socket={socket} />
    </Container>
  );
};

export default ChatPage;
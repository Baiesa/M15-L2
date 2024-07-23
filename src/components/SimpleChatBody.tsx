import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";

type ChatProviderProps = {
  socket: any;
};

type Message = {
  text: string;
  userId: string;
};

const ChatProvider: React.FC<ChatProviderProps> = ({ socket }) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const userID = sessionStorage.getItem("userName") || "";

  useEffect(() => {
    socket.on("message", (message: Message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.off("message");
    };
  }, [socket]);

  return (
    <Container
      style={{
        marginTop: "40px",
        background: "lightblue",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      {messages.map((message: Message, index: number) => (
        <Card key={index} className="mb-2">
          <Card.Body>
            <Card.Text
              style={{
                color: message.userId === userID ? "blue" : "green",
                float: message.userId === userID ? "right" : "left",
              }}
            >
              {message.text}
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
};

export default ChatProvider;
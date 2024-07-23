import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

type MessageInputProps = {
  socket: any;
};

const MessageInput: React.FC<MessageInputProps> = ({ socket }) => {
  const [messageText, setMessageText] = useState<string>('');

  const sendMessage = () => {
    const userId = sessionStorage.getItem('userName');
    if (userId) {
      socket.emit('message', { userId, text: messageText });
      setMessageText('');
    }
  };

  const handleEnterKey = (e: any) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <Container>
      <Form>
        <Form.Label style={{ fontFamily: 'Arial', color: 'lightgray' }}>
          Type your message
        </Form.Label>
        <Form.Control
          type="text"
          id="text"
          value={messageText}
          onChange={(e) => setMessageText(e.target.value)}
          onKeyDown={(e) => handleEnterKey(e)}
          autoComplete="off"
        />
      </Form>
    </Container>
  );
};

export default MessageInput;
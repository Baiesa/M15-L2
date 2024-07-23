import './App.css';
import { useEffect } from 'react';
import io from 'socket.io-client';
import { Route, Routes } from 'react-router-dom';
import ChatPage from './Pages/Chat-Page';
import HomePage from './Pages/Home-Page';

const socket = io('http://127.0.0.1:5000');

function App() {
  useEffect(() => {
    console.log("Connecting to server...");
    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("disconnect", () => {
      console.log("Disconnected from server");
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
    };
  }, []);

  return (
    <Routes>
      <Route path="/" element={<HomePage socket={socket} />} />
      <Route path="/chat" element={<ChatPage socket={socket} />} />
    </Routes>
  );
}

export default App;
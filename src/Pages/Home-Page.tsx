import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type HomePageProps = {
  socket: any;
};

const HomePage: React.FC<HomePageProps> = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string>('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const userName = (form.username as HTMLInputElement).value;
    sessionStorage.setItem('userName', userName);
    navigate('/chat');
  };

  return (
    <form className="home__container" onSubmit={handleSubmit}>
      <h2 className="home__header">Sign in to Open Chat</h2>
      <label htmlFor="username">Username</label>
      <input
        type="text"
        minLength={6}
        name="username"
        id="username"
        className="username__input"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <button className="home__cta" type="submit">SIGN IN</button>
    </form>
  );
};

export default HomePage;
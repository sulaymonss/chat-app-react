import './App.css';
import {ChatEngine} from 'react-chat-engine'
import ChatFeed from './Components/ChatFeed';
import LoginForm from './Components/LoginForm';

function App() {
  if(!localStorage.getItem('username')) return <LoginForm/>

  return (
    <ChatEngine
      height='100vh'
      projectID='7761dfa6-4b6e-423d-81a4-629a5d4febcd'
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
    />
  );
}

export default App;
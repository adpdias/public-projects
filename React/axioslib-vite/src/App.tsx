import axios from 'axios';
import { useState } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const App = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const hendleGetPosts = async () => {
    try {
      axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts').then((response) => { console.log(response.data) });
    } catch (error) {
      setErrorMessage('Failed to fetch posts.');
    }
  };

  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <p>This is a simple React application.</p>
      <button onClick={hendleGetPosts}>Get Posts</button>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default App;
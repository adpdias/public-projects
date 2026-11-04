import { useState } from "react";

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const App = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleGetPOsts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data: Post[] = await response.json();
      setPostsData(data);
    } catch (error) {
      setError('Error fetching posts. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Welcome to My App</h1>
      <p>This is a simple React application.</p>
      {loading && <p>Loading posts...</p>}
      <button onClick={handleGetPOsts}>Get Posts</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {postsData.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
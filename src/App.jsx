import { useState } from 'react';

function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <p>Running this on my Steam Deck!</p>
    </div>
  )
}

function ProfileCard({ name, imageUrl, description }) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div style={{ border: '1px solid gray', padding: '16px' }}>
      <p>{name}</p>
      <p>{description}</p>
      <button onClick={() => setIsFollowing(!isFollowing)}>
        {isFollowing ? 'Unfollow' : 'Follow'}
      </button>
    </div>
  );
}

export default App
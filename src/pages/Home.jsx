import { useState } from 'react';
import { useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import SearchBar from '../components/SearchBar';

function Home() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');


  //Added to have a loading effect
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        setProfiles(data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to load profiles');
        setLoading(false);
      });
  }, []);

  const filtered = profiles.filter(person =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );

  if (loading) return <p>Loading profiles!</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Hello world!</h1>
      <p>Running this on my Steam Deck!</p>
      <SearchBar query={query} onChange={setQuery} />
      {filtered.map(person => (
        <ProfileCard
          key={person.id}
          name={person.name}
          imageUrl="/images/stamp.jpg"
          description={person.email}
        />
      ))}
    </div>
  );
}

export default Home;
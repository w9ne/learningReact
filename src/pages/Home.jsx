import { useState } from 'react';
import { useEffect } from 'react';
import ProfileCard from '../components/ProfileCard';
import SearchBar from '../components/SearchBar';

const profiles = [
  { id: 1, name: "Amos", imageUrl: "/images/flower.jpg", description: "This is loop 1, ID of 1" },
  { id: 2, name: "Jared", imageUrl: "/images/avatar.png", description: "This is loop 2, ID of 2" },
  { id: 3, name: "Sabrina", imageUrl: "/images/stamp.jpg", description: "This is loop 3, ID of 3" },
  { id: 4, name: "Liam Carter", imageUrl: "/images/stamp.jpg", description: "This is loop 4, ID of 4" },
  { id: 5, name: "Noah Bennett", imageUrl: "/images/stamp.jpg", description: "This is loop 5, ID of 5" },
  { id: 6, name: "Emma Collins", imageUrl: "/images/stamp.jpg", description: "This is loop 6, ID of 6" },
  { id: 7, name: "Olivia Reyes", imageUrl: "/images/stamp.jpg", description: "This is loop 7, ID of 7" },
  { id: 8, name: "Ethan Brooks", imageUrl: "/images/stamp.jpg", description: "This is loop 8, ID of 8" },
  { id: 9, name: "Ava Mitchell", imageUrl: "/images/stamp.jpg", description: "This is loop 9, ID of 9" },
  { id: 10, name: "Mason Rivera", imageUrl: "/images/stamp.jpg", description: "This is loop 10, ID of 10" },
  { id: 11, name: "Sophia Nguyen", imageUrl: "/images/stamp.jpg", description: "This is loop 11, ID of 11" },
  { id: 12, name: "James Parker", imageUrl: "/images/stamp.jpg", description: "This is loop 12, ID of 12" },
  { id: 13, name: "Isabella Kim", imageUrl: "/images/stamp.jpg", description: "This is loop 13, ID of 13" },
  { id: 14, name: "Lucas Thompson", imageUrl: "/images/stamp.jpg", description: "This is loop 14, ID of 14" },
  { id: 15, name: "Mia Johnson", imageUrl: "/images/stamp.jpg", description: "This is loop 15, ID of 15" },
  { id: 16, name: "Benjamin Lee", imageUrl: "/images/stamp.jpg", description: "This is loop 16, ID of 16" },
  { id: 17, name: "Charlotte Davis", imageUrl: "/images/stamp.jpg", description: "This is loop 17, ID of 17" },
  { id: 18, name: "Henry Wilson", imageUrl: "/images/stamp.jpg", description: "This is loop 18, ID of 18" },
  { id: 19, name: "Amelia Scott", imageUrl: "/images/stamp.jpg", description: "This is loop 19, ID of 19" },
  { id: 20, name: "Alexander Moore", imageUrl: "/images/stamp.jpg", description: "This is loop 20, ID of 20" },
  { id: 21, name: "Harper Adams", imageUrl: "/images/stamp.jpg", description: "This is loop 21, ID of 21" },
  { id: 22, name: "Daniel Clark", imageUrl: "/images/stamp.jpg", description: "This is loop 22, ID of 22" },
  { id: 23, name: "Evelyn Lewis", imageUrl: "/images/stamp.jpg", description: "This is loop 23, ID of 23" },
  { id: 24, name: "Matthew Walker", imageUrl: "/images/stamp.jpg", description: "This is loop 24, ID of 24" },
  { id: 25, name: "Abigail Hall", imageUrl: "/images/stamp.jpg", description: "This is loop 25, ID of 25" },
  { id: 26, name: "David Allen", imageUrl: "/images/stamp.jpg", description: "This is loop 26, ID of 26" },
  { id: 27, name: "Emily Young", imageUrl: "/images/stamp.jpg", description: "This is loop 27, ID of 27" },
  { id: 28, name: "Michael Hernandez", imageUrl: "/images/stamp.jpg", description: "This is loop 28, ID of 28" },
  { id: 29, name: "Ella King", imageUrl: "/images/stamp.jpg", description: "This is loop 29, ID of 29" },
  { id: 30, name: "Logan Wright", imageUrl: "/images/stamp.jpg", description: "This is loop 30, ID of 30" },
  { id: 31, name: "Grace Lopez", imageUrl: "/images/stamp.jpg", description: "This is loop 31, ID of 31" },
  { id: 32, name: "Samuel Hill", imageUrl: "/images/stamp.jpg", description: "This is loop 32, ID of 32" },
  { id: 33, name: "Chloe Green", imageUrl: "/images/stamp.jpg", description: "This is loop 33, ID of 33" },
  { id: 34, name: "Jack Baker", imageUrl: "/images/stamp.jpg", description: "This is loop 34, ID of 34" },
  { id: 35, name: "Lily Nelson", imageUrl: "/images/stamp.jpg", description: "This is loop 35, ID of 35" },
  { id: 36, name: "Owen Carter", imageUrl: "/images/stamp.jpg", description: "This is loop 36, ID of 36" },
  { id: 37, name: "Zoe Mitchell", imageUrl: "/images/stamp.jpg", description: "This is loop 37, ID of 37" },
  { id: 38, name: "Ryan Perez", imageUrl: "/images/stamp.jpg", description: "This is loop 38, ID of 38" },
  { id: 39, name: "Hannah Roberts", imageUrl: "/images/stamp.jpg", description: "This is loop 39, ID of 39" },
  { id: 40, name: "Nathan Turner", imageUrl: "/images/stamp.jpg", description: "This is loop 40, ID of 40" },
  { id: 41, name: "Victoria Phillips", imageUrl: "/images/stamp.jpg", description: "This is loop 41, ID of 41" },
  { id: 42, name: "Caleb Campbell", imageUrl: "/images/stamp.jpg", description: "This is loop 42, ID of 42" },
  { id: 43, name: "Layla Parker", imageUrl: "/images/stamp.jpg", description: "This is loop 43, ID of 43" },
  { id: 44, name: "Isaac Evans", imageUrl: "/images/stamp.jpg", description: "This is loop 44, ID of 44" },
  { id: 45, name: "Nora Edwards", imageUrl: "/images/stamp.jpg", description: "This is loop 45, ID of 45" },
  { id: 46, name: "Julian Collins", imageUrl: "/images/stamp.jpg", description: "This is loop 46, ID of 46" },
  { id: 47, name: "Aria Stewart", imageUrl: "/images/stamp.jpg", description: "This is loop 47, ID of 47" },
  { id: 48, name: "Leo Sanchez", imageUrl: "/images/stamp.jpg", description: "This is loop 48, ID of 48" },
  { id: 49, name: "Stella Morris", imageUrl: "/images/stamp.jpg", description: "This is loop 49, ID of 49" },
  { id: 50, name: "Adam Reed", imageUrl: "/images/stamp.jpg", description: "This is loop 50, ID of 50" },
  { id: 51, name: "Ruby Cook", imageUrl: "/images/stamp.jpg", description: "This is loop 51, ID of 51" },
  { id: 52, name: "Dylan Morgan", imageUrl: "/images/stamp.jpg", description: "This is loop 52, ID of 52" },
  { id: 53, name: "Nina Bailey", imageUrl: "/images/stamp.jpg", description: "This is loop 53, ID of 53" }
];

function Home() {

  //search func
  const [query, setQuery] = useState('');
  const filtered = profiles.filter(person =>
    person.name.toLowerCase().includes(query.toLowerCase())
  );

    useEffect(() => {
    document.title = `${resultCount} profiles found!`; 
  }, [filtered]); // [] is the dependency
  const resultCount = filtered.length; // assign to var

  return (
    <div>
      <h1>Hello world!</h1>
      <p>Running this on my Steam Deck!</p>
      <p>{resultCount} profiles found</p>
      <SearchBar query={query} onChange={setQuery} />
      {filtered.map(person => (
        <ProfileCard
          key={person.id}
          name={person.name}
          imageUrl={person.imageUrl}
          description={person.description}
        />
      ))}
    </div>
  );
}


export default Home;
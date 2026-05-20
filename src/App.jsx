import { useState } from 'react';
import ProfileCard from './ProfileCard';

const profile = [
  {
    id: 1,
    name: "Amos",
    imageUrl: "/images/avatar.png",
    description: "This is loop 1, ID of 1"
  },
  {
    id: 2,
    name: "Jared",
    imageUrl: "/images/avatar.png",
    description: "This is loop 2, ID of 2"
  },
  {
    id: 3,
    name: "Sabrina",
    imageUrl: "/images/avatar.png",
    description: "This is loop 3, ID of 3"
  }
]

function App() {
  return (
    <div>
      <h1>Hello world!</h1>
      <p>Running this on my Steam Deck!</p>
      {profile.map(person => (
      <ProfileCard
      key = {person.id}
      name = {person.name}
      imageUrl={person.imageUrl}
      description={person.description}
      />
      ))}
    </div>
    
  )
}
export default App
import Avatar from './Avatar';
import Bio from './Bio';

function ProfileCard({ name, imageUrl, description }) {
  return (
    <div style={{ border: '1px solid white', padding: '20px', borderRadius: '5px', margin: '25px' }}>
      <Avatar name={name} imageUrl={imageUrl} />
      <Bio description={description} />
    </div>
  );
}

export default ProfileCard;
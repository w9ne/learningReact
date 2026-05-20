import Avatar from './Avatar';
import Bio from './Bio';

function ProfileCard({ name, imageUrl, description }) {
  return (
    <div style={{ border: '1px solid gray', padding: '16px' }}>
      <Avatar name={name} imageUrl={imageUrl} />
      <Bio description={description} />
    </div>
  );
}

export default ProfileCard;
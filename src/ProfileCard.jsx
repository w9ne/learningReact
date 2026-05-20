import Avatar from './Avatar';
import Bio from './Bio';

function ProfileCard({ name, imageUrl, description }) {
  return (
    <div style={{ border: '1px solid gray', padding: '80px' }}>
      <Avatar name={"Jared"} imageUrl={"public/images/avatar.png"} />
      <Bio description={description} />
    </div>
  );
}

export default ProfileCard;
function Avatar({ name, imageUrl }) {
  return (
    <div>
      <img src={"public/images/avatar.png"} alt={name} width={80} />
      <p>{name}</p>
    </div>
  );
}

export default Avatar;
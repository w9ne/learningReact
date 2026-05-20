function Avatar({ name, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt={name} width={80} />
      <p>{name}</p>
    </div>
  );
}

export default Avatar;
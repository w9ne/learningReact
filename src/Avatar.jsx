function Avatar({ name, imageUrl }) {
  return (
    <div>
      <img src={imageUrl} alt={name} width={25} />
      <p>{name}</p>
    </div>
  );
}

export default Avatar;
export const User = (props) => {
  const { name, location, contact } = props;
  return (
    <div className="User-fun">
      <h2>{name}</h2>
      <h3>{location}</h3>
      <h3>{contact}</h3>
    </div>
  );
};

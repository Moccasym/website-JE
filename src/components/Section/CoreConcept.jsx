const CoreConcept = ({ image, title, description, positionClass, onClick }) => {
  return (
    <li className={`core-concept-item ${positionClass}`} onClick={onClick}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;


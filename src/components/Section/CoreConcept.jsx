// export default function CoreConcept({ image, title, description }) {
//   return (
//     <li>
//       <img src={image} alt={title} />
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </li>
//   );
// }

const CoreConcept = ({ image, title, description, positionClass }) => {
  return (
    <li className={`core-concept-item ${positionClass}`}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
};

export default CoreConcept;


const CoreConcept = ({ data }) => {
  return (
    <li>
      <img src={data.image} alt={data.title} />
      <h2>{data.title}</h2>
      <p>{data.description}</p>
    </li>
  );
};

export default CoreConcept;

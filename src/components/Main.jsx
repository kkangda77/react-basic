import CoreConcept from './UI/CoreConcept';

const Main = ({ list }) => {
  const core = list.map((id) => {
    return <CoreConcept data={id} />;
  });

  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>{core}</ul>
      </section>
      <h2>Time to get started!</h2>
    </main>
  );
};

export default Main;

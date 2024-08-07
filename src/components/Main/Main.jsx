import CoreConcept from '../UI/CoreConcept/CoreConcept';
import './Main.css';
import TabButton from '../UI/TabButton/TabButton';
import React, { useState } from 'react';
// import test from '../UI/test';

const Main = ({ list }) => {
  const [text, setText] = useState('');
  const handleChildEvent = (label) => {
    list.map((element) => {
      if (element.title === label) {
        setText(element.description);
      }
    });
  };

  const core = list.map((id, index) => {
    return <CoreConcept data={id} key={index} />;
  });
  const label = list.map((id, index) => {
    return (
      <TabButton label={id.title} onEvent={handleChildEvent} key={index} />
    );
  });

  return (
    <main>
      <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>{core}</ul>
      </section>
      <h2>Time to get started!</h2>
      <section id="examples">
        <h2>Example</h2>
        <menu>{label}</menu>
      </section>
      {text}
    </main>
  );
};

export default Main;

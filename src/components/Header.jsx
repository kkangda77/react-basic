const genRandomInt = (max) => {
  return Math.floor(Math.random() * (max + 1));
};

const Header = ({ des, img }) => {
  const desc = des[genRandomInt(2)];

  return (
    <header>
      <img src={img} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {desc} React concepts you will need for almost any app you are going to
        build!
      </p>
    </header>
  );
};

export default Header;

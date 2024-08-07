const TabButton = ({ label, onEvent }) => {
  const sendDataToParent = () => {
    onEvent(label);
  };

  return (
    <li>
      <button onClick={sendDataToParent}>{label}</button>
    </li>
  );
};

export default TabButton;

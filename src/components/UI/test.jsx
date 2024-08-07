const test = ({ title }) => {
  const memo = '';
  switch (title) {
    case 'components':
      memo = components;
      break;
    case 'props':
      memo = props;
      break;
    case 'test':
      memo = props;
      break;
    default:
      '';
  }
  return <div>{memo}</div>;
};

export default test;

import reactImg from './assets/react-core-concepts.png';
import { CORE_CONCEPTS, description } from './data';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div>
      <Header des={description} img={reactImg} />
      <Main list={CORE_CONCEPTS} />
      <Footer />
    </div>
  );
}

export default App;

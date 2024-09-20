import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Home/Body';
import appStore from './utils/appStore';
import TechSkills from './Components/TechSkills/TechSkills';
import ContactMe from './Components/ContactMe';
import Projects from './Components/Projects/Projects';

function App() {
  return (
    <Provider store={appStore}>
      <Body />
      <TechSkills />
      <Projects />
      <ContactMe />
    </Provider>
  );
}

export default App;


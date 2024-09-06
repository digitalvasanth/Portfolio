import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import appStore from "./utils/appStore";
import TechSkills from './Components/TechSkills';
import Project from './Components/Project';
import ContactMe from './Components/ContactMe';

function App() {
  return (
    <Provider store={appStore}>
      <Body />
      <TechSkills />
      <Project />
      <ContactMe />
    </Provider>
  );
}

export default App;

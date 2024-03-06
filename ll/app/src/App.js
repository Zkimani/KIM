import './App.css';
import  Play from './components/firstcomp';
import Header from './components/header/Header';
import HomePage from './components/mainSection/homepage';

import SideNavigation from './components/sideNavigation/sideNavigation';  
function App() {
  return (
    <div className="App">
      <Header name = "kmani shoop"/>
      <Play  name="kim"/>
      <SideNavigation/>
      <HomePage/>
    </div>
  );
}

export default App;

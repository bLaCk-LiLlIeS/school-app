
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './Project files/Header/index';

import Content from './Project files/Content/index';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
     
        <Content></Content>
      </BrowserRouter>
    </div>
  );
}

export default App;

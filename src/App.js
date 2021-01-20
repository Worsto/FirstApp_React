import './App.css';
import Header from './components/header/Header'
import Content from './components/content/Content'
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <div className="wrapper">
          <Header/>
          <Content/>
        </div>
      </BrowserRouter>
  );
}

export default App;

import styles from './App.module.css'
import Header from './components/header/Header'
import Content from './components/content/Content'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/header/Nav";

function App(props) {
  return (
      <BrowserRouter>
        <div className={styles.app}>
          <Header/>
          <Navbar/>
          <Content data={props.data}/>
        </div>
      </BrowserRouter>
  );
}

export default App;

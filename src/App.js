import './App.css';
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Video from "./components/Video";
import bg from "./asset/seafoodbg.jpg"
import Categories from './components/Categories';

function App() {
  return (
    <div className="App " 
    style={{
      backgroundImage: "url(" + bg + ")",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
    >
       <NavBar/>
       <Main/>
       <Categories/>
       <Video/>
       
    </div>
  );
}

export default App;

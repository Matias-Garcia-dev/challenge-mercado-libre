import './App.css';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import SearchBox from './searchBoxView/SearchBox';
import SearchRestulView from './searchResultView/SearchRestulView';


function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<SearchBox></SearchBox>} />
        <Route path='/result' element={<SearchRestulView></SearchRestulView>}  />
      </Routes >
    </Router>
    
  );
}

export default App;

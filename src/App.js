import './App.css';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import SearchBox from './searchBoxView/SearchBox';
import SearchResultView from './searchResultView/SearchResultView';


function App() {

  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<SearchBox></SearchBox>} >
          <Route path="/items" element={<SearchResultView ></SearchResultView>}  />
        </Route>
      </Routes >
    </Router>
    
  );
}

export default App;

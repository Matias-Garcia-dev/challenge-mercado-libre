import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import SearchBox from './searchBoxView/SearchBox';
import SearchRestulView from './searchResultView/SearchRestulView';


function App() {
  const [url, seturl] = useState();
  const getUrl = (url) => {
      seturl(url)
  }

  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<SearchBox></SearchBox>} >
          <Route path="/items" element={<SearchRestulView ></SearchRestulView>}  />
        </Route>
      </Routes >
    </Router>
    
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import SearchBox from './searchBoxView/SearchBox'

function App() {
  return (
    <Router>
      <Routes >
        <Route exact path="/" element={<SearchBox></SearchBox>} />
      </Routes >
    </Router>
    
  );
}

export default App;

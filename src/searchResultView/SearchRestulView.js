import React , {useState} from 'react'
import Header from '../components/common/Header'
import { useLocation } from 'react-router-dom';

const SearchRestulView = () => {
    const data = useLocation()
    console.log("data de result",data.state)
    const [searchResultsList, setSearchResultsList] = useState([]);
  return (
    <div>
        <Header></Header>
        {data.state.data[0].id}
    </div>
  )
}

export default SearchRestulView
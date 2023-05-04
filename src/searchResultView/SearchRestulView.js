import React , {useState, useEffect} from 'react'
import Header from '../components/common/Header'
import { useLocation } from 'react-router-dom';

const SearchRestulView = ({item}) => {
    const data = useLocation()
    const [searchResultsList, setSearchResultsList] = useState([]);
    console.log("result succes")
  return (
    <div>
      
      <button></button>
        {data.state.data[0].id}
    </div>
  )
}

export default SearchRestulView
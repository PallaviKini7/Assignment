import React,{useState} from 'react'
import './header.css'
import axios from 'axios'

const Header = () => {
    const [search, setsearch] = useState()
    function submitHandler(e)
    {
        e.preventDefault();
       console.log(search)

    }
   

const options = {
  method: 'GET',
  url: 'https://burgers1.p.rapidapi.com/burgers',
  headers: {
    'X-RapidAPI-Key': '2e725ad90amsh3d5d47978596bc2p1706fajsn48ee22c4fd8c',
    'X-RapidAPI-Host': 'burgers1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data[0]);
}).catch(function (error) {
	console.error(error);
});
   
    
  return (
    <div className='header'>
        <div className='search'>
            <form onSubmit={submitHandler}  >
            <input type="text" placeholder='Search' value={search} onChange={(e)=> setsearch(e.target.value)}/>
            </form>
        </div>
    </div>
  )
}

export default Header
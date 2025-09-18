import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Cards() {
    const [data, setData] = useState([])
    const [search , setSearch ] = useState("")
    const [filteredData, setFilteredData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users')
    //         .then(res => res.json())
    //         .then(data => setData(data))
    //         .catch(error => console.error('Error:', error))

    // }, [])
    
    // useEffect(() => {
    //     axios.get('https://api.github.com/users')
    //    .then(response => setData(response.data))
    //    .catch(error => console.error('Error:', error));
    
    // }, [])
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://api.github.com/users');
          setData(response.data);
          setFilteredData(response.data);
          console.log(filteredData);
          

        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    
    const handleSearch = (e) => {
      e.preventDefault();
      const value = e.target.value;
      setSearch(value);
      const filtered = data.filter((user) =>
        user.login.toLowerCase().includes(value)
      );
      setFilteredData(filtered);
    }

    return (
        <div>
            <h2>User Details: </h2>
              <input
                className='search'
                type='text'
                placeholder='Search username'
                value={search}
                onChange={handleSearch}
              /><br/>
            {filteredData.map((profile, index) =>
                <div className='profile-card' key={index}>
                    <img src={profile.avatar_url} alt={profile.login}></img>
                    <div className='profile-details'>
                        <h3>Username: {profile.login} </h3>
                        <h3>ID: {profile.id}</h3>
                        <h3><a href={profile.html_url} target='_blank'>Github</a></h3>
                    </div>
                </div>)}
        </div>
    )
}
/* 
axios library can be used to make HTTP requests more efficiently.
get() method can be used to fetch data from a URL.
To install axios, use:
npm install axios
import axios from 'axios';
*/
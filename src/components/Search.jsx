import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cards() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.github.com/users");
        setData(response.data);
        setFilteredData(response.data); 
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const filtered = data.filter((user) =>
      user.login.toLowerCase().includes(value)
    );
    setFilteredData(filtered);
  };

  return (
    <div>
      <h2>User Details:</h2>

      <input
        className="search"
        type="text"
        placeholder="Search username"
        value={search}
        onChange={handleSearch}
      /> <br/>

      {filteredData.map((profile) => (
        <div className="profile-card" key={profile.id}>
          <img
            src={profile.avatar_url}
            alt={profile.login}
            width={80}
            height={80}
          />
          <div className="profile-details">
            <h3>Username: {profile.login}</h3>
            <h3>ID: {profile.id}</h3>
            <h3>
              <a href={profile.html_url} target="_blank" rel="noreferrer">
                Github
              </a>
            </h3>
          </div>
        </div>
      ))}
    </div>
    
  );
}

import React, { useState, useEffect } from 'react'; 

export default function GitHooks(){
  
  const [repositories, setRepositories] = useState([]); 

  useEffect(async () => {
    const response = await fetch("http://api.github.com/users/douglasabnovato/repos");
    const data = await response.json();
    setRepositories(data);
  }, []);
  
  return ( 
    <ul>
      { repositories.map(repo => (
        <li key = { repo.id }>{repo.name}</li>
      ))}
    </ul>  
  );
}
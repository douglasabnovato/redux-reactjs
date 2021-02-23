import React, { useState, useEffect } from 'react'; 

export default function GitHooks(){
  
  const [repositories, setRepositories] = useState([]); 

  useEffect(async () => {
    const response = await fetch("http://api.github.com/users/douglasabnovato/repos");
    const data = await response.json();
    setRepositories(data);
  }, []);
  
  return ( 
    <section>
    <div class="text-title">
      <h4>Github Repos</h4>
      <p>Lista de Projetos</p>
    </div> 

    <ul>
      { repositories.map(repo => (
        <li key = { repo.id }>{repo.name}</li>
      ))}
    </ul>  
  </section>  
  );
}
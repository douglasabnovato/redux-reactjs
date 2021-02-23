import React, { useState, useEffect } from 'react'; 

export default function GitHooks(){
  
  const [repositories, setRepositories] = useState([]); 
  
  useEffect(async () => {  
    const response = await fetch("http://api.github.com/users/douglasabnovato/repos");
    const data = await response.json();

    setRepositories(data);
  }, []); 

  useEffect(async () => {
    const filtered = repositories.filter(repo => repo.favorite);
    document.title = `Você tem ${filtered.length} favoritos.`
  }, [repositories]);

  function handleFavorite(id){
    const newRepositories = repositories.map(repo =>{
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo;
    });
    setRepositories(newRepositories);
  }
  
  return ( 
    <section>
      <div class="text-title">
        <h4>Github Repos</h4>
        <p>Lista de Projetos</p>
      </div>  
      <ul>
        { repositories.map(repo => (
          <li key = { repo.id }>
            {repo.name}
            {repo.favorite && <span>(Favorito)</span>}
            <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          </li>
        ))}
      </ul>  
  </section>  
  );
}
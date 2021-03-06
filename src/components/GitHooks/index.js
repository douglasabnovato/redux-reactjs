import React, { useState, useEffect } from 'react'; 
import { FaRegStar } from "react-icons/fa";

import './styles.css';

export default function GitHooks(){
  
  const [repositories, setRepositories] = useState([]); 
  
  useEffect(() => {
    async function chamaAPIGithub(){
      const response = await fetch("http://api.github.com/users/douglasabnovato/repos");
      const data = await response.json();
      setRepositories(data);
    }  
    chamaAPIGithub();
  }, []); 

  useEffect(() => {
    async function editTitlePage(){
      const filtered = repositories.filter(repo => repo.favorite);
      document.title = `Você tem ${filtered.length} favoritos.`
    }  
    editTitlePage();
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
          <div>      
            <li key = { repo.id }>
              {repo.name} 
              <div class="repos-star">
                {repo.favorite && <span><FaRegStar/></span>}
                <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
              </div>
            </li>
          </div>   
        ))}
      </ul> 
  </section>  
  );
}
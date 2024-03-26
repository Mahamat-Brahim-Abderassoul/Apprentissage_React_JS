import React from 'react';
//import './Accueil.css'

function Accueil() {
  return (
    <div>
      <header className='header'>
        <h1 className='header h1'>Bienvenue sur notre site web</h1>
        <nav>
          <ul>
            <li><a href="/">Accueil</a></li>
            <li><a href="/about">À propos</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/production">Production Scientique</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section>
          <h2>À propos de nous</h2>
          <p>Nous sommes une entreprise spécialisée dans...</p>
        </section>
        <section>
          <h2>Nos services</h2>
          <ul>
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Nom de votre entreprise</p>
      </footer>
    </div>
  );
}

export default Accueil;

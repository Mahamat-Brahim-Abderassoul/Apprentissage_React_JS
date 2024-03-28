//import React from 'react';
// import { Input } from './components/forms/Input.js';
// import { Checkbox } from './components/forms/Checkbox.js';
// import { ProductCategorieRow } from './components/product/ProductCategorieRow.js';
// import { ProductRow } from './components/product/ProductRow.js';
//import { useState } from 'react';


/***
 * 
 

const PRODUITS = [
{ categorie : "Fruits" , prix:"$1" , stocke : true , name :"Apple"},
{ categorie : "Fruits" , prix:"$1" , stocke : true , name :"DragonFruit"},
{ categorie : "Fruits" , prix:"$2" , stocke : false , name :"Passionfruit"},
{ categorie : "vegetals" , prix:"$2" , stocke : true , name :"Spanich"},
{ categorie : "vegetals" , prix:"$4" , stocke : false , name :"Tchadien"},
{ categorie : "vegetals" , prix:"$5" , stocke : true , name :"Pumpkin"},
{ categorie : "vegetals" , prix:"$1" , stocke : true , name :"Paes"}
]

function App() {
  const [showStockedOnly ,setShowStockedOnly] = useState(false)
  const [search , setSearch] = useState('')

  const visibleProduit = PRODUITS.filter(produit =>{
    if (showStockedOnly && !produit.stocke){
      return false
    }
    if (search && !produit.name.includes(search)){
      return false
    }
    return true
  }  )
  return (
    <div className='my-3'>
    <SearchBar 
        search={search}
        onSearchChange ={setSearch}
        showStockedOnly={showStockedOnly} 
        onStockedOnlyChange={setShowStockedOnly} 
    />
    <ProductTable 
        produits={visibleProduit}
    />
    </div>
  );
}

function SearchBar (showStockedOnly , onStockedOnlyChange ,search ,onSearchChange) {
  return <div>
    <div className='mb-3'>
      <Input 
          value={search} 
          onChange={onSearchChange}
          placeholder = "Rechercher ..."/>
      <Checkbox 
          id="stocked" 
          checked={showStockedOnly} 
          onChange={onStockedOnlyChange} 
          label = "N'affiche que les produit en stock" 
      />
    </div>
  </div>
}

function ProductTable({produits}){
  const rows = []
  let lastCategorie = null
  for (let produit of produits){
    if (produit.categorie !== lastCategorie){
      rows.push(<ProductCategorieRow key={produit.categorie} name ={produit.categorie} />)
       
    }
    lastCategorie = produit.categorie 
    rows.push(<ProductRow produit={produit} key={produit.name}/>)
  }
  return <table className='table'>
    <thead>
      <tr>
        <th>Nom</th>
        
        <th>Prix</th>
      </tr>
    </thead>
    <tbody>
      {rows}
    </tbody>
  </table>
}
*/
// import React from 'react';
// import Accueil from './components/Pages/Accueil';
// import ProductionPage from './components/Pages/ProductionPage';// Importez la nouvelle page à afficher
// import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


// function App() {
//   return (
//     <Router>
//       <div>
//         <header>
//           <h1>Bienvenue sur notre site web</h1>
//           <nav>
//             <ul>
//               <li><Link to="/">Accueil</Link></li>
//               <li><Link to="/about">À propos</Link></li>
//               <li><Link to="/contact">Contact</Link></li>
//               <li><Link to="/production">Production Scientifique</Link></li> {/* Lien vers la nouvelle page */}
//             </ul>
//           </nav>
//         </header>

//         <Switch>
//           <Route path="/" exact component={Accueil} />
//           {/* <Route path="/about" component={AboutPage} />
//           <Route path="/contact" component={ContactPage} /> */}
//           <Route path="/production" component={ProductionPage} /> {/* Route vers la nouvelle page */}
//         </Switch>

//         <footer>
//           <p>&copy; 2024 Nom de votre entreprise</p>
//         </footer>
//       </div>
//     </Router>
//   );
// }
 //import ArticleScientifique from "./components/Pages/interfaceGSR/ArticleScientifique";
// import OuvrageScientifique from "./components/Pages/interfaceGSR/OuvrageScientifique";
//import ChapitreOuvrage from "./components/Pages/interfaceGSR/ChapitreOuvrage"
//import Brevet from "./components/Pages/interfaceGSR/Brevet"
//import Habilitation from "./components/Pages/interfaceGSR/Habilitation";
//import Mastere from "./components/Pages/interfaceGSR/Mastere";
//import Convension from "./components/Pages/Events/Convension";
import Projet from "./components/Pages/Events/Projet";
//import ManifestationScientifique from "./components/Pages/Events/ManifestationScientifique";
//import These from "./components/Pages/interfaceGSR/These";
function App(){
  return(
    <div>
       {/* <ArticleScientifique></ArticleScientifique> 
       <OuvrageScientifique></OuvrageScientifique>
      <ChapitreOuvrage></ChapitreOuvrage> 
      <Brevet></Brevet> 
      <Habilitation></Habilitation
      <Mastere></Mastere>>
      <These></These>
      <ManifestationScientifique></ManifestationScientifique>
      <Convension></Convension>*/}
      <Projet></Projet>
    </div>
  )
}

export default App ;

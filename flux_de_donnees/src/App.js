import React ,{ useState } from 'react';

function App() {
  const [isTerAccepted , setIsTermAccepted] =useState(false)

  return <>
  <form>
    <CGUCheckbox checked = {isTerAccepted} onCheck = {setIsTermAccepted} />
    <button disabled = {!isTerAccepted}>Envoyer le formulaire</button>
  </form>
  
  </>
}

function CGUCheckbox ({checked , onCheck}){
  return <div>
    <h1>FLUX DE DONNEES DANS REACT JS </h1>
    <p>Ceci est un exemple d'utilisation de formulaire de condition et peut avoir des utilites dans l'avancement de projet .</p>
    <label>
      <input 
      type='checkbox'
      onChange={(e) => onCheck(e.target.checked)}
      checked = {checked}/>Accepter les Conditions d'utilisation .
    </label>
  </div>
}
export default App;

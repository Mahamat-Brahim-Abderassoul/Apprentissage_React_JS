import React, { useState } from 'react';
import './Habilitation.css';

const Habilitation = () => {
  const [formData, setFormData] = useState({
    annee: '',
    titre: '',
    titulaire: '',
    fichier: null,
    //reference: '',
    encadrant: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'fichier') {
      const file = files[0];
      // Vérifier le type de fichier
      if (!file.type.includes('pdf')) {
        e.target.value = null; // Effacer le fichier sélectionné
        alert("Le fichier doit être au format PDF.");
        return;
      }
      // Vérifier la taille du fichier
      const maxSize = 2 * 1024 * 1024; // 2 Mo en octets
      if (file.size > maxSize) {
        e.target.value = null; // Effacer le fichier 1 sélectionné
        alert("La taille du fichier ne doit pas dépasser 2 Mo.");
        return;
      }
      
    } 
    setFormData({
      ...formData,
      [name]: name === 'fichier1' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Logique de traitement ou d'envoi des données
  };

  return (
    <div>
      <h2 className="title-form">Création Habilitation</h2>
      <form onSubmit={handleSubmit} className="habilitation-form">
        <div className="form-group">
          {/* Autres champs de formulaire ici */}
          <label>
            Année <span className="required">*</span> :
            <select name="annee" value={formData.annee} onChange={handleChange} required>
              <option value="">Sélectionnez une année</option>
              {/* Boucle pour créer les options jusqu'à l'année actuelle */}
              {Array.from({ length: new Date().getFullYear() - 2000 + 1 }, (_, index) => 2000 + index).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </label>
          <label>
            Titre <span className="required">*</span> :
            <input type='text' name = "titre" value={formData.titre} onChange={handleChange} required />
          </label>
          <label>
            Nom et Prénom titulaire habilitation <span className="required">*</span> :
            <input type='text' name='titulaire' value={formData.titulaire} onChange={handleChange} required/>
          </label>
          <label>
            Fichier PDF(Version réduite:page de garde plus introduction plus Table de matiére plus conclusion génerale, Taille maximum 2 Mo) <span className="required">*</span> :
            <input type="file" name="fichier" accept=".pdf" onChange={handleChange} required/>
          </label>
          <label>
            Encadrant <span className='required'>*</span> :
            <input type='text' name='encadrant' value={formData.encadrant}onChange={handleChange} required/>
          </label>
          
        </div>
        

        <div className="form-group">
            <button type="button" className="prev-btn">&#8592; Page Précédente</button>
            <button type="submit" className="submit-btn">Valider</button>
            <button type="button" className="next-btn">Page Suivante &#8594;</button>
        </div>
      </form>
    </div>
  );
};

export default Habilitation;

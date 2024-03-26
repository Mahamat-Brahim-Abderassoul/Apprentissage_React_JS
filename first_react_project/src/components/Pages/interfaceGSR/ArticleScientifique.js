import React, { useState } from 'react';
import './ArticleScientifique.css';
import { AiFillFile } from "react-icons/ai";

const ArticleScientifique = () => {
    
  // State pour stocker les valeurs des champs du formulaire
  const [formData, setFormData] = useState({
    annee: '',
    titre: '',
    lienDOI: '',
    fichierPDF: '',
    datePublication: '',
    typeAuteur: '',
    CIN: '',
    ordre: '',
    titreJournal: '',
    volume: '',
    facteur: '',
    indexation: '',
    sitedelarevue: '',
    quartile: ''
  });

  // Fonction de gestion des changements dans les champs du formulaire
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
    
//   };
  
const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'fichierPDF') {
      const file = files[0];
      const maxSize = 1024 * 1024; // 1 Mo en octets
      if (file && file.size > maxSize) {
        alert("La taille du fichier ne doit pas dépasser 1 Mo.");
        e.target.value = null;// Effacer le fichier sélectionné
        return;
      }
      // Vérifier le type de fichier
      if (!file.type.includes('pdf')) {
        e.target.value = null ;// Effacer le fichier sélectionné
        alert("Le fichier doit être au format PDF.");
        return;
      }
    }
    setFormData({
      ...formData,
      [name]: value
    });
  };
  

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique de traitement ou d'envoi des données
    console.log(formData);
  };

  return (
    <div>

    <h2 className="title-form">Création Article Scientifique</h2>
      <form onSubmit={handleSubmit} className="article-form">
        {/* Partie 1 : Informations Article */}
        <div className='icon'>
    <AiFillFile className='photo' />
    <div className='content'>
        <h3 className='partie'>Informations Article</h3>
    </div>
</div>

        <div className="form-group">
        <label>
            Année <span className="required">*</span> :
            <select name="annee" value={formData.annee} onChange={handleChange} required>
              <option value="">Sélectionnez une année</option>
              {/* Boucle pour créer les options jusqu'à 2024 */}
              {Array.from({ length: 2026 - 2000 }, (_, index) => 2000 + index).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </label>
          <label>
            Titre <span className="required">*</span> :
            <input type="text" name="titre" value={formData.titre} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Lien DOI de l'article scientifique :
            <input type="text" name="lienDOI" value={formData.lienDOI} onChange={handleChange} />
          </label>
          <label>
            Fichier (PDF, Taille maximum 1024 ko) <span className="required">*</span> :
            <input type="file" name="fichierPDF" accept="application/pdf" onChange={handleChange} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Date de publication <span className="required">*</span> :
            <input type="date" name="datePublication" value={formData.datePublication} onChange={handleChange}  required />
          </label>
        </div>

        {/* Partie 2 : Auteur(s) */}
        <h3 className='partie'>Auteur(s)</h3>
        <div className="form-group">
          <label>
            <h4>Auteur</h4>
            Type d'auteur <span className="required">*</span>:
            <input type="radio" name="typeAuteur" value="interne" onChange={handleChange} /> Interne
            <input type="radio" name="typeAuteur" value="externe" onChange={handleChange} /> Externe
          </label>
        </div>
        <div className="form-group">
          <label>
            CIN <span className="required">*</span> :
            <input type="text" name="CIN" value={formData.CIN} onChange={handleChange} required />
          </label>
          </div>
          <div className="form-group">
          <label>
            Ordre <span className="required">*</span> :
            <input type="number" name="ordre" value={formData.ordre} onChange={handleChange} min="0" required />
          </label>
        </div>
        <div className="form-group">
          <button type="button" className="delete-btn">Supprimer </button>
          <button type="button" className="add-btn">+ Ajouter un auteur </button>
        </div>

        {/* Partie 3 : Informations Journal */}
        <h3 className='partie'>Informations Journal</h3>
        <div className="form-group">
          <label>
            Titre du journal <span className="required">*</span> :
            <input type="text" name="titreJournal" value={formData.titreJournal} onChange={handleChange} required />
          </label>
        </div>
        <div className="form-group">
          <label>
            Liste des journaux :
            <textarea name="listejournaux" rows="4" cols="50" />
          </label>
        </div>
        <div className="form-group">
          <label>
            Quartile du journal :
            <select name="quartile" value={formData.quartile} onChange={handleChange}>
              <option value="">Sélectionnez le quartile</option>
              <option value="0%">0%</option>
              <option value="Q1 = 25%">Q1 = 25%</option>
              <option value="Q2 = 50%">Q2 = 50%</option>
              <option value="Q3 = 75%">Q3 = 75%</option>
              <option value="Q4 = 100%">Q4 = 100%</option>
              {/* Ajoutez les autres options ici */}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Volume :
            <input type="text" name="volume" value={formData.volume} onChange={handleChange} />
          </label>
        </div>
        <div className="form-group">
          <label>
            Facteur d'impact :
            <input type="text" name="facteur" value={formData.facteur} onChange={handleChange} />
          </label>
        </div>
       
        
        <div className="form-group">
          <label>
            Indexation <span className="required">*</span>  :
            <select name="indexation" value={formData.indexation} onChange={handleChange} required >
              <option value="">Sélectionnez l'indexation</option>
              <option value="ABC">ABC</option>
              <option value="EFG">EFG</option>
              <option value="HIJ">HIJ</option>
              <option value="KLM">KLM</option>

              {/* Ajoutez les autres options ici */}
            </select>
          </label>
        </div>
        <div className="form-group">
          <label>
            Site de la revue :
            <input type="text" name="sitedelarevue" value={formData.sitedelarevue} onChange={handleChange} />
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

export default ArticleScientifique;

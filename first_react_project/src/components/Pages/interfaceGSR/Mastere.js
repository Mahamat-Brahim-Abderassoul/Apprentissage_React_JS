import React, { useState } from 'react';
import './Mastere.css';

const Mastere = () => {
  const [formData, setFormData] = useState({
    annee: '',
    nomPrenomEtudiant: '',
    anneePremiereInscription: '',
    fichier: null,
    sujet: '',
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
      const maxSize = 1 * 1024 * 1024; // 1 Mo en octets
      if (file.size > maxSize) {
        e.target.value = null; // Effacer le fichier sélectionné
        alert("La taille du fichier ne doit pas dépasser 1 Mo.");
        return;
      }
    } 
    setFormData({
      ...formData,
      [name]: name === 'fichier' ? files[0] : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Logique de traitement ou d'envoi des données
  };

  return (
    <div>
      <h2 className="title-form">Création mastère de recherche </h2>
      <form onSubmit={handleSubmit} className="mastere-form">
        <div className="form-group">
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
            Nom et Prénom de l'étudiant :
            <input type='text' name='nomPrenomEtudiant' value={formData.nomPrenomEtudiant} onChange={handleChange} />
          </label>
          <label>
            Année de première inscription <span className="required">*</span> :
            <input type='number' name='anneePremiereInscription' value={formData.anneePremiereInscription} onChange={handleChange} required min={0}/>
          </label>
         
          <label>
            Mémoire Mastère (fichier PDF qui contient la pagede garde, Taille maximum 1 Mo) <span className="required">*</span>:
            <input type="file" name="fichier" accept=".pdf" onChange={handleChange} required/>
          </label>
          <label>
            Sujet <span className="required">*</span> :
            <textarea name='sujet' value={formData.sujet} onChange={handleChange} required></textarea>
          </label>
          <label>
            Encadrant <span className="required">*</span> :
            <input type='text' name='encadrant' value={formData.encadrant} onChange={handleChange} required/>
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

export default Mastere;
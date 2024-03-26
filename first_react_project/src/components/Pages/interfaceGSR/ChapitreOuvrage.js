import React, { useState } from 'react';
import './ChapitreOuvrage.css';

const ChapitreOuvrage = () => {
  const [formData, setFormData] = useState({
    annee: '',
    //auteur: '',
    typeAuteur: '',
    CIN: '',
    ordre: '',
    titre: '',
    editeur: '',
    lienEditeur: '',
    edition: '',
    isbnIssn: '',
    date: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Vous pouvez ajouter ici la logique de soumission du formulaire
  };

  return (
    <div>
      <h2 className="title-form">Création Chapitre Ouvrage </h2>
      <form onSubmit={handleSubmit} className="article-form">
        <div className="form-group">
          <label>
            Année <span className="required">*</span> :
            <select name="annee" value={formData.annee} onChange={handleChange} required>
              <option value="">Sélectionnez une année</option>
              {Array.from({ length: 2026 - 2000 }, (_, index) => 2000 + index).map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </label>
          
          <label>
            <h4>Auteur <span className="required">*</span></h4>
            Type d'auteur <span className="required">*</span>:
            <input type="radio" name="typeAuteur" value="interne" onChange={handleChange} required/> Interne
            <input type="radio" name="typeAuteur" value="externe" onChange={handleChange} required/> Externe
          </label>
          <label>
            CIN <span className="required">*</span> :
            <input type="text" name="CIN" value={formData.CIN} onChange={handleChange} required />
          </label>
          <label>
            Ordre <span className="required">*</span> :
            <input type="number" name="ordre" value={formData.ordre} onChange={handleChange} min="0" required />
          </label>
          <div className="form-group">
            <button type="button" className="delete-btn">Supprimer </button>
            <button type="button" className="add-btn">+ Ajouter un auteur </button>
          </div>
          <label>
            Titre <span className="required">*</span> :
            <input type="text" name="titre" value={formData.titre} onChange={handleChange} required />
          </label>
          <label>
            Editeur <span className="required">*</span> :
            <input type="text" name="editeur" value={formData.editeur} onChange={handleChange} required />
          </label>
          <label>
            Lien Editeur :
            <input type="text" name="lienEditeur" value={formData.lienEditeur} onChange={handleChange} />
          </label>
          <label>
            Edition <span className="required">*</span>:
            <input type="text" name="edition" value={formData.edition} onChange={handleChange} required />
          </label>
          <label>
            ISBN/Issn :
            <input type="text" name="isbnIssn" value={formData.isbnIssn} onChange={handleChange} />
          </label>
          <label>
            Date <span className="required">*</span> :
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
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

export default ChapitreOuvrage;

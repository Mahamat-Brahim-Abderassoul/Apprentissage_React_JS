import React, { useState } from 'react';
import './Projet.css';

const Projet = () => {
  const [formData, setFormData] = useState({
    annee: '',
    code: '',
    categorie: '',
    type: '',
    intitule: '',
    coordinateur: '',
    partBudget: ''
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
    
    // Vérifier si tous les champs obligatoires sont remplis
    const { annee, code, categorie, type, intitule, coordinateur, partBudget } = formData;
    if (!annee || !code || !categorie || !type || !intitule || !coordinateur || !partBudget) {
      alert("Veuillez remplir tous les champs obligatoires.");
      return;
    }

    console.log(formData);
    // Logique de traitement ou d'envoi des données
  };

  return (
    <div>
      <h2 className="title-form">Création Projet</h2>
      <form onSubmit={handleSubmit} className="projet-form">
        <div className="form-group">
          <label>
            Année <span className="required">*</span> :
            <input type='text' name='annee' value={formData.annee} onChange={handleChange} required/>
          </label>
          <label>
            Code <span className="required">*</span> :
            <input type='text' name='code' value={formData.code} onChange={handleChange} required/>
          </label>
          <label>
            Catégorie <span className="required">*</span> :
            <select name="categorie" value={formData.categorie} onChange={handleChange} required>
              <option value="">Sélectionnez une catégorie</option>
              <option value="Projets nationaux">Projets nationaux</option>
              <option value="Projets bilatéraux">Projets bilatéraux</option>
              <option value="Projets multilatéraux">Projets multilatéraux</option>
              {/* Ajoutez d'autres options selon vos besoins */}
            </select>
          </label>
          <label>
            Type <span className="required">*</span> :
            <select name="type" value={formData.type} onChange={handleChange} required>
              <option value="">Sélectionnez un type</option>
              <option value="Type 1">Type 1</option>
              <option value="Type 2">Type 2</option>
              {/* Ajoutez d'autres options selon vos besoins */}
            </select>
          </label>
          <label>
            Intitulé <span className="required">*</span> :
            <input type='text' name='intitule' value={formData.intitule} onChange={handleChange} required/>
          </label>
          <label>
            Coordinateur du projet <span className="required">*</span> :
            <input type='text' name='coordinateur' value={formData.coordinateur} onChange={handleChange} required/>
          </label>
          <label>
            Part du budget <span className="required">*</span> :
            <input type='text' name='partBudget' value={formData.partBudget} onChange={handleChange} required/>
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

export default Projet;

import React, { useState } from 'react';
import './ManifestationScientifique.css';

const ManifestationScientifique = () => {
  const [formData, setFormData] = useState({
    annee: '',
    titre: '',
    organisateur: '',
    date: '',
    lieu: '',
    type: '',
    siteWeb: ''
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
    // Logique de traitement ou d'envoi des données
  };

  return (
    <div>
      <h2 className="title-form">Création Manifestation Scientifique</h2>
      <form onSubmit={handleSubmit} className="manifestation-scientifique-form">
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
            Titre <span className="required">*</span> :
            <input type='text' name='titre' value={formData.titre} onChange={handleChange} required/>
          </label>
          <label>
            Organisateurs <span className="required">*</span> :
            <input type='text' name='organisateur' value={formData.organisateur} onChange={handleChange} required/>
          </label>
          <label>
            Date organisation <span className="required">*</span> :
            <input type='date' name='date' value={formData.date} onChange={handleChange} required/>
          </label>
          <label>
            Lieu <span className="required">*</span> :
            <input type='text' name='lieu' value={formData.lieu} onChange={handleChange} required/>
          </label>
          <label>
            Type <span className="required">*</span> :<br></br><br></br>
            <label>
              National
              <input type='radio' name='type' value='National' checked={formData.type === 'National'} onChange={handleChange} required/>
            </label>
            <label>
              International
              <input type='radio' name='type' value='International' checked={formData.type === 'International'} onChange={handleChange} required/>
            </label>
          </label>
          <label>
            Site Web :
            <input type='url' name='siteWeb' value={formData.siteWeb} onChange={handleChange}/>
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

export default ManifestationScientifique;

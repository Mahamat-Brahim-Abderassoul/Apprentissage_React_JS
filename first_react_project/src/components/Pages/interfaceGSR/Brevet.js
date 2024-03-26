import React, { useState } from 'react';
import './Brevet.css';

const Brevet = () => {
  const [formData, setFormData] = useState({
    annee: '',
    reference: '',
    fichier: null,
    date: '',
    type: ''
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'fichier') {
      const file = files[0];
      // Vérifier le type de fichier
      if (!file.type.includes('pdf')) {
        e.target.value = null ;// Effacer le fichier sélectionné
        alert("Le fichier doit être au format PDF.");
        return;
      }
      // Vérifier la taille du fichier
      const maxSize = 1024 * 1024; // 1 Mo en octets
      if (file.size > maxSize) {
        e.target.value = null; // Effacer le fichier sélectionné
        alert("La taille du fichier ne doit pas dépasser 1024 Ko.");
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
      <h2 className="title-form">Création Brevet</h2>
      <form onSubmit={handleSubmit} className="brevet-form">
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
            Reference <span className="required">*</span>:
            <textarea name="reference" value={formData.reference} onChange={handleChange} required></textarea>
          </label>
          <label>
            Fichier (Taille maximum 1024 ko) <span className="required">*</span>:
            <input type="file" name="fichier" accept=".pdf" onChange={handleChange} required/>
          </label>
          <label>
            Date création <span className="required">*</span> :
            <input type="date" name="date" value={formData.date} onChange={handleChange} required />
          </label>
          <label>
            Type <span className="required">*</span>:
            <select name="type" value={formData.type} onChange={handleChange} required >
              <option value="">Sélectionnez le type</option>
              <option value="Type1">Type1</option>
              <option value="Type2">Type2</option>
              {/* Ajoutez d'autres options si nécessaire */}
            </select>
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

export default Brevet;

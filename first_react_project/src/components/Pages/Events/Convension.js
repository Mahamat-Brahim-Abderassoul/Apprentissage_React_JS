import React, { useState } from 'react';
import './Convension.css';

const Convension = () => {
  const [formData, setFormData] = useState({
    annee: '',
    typeManifestation: [],
    partenaire: '',
    type: '',
    resume: '',
    impactFinancier: '',
    impactNature: '',
    dateCreation: '',
    fichier: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    
    // Si le type est "file", nous vérifions le fichier
    if (type === 'file') {
      const file = files[0];
  
      // Vérifier le type de fichier
      if (file && !file.type.includes('pdf')) {
        e.target.value = null;
        alert("Le fichier doit être au format PDF.");
        return;
      }
  
      // Vérifier la taille du fichier
      const maxSize = 1 * 1024 * 1024; // 1 Mo en octets
      if (file && file.size > maxSize) {
        e.target.value = null;
        alert("La taille du fichier ne doit pas dépasser 1 Mo.");
        return;
      }
  
      // Si le fichier passe les vérifications, nous le stockons dans l'état
      setFormData({
        ...formData,
        [name]: file
      });
    } else {
      // Si ce n'est pas un champ de type "file", nous mettons à jour l'état normalement
      if (type === 'checkbox') {
        if (checked) {
          setFormData({
            ...formData,
            [name]: [...formData[name], value]
          });
        } else {
          setFormData({
            ...formData,
            [name]: formData[name].filter(item => item !== value)
          });
        }
      } else {
        setFormData({
          ...formData,
          [name]: value
        });
      }
    }
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Logique de traitement ou d'envoi des données
  };

  return (
    <div>
      <h2 className="title-form">Création Convention</h2>
      <form onSubmit={handleSubmit} className="convention-form">
        <div className="form-group">
          <label>
            Année <span className="required">*</span> :
            <input type='text' name='annee' value={formData.annee} onChange={handleChange} required/>
          </label>
          <label>
            Type de Convension <span className="required">*</span> :<br></br><br></br>
            <label>
              National
              <input type='checkbox' name='typeManifestation' value='National' onChange={handleChange}/>
            </label>
            <label>
              International
              <input type='checkbox' name='typeManifestation' value='International' onChange={handleChange}/>
            </label>
          </label>
          <label>
            Partenaire <span className="required">*</span>:
            <textarea  name='partenaire' value={formData.partenaire} onChange={handleChange} required/>
          </label>
          <label>
            Type  :
            <select name="type" value={formData.type} onChange={handleChange} >
              <option value="">Sélectionnez un type</option>
              <option value="Type 1">Type 1</option>
              <option value="Type 2">Type 2</option>
              {/* Ajoutez d'autres options selon vos besoins */}
            </select>
          </label>
          <label>
            Résumé :
            <textarea name='resume' value={formData.resume} onChange={handleChange} ></textarea>
          </label>
          
          <label>
            Impact financier :
            <input type='text' name='impactFinancier' value={formData.impactFinancier} onChange={handleChange}/>
          </label>
          <label>
            Impact en nature :
            <input type='text' name='impactNature' value={formData.impactNature} onChange={handleChange}/>
          </label>
          <label>
            Date de création <span className="required">*</span> :
            <input type='date' name='dateCreation' value={formData.dateCreation} onChange={handleChange} required/>
          </label>
          <label>
            Fichier (PDF, Taille maximum 1 Mo) <span className="required">*</span>:
            <input type="file" name="fichier" accept=".pdf" onChange={handleChange} required/>
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

export default Convension;

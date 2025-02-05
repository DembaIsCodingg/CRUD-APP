import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateProduits = () => {
    const [valeurs, setValeurs] = useState({
        Nom: "",
        Description: "",
        NEW: 1
    });
    const navigateur = useNavigate('/')
    const handleSubmit = (e) => {
        e.preventDefault();

        
        const productData = {
            Nom: valeurs.Nom,
            Description: valeurs.Description,
            NEW: valeurs.NEW
        };

        axios.post('http://localhost:8080/products', productData)
            .then(res => {
                console.log(res);
                navigateur('/')
             
                setValeurs({
                    Nom: "",
                    Description: "",
                    NEW: 1
                });
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex align-items-center flex-column mt-5 w-508'>
            <form className='w-509' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="Nom" className="form-label">Nom:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="Nom"
                        aria-describedby="Nom"
                        placeholder="Nom"
                        value={valeurs.Nom}
                        onChange={(event) => setValeurs({ ...valeurs, Nom: event.target.value })}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="description" className="form-label">Description:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="Description"
                        value={valeurs.Description}
                        onChange={(event) => setValeurs({ ...valeurs, Description: event.target.value })}
                    />
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
            </form>
        </div>
    );
};

export default CreateProduits;

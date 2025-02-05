import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const UpdateProduits = () => {
    const { id } = useParams();
    const [valeurs, setValeurs] = useState({ Nom: "", Description: "", NEW: 1 });
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8080/products/${id}`)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const productData = { Nom: valeurs.Nom, Description: valeurs.Description, NEW: valeurs.NEW };

        axios.put(`http://localhost:8080/products/${id}`, productData)
            .then(res => {
                console.log(res);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex align-items-center flex-column mt-5 w-50'>
            <form className='w-50' onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="Nom" className="form-label">Nom:</label>
                    <input type="text" className="form-control" id="Nom" placeholder="Nom" value={valeurs.Nom} onChange={(e) => setValeurs({ ...valeurs, Nom: e.target.value })} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Description:</label>
                    <input type="text" className="form-control" id="Description" placeholder="Description" value={valeurs.Description} onChange={(e) => setValeurs({ ...valeurs, Description: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Mise a jour</button>
            </form>
        </div>
    );
};

export default UpdateProduits;
import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Produits = () => {
    const [produits, setProduits] = useState([]);
    const {id} = useParams();
    useEffect(() => {
        axios.get('http://localhost:8080/produits')
            .then(res => setProduits(res.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/products/${id}`)
            .then(() => setProduits(produits.filter(produit => produit.id !== id)))
            .catch(err => console.log(err));
    };

    return (
        <div className='container mt-5'>
            <Link to="/create" className="btn btn-primary mb-3">Ajouter Produit</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nom</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {produits.map(produit => (
                        <tr key={produit.id}>
                            <td>{produit.id}</td>
                            <td>{produit.Nom}</td>
                            <td>{produit.Description}</td>
                            <td>
                                <Link to={`/update/${produit.id}`} className="btn btn-success me-2">Edit</Link>
                                <button onClick={() => handleDelete(produit.id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Produits;

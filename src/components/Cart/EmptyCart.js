import React from 'react';
import { Link } from 'react-router-dom';


export default function EmpyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h1>Carrito Vacio</h1>
                    <br></br>
                    <Link to="/productlist" className="ml-auto">
                    <button>
                        <span className="nav-item ml-5">
                        </span>
                        <h5>Vuelve a Productos para continuar la búsqueda</h5>
                    </button>
                </Link>
               
                </div>
            </div>
        </div>
    )
}
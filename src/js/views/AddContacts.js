import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom"; // Importa Navigate desde react-router-dom

export const AddContacts = () => {
    const { actions } = useContext(Context);
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        phone: "",
        agenda_slug: "nilsonmarenco",
        address: ""
    });

    const [redirect, setRedirect] = useState(false); // Estado para la redirección

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await actions.addContact(formData);
        setRedirect(true); // Establece el estado de redirección a verdadero después de agregar el contacto
    };
    
    if (redirect) {
        return <Navigate to="/contacts" />; // Redirige al usuario a la página de contactos
    }
    
    return (
        <div className="container-add-contacts">
            <div className="row justify-content-center">
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <div className="col-12">
                            <label htmlFor="inputName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="inputName" placeholder="" onChange={handleChange} name="full_name"  />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email Adress</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" onChange={handleChange} name="email" />
                            <div id="emailHelp" className="form-text"></div>
                        </div><div className="col-12">
                            <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                            <input type="text" className="form-control" id="inputPhone" placeholder="" onChange={handleChange} name="phone" />
                        </div><div className="col-12 mb-3">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="" onChange={handleChange} name="address" />
                        </div> 						
						<button type="submit" className="btn btn-primary">Agregar Contacto</button>
                    </form>
                    </div>
                    </div>
        </div>
    );
};
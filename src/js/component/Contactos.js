import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/contacts.css"

export const Contactos = () => {
    const { store, actions } = useContext(Context);

    // Se llama a getContacts una vez al cargar el componente
    useEffect(() => {
        actions.getContacts();
    }, []);

    const handleDelete = (contactId) => {
        actions.deleteContact(contactId)
            .then(() => actions.getContacts());
    };

    return (
        <div className="container">
            {store.Contacts.map((element, index) => (
                <div className="card mb-3 small-contact-card" style={{ width: "100%" }} key={index}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="img-fluid rounded-start" alt="Contact" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title Full__name">{element.full_name}</h2>
                                <h4 className="card-text Email__address">Email Address: <br />{element.email}</h4>
                                <h5 className="card-text Phone__number">Phone Number: <br />{element.phone}</h5>
                                <h3 className="card-text Street__address">Street Address: <br />{element.address}</h3>
                                <div className="d-flex justify-content-end">
                                    <button onClick={() => handleDelete(element.id)} className="btn btn-danger m-1">Borrar Contacto</button>
                                    <Link to={`/edit-contact/${element.id}`}>
                                        <button className="btn btn-primary m-1">Edit Contact</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

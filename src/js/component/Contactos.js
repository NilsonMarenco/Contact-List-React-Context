import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMapMarkerAlt, faEnvelope, faPhone, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import "../../styles/contacts.css";

export const Contactos = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.getContacts();
    }, []);

    const handleDelete = (contactId) => {
        actions.deleteContact(contactId)
            .then(() => actions.getContacts());
    };

    return (
        <div className="container-contacts">
            {store.Contacts.map((element, index) => (
                <div className="card mb-3 small-contact-card" style={{ width: "100%" }} key={index}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <FontAwesomeIcon icon={faUser} className="img-fluid rounded-start person-icon" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title Full__name">{element.full_name}</h2>
                                <div className="container-texto-iconos d-flex flex-row justify-content-start">
                                    <div className="card-text">
                                        <h3><FontAwesomeIcon icon={faEnvelope} /> {element.email}</h3>
                                        <h4><FontAwesomeIcon icon={faPhone} /> {element.phone}</h4>
                                        <h5><FontAwesomeIcon icon={faMapMarkerAlt} /> {element.address}</h5>
                                    </div>
                                    <div className="iconos-botones d-flex gap-4">
                                        <Link to={`/edit-contact/${element.id}`}>
                                            <FontAwesomeIcon icon={faEdit} className="btn btn-secondary" />
                                        </Link>
                                        <FontAwesomeIcon icon={faTrash} className="btn btn-secondary mr-2" onClick={() => handleDelete(element.id)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

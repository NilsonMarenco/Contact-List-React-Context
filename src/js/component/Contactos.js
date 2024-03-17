import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Contactos = () => {
    const { store, actions } = useContext(Context)

    console.log(store.Contacts)

    useEffect(() => {
        actions.getContacts()
    }, [])

    const handleDelete = (contactId) => {
        actions.deleteContact(contactId);
    };

    return (
        <div className="container">
            {store.Contacts.map((element, index) => (

                <div className="card mb-5" style={{ maxwWidth: "20px" }} key={index}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png" className="img-fluid rounded-start" />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                    <h1 className="Full__name">{element.full_name}</h1>
                                    <h3 className="Email__address">Email Address: <br />{element.email}</h3>
                                    <h4 className="Phone__number">Phone Number: <br />{element.phone}</h4>
                                    <h2 className="">Agenda_slug <br/>{element.agenda_slug}</h2>
                                    <h2 className="Street__address">Street Address: <br />{element.address}</h2>
                                    <div className="d-flex justify-content-end">
                                        <button onClick={() => 
                                        handleDelete(element.id)} 
                                        className="btn btn-danger m-1">Borrar Contacto
                                        </button>
                                        <Link to={`/edit-contact/${element.id}`}>
                                        <button 
                                        className="btn btn-primary m-1">
                                        Edit Contact
                                        </button>
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
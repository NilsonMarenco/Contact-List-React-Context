import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { useParams, useNavigate } from "react-router-dom";

export const EditContact = () => {
    const { store, actions } = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();
    const [contact, setContact] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: ""
    });

    useEffect(() => {
        const loadContact = async () => {
            try {
                const contactToEdit = await actions.getContact(id);
                setContact(contactToEdit);
            } catch (error) {
                console.error("Error loading contact:", error);
            }
        };

        loadContact();
    }, [id, actions]);

    const handleChange = (event) => {
        setContact({
            ...contact,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await actions.updateContact(contact);
        navigate("/contacts"); // Redirige al usuario a la página de contactos después de actualizar el contacto
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <form onSubmit={handleSubmit} className="mt-5">
                        <div className="mb-3">
                            <label htmlFor="inputName" className="form-label">Full Name</label>
                            <input type="text" className="form-control" id="inputName" value={contact.full_name} onChange={handleChange} name="full_name" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputEmail" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="inputEmail" value={contact.email} onChange={handleChange} name="email" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputPhone" className="form-label">Phone Number</label>
                            <input type="tel" className="form-control" id="inputPhone" value={contact.phone} onChange={handleChange} name="phone" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="inputAddress" className="form-label">Address</label>
                            <input type="text" className="form-control" id="inputAddress" value={contact.address} onChange={handleChange} name="address" />
                        </div>
                        <button type="submit" className="btn btn-primary">Update Contact</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

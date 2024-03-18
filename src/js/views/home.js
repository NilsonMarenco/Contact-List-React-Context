import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link, Navigate } from "react-router-dom";

export const Home = () => {
    const { store } = useContext(Context);
    const [redirectToContacts, setRedirectToContacts] = useState(false);

    useEffect(() => {
        // Verificar si hay contactos cargados en el estado
        if (store.Contacts && store.Contacts.length > 0) {
            setRedirectToContacts(true);
        }
    }, [store.Contacts]);

    return (
        <div className="text-center mt-5">
            {redirectToContacts ? (
                <Navigate to="/contacts" />
            ) : (
                <>
                    <h1>My Contact List!</h1>
                    <p>Welcome to your contact list. Here you can manage your contacts.</p>
                    <Link to="/add-contacts" className="btn btn-success">Add Contact</Link>
                </>
            )}
        </div>
    );
};

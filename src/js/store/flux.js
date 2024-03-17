const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            Contacts: []
        },
        actions: {
            getContacts: async () => {
                try {
                    const response = await fetch(
                        "https://playground.4geeks.com/apis/fake/contact/agenda/nilsonmarenco"
                    );
                    if (response.ok) {
                        const data = await response.json();
                        setStore({ Contacts: data });
                    }
                } catch (error) {
                    console.error("Error fetching contacts:", error);
                }
            },
            addContact: async (data) => {
                try {
                    const response = await fetch("https://playground.4geeks.com/apis/fake/contact/", {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                    });
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    const responseData = await response.json();
                    console.log(responseData);
                } catch (error) {
                    console.error("Error adding contact:", error);
                }
            },
            deleteContact: async (contactId) => {
                try {
                    const response = await fetch(
                        `https://playground.4geeks.com/apis/fake/contact/${contactId}`,
                        {
                            method: "DELETE"
                        }
                    );
                    if (response.ok) {
                        console.log(`Contact with ID ${contactId} deleted successfully.`);
                        actions.getContacts();
                    } else {
                        console.error("Error deleting contact.");
                    }
                } catch (error) {
                    console.error("Error performing DELETE request:", error);
                }
            },
            getContact: async (contactId) => {
                try {
                    const response = await fetch(
                        `https://playground.4geeks.com/apis/fake/contact/${contactId}`
                    );
                    if (response.ok) {
                        const contactData = await response.json();
                        return contactData;
                    } else {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                } catch (error) {
                    console.error(`Error fetching contact with ID ${contactId}:`, error);
                }
            },
            updateContact: async (updatedContact) => {
                try {
                    const response = await fetch(
                        `https://playground.4geeks.com/apis/fake/contact/${updatedContact.id}`,
                        {
                            method: "PUT",
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(updatedContact),
                        }
                    );
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    console.log(`Contact with ID ${updatedContact.id} updated successfully.`);
                } catch (error) {
                    console.error("Error updating contact:", error);
                }
            }
        }
    };
};

export default getState;
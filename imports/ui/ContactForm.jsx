import React, {useState} from "react"
import { ContactsCollection } from "../api/contactsCollection";

export const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const saveContact = () => {
        ContactsCollection.insert({name, email, imageUrl})
        setName("");
        setEmail("");
        setImageUrl("");
    }

    return (
        <form>
        <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={(e) => setName(e.target.value)} value={name} />
        </div>
        <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div>
            <label htmlFor="imageUrl">Image URL</label>
            <input id="imageUrl" type="text" onChange={(e) => setImageUrl(e.target.value)} value={imageUrl} />
        </div>
        <div>
            <button type="button" onClick={saveContact}>Save contact</button>
        </div>
        </form>
    )
}
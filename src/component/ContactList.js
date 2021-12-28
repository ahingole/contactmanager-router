import React from 'react'
import { ContactCard } from './ContactCard';
import { Link } from "react-router-dom";



const ContactList = ({ contact, deleteitem }) => {
    console.log(contact);
    const rendercontact = contact.map((item, index) => {
        return (
             <>
                <ContactCard deleteitem={deleteitem} item={item} key={index} />
            </>
        )
    })
    return (
        <div className=' contactlist'>
            

            <div className='addDiv'>
            <h1>ContactList</h1>
            </div>
            <Link to="/add" ><button> addcontact</button> </Link>

            {rendercontact}
     </div>
    )
}
export default ContactList;
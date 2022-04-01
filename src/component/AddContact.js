import React, { useState } from "react";
import { useNavigate } from "react-router-dom"

function AddContact(props) {

    const [inputs, setInputs] = useState(" ");
    // this is normal form

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const navigate = useNavigate()

    const add = (event) => {
        event.preventDefault()
        if (inputs.name == null && inputs.email == null) {
            alert("all the field are mandetory")
            return  
        
            ;
        }
      
        props.handlercon(inputs);

        setInputs({ name: "", email: "" })

        navigate("/")
        
    }


    return (
        <div className="mainContact">
            <h1>Add Contact</h1>
            <form className="formdiv" onSubmit={add}>
                <div>
                    <lable for="name"> Name</lable>
                    <input  style={{margin:"10px"}} type="text" name="name" value={inputs.name} placeholder="name" onChange={handleChange} />
                </div>
                <div>
                    <lable for="email"> Email</lable>
                    <input   style={{margin:"10px"}}type="text" name="email" value={inputs.email} placeholder="email" onChange={handleChange} />
                </div>
                <button style={{marginTop:"60px"}} type="submit"> save </button>
            </form>
        </div>
    )
}

export default AddContact;
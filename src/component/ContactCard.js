import React from 'react'
import avtar from "../component/images/avtar.jpg"

export const ContactCard = ({item,deleteitem}) => {

                        const{id,name,email} =item
    function del() {
        deleteitem(name)
    }
    return (
        <>
             <div className='item'>
                        <img src={avtar}/>
                        <div className='header'> <h1> {name} </h1>  </div>
                        <div> {email}  </div>
                    <button className='trash' style={{color:"red"}} onClick={()=>del(id)}> <span>&#x2421;</span></button>
                </div>
        </>
    )
}

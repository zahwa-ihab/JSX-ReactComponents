import React from 'react'

export const Address = () =>{

    const AddressDetails= {
        City: " new Cairo",
        Street: "main north 90th street",
        BlockNo:"45B",
        Floor:" first "
    }
    return(
        <>
        <h3>Address</h3>
        <div>
            {Object.keys(AddressDetails).map( (key) => 
            <h4>{key} : {AddressDetails[key]}</h4>
            )}
        </div>
        </>
    )
}
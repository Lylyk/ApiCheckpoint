import React from 'react'

function ListItems({user}) {
    return (
    <>
    <li  className="list-group-item">
            <h5>{user.name}</h5>
            <p>Email: {user.email}</p>
            <p>Adresse: {user.address.street}, {user.address.city}</p>
            <p>Téléphone: {user.phone}</p>
            <p>Entreprise: {user.company.name}</p>
    </li>
    </>
    )
}

export default ListItems
'use client'
import { useState } from "react";
export default function Users({ user, editUser, deleteUser }) {

    const [ isEditing, setEditing ] = useState(false)
    const [ userData, setUser ] = useState(user);
    const handleChanges = event => {
        event.preventDefault()
        setUser({ ...userData, [event.target.id]: event.target.value });
    }

    return (
        <tr>
            <td>{userData.id}</td>
            <td> { !isEditing ? userData.name : <input id="name" value={userData.name} onChange={ handleChanges } /> } </td>
            <td> { !isEditing ? userData.email : <input id="email" value={userData.email} onInput={ handleChanges } /> } </td>
            <td>
                { isEditing
                    ? <span onClick={ () => { setEditing(false); editUser(userData); }}>save </span>
                    : <span onClick={ () => setEditing(true) }>edit </span>
                }&nbsp;
                <b onClick={ () => deleteUser(userData.id) }> delete </b>
            </td>
        </tr>
    );
}
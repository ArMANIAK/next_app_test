'use client'
import { useState } from "react";
export default function User({ user, handleCreate, editUser, deleteUser, isNew }) {

    const [ isEditing, setEditing ] = useState(false)
    const [ userData, setUser ] = useState(user);
    const handleChanges = event => {
        event.preventDefault()
        setUser({ ...userData, [event.target.name]: event.target.value });
    }

    return (
        <tr>
            <td>{userData?.id ?? ''}</td>
            <td> { isNew || isEditing ? <input name="name" value={userData?.name ?? ''} onChange={ handleChanges } /> : userData.name } </td>
            <td> { isNew || isEditing ? <input name="email" value={userData?.email ?? ''} onInput={ handleChanges } /> : userData.email } </td>

                { isNew
                    ? <td><span onClick={ async () => handleCreate(userData) }>save </span></td>
                    : <td>
                        {
                            isEditing
                                ? <span onClick={ () => { setEditing(false); editUser(userData); }}>save </span>
                                : <span onClick={ () => setEditing(true) }>edit </span>
                        }
                        <b onClick={ () => deleteUser(userData.id) }> delete </b>
                    </td>
                }

        </tr>
    );
}
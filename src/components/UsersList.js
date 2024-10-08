'use client';
import User from "../components/User";
import { useState } from 'react'

export default function UsersList({ list, getUsers, createUser, changeUser, deleteUser, deleteAllUsers }) {
    const [ userList, updateList ] = useState(list);
    const handleEdit = async user => {
        await changeUser(user);
        updateList(await getUsers());
    }
    const handleDelete = async id => {
        await deleteUser(id);
        updateList(await getUsers());
    }

    const handleDeleteAll = async () => {
        await deleteAllUsers();
        updateList(await getUsers());
    }
    const handleCreate = async user => {
        await createUser(user);
        updateList(await getUsers());
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>id</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><b onClick={ handleDeleteAll }> delete all </b></td>
                    </tr>
                {userList && userList.map(el =>  <User
                            key={el.id}
                            user={el}
                            editUser={ handleEdit }
                            deleteUser={ handleDelete }
                        />)
                }
                    <User
                        key={ Math.random() }
                        handleCreate = { handleCreate }
                        isNew={ true }
                        />
                </tbody>
            </table>
        </div>
    );
}
'use client'
import User from "../components/User";
import { useState } from 'react'

export default function UsersList({ list }) {
    const [ userList, updateList ] = useState(list);
    const handleEdit = async user => {
        console.log("Edit user " + user.id, user);
        let result =  await fetch('https://jsonplaceholder.typicode.com/users/' + user.id,
            {
                method: 'PATCH',
                body: JSON.stringify(user)
            })
        console.log(result)
        list = userList.map(el => el.id === user.id ? { ...user } : el);
        updateList(list)
    }
    const handleDelete = id => {
        updateList(userList.filter(el => el.id !== id))
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
                {userList.map(el =>  <User
                            key={el.id}
                            user={el}
                            editUser={ handleEdit }
                            deleteUser={ handleDelete }
                        />)
                }
                </tbody>
            </table>
        </div>
    );
}
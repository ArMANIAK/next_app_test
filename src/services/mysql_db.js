import mysql from 'mysql2/promise';
import config from '../../config/database_config';
import ValidateUser from "@/services/ValidateUser";

const connection = await mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.pass,
    database: config.db_name,
});


export async function GetUsers() {
    try {
        const [results] = await connection.query(
            'SELECT * FROM `users` WHERE `deleted_at` IS NULL'
        );
        console.log(results); // results contains rows returned by server
        return results
    } catch (err) {
        console.log(err);
    }
}

export async function CreateUser(user) {
    let validated = ValidateUser(user)
    try {
        const [results] = await connection.execute(
            'INSERT INTO `users` (`name`, `email`) VALUES (?, ?)', [validated.name, validated.email]
        );
        console.log(results); // results contains rows returned by server
        return results
    } catch (err) {
        console.log(err);
    }
}

export async function ChangeUser(user) {
    let validated = ValidateUser(user)
    try {
        const [results] = await connection.query(
            'UPDATE `users` SET `name` = ?,`email` = ? WHERE `id` = ?', [validated.name, validated.email, validated.id]
        );
        console.log(results); // results contains rows returned by server
        return results
    } catch (err) {
        console.log(err);
    }
}

export async function DeleteUser(id) {
    try {
        const [results] = await connection.query(
            'UPDATE `users` SET `deleted_at` = ? WHERE `id` = ?', [new Date(), id]
        );
        console.log(results); // results contains rows returned by server
        return results
    } catch (err) {
        console.log(err);
    }
}

export async function DeleteAllUsers() {
    try {
        const [results] = await connection.query(
            'UPDATE `users` SET `deleted_at` = ? ', [new Date()]
        );
        console.log(results); // results contains rows returned by server
        return results
    } catch (err) {
        console.log(err);
    }
}
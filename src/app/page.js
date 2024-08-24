import styles from "./page.module.css";
import UsersList from '../components/UsersList';
import { GetUsers, CreateUser, ChangeUser, DeleteUser } from "@/services/mysql_db";

export default async function Home() {

    const getUsers = async () => {
        "use server"
        return await GetUsers();
    }

    let usersList = await getUsers();

     const createUser = async user => {
        'use server';
        await CreateUser(user);
    }

    const changeUser = async user => {
        'use server';
        await ChangeUser(user);
    }
    console.log(usersList);

    const deleteUser = async id => {
        'use server';
        await DeleteUser(id);
    }
  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <UsersList
              list = { await getUsers() }
              getUsers={ getUsers }
              createUser={ createUser }
              changeUser={ changeUser }
              deleteUser={ deleteUser }
          />
      </div>
    </main>
  );
}

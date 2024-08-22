import styles from "./page.module.css";
import UsersList from '../components/UsersList';
import { GetUsers, CreateUser, ChangeUser } from "@/services/mysql_db";

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

  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <UsersList
              list = { await getUsers() }
              getUsers={ getUsers }
              createUser={ createUser }
              changeUser={ changeUser }
          />
      </div>
    </main>
  );
}

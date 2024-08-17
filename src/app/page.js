import styles from "./page.module.css";
import UsersList from '../components/UsersList';

export default async function Home() {
    function getUsers() {
        return fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
    }
    const usersList = await getUsers();
    console.log(usersList);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
          <UsersList list={usersList} />
      </div>
    </main>
  );
}

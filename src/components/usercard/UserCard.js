// styles
import styles from "./UserCard.module.css"

import { Link } from "react-router-dom"


function UserCard({user}) {

  return (
        <Link to={`user/${user.login}`}>
            <div className={styles["user-card"]}>
                <div className={styles["card-image"]}>
                    <img src={user.avatar_url} className="" alt="user" />
                </div>
                <div className={styles["card-info"]}>
                    <p className={styles["user-name"]}>{user.login}</p>
                    <p href={user.url}>View Profile</p>
                </div>
            </div>
        </Link>
    )
}

export default UserCard
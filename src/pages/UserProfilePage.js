// import styles

import styles from "./UserProfilePage.module.css"

import { useParams } from "react-router-dom"
import UserProfileCard from "../components/userprofilecard/UserProfileCard"
import { useFetchUser } from "../hooks/useFetchUser"
import {IoMdArrowBack} from "react-icons/io"
import { Link } from "react-router-dom"



function UserProfilePage() {

  const {nickname} = useParams()

  const { data: user, isPending, error} = useFetchUser(`https://api.github.com/users/${nickname}`)



  return (
    <div className={styles["profile-container"]}>
          {isPending && (<p>Loading...</p>)}
          {error && <p>{error}</p>}
          {user && 
              <>
                <Link to="/"><button className={styles["back-btn"]}><IoMdArrowBack />&nbsp;&nbsp;Back to Users</button></Link>
                <UserProfileCard user={user} />
              </>
          }
        </div>
    )
  }


export default UserProfilePage
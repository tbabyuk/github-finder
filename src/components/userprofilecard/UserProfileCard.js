// import styles
import styles from "./UserProfileCard.module.css"

import {BsPersonCircle, BsPeopleFill, BsGithub} from "react-icons/bs"
import {MdWork} from "react-icons/md"
import {HiLocationMarker} from "react-icons/hi"
import { Fragment } from "react"

function UserProfileCard({user}) {
  return (

    <div className={styles["user-profile-card"]}>
      <div className={styles["card-image"]}>
          <img src={user.avatar_url} className="" alt="user" />
      </div>
      <div className={styles["card-info"]}>
          <p className={styles["user-name"]}><BsPersonCircle />&nbsp;&nbsp;{user.login}</p>
          <p><HiLocationMarker />&nbsp;&nbsp;{user.location ? user.location : "not specified"}</p>
          <p><BsGithub />&nbsp;&nbsp;<a href={user.html_url} target="_blank">Github Url</a></p>
          <p><BsPeopleFill />&nbsp;&nbsp;Followers: {user.followers}</p>
          <p><BsPeopleFill />&nbsp;&nbsp;Following: {user.following}</p>
          <p><MdWork />&nbsp;&nbsp;Repos: {user.public_repos}</p>
      </div>
    </div>
  )
}

export default UserProfileCard
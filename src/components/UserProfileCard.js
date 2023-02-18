// import styles
import "./UserProfileCard.css"

import {BsPersonCircle, BsPeople} from "react-icons/bs"
import {GoLocation} from "react-icons/go"

function UserProfileCard({user}) {
  return (
    <div className="profile-container bg-primary">
        <div className="profile-image"><img src={user.avatar_url} /></div>
        <div className="profile-info">
            <div className="user-login"><BsPersonCircle />&nbsp;&nbsp;{user.login}</div>
            <div className="user-location"><GoLocation />&nbsp;&nbsp;{user.location ? user.location : "not specified"}</div>
            <div className="user-website">Github Url</div>
            <div className="user-followers"><BsPeople />&nbsp;&nbsp;Followers: {user.followers}</div>
            <div className="user-following">Following: {user.following}</div>
            <div className="user-repos">Repos: {user.public_repos}</div>
        </div>
    </div>
  )
}

export default UserProfileCard
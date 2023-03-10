// import styles
import "./UserProfileCard.css"

import {BsPersonCircle, BsPeopleFill, BsGithub} from "react-icons/bs"
import {MdWork} from "react-icons/md"
import {HiLocationMarker} from "react-icons/hi"
import { Fragment } from "react"

function UserProfileCard({user}) {
  return (
    <div className="profile-card">
      <div className="card mb-3 mt-5" style={{maxWidth: "840px"}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={user.avatar_url} className="img-fluid rounded-start" alt="github user photo" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="first-row">
                <h5 className="card-title"><BsPersonCircle />&nbsp;&nbsp;{user.login}</h5>
              </div>
              <div className="second-row">
                <p className="card-text m-0"><HiLocationMarker />&nbsp;&nbsp;Location: {user.location ? user.location : "not specified"}</p>
                <p className="card-text m-0"><BsGithub />&nbsp;&nbsp;<a href={user.html_url} target="_blank">Github Url</a></p>
              </div>
              <div className="third-row">
                <p className="card-text m-0"><BsPeopleFill />&nbsp;&nbsp;Followers: {user.followers}</p>
                <p className="card-text m-0"><BsPeopleFill />&nbsp;&nbsp;Following: {user.following}</p>
                <p className="card-text m-0"><MdWork />&nbsp;&nbsp;Repos: {user.public_repos}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserProfileCard
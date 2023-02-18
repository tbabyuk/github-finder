// import styles
import "./UserProfilePage.css"

import { useParams } from "react-router-dom"
import UserProfileCard from "../../components/UserProfileCard"
import { useFetchUser } from "../../hooks/useFetchUser"



function UserProfilePage() {

  const {nickname} = useParams()

  const { data: user, isPending, error} = useFetchUser(`https://api.github.com/users/${nickname}`)



  return (
    <div className="container text-center mt-5">
      <div className="row">
        <div className="col">
          {isPending && (<p>Loading...</p>)}
          {error && <p>{error}</p>}
          {user && <UserProfileCard user={user} />}
        </div>
      </div>
    </div>
    )
  }

export default UserProfilePage
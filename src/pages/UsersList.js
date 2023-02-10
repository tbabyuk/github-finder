// import styles
import UserCard from "../components/UserCard"
import "./UsersList.css"
import { useEffect, useState } from "react"
import SearchBar from "../components/SearchBar"


function UsersList() {

    const [users, setUsers] = useState([])
    const [searchQuery, setSearchQuery] = useState("")


    if(searchQuery) {
        console.log("here:", searchQuery)
    }


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch(`https://api.github.com/search/users?q=${searchQuery}`)
                const data = await res.json()
                setUsers(data.items)
            } catch(error) {
                    console.log(error.message)
            }
        }

        fetchUsers()
    }, [searchQuery])

  return (
    <>
        <SearchBar setSearchQuery={setSearchQuery} />

        <div className="container text-center mt-5 d-grid users-list">
            {users && 
                users.map((user) => {
                    return <UserCard key={user.id} user={user}/>
                })  
            }      
        </div>
    </>
  )
}

export default UsersList
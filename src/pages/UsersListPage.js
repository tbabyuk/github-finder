import SearchBar from "../components/searchbar/SearchBar"
import UserCard from "../components/usercard/UserCard"
import { useState } from "react"
import { useFetchUsers } from "../hooks/useFetchUsers"


function UsersListPage() {

    const [searchQuery, setSearchQuery] = useState("")

    const pastQuery = localStorage.getItem("query")

    const { data, isPending, error} = useFetchUsers(searchQuery ? `https://api.github.com/search/users?q=${searchQuery}` : `https://api.github.com/search/users?q=${pastQuery}` )



  return (
    <>
        <SearchBar setSearchQuery={setSearchQuery} />

        <div style={cardsContainer}>
            {isPending && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data && 
                data.map((user) => {
                    return <UserCard key={user.id} user={user}/>
                })  
            } 
        </div>
    </>
  )
}

const cardsContainer = {
    margin: "50px 70px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "40px"
}

export default UsersListPage
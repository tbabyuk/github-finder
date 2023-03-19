// import styles
import styles from "./SearchBar.module.css"

import { useState } from 'react'

function SearchBar({setSearchQuery}) {

    const [query, setQuery] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        setSearchQuery(query)
        localStorage.setItem("query", query)
        setQuery("")
    }


  return (

    <div className={styles["search-bar"]}>
        <form onSubmit={handleSubmit}>
            <input
                placeholder="search github user" 
                onChange={(e) => setQuery(e.target.value)}
                value={query}
                required            
            />
            <button type="submit">Search</button>
        </form>
    </div>
 
    )
}

export default SearchBar
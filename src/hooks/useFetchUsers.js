import {useState, useEffect} from "react"



export const useFetchUsers = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {

        const fetchUsers = async () => {

            try {
                const res = await fetch(url)
                const users = await res.json()
                setIsPending(false)
                setData(users.items)
                setError(null)
                
            } catch(err) {
                setIsPending(false)
                setError("could not fetch data")
            }
        }

        fetchUsers()

    }, [url])

  return { data, isPending, error }
}

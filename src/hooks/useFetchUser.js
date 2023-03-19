import {useState, useEffect} from "react"



export const useFetchUser = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    console.log(data)

    useEffect(() => {

        const fetchUsers = async () => {

            try {
                const res = await fetch(url)
                const user = await res.json()
                setIsPending(false)
                setData(user)
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

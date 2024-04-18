import { Navbar, Dropdown, Avatar } from "flowbite-react"
import { useEffect, useState } from 'react'
import {useSelector} from 'react-redux' // 1st line

const Header = () => {
    const user = useSelector(state => state.user.currentUser) // 2nd line
    console.log(user);
    const [isLoggedin, setIsLoggedin] = useState(false)

    useEffect(() => {
        if (user) {
            setIsLoggedin(true)
        }
    }, [user])

    const handleSignOut = () => {
        // sign out api call
        setIsLoggedin(false)
    }

    return (
        <>
          header 
        </>
    )
}

export { Header }
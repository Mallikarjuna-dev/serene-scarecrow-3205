import React, { useEffect } from 'react'
import FocusLock from "react-focus-lock"
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverArrow,
    Input,
    Button,
    useDisclosure,
    Box,
    Link,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/AuthReducer/action'



const Login = () => {
    const [load, setload] = useState(false)
    const dispatch = useDispatch()
    const isAuth = useSelector((store) => store.isAuth)
    const sigupdata = useSelector((store) => store.userdata)
    //console.log(isAuth)

    const logout = () => {
        setload(true)
        dispatch(login({}, false))
    }
    useEffect(() => {

        if (isAuth) {
            onClose()
            setload(false)
        }

    }, [isAuth, load])




    const logcheck = (data) => {
        setload(true)
        // console.log(isAuth)
        // console.log(sigupdata)
        // console.log(load, "load")
        const { email, password } = data
        setTimeout(() => {


            let cc = false
            if (data) {
                sigupdata.filter((ele) => {
                    if (email == ele.email &&
                        password == ele.password) {
                        cc = true

                        return
                    }
                    else {
                        cc = false
                    }

                })
                if (cc) {
                    dispatch(login({ email, password }, true))
                    setload(false)
                }
                else {
                    dispatch(login({ email, password }, false))
                    setload(false)
                }
            }
        }, 1000);
    }

    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const { onOpen, onClose, isOpen } = useDisclosure()
    return (
        <div >
            <Popover
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                placement='top-end'
                closeOnBlur={false}

            >   {isAuth ? <Button variant="link" isLoading={load} onClick={logout} >Sign Out</Button> :
                <PopoverTrigger>


                    <Button onClick={() => setload(false)} variant={"link"} fontSize={"15px"} fontWeight={"400"}>Signin</Button>
                </PopoverTrigger>}
                <PopoverContent p={1}>
                    <FocusLock returnFocus persistentFocus={false}>
                        <PopoverArrow />
                        <Box p={"10px"} alignItems="center">
                            User Id
                            <Input type={"email"} margin={"5px"} variant='outline' placeholder='Enter your email' value={email
                            } onChange={(e) => setemail(e.target.value)} />
                            <div style={{ textAlign: "right" }} ><Link color={"black"} >Forgot Password</Link></div>

                            <h3> Password</h3>

                            <Input type={"password"} margin={"5px"} variant='outline' placeholder='Enter your Password'
                                value={password} onChange={(e) =>
                                    setpassword(e.target.value)} />

                            <Button isLoading={load} mt={"10px"} width={"100%"} colorScheme="gray" bg="black" color="white" onClick={() => {
                                console.log(load, "load")
                                logcheck({ email, password })
                                setemail("")
                                setpassword("")

                            }}>Sign In</Button></Box>
                    </FocusLock>
                </PopoverContent>
            </Popover>

        </div>
    )
}

export default Login
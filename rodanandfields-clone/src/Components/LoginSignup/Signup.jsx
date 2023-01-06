import {Button, Heading, Input, PinInput, PinInputField } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signup } from '../../Redux/AuthReducer/action'

const Signup = () => {
    const Auth = useSelector((store) => store.isAuth)
    const data = useSelector((store) => store.userdata)
    const dispatch = useDispatch()
    const [otp, setotp] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [repass, setrepass] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (otp == "1234" && password == repass) {
            dispatch(signup({ email, password }))
            console.log(data, Auth)
        }
        else {
            if (password != repass) {
                alert("Enter same password in both fields")
            }
            if (otp != "1234") {
                alert("invalid OTP")
            }
        }
    }


    return (
        <div style={{ padding: "1rem 0.1rem", textAlign: "center", margin: "auto", width: "40%" }} >
            <Heading>Create an account</Heading>
            <form>
                <Input value={email} onChange={(e) => setemail(e.target.value)} isRequired m={"0.5rem 0"} placeholder='email address' />
                <Input value={password} onChange={(e) => setpassword(e.target.value)} isRequired m={"0.5rem 0"} placeholder='enter your password' />
                <Input value={repass} onChange={(e) => setrepass(e.target.value)} isRequired m={"0.5rem 0"} placeholder='re enter your password' />
                Please Enter Your OTP<br></br>
                <PinInput value={otp} onChange={(e) => setotp(e)} m={"0.5rem 0"} otp>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
                <br></br>
                <Button m={"0.2rem 1rem"} onClick={() => alert("1234")} >Generate OTP</Button>
                <br></br>
                <Button type='submit' onClick={(e) => handleSubmit(e)} >Sign Up</Button>
            </form>
        </div >
    )
}

export default Signup
import { Alert, Button, Input, PinInput, PinInputField } from '@chakra-ui/react'
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
        <div style={{ width: "20rem", padding: "1rem 2rem", textAlign: "center", margin: "auto", border: "1px solid black" }} >
            <form>
                <Input value={email} onChange={(e) => setemail(e.target.value)} isRequired m={"0.5rem 0"} placeholder='email' />
                <Input value={password} onChange={(e) => setpassword(e.target.value)} isRequired m={"0.5rem 0"} placeholder='password' />
                <Input value={repass} onChange={(e) => setrepass(e.target.value)} isRequired m={"0.5rem 0"} placeholder='re enter password' />

                <PinInput value={otp} onChange={(e) => setotp(e)} m={"0.5rem 0"} otp>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
                <Button m={"0.2rem 1rem"} onClick={() => alert("1234")} >Generate OTP</Button>
                <Button type='submit' onClick={(e) => handleSubmit(e)} >Sign Up</Button>
            </form>
        </div>
    )
}

export default Signup
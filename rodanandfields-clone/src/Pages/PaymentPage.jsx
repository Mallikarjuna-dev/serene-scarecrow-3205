import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const PaymentPage = () => {
    const [succ, setsucc] = useState(false)
    const handlepay = () => {
        alert("payment successfull")
        setsucc(true)
    }
    const navigate = useNavigate()
    return (
        <div style={{ width: "100vh", border: "2px solid black", margin: "auto", marginTop: "100px", padding: "3rem", borderRadius: "10px" }} >
            {!succ ? <><img src="hosted-invoice-page.46a27a6f0e9fee330cde9bdb884dce68.png" alt="" />
                <Button onClick={handlepay} width={"100%"} >Pay</Button></> : <>
                <h1 style={{ fontSize: "3rem" }}>Order Placed!</h1>
                <h1 style={{ fontSize: "1.5rem" }}>Happy Shopping!</h1>
                <h2 style={{ fontSize: "1.5rem" }}>Thank You!</h2>
                <Button onClick={() => navigate("/")} >Home Page</Button>
            </>
            }
        </div>
    )
}

export default PaymentPage
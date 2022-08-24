import React from 'react'
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
} from '@chakra-ui/react'
import { useState } from 'react'

const Login = () => {
    const [text, settext] = useState("")
    const { onOpen, onClose, isOpen } = useDisclosure()
    return (
        <div>
            <Popover
                isOpen={isOpen}
                onOpen={onOpen}
                onClose={onClose}
                placement='top-end'
                closeOnBlur={false}
            >
                <PopoverTrigger>
                    <Button variant='link' >Sing In</Button>
                </PopoverTrigger>
                <PopoverContent p={1}>
                    <FocusLock returnFocus persistentFocus={false}>
                        <PopoverArrow />
                        <Box p={"10px"} alignItems="center">
                            User Id
                            <Input margin={"5px"} variant='outline' placeholder='Search on DNA...' value={text} onChange={(e) => settext(e.target.value)} />
                            Password
                            <Input margin={"5px"} variant='outline' placeholder='Search on DNA...' value={text} onChange={(e) => settext(e.target.value)} />
                            <Button mt={"10px"} width={"100%"} colorScheme="gray" bg="black" color="white" onClick={() => {
                                {
                                    text &&


                                        onClose()
                                    settext("")
                                }


                            }}>GO</Button></Box>
                    </FocusLock>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default Login
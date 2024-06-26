import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import { Container } from 'postcss';
function Square(props) {
    return (
        <>

                <Box component="div"
                    onClick={props.onClick}
                sx={{
                    display:"flex",
                    alignItems:"center",
                    justifyContent:"center",
                    border: "1px solid black",
                    height: "100px",
                    width: 100,
                    border:"3px solid white"
                }}> 
                    <Typography component="h5" sx={{color:"white"}}>
                        {props.value}
                    </Typography>
                </Box>





        </>
    )
}

export default Square

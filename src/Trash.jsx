import React, { useState } from 'react';
import Square from './Square';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ClearIcon from '@mui/icons-material/Clear';
import { FastForward, Tune } from '@mui/icons-material';

function Board() {
    const [state, setstate] = useState(Array(9).fill(null));
    const [isXtrun, setisXtrun] = useState(false);

    const checkwinner = () => {
        const winnerLogic = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let logic of winnerLogic) {
            const [a, b, c] = logic;
            if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
                console.log("Winner detected!");
                return true;
            }
        }
        return false


    }
    const handleclick = (index) => {
        const copystate = [...state]
        copystate[index] = isXtrun ? <RadioButtonUncheckedIcon /> : <ClearIcon />
        setstate(copystate)
        setisXtrun(!isXtrun)
        console.log(checkwinner());
    }
    return (
        <>
            <Box
                component="section"
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                    margin: "20px"
                }} >
                {checkwinner() ? (
                    <Typography variant="h4">Someone Won</Typography>
                ) : (
                    <>
                        <Box component="div" sx={{ display: "flex" }}>
                            <Square value={state[0]} onClick={() => handleclick(0)} />
                            <Square value={state[1]} onClick={() => handleclick(1)} />
                            <Square value={state[2]} onClick={() => handleclick(2)} />
                        </Box>
                        <Box component="div" sx={{ display: "flex" }}>
                            <Square value={state[3]} onClick={() => handleclick(3)} />
                            <Square value={state[4]} onClick={() => handleclick(4)} />
                            <Square value={state[5]} onClick={() => handleclick(5)} />
                        </Box>
                        <Box component="div" sx={{ display: "flex" }}>
                            <Square value={state[6]} onClick={() => handleclick(6)} />
                            <Square value={state[7]} onClick={() => handleclick(7)} />
                            <Square value={state[8]} onClick={() => handleclick(8)} />
                        </Box>
                    </>
                )}
            </Box>
        </>
    );
}

export default Board;

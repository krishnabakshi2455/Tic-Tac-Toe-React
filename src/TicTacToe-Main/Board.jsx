import React, { useState } from 'react';
import Square from './Square';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ClearIcon from '@mui/icons-material/Clear';
import { FastForward, Tune } from '@mui/icons-material';

function Board() {
    const [state, setState] = useState(Array(9).fill(null));
    const [isXTurn, setIsXTurn] = useState(true);

    const checkWinner = () => {
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
                return state[a];
            }
        }

        return false;
    };

    const isWinner = checkWinner();

    const handleClick = (index) => {
        if (state[index] !== null) {
            return;
        }
        const copyState = [...state];
        copyState[index] = isXTurn ? "X" : "O";
        setState(copyState);
        setIsXTurn(!isXTurn);
    };

    const handleReset = () => {
        setState(Array(9).fill(null));
    };


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
                {isWinner ? (
                    <Typography variant="h4">{isWinner} Won the Game
                        <Button variant="contained" sx={{backgroundColor:"yellow",color:"black",":hover":{backgroundColor:"darkslategrey"}}}
                            onClick={handleReset}
                        >Play Again</Button>
                    </Typography>
                ) : (
                    <>
                    <Typography>Player {isXTurn?"x":"o"} Please Move</Typography>
                        <Box component="div" sx={{ display: "flex" }}>
                            <Square value={state[0]} onClick={() => handleClick(0)} />
                            <Square value={state[1]} onClick={() => handleClick(1)} />
                            <Square value={state[2]} onClick={() => handleClick(2)} />
                        </Box>
                        <Box component="div" sx={{ display: "flex" }}>
                            <Square value={state[3]} onClick={() => handleClick(3)} />
                            <Square value={state[4]} onClick={() => handleClick(4)} />
                            <Square value={state[5]} onClick={() => handleClick(5)} />
                        </Box>
                        <Box component="div" sx={{ display: "flex" }}>
                            <Square value={state[6]} onClick={() => handleClick(6)} />
                            <Square value={state[7]} onClick={() => handleClick(7)} />
                            <Square value={state[8]} onClick={() => handleClick(8)} />
                        </Box>
                    </>
                )}
            </Box>
        </>
    );
}

export default Board;

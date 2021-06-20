import React, { useState } from 'react';
import { Box, Hintbrief, HintWord, Attempt } from './Styles';
import randomMovies from './GuessWord';
import GuessBar from './GuessBar';
// import PopUp from './PopUp';



let randomItem = randomMovies[Math.floor(Math.random() * randomMovies.length)];
let SelectedMovie = randomItem.Movie;
const Game = (props) => {

    const [GamerInput, setGameInput] = useState("");
    const [NumberOfAttempt, setNumberOfAttempt] = useState(4);
    // const [isOpen, setIsOpen] = useState(false);

    // const togglePopup = () => {
    //     setIsOpen(!isOpen);
    // }

    const Matched = (answer) => {

        if (answer === SelectedMovie) {
            return alert("YOU WON")

        } else {
            if (NumberOfAttempt - 1 === 0) {
                return alert("YOU LOSE")
            } else {
                return setNumberOfAttempt(NumberOfAttempt - 1);
            }
        }
    }

    return (
        <Box>
            <h2>
                <span>G</span>uess <span>T</span>he <span>M</span>ovie <span>?</span>
            </h2>
            <Hintbrief><HintWord>Hint:</HintWord><p>{randomItem.Hint}</p> </Hintbrief>

            <GuessBar setGameInput={setGameInput} />

            <Attempt >Attempts Left: {NumberOfAttempt} </Attempt>
            <div>
                <button className="button" onClick={() => Matched(GamerInput)}><h1 className="InButton">Launch</h1></button>
            </div>
        </Box>
    );

};

export default Game;

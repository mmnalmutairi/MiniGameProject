import React from 'react';
import { Header, Box, Highlighted, DBox, Hintbrief, HintWord } from './Styles';
import randomMovies from './GuessWord';


const Hangman = () => {
    return (
        <Box>
            <Header>
                <Highlighted>G</Highlighted>uess <Highlighted>T</Highlighted>he <Highlighted>M</Highlighted>ovie ?
            </Header>
            <Hintbrief><HintWord>Hint:</HintWord> {randomMovies[15].Hint}</Hintbrief>
            <DBox placeholder="Enter your guess in here!"></DBox>
        </Box>
    );
};

export default Hangman;

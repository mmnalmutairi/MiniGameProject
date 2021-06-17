import { DBox } from './Styles';

const GuessBar = (props) => {

    return (
        <DBox placeholder="Enter your guess in here!" onChange={event => props.setGameInput(event.target.value)} />
    );
}

export default GuessBar;
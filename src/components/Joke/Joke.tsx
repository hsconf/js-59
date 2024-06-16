import {useState} from "react";
import JokeItem from "./JokeItem";

interface Props {
    joke: string;
}

const Joke = () => {

    const [jokes, setJokes] = useState<Props[]>([]);
    const [btn, setBtn] = useState('New Joke');

    const url = 'https://api.chucknorris.io/jokes/random';

    const getJoke = async () => {
        return fetch(url).then((response) => response.json());
    }
    const drawJoke = async () => {
        setBtn('Wait...');
        const res = await getJoke();
        if (res) {
            const joke = res.value
            setJokes(prev => [...prev, { joke }])
        }
        setBtn('New Joke');
    }

    return (
        <div>
            <button onClick={drawJoke}>{btn}</button>
            {jokes.map(item => (
                <JokeItem key={Math.random()} joke={item.joke} />
            ))}
        </div>
    );
};

export default Joke;
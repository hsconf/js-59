
import './App.css'
import Note from "./components/Note/Note";
import Joke from "./components/Joke/Joke";
import {useState} from "react";

const App = () => {
    const [draw, setDraw] = useState('note');
    return (
        <>
            <div style={{position: 'absolute', top: 0, right: '50%'}}>
                <button onClick={() => setDraw(draw === 'note' ? 'joke' : 'note')}>
                    {draw === 'note' ? 'Joke Generator' : 'Movies note'}
                </button>
            </div>
            {draw === 'note' ? <Note /> : <Joke/>}
        </>
    );
};

export default App

import {ChangeEvent, FormEvent, useState} from "react";
import './Note.css'
import NoteItem from "./NoteItem";
import type { Note } from './type';

const Note = () => {

    const [movies, setMovies] = useState<Note[]>([
    ]);
    const [value, setValue] = useState('');




    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }

    const formSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (value.length > 0) {
            setMovies([...movies, {id: Math.random().toString(), text: value}])
        }
        setValue('')
    }

    const editNote = (event: ChangeEvent<HTMLInputElement>, id: string) => {
        const newText = event.target.value;
        setMovies((prevState) => {
            return prevState.map((item) => {
                if (item.id === id) {
                    return { ...item, text: newText };
                }
                return item;
            });
        });
    };

    const delNote = (id: string) => {
        setMovies(prevState => {
            return prevState.filter(item => item.id !== id);
        })
    }

    return (
        <div className="note">
            <form className="note-form" onSubmit={formSubmitHandler}>
                <input type="text" className="note-input" placeholder="Enter text here" value={value} onChange={handleChange} required/>
                <button className="note-btn" type="submit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-send" viewBox="0 0 16 16">
                        <path
                            d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>
                    </svg>
                </button>
            </form>
            <div className="note-list">
                <h2>Movies</h2>
                {movies.map(item => (
                    <NoteItem key={item.id} text={item.text} handleChange={(event) => editNote(event, item.id)} DelNote={() => delNote(item.id)} />
                ))}
            </div>
        </div>
    );
};

export default Note;
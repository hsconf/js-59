import React from "react";

interface Props {
    joke: string;
}

const JokeItem: React.FC<Props> = ({joke}) => {
    return (
        <p style={{fontSize: '18px', textShadow: '0 0 1px'}}>
            {joke}
        </p>
    );
};

export default JokeItem;
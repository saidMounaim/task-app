import React from 'react'
import { useFetch } from '../hooks';

const Joke = () => {

    const joke = useFetch("https://official-joke-api.appspot.com/jokes/random", {});

    return (
        <div>
            <h3>JOKE OF THE SESSION</h3>
            <p className="joke-setup" >{joke.setup}</p>
            <p className="joke-punch" ><em>{joke.punchline}</em></p>
        </div>
    )
}

export default Joke

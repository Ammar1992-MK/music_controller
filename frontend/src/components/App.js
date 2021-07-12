import React from 'react';
import { render } from 'react-dom';


export const App = () => {

    return (
        <h1>Hello React & Django</h1>
    )

}

const div = document.getElementById("app");
render(<App />, div)
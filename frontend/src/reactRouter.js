import React, { useState } from 'react';

function App() {
    const [comp, setComp] = useState(0);

    return (
        <>
            <header>
                <button onClick={() => setComp()}>Home</button>
                <button onClick={() => setComp()}>About</button>
                <button onClick={() => setComp()}>Users</button>
            </header>
            <hr />
            <main children={comp}/>
        </>
    );
}

export default App;
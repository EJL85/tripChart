import React from 'react';
import Header from "./Header";
import TripLeft from './TripLeft';

class App extends React.Component {
    render() {



        return(
            <div>
                <Header />
                <TripLeft />
            </div>
        );
    }
}

export default App;
import React from 'react';
import Header from "./Header";
import TripLeft from './TripLeft';
import NavBar from './NavBar';
import Picture from './Picture';
import Shows from './Shows';
import Movies from './Movies';

class App extends React.Component {

    state = {
        showPicture: {
            hidden: 'hidden'
        },
        showTripLeft: {
            hidden: 'hidden'
        },
        showShows: {
            hidden: 'hidden'
        },
        showMovies: {
            hidden: 'hidden'
        }
    };



    hiddenSwitcher = (input) => {
        this.stateChanger(input);
    };

    stateChanger = (input) => {
        if (this.state[input].hidden == 'hidden') {
            this.setState({[input]: {hidden: ''}});
        } else {
            this.setState({[input]: {hidden: 'hidden'}});
        }
    };

    render() {



        return(
            <div>
                <Header />
                <NavBar hiddenSwitcher={this.hiddenSwitcher} stateChanger={this.stateChanger}/>
                <Picture showPicture={this.state.showPicture.hidden} />
                <TripLeft showTripLeft={this.state.showTripLeft.hidden}/>
                <Shows showShows={this.state.showShows.hidden}/>
                <Movies showMovies={this.state.showMovies.hidden}/>
            </div>
        );
    }
}

export default App;
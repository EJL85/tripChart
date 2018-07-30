import React from 'react';

class NavBar extends React.Component {
    render() {
        return(
            <div className="navBar">
                <button onClick={() => this.props.hiddenSwitcher('showPicture')}>Picture</button>
                <button onClick={() => this.props.hiddenSwitcher('showTripLeft')}>Time to Trip</button>
                <button onClick={() => this.props.hiddenSwitcher('showShows')}>Shows</button>
                <button onClick={() => this.props.hiddenSwitcher('showMovies')}>Movies</button>
            </div>
        );
    }
}

export default NavBar;
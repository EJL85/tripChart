import React from 'react';

class Header extends React.Component {
    render() {
        return(
            <div className="header">
            <h1>o/</h1>
                <nav>
                    <ul>
                        <li><button>Picture</button></li>
                        <li><button>Time Until Trip</button></li>
                        <li><button>Shows</button></li>
                        <li><button>Movies</button></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;
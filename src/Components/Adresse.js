import React, { Component } from 'react';
class Adresse extends Component {
    state = { adresse: "Sfax Route Lafrane" }

    render() {
        const handleClick = () => {
            const newAdress = prompt(('enter your address'))
            this.setState({ adresse: newAdress })
        }
        return (
            <div>
                <h1> this is my address: {this.state.adresse}</h1>
                <button onClick={handleClick}> Change Adress</button>
            </div>);
    }
}

export default Adresse;
© 2021 GitHub, Inc.
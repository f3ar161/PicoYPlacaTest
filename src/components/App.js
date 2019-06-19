import './PicoPlaca.css';
import React from 'react';
import PicoPlaca from './PicoPlaca';
import ModalConfirmation from "./ModalConfirmation";

class App extends React.Component {
    state = {
        isOpen: false,
        ride: false
    };
    onSearchSubmit = (validation)=>{
        this.setState({isOpen: true, ride: validation});
    };

    render() {
        return (<div className="ui container" style={{ marginTop: '10px'}}>
                <PicoPlaca onSubmit={this.onSearchSubmit}/>
                <ModalConfirmation className="modalConfirm" show={this.state.isOpen} ride={this.state.ride}/>
            </div>
        );
    }
}

export default App;
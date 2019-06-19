import './PicoPlaca.css';
import React from 'react';

const ModalConfirmation = (props) =>{
        const ride = props.ride ? 'can travel' : 'can not travel';
        if(!props.show) {
            return null;
        }
        return (
            <div className="ui segment">
                <h3>Your vehicle {ride}.</h3>
            </div>
        );
};

export default ModalConfirmation;
import './PicoPlaca.css';
import React from 'react';
import ValidationPicoPlaca from './ValidationPicoPlaca';

class PicoPlaca extends React.Component {
    state = {
        licensePlateNumber: '',
            dateNum: '',
            timeNum: '',
        formErrors:{
            licensePlateNumber:'',
            dateNum:'',
            timeNum:''
        }
    };

    onFormSubmit = (event) =>{
        event.preventDefault();
        if (formValid(this.state)){
            const validation = ValidationPicoPlaca.ValidationPicoPlaca (this.state.licensePlateNumber,this.state.dateNum,this.state.timeNum);
            this.props.onSubmit(validation);
            //this.setState({licensePlateNumber: '', dateNum: '', timeNum:''});
        }else {
            console.error ("Form invalid");
        }
    };

    handleChange =  e =>{
        e.preventDefault();
        const {name,value} = e.target;
        let formErrors = this.state.formErrors;

        switch (name) {
            case "licensePlateNumber":
                formErrors.licensePlateNumber = plateNumber.test(value) &&
                value.length > 0 ? '':"Invalid license plate number";
                break;
            case "dateNum":
                formErrors.dateNum = value.length > 0 ? '': "Select a valid date";
                break;
            case "timeNum":
                formErrors.timeNum = value.length > 0 ? '':"Select a valid time";
                break;
            default: break;
        }
        this.setState({formErrors, [name]: value});
    };

    render() {
        const {formErrors}= this.state;
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="licensePlateNumberInput">License Plate Number: </label>
                        <input id="licensePlateNumberInput"
                               type="text"
                               name="licensePlateNumber"
                               placeholder="License plate number"
                               onChange={this.handleChange}
                               required/>
                        {formErrors.licensePlateNumber.length>0 &&(
                            <span className="errorMessage">{formErrors.licensePlateNumber}</span>)}
                    </div>
                    <div className="field">
                        <label htmlFor="dateNumInput">Date: </label>
                        <input id="dateNumInput"

                               type="date" dataformatas="yyyy/mm/dd"
                               name="dateNum"
                               onChange={this.handleChange}
                               required/>
                        {formErrors.dateNum.length>0 &&(
                            <span className="errorMessage">{formErrors.dateNum}</span>)}
                    </div>
                    <div className="field">
                        <label htmlFor="timeNumInput">Time</label>
                        <input id="timeNumInput"

                               type="time"
                               name="timeNum"
                               onChange={this.handleChange}
                               required/>
                        {formErrors.timeNum.length>0 &&(
                            <span className="errorMessage">{formErrors.timeNum}</span>)}
                    </div>
                    <button type='submit' className="ui button">Search</button>
                </form>
            </div>
        );
    }
}

const formValid = ({formErrors, ...rest}) =>{
    let valid = true;
    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false)
    });

    Object.values(rest).forEach(val =>{
        (val === '' || val === null) && (valid = false)
    });
    return valid;

};

const plateNumber = RegExp(/^[a-zA-Z]+[-]+[0-9]+$/);

export default PicoPlaca;
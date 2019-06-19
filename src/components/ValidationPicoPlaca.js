const ValidationPicoPlaca = (plateNumber,dateNum, timeNum) => {
    try {
        return validatorDigitsAnd(plateNumber, dateNum, timeNum);
    }
    catch (e) {
        console.log ('Not supported: ' + e.toString());
        return false;
    }
};

const validatorDigitsAnd = (plateNumber,dateNum,timeNum) =>{
    const timeAllow = TimeValidator (timeNum);
    const digit = plateNumber.substr(plateNumber.length - 1);
    const lastDigit = parseInt(digit);
    if (isNaN(lastDigit)) return "Must be digit";
    switch (lastDigit) {
        case 0:
        case 9:
            return (!DaysValitador(dateNum,4) && !timeAllow) || (DaysValitador(dateNum,4) && !timeAllow) || !(DaysValitador(dateNum,4) && timeAllow);
        case 1:
        case 2:
            return (!DaysValitador(dateNum,0) && !timeAllow) || (DaysValitador(dateNum,0) && !timeAllow) || !(DaysValitador(dateNum,0) && timeAllow);
        case 3:
        case 4:
            return (!DaysValitador(dateNum,1) && !timeAllow) || (DaysValitador(dateNum,1) && !timeAllow) || !(DaysValitador(dateNum,1) && timeAllow);
        case 5:
        case 6:
            return (!DaysValitador(dateNum,2) && !timeAllow) || (DaysValitador(dateNum,2) && !timeAllow) || !(DaysValitador(dateNum,2) && timeAllow);
        case 7:
        case 8:
            return (!DaysValitador(dateNum,3) && !timeAllow) || (DaysValitador(dateNum,3) && !timeAllow) || !(DaysValitador(dateNum,3) && timeAllow);
        default: return true;
    }
};

const DaysValitador = (dateNum,dayChecker) =>{
    const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado','Domingo'];
    const d = new Date(dateNum);
    return (days[d.getDay()] === days[dayChecker]);
};

const TimeValidator = (timeNum) =>{
    const startTimeMorning = setNewTime('07:00');
    const endTimeMorning  = setNewTime('09:30');
    const startTimeAfternoon = setNewTime('16:00');
    const endTimeAfternoon = setNewTime('19:30');
    const currentTimeUser = setNewTime(timeNum);
    return ((currentTimeUser >= startTimeMorning && currentTimeUser <= endTimeMorning)||(currentTimeUser >= startTimeAfternoon && currentTimeUser <= endTimeAfternoon));
};

const setNewTime = (tempTime) => {
    let time = new Date();
    time.setHours(tempTime.split(":")[0]);
    time.setMinutes(tempTime.split(":")[1]);
    time.setSeconds(0);
    return time.getTime();
};

export default { ValidationPicoPlaca, validatorDigitsAnd, DaysValitador, TimeValidator };
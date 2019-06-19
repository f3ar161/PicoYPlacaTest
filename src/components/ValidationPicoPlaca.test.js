import ValidationPicoPlaca from './ValidationPicoPlaca';

//testing license plate number date and time
test('Evaluate validatorDigitsAnd', () => {
    //during the whole week
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-17','08:30')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-18','10:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-19','09:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-20','12:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-21','16:31')).toBe(false);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-22','16:35')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-23','20:31')).toBe(true);
    //during the day
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-21','08:30')).toBe(false);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-21','10:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-21','09:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-21','12:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-21','16:31')).toBe(false);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-21','16:35')).toBe(false);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-520', '2019-06-21','20:31')).toBe(true);
    //during the day
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-521', '2019-06-17','07:30')).toBe(false);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-521', '2019-06-17','09:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-521', '2019-06-17','10:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-521', '2019-06-17','11:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-521', '2019-06-17','12:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-521', '2019-06-17','15:35')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-521', '2019-06-17','17:31')).toBe(false);
    //during the day
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-522', '2019-06-17','07:30')).toBe(false);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-522', '2019-06-17','09:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-522', '2019-06-17','10:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-522', '2019-06-17','11:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-522', '2019-06-17','12:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-522', '2019-06-17','15:35')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-522', '2019-06-17','17:31')).toBe(false);
    //during the day
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-523', '2019-06-17','07:30')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-523', '2019-06-17','09:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-523', '2019-06-17','10:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-523', '2019-06-17','11:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-523', '2019-06-17','12:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-523', '2019-06-17','15:35')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-523', '2019-06-17','17:31')).toBe(true);
    //during the day
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-524', '2019-06-17','07:30')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-524', '2019-06-17','09:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-524', '2019-06-17','10:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-524', '2019-06-17','11:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-524', '2019-06-17','12:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-524', '2019-06-17','15:35')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-524', '2019-06-17','17:31')).toBe(true);
    //during the day
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-525', '2019-06-19','06:30')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-525', '2019-06-19','09:30')).toBe(false);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-525', '2019-06-19','10:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-525', '2019-06-19','11:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-525', '2019-06-19','12:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-525', '2019-06-19','15:35')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-525', '2019-06-19','18:31')).toBe(false);
    //during the day
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-526', '2019-06-19','08:30')).toBe(false);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-526', '2019-06-19','09:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-526', '2019-06-19','10:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-526', '2019-06-19','11:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-526', '2019-06-19','12:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-526', '2019-06-19','15:35')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-526', '2019-06-19','17:31')).toBe(false);
    //during the day
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-527', '2019-06-20','09:37')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-527', '2019-06-20','09:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-527', '2019-06-20','10:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-527', '2019-06-20','11:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-527', '2019-06-20','13:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-527', '2019-06-20','14:35')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-527', '2019-06-20','19:29')).toBe(false);
    //during the day
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-528', '2019-06-21','07:30')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-528', '2019-06-21','09:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-528', '2019-06-21','10:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-528', '2019-06-21','11:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-528', '2019-06-21','12:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-528', '2019-06-21','15:35')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-528', '2019-06-21','17:31')).toBe(true);
    //during the day
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-529', '2019-06-22','05:30')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-529', '2019-06-22','06:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-529', '2019-06-22','07:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-529', '2019-06-22','08:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-529', '2019-06-22','09:31')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-529', '2019-06-28','10:00')).toBe(true);
    expect(ValidationPicoPlaca.validatorDigitsAnd('XBT-529', '2019-06-28','16:56')).toBe(false);
});

//testing days validator function
test('Evaluate DaysValitador', () => {
    expect(ValidationPicoPlaca.DaysValitador('2019-06-17', 0)).toBe(true);
    expect(ValidationPicoPlaca.DaysValitador('2019-06-18', 1)).toBe(true);
    expect(ValidationPicoPlaca.DaysValitador('2019-06-19', 2)).toBe(true);
    expect(ValidationPicoPlaca.DaysValitador('2019-06-20', 3)).toBe(true);
    expect(ValidationPicoPlaca.DaysValitador('2019-06-21', 4)).toBe(true);
    expect(ValidationPicoPlaca.DaysValitador('2019-06-22', 5)).toBe(true);
    expect(ValidationPicoPlaca.DaysValitador('2019-06-23', 6)).toBe(true);
    expect(ValidationPicoPlaca.DaysValitador('2019-06-25', 6)).toBe(false);
});
test('Evaluate TimeValidator', () => {
    expect(ValidationPicoPlaca.TimeValidator('04:00')).toBe(false);
    expect(ValidationPicoPlaca.TimeValidator('05:00')).toBe(false);
    expect(ValidationPicoPlaca.TimeValidator('07:00')).toBe(true);
    expect(ValidationPicoPlaca.TimeValidator('07:05')).toBe(true);
    expect(ValidationPicoPlaca.TimeValidator('08:20')).toBe(true);
    expect(ValidationPicoPlaca.TimeValidator('09:30')).toBe(true);
    expect(ValidationPicoPlaca.TimeValidator('09:31')).toBe(false);
    expect(ValidationPicoPlaca.TimeValidator('12:00')).toBe(false);
    expect(ValidationPicoPlaca.TimeValidator('13:00')).toBe(false);
    expect(ValidationPicoPlaca.TimeValidator('14:00')).toBe(false);
    expect(ValidationPicoPlaca.TimeValidator('15:00')).toBe(false);
    expect(ValidationPicoPlaca.TimeValidator('16:00')).toBe(true);
    expect(ValidationPicoPlaca.TimeValidator('17:00')).toBe(true);
    expect(ValidationPicoPlaca.TimeValidator('18:00')).toBe(true);
    expect(ValidationPicoPlaca.TimeValidator('19:00')).toBe(true);
    expect(ValidationPicoPlaca.TimeValidator('20:00')).toBe(false);
    expect(ValidationPicoPlaca.TimeValidator('23:00')).toBe(false);
});


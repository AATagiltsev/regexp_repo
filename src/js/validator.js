export default class Validator {
    static checks = [
        /^[A-Za-z0-9_-]+$/,
        /^[^0-9_-]/,
        /[^0-9_-]$/,
        /^(?:(?!\d{4}).)*$/
    ];

    validateUsername(name) {
        return Validator.checks.every((check) => check.test(name));
    }

    formatPhoneNumber(value) {
        let sValue = value.toString();
        let aValue = sValue.match(/(\+?\d*)/g).filter((el) => el);
        if (!aValue[0].includes('+')) {
            aValue[0] = aValue[0].replace(/(7|8)/, '+7');
        }
        return aValue.join('');
    }
}
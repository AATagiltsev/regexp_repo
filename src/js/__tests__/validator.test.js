import Validator from "../validator";

test('validateUsername', () => {
    expect(new Validator().validateUsername('Alexander')).toBe(true);
});

test('notValidateUsername', () => {
    expect(new Validator().validateUsername('88alex05')).toBe(false);
});

test('formatPhoneNumber', () => {
    expect(new Validator().formatPhoneNumber("8 (927) 000-00-00")).toBe("+79270000000");
});

test('formatPhoneNumber', () => {
    expect(new Validator().formatPhoneNumber(89270000000)).toBe("+79270000000");
});

test('formatPhoneNumber', () => {
    expect(new Validator().formatPhoneNumber("+7 960 000 00 00")).toBe("+79600000000");
});

test('formatPhoneNumber', () => {
    expect(new Validator().formatPhoneNumber("+86 000 000 0000")).toBe("+860000000000");
});
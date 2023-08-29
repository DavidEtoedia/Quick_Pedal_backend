"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passwordgenerator_1 = require("./passwordgenerator");
test('successfully generate password', () => {
    jest.spyOn(Math, 'random').mockImplementation(() => {
        return 1234567891011;
    });
    const generate_password = (0, passwordgenerator_1.generatePassword)(5);
    expect(generate_password).toBe('huhc3');
});
//# sourceMappingURL=passwordgenerator.test.js.map
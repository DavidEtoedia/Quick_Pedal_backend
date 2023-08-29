"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generateOtp_util_1 = require("./generateOtp.util");
test('successfully generate otp', () => {
    jest.spyOn(Math, 'floor').mockImplementation(() => {
        return 1234;
    });
    const generate_otp = (0, generateOtp_util_1.generateOtp)();
    expect(generate_otp).toBe(1234);
});
//# sourceMappingURL=generate-otp.test.js.map
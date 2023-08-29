"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reference_generator_util_1 = require("./reference-generator.util");
jest.mock('uuid', () => ({
    v4: jest.fn(() => 'somereference')
}));
test("generate reference", () => {
    const generate_reference = (0, reference_generator_util_1.generateReference)();
    expect(generate_reference).toBe('somereference');
});
//# sourceMappingURL=reference-generator.test.js.map
import { Bridge } from "./bridge";

describe('Bridge testing', () => {
    let bridge: Bridge;
    beforeEach(() => {
        bridge = new Bridge("Bridge", 50, 2000, 250);
    });
    it('Створення екземпляра класу', () => {
        expect(bridge).toBeTruthy;
    });
    it('Створення екземпляра класу з від\'ємною довжиною', () => {
        expect(() => new Bridge("Bridge", 50, 2000, -50)).toThrow(new Error("Length isn`t positive"));
    });
    it('Перевірка методу displayInfo', () => {
        expect(bridge.displayInfo()).toBe("Міст \"Bridge\", що був побудований в 2000, має висоту 50м. та довжину 250 метрів.");
    });
});
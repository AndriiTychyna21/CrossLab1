import { Stadium } from "./stadium";

describe('Stadium testing', () => {
    let stadium: Stadium;
    beforeEach(() => {
        stadium = new Stadium("Stadium", 150, 2000, 2000);
    });
    it('Створення екземпляра класу', () => {
        expect(stadium).toBeTruthy;
    });
    it('Створення екземпляра класу з від\'ємною кількістю місць', () => {
        expect(() => new Stadium("Stadium", 150, 2000, -50)).toThrow(new Error("Number of seats isn`t positive"));
    });
    it('Перевірка методу displayInfo', () => {
        expect(stadium.displayInfo()).toBe("Стадіон \"Stadium\", що був побудований в 2000, має висоту 150м. та 2000 місць.");
    });
});
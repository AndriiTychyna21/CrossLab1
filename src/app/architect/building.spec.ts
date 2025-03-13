import { Building } from "./building";

describe('Building testing', () => {
    let building: Building;
    beforeEach(() => {
        building = new Building("Building", 250, 2000, 42);
    });
    it('Створення екземпляра класу', () => {
        expect(building).toBeTruthy;
    });
    it('Створення екземпляра класу з від\'ємною висотою', () => {
        expect(() => new Building("Building", -100, 2000, 42)).toThrow(new Error("Height isn`t positive"));
    });
    it('Створення екземпляра класу з недійсним роком побудови', () => {
        expect(() => new Building("Building", 250, 2040, 42)).toThrow(new Error("The structure is built in the future"));
    });
    it('Створення екземпляра класу з від\'ємною кількістю поверхів', () => {
        expect(() => new Building("Building", 250, 2000, -5)).toThrow(new Error("Number of floors isn`t positive"));
    });
    it('Перевірка методу getHeight', () => {
        expect(building.getHeight()).toBe(250);
    });
    it('Перевірка методу displayInfo', () => {
        expect(building.displayInfo()).toBe("Будинок \"Building\", що був побудований в 2000, має висоту 250м. та 42 поверхи.");
    });
});
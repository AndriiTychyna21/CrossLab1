import { ArchitectureList } from "./architectureList";


describe('List testing', () => {
    let list: ArchitectureList;
    beforeEach(() => {
        list = new ArchitectureList();
    });
    it('Створення екземпляра класу', () => {
        expect(list).toBeTruthy;
    });
    it('Додавання до листа Будинку', () => {
        expect(() => list.addArch("Building", "Building", 150, 2000, 30)).toBeTruthy;
    });
    it('Додавання до листа Моста', () => {
        expect(() => list.addArch("Bridge", "Bridge", 150, 2000, 300)).toBeTruthy;
    });
    it('Додавання до листа Стадіона', () => {
        expect(() => list.addArch("Stadium", "Stadium", 150, 2000, 3000)).toBeTruthy;
    });
    it('Додавання до листа не існуючої структури', () => {
        expect(() => list.addArch("Tower", "Tower", 240, 1984, 3000)).toThrow(new Error("Unknown architecture"));
    });
});
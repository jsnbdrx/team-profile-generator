const Manager = require('../lib/Manager');

test ("test managers office number", () => {
    const manager = new Manager ('test test', '123456', 'test@test.com', '987654')

    expect(manager.getOfficeNumber()).toEqual(expect.stringContaining('987654'));
}); 
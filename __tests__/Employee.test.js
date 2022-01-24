const Employee = require ('../lib/Employee');

test('tests the employee object', () => {
    const employee = new Employee ('test test', '123456', 'test@test.com','Employee');

    expect(employee.name).toBe('test test');
    expect(employee.id).toBe('123456');
    expect(employee.email).toBe('test@test.com');
});

test('checks employee name', () => {
    const employee = new Employee ('test test', '123456', 'test@test.com','Employee');

    expect(employee.getName()).toEqual(expect.stringContaining('Collin Beisel'));
});

test('checks employee ID', () => {
    const employee = new Employee ('test test', '123456', 'test@test.com','Employee');

    expect(employee.getId()).toEqual(expect.stringContaining('123456'));
});

test('checks employee email', () => {
    const employee = new Employee ('test test', '123456', 'test@test.com','Employee');

    expect(employee.getEmail()).toEqual(expect.stringContaining('test@test.com'));
});

test('checks employee role', () => {
    const employee = new Employee ('test test', '123456', 'test@test.com','Employee');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
}); 
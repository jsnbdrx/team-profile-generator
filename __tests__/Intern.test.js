const Intern = require('../lib/Intern');

test ("test Interns school", () => {
    const intern = new Intern ('test test', '123456', 'test@test.com', 'SMU')

    expect(intern.getSchool()).toEqual(expect.stringContaining('SMU'));
}); 
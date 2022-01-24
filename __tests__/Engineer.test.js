const Engineer = require('../lib/Engineer');

test ("test github username", () => {
    const engineer = new Engineer ('test test', '123456', 'test@test.com', 'github-test')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('github-test'));
}); 
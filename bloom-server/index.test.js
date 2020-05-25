const axios = require('axios');

test('Login user at POST /login url', async () => {
  const res = await axios.post('http://localhost:3000/login', {
    username: 'the_best_username',
    password: 'super secured password 123'
  });
  console.log(res.data);
  expect(res.data === 'Hello Pasha')
});

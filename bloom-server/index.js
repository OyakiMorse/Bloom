/*
* Підгружаєм бубліотеки та файли
*/
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const passport = require('passport');
const { configuredLocalStrategy } = require('./config/passport');

const app = express();

/*
* Просто виніс в константи порт і хост для зручності
*/
const PORT = process.env.PORT || 3000; // буде порт 3000, якщо не вкажу ту змінну першу, а я її, звісно ж, не об'явлю)
const HOST = process.env.HOST || 'localhost'; // можу заюзати 192.168.1.8, localhost можна завжди юзати


/*
* Middleware для express 
*/
app.use(bodyParser.json());
app.use(cors());
app.use(passport.initialize());

passport.use(configuredLocalStrategy);

// звичайний "обробник" адреси `http://${HOST}:${PORT}/login` для POST запиту
app.post('/login', passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' }), (req, res) => {

  // passport.authenticate middleware executed before this function will be called
  res.send('Hello Pasha').end();
});

/*
* Функція для асинхронних операцій, запускається на початку. Щось схоже робить Nuxt
*/
async function bootstrap() {
  await mongoose.connect('mongodb://localhost/my_database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });


  // запускаю сервер для прослуховування з, вказаними в константах, параметрами
  app.listen(PORT, HOST, () => {
    /*
    * це просто функція, яка передається в функцію listen і викликається, коли сервер починає прослуховувати
    * тут просто в консоль виводжу, аби знати про те, що сервер, все ж, запустився
    */
    console.log(`Server started on address: http://${HOST}:${PORT}`);
  });
}

// ну і асинхронну функцію треба десь викликати
bootstrap();














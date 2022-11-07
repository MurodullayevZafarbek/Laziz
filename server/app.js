const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');


try {
   mongoose.connect('mongodb://localhost:27017/Laziz')
   console.log("Db connected")
} catch (err) {
   console.log("DB connection Error", err);
}

const indexRouter = require('./routes/index');
const skillsRouter = require('./routes/skills');
const page404Router = require('./routes/404Page');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/skills', skillsRouter);
app.use("*", page404Router)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
   console.log(`App listening on port ${PORT}!`);
});
import express from "express";
import path from "path";
import favicon from "serve-favicon";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import logger from "morgan";
import routeConfig from './config/route.config';
import mongoConfig from './config/mongo.config';
import  mysqlConfig from './config/mysql.config';
dotenv.load({path: '.env'});


const app = express();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(sassMiddleware({
//     src: path.join(__dirname, 'server'),
//     dest: path.join(__dirname, 'public'),
//     indentedSyntax: true, // true = .sass and false = .scss
//     sourceMap: true
// }));
app.use(express.static(path.join(__dirname, 'public')));


app.set(mongoConfig);
app.set(mysqlConfig);
app.use(routeConfig);


// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

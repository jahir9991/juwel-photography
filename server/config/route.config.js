import express_promise_router from "express-promise-router";
import web from "../routes/web/index";
import api from "../routes/api/index";

'use strict';


const routeConfig = express_promise_router();

routeConfig.use('/', web);
routeConfig.use('/api/v1/', api);
/*-----------default 404 api route -----------*/
routeConfig.use('/api/*', (req, res) =>{
    res.send('error in api call');
});

/*-----------default 404 route -----------*/
// routeConfig.use('*', function (req, res) {
//     res.send('no way');
// });


export default routeConfig;

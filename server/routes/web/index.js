import express_promise_router from "express-promise-router";
import home from "./homeRoutes";
let router = express_promise_router();

/* GET  listing. */

router.use('/', home);

module.exports = router;

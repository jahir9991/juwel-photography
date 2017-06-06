import homeController from "../../controllers/homeController.js";
import express_promise_router from "express-promise-router";
var router = express_promise_router();

/*
 * GET
 */
router.get('/', homeController.index);

export default  router;

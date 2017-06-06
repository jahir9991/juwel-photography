const productRouter = require('express-promise-router')();
const productController = require('../../controllers/productController');

/*
 * GET
 */
productRouter.get('/', productController.list);

/*
 * GET
 */
productRouter.get('/:id', productController.show);

/*
 * POST
 */
productRouter.post('/', productController.create);

/*
 * PUT
 */
productRouter.put('/:id', productController.update);

/*
 * DELETE
 */
productRouter.delete('/:id', productController.remove);

module.exports = productRouter;

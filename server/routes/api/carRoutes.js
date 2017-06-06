const router = require('express-promise-router')();
const carController = require('../../controllers/carController.js');

/*
 * GET
 */
router.get('/', carController.list);

/*
 * GET
 */
router.get('/:id', carController.show);

/*
 * POST
 */
router.post('/', carController.create);

/*
 * PUT
 */
router.put('/:id', carController.update);

/*
 * DELETE
 */
router.delete('/:id', carController.remove);

module.exports = router;

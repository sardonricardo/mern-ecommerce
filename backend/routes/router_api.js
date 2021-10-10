const router = require('express').Router();
const makers_api_PG = require('../controllers/postgres_makers_controllers');



// /api/makers/
router.post('/makers', makers_api_PG.createMaker )


module.exports = router
const { Router} = require('express');
const res = require('express/lib/response');
const { route } = require('../app');
const router = Router()

route.get('/', (req, res) => {
    
})
   res.send('hello world')

module.exports = router;


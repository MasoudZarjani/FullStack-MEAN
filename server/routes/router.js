import {
    Router
} from 'express';
var router = Router();

import {
    index,
    show,
    store,
    update,
    del
} from '../controllers/postController';

// Home page route.
router.get('/', function (req, res) {
    res.send('Home Page');
});

router.get('/post', index);

router.get('/post/:id', show);

router.post('/post', store);

router.put('/post/:id', update);

router.delete('/post/:id', del);

router.get('/about', function (req, res) {
    res.send('About Page');
});

export default router;
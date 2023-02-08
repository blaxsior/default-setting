import e from 'express';
import KEY from './util/key.js';

const server = e();

/* server default middleware setting */
server.use(e.static('public', {
    extensions:['html', 'htm', 'js']
}));
server.use(e.json());
server.use(e.urlencoded({extended: true}));

server.listen(KEY.PORT);
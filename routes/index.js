const router = require('express').Router();
const r = require('rethinkdb');

let connection;
r.connect({host: 'localhost', port: 28015, db: 'test'})
    .then(conn => {
      connection = conn;
    });

/* Render the feed. */
router.get('/', async (req, res, next) => {
  const posts = await r.table('posts').orderBy(r.desc('date')).run(connection)
      .then(cursor => cursor.toArray());
  res.render('index', { posts });
});

module.exports = router;

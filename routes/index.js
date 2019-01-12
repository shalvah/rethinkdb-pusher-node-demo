const router = require('express').Router();
const r = require('rethinkdb');

let connection;
r.connect({host: 'localhost', port: 28015, db: 'test'})
    .then(conn => {
      connection = conn;
      return r.table('posts').changes().run(connection);
    }).then(cursor => {
      cursor.each((err, row) => {
        if (err) throw err;
        console.log(row.new_val)
        // publish row to the frontend
    });
});

/* Render the feed. */
router.get('/', async (req, res, next) => {
  const posts = await r.table('posts').orderBy(r.desc('date')).run(connection)
      .then(cursor => cursor.toArray());
  res.render('index', { posts });
});

/* Show the view to create a new post. */
router.get('/new', (req, res, next) => {
  res.render('new');
});

/* Save a new post to the database */
router.post('/new', async (req, res, next) => {
    const post = {
        title: req.body.title,
        content: req.body.content,
        date: new Date(),
    };
  r.table('posts').insert(post).run(connection)
      .then(() => res.redirect('/'));
});

module.exports = router;

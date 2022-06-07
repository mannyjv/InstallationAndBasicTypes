const express = require('express');
const path = require('path');
const morgan = require('morgan');
const client = require('./db');
const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/argonautes', async (req, res, next) => {
  try {
    const data = await client.query('SELECT * FROM argonautes');
    res.send(data.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/argonautes', async (req, res) => {
  try {
    const newArgonaute = req.body.name;

    let data = await client.query(
      'INSERT INTO argonautes (name) VALUES ($1) RETURNING *',
      [newArgonaute]
    );

    res.send(data.rows);
  } catch (error) {
    res.status(500).send(`Something went wrong: ${error}`);
  }
});

// For all GET requests that aren't to an API route,
// we will send the index.html! . we dont have any changing views, this is the html sheet that gets served all the time
// app.get('/*', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '..', 'index.html'));
// });

// Handle 404s
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handling endware
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send(err.message || 'Internal server error');
});

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});

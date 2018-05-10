const cluster = require('cluster');

if (cluster.isMaster) {
  // Count the machine's CPUs

  const cpuCount = require('os').cpus().length;

  // Create a worker for each CPU
  for (let i = 0; i < cpuCount; i += 1) {
    cluster.fork();
  }
} else {
  const nr = require('newrelic');
  const express = require('express');
  const cors = require('cors');
  const app = express();
  const bodyParser = require('body-parser');
  const path = require('path');
  const db = require('../database/index.js');
  const { renderToString } = require('react-dom/server');
  const React = require('react');
  const PhotoGallery = require('../babel_views/components/PhotoGallery.jsx').default;
  const redisClient = require('redis').createClient;
  const expstate = require('express-state');
  const ReactDOMServer = require('react-dom/server');
  const ReactDOM = require('react-dom');
  const exphbs = require('express-handlebars');
  const $ = require('jquery');

  app.engine('handlebars', exphbs({defaultLayout: 'PhotoGallery'}));
  app.set('view engine', 'handlebars');

  expstate.extend(app);
  app.set('state namespace', 'PhotoGallery');

  const redis = redisClient(6379, 'localhost');

  app.use(bodyParser.json());
  /*
  app.use((req, res, next) => {
    console.log(req.url, req.method);
    next(); 
  });
  */
  app.use(cors());

  app.get('/api/photo/:id', (req, res) => {
    db.getById(redis, req.params.id, (results) => {
      res.json(results);
    });
  });

  app.get('/', (req, res) => {
    
    // Render the component to a string using the initialState. 
    const appString = ReactDOMServer.renderToString(React.createElement(PhotoGallery)); 
 
    //res.send(appString);

    var initialState = {
      photos: [],
      currentPhotos: [],
      showModal: false,
      selectedPhoto: [],
      index: 0,
      modalIndex: 0,
      totalNumberOfPics: 0,
    };

    //Expose this initialState to your front-end under the MyApp global variable
    res.expose(initialState, 'PhotoGallery.initialState');

    //res.send(appString);

    // Render this HTML to the page.
    res.render('PhotoGallery.handlebars', {
      title: 'Server Rendered React',
      appString: appString,
      initialState: initialState }, 
      function(err, html) {
        console.log(err);
        console.log(html);
        res.send(html)
      }
    );
});

  app.use(express.static(path.join(__dirname, '../client/public')));

  app.listen(3003, () => console.log("I am listening to Dylan's Channel: localhost:3003"));
}
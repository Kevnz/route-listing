## Route Listing

This allows you to view the routes of an express app when you startup your app. 

To use:

```
var routeListing = require('route-listing');
//express routes using a router instance;
var routes = require('./routes');
app.use('/', routes);
routeListing(routes.stack, '');
```
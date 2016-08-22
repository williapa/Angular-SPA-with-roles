ANGULAR SPA WITH ROLES

This single page application (SPA) is built from an angular.js front end and a backend node service that
provides authentication through a route creating a Json Web Token (JWT). Inside the jwt is the admin property for the user.
We will use this token in the front end controller to organize views and routes, but will also
be checking for the unaltered token in the header on the backend routes to know that the jwt is unaltered. 


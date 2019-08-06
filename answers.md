Mention two parts of Express that you learned about this week.

First, I learned what Express was. Express is like React for the backend. It sits on top of Node.js and adds functionality. Second, I learned how to write custom middleware with Express. Writing custom middleware has 2 steps. First, you need to have a function that takes in 3 or 4 arguments (the request, response, and a function that points to the next middleware) and then you add that function to the middleware queue. Any endpoint with the middleware on it will give back some information about the request being made.

Describe Middleware?

Middleware is a function that gets a request and response object and can return the response or send it to the next middleware function. You can use middleware to route your application or perform other tasks.

Describe a Resource?

Resources are the information we need that are in our databases. They tell us what is required and how to have our app set up. If a username and password are required information, they would be resources. Each resource should be interacted with through the single URL given to it.

What can the API return to help clients know if a request was successful?

It can return a json object that has a custom message. So if your res.status is a 200, you can return a message telling the user their request was successful.

How can we partition our application into sub-applications?

By using a router. A router helps keep the files smaller and more organized. You then export each router file, and import them all to the server file.
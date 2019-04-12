# React + Rails No-Fluff Boilerplate

A boilerplate project for anyone interested in making a project that uses React and Rails.

Note! This boilerplate has _no fluff_! That means that there's nothing set up for you to do authentication stuff, there's no Redux stuff, and there's no React Router stuff.

The main important bit is that the React project has `proxy` set to `localhost:3001` in the `package.json` file. Take a look!

## Running the projects

You need **TWO** terminals for this.

In one terminal, `cd` into `react-front-end`. Run `npm install`. Then run `npm start` and go to `localhost:3000` in your browser.

In the other terminal, `cd` into `rails-back-end`. Run `bundle` to install the dependencies. Run `bin/rails s` to run the server.

In the browser, you can click on the button and see the data get loaded.

If this doesn't work, please message me!

NOTE: I have not tested this on the Lighthouse Labs Vagrant setup, so I can't guarantee that it will work there. (E.g. The Rails version may be off.) Nonetheless, you can use this project as a _GUIDELINE_ for what your project should look like.

## Contact

Please contact me at `nima@lighthouselabs.com` if you have any questions or requests, or post an issue to this repo.
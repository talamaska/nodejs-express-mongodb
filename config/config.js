
module.exports = {
    development: {
      root: require('path').normalize(__dirname + '/..'),
      app: {
        name: 'Nodejs Express Mongoose Demo'
      },
      db: 'mongodb://localhost/mentormate',
      google: {
          clientID: "210845979491.apps.googleusercontent.com"
        , clientSecret: "uNlc_uoKgmrBMvHSIO_QGpuD"
        , callbackURL: "http://localhost:3000/auth/google/callback"
      },
      expire : 900000, //15 minutes
      port: 3000
    }
  , test: {

    }
  , production: {

    }
}

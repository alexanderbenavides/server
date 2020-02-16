
let CORS = (app) => {
     const allow = app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
      });
      return allow
}

module.exports = {
    CORS
}
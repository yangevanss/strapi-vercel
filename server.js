// const strapi = require("@strapi/strapi");
  
// const app = strapi.createStrapi({ distDir: "./dist" })

// app.start();

// module.exports = app;
module.exports = () => {
  try {
    console.log(123);
    
    const strapi = require("@strapi/strapi");

    console.log('strapi:', strapi);
    
  }catch(e){
    console.log(e);
    
  }
}
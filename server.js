// const strapi = require("@strapi/strapi");
  
// const app = strapi.createStrapi({ distDir: "./dist" })

// app.start();

// module.exports = app;
module.exports = () => {
  try {
    const strapi = require("@strapi/strapi");

    strapi.createStrapi({ distDir: "./dist" }).start();
  }catch(e){
    console.log('error:', e);
  }
}
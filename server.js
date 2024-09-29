try { 
  console.log(123)
  
  const strapi = require("@strapi/strapi");
  
  strapi.createStrapi({ distDir: "./dist" }).start();
}catch(e){
  console.log(e);
}

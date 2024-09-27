// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: true,
   /* \\local */  // local server
  /*   \\    */   baseUrl: "http://127.0.0.1:8000/api/",
 /*     \\  */    appUrl:  "http://localhost:4200/",
/*__Dev__\\*/
//       //      live servers
              // baseUrl: "http://18.192.156.187:8000/api/",
              // appUrl: "http://18.192.156.187/"
      
              // qa server
              // baseUrl: "http://3.65.22.147:8000/api/",
              // appUrl: "http://3.65.22.147/"  
              
}

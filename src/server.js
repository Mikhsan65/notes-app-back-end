/* eslint-disable import/extensions */
/* eslint-disable quotes */
// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require("@hapi/hapi");
// eslint-disable-next-line no-unused-vars
const { addNoteHandler } = require("./handler.js");
const { notes } = require("./notes.js");
const routes = require("./routes.js");
async function init() {
  const server = Hapi.server({
    port: 5000,
    host: "localhost",
    routes: {
      cors: {
        origin: ["*"],
      },
    },
  });
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
}
init();

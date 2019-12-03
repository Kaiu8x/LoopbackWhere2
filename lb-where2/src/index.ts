import {LbWhere2App} from './application';
import {ApplicationConfig} from '@loopback/core';

export {LbWhere2App};

export async function main(options: ApplicationConfig = {}) {
  const app = new LbWhere2App(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}

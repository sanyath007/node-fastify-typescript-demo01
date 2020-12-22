/// <reference path="../typings.d.ts" />

import application from './app/application';

const PORT: any = process.env.PORT || 3000;
const app = application();

const start = async () => {
  try {
    await app.listen(PORT, '0.0.0.0');
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();

import { createConnection, getConnectionOptions } from 'typeorm';

interface IOpttions {
  host: string;
}

getConnectionOptions().then((options) => {
  const newOptions = options as IOpttions;
  newOptions.host = 'localhost';
  createConnection({
    ...options,
  });
});

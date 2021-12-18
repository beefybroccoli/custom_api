require("dotenv").config();
const {USERNAME,PASSWORD,DEV_DATABASE,TESTING_DATABASE, LOCAL_HOST, POSTGRES_PORT} = require("../env");

const pg = require('pg');

console.log("process.env.DATABASE_URL = ", process.env.DATABASE_URL);
console.log("process.env.NODE_ENV = ", process.env.NODE_ENV);

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false }
}

const sharedConfig = {
  client: 'pg',
  version: '8.7.1',
}

module.exports = {

  development: {
    ...sharedConfig,
    // connection: process.env.DEV_DATABASE_URL,
    migrations:{
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    connection: {
      host : LOCAL_HOST,
      port : POSTGRES_PORT,
      user : USERNAME,
      password : PASSWORD,
      database : DEV_DATABASE,
      ssl: { rejectUnauthorized: false },
    }
  },

  testing: {
    ...sharedConfig,
    // connection: process.env.TESTING_DATABASE_URL,
    migrations:{
      directory: './database/migrations'
    },
    seeds: {
      directory: './database/seeds'
    },
    connection: {
      host : LOCAL_HOST,
      port : POSTGRES_PORT,
      user : USERNAME,
      password : PASSWORD,
      database : TESTING_DATABASE
    }
  },

  production: {
    ...sharedConfig,
    //environment variable on cloud
    migrations:{
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    
  }

};
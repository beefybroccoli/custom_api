require("dotenv").config();
const {USERNAME,PASSWORD,DEV_DATABASE,TESTING_DATABASE, LOCAL_HOST, POSTGRES_PORT} = require("../env");

const pg = require("pg");

if (process.env.DATABASE_URL) {
  pg.defaults.ssl = { rejectUnauthorized: false }
}

const sharedConfig = {
  client: 'pg',
  migration:{
    directory: './database/migrations'
  },
  seeds: {
    directory: './seeds'
  },
}

module.exports = {

  development: {
    ...sharedConfig,
    // connection: process.env.DEV_DATABASE_URL,
    connection: {
      host : LOCAL_HOST,
      port : POSTGRES_PORT,
      user : USERNAME,
      password : PASSWORD,
      database : DEV_DATABASE
    }
  },

  testing: {
    ...sharedConfig,
    // connection: process.env.TESTING_DATABASE_URL,
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
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    
  }

};
require("dotenv").config();

const pg = require("pg");

const sharedConfig = {
  client: 'pg',
  migration:{
    directory: './database/migrations'
  },
  seeds: {
    directory: './database/seeds'
  },
}

module.exports = {

  development: {
    ...sharedConfig,
    connection: process.env.DEV_DATABASE_URL,
  },

  testing: {
    ...sharedConfig,
    connections: process.env.TESTING_DATABASE_URL,
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
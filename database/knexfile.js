require("dotenv").config();

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
    connection: process.env.TESTING_DATABASE_URL,
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

/* - justin's knexfile.js
require('dotenv').config() 

const pg = require('pg') 
if (process.env.DATABASE_URL) { pg.defaults.ssl = { rejectUnauthorized: false } } 

const sharedConfig = { 
  client: 'pg', 
  migrations: { directory: './api/data/migrations' }, 
  seeds: { directory: './api/data/seeds' }, 
} 

module.exports = { 
  development: { 
    ...sharedConfig, 
    connection: process.env.DEV_DATABASE_URL, 
  }, 
  
  testing: { 
    ...sharedConfig, 
    connection: process.env.TESTING_DATABASE_URL, }, 
  
  production: { 
    ...sharedConfig, 
    connection: process.env.DATABASE_URL, 
    pool: { min: 2, max: 10, } }, 
  } 
  */
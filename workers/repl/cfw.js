const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    name: process.env.WORKER_REPL_NAME,
    zoneid: "dummy",
    profile: "dummy",
    entry: "index.js",
    routes: [],
    globals: makeKV(),
}

function makeKV(){
  const result = {};

  // Finding defined KVs
  for(let name in process.env){
    if(!name.startsWith('KV_')) continue;
    result[name.replace(/^KV_/,'')] = `KV:${process.env[name]}`;
  }
  
  return result;
}
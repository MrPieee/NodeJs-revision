const OS = require('os');

// get user info with OS module
const userInfo=OS.userInfo();

// get hostname with OS module
const hostname=OS.hostname();

// get home Directory with OS module
const homedir=OS.homedir();

// cheak machine BIT with OS module
const machine=OS.machine();

// cheak DESKOP temp file  with OS module
const tmpdir=OS.tmpdir();

// get PC platform name with OS module
const platform=OS.platform();

// get CPU information with OS module
const cpuInfo=OS.cpus();

// cheak PC totalmemory with OS module
const totalmem=OS.totalmem();

// cheak PC exixtmemory with OS module
const freemem=OS.freemem();

// cheak PC networkInterfaces with OS module
const networkInterfaces=OS.networkInterfaces();

// cheak PC version with OS module
const version=OS.version();

console.log(version);



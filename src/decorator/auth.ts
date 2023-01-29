import path from "path";

const servicePath = path.join(__dirname, "..", "services", "AuthService");

const serviceModule = require(servicePath);

console.log(serviceModule.default["findUser"]);

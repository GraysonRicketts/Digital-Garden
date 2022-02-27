import npm_config from 'config';
import { Schema } from './config.interface';

process.env["NODE_CONFIG_DIR"] = __dirname + "/app-config/";
console.log(process.env["NODE_CONFIG_DIR"]);

const config: Schema = npm_config.util.toObject()

export default config;
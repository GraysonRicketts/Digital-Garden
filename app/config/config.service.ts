import npm_config from 'config';
import { Schema } from './config.interface';

const config: Schema = { ...npm_config.util.toObject()};

export default config;
import { DeepPartial } from "~/utility/deep-partial";
import { Env, Schema } from "./config.interface";
import psjson from "../../package.json";

const env: DeepPartial<Schema> = {
  system: {
    env: Env.DEV,
    version: psjson.version,
  },
};

export default env;

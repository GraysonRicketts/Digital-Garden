import { DeepPartial } from "~/utility/deep-partial";
import { Env, Schema } from "./config.interface";

const env: DeepPartial<Schema> = {
    system: {
        env: Env.PROD
    }
}

export default env;
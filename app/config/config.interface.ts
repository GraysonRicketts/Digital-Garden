
export enum Env {
    DEV=1,
    PROD
};
export interface Schema {
    system: {
        env: Env,
        version: string
    }
}

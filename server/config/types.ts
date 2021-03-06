export interface IConfig {
    port: number;
    token: string;
    allowedOrigin: string[];
    refreshToken: string;
    database: IDatabase;
    host: string;
}

export interface IDatabase {
    host: string;
    port: number;
    username: string;
    type: "mysql";
    password: string;
    database: string;
}

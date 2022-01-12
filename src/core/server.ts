import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';

import { exampleModule } from './../modules';

export class Server {
  private static app: Application;
  private static _apiPath: string;
  private static _apiVersion: string;
  private static _PORT: string;
  private static _HOST_SERVER: string;

  constructor() {}

  static runApp(): void {
    this.app = express();
    this._PORT = process.env.PORT ?? '3000';
    this._HOST_SERVER = process.env.HOTS_SERVER ?? 'http://localhost';
    this._apiVersion = 'v1';
    this._apiPath = `/api/${this._apiVersion}`;

    this.middlewares();
    this.listen();
    this.getRoutes();
    this.getPublicPath();
  }

  private static middlewares(): void {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }
  private static listen(): void {
    this.app.listen(this._PORT, () => {
      console.log(`[ Server ] App is running on  ${this._HOST_SERVER}:${this._PORT}`);
    });
  }
  private static getRoutes(): void {
    /**
     * Example Module
     */
    this.app.use(`${this._apiPath}/example`, exampleModule.getExampleRoutes());
  }
  private static getPublicPath() {
    this.app.use(express.static(path.join(__dirname + './../public')));
  }
}

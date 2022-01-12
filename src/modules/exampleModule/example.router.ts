import { Router } from 'express';
import { exampleController } from './example.controller';

export class ExampleRouter {
  private static _router: Router;
  constructor() {}

  static getExampleRoutes(): Router {
    this._router = Router();

    this._router.get('/', exampleController);

    return this._router;
  }
}

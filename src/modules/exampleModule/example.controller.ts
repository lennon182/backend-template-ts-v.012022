import { Response, Request } from 'express';
import { ExampleResponse } from './example.interface';

export const exampleController = (req: Request, resp: Response) => {
  return returnResponse(resp, 200, '🔥 Response Controller', true);
};

/**
 *
 * ResponseMethod
 * Aux Method
 *
 */
const returnResponse = (
  resp: Response,
  statusCode: number,
  msg: string,
  respStatus: boolean,
  metaData?: Object
) => {
  const exampleResp: ExampleResponse = {
    msg,
    resp: respStatus,
    metaData,
  };
  return resp.status(statusCode).json(exampleResp);
};

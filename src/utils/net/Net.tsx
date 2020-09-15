import {HTTP_END_POINT} from '../../res/url/Urls';
export class Net {
  static getData<Req, Resp>(
    url: string,
    request: Req,
    successListener: (resp: Resp) => void | undefined,
  ) {
    let endPoint = `http://${HTTP_END_POINT}:38080/app/mock/16`;
    let httpUrl = endPoint.concat(url);
    return fetch(httpUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    })
      .then((resp: Response) => {
        return resp.json();
      })
      .then((resp: Resp) => {
        console.log(
          `${httpUrl}\n req--->${JSON.stringify(
            request,
          )} \n resp--->${JSON.stringify(resp)}`,
        );
        if (successListener !== undefined) {
          successListener(resp);
        }
      })
      .catch((error: any) => {
        console.log(JSON.stringify(error));
      });
  }
}

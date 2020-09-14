import {Resp} from '../../chapter/dto/Bean';

export class Net {
  static getData(url: string) {
    let endPoint = 'http://192.168.1.7:38080/app/mock/16';
    let httpUrl = endPoint.concat(url);
    return fetch(httpUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'yourValue',
        secondParam: 'yourOtherValue',
      }),
    })
      .then((resp: Response) => {
        return resp.json();
      })
      .then((resp: Resp) => {
        console.log(`${httpUrl} resp ---> \n ${resp.message}`);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}

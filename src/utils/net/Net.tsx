import {err} from 'react-native-svg/lib/typescript/xml';

export class Net {
  static getData(url: string) {
    let endPoint = 'http://192.168.1.127:38080/app/mock/16';
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
        console.log(`${httpUrl} resp ---> \n ${resp.text()}`);
        return resp.json();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}

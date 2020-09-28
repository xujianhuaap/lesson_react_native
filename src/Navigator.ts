export interface RouteParams {
  info?: string;
}

export function navigateMain(navigation: any, params?: RouteParams) {
  navigation.navigate('main', params);
}

export function navigateChapter(navigation: any, params?: RouteParams) {
  navigation.navigate('chapter', params);
}

export function navigateLogin(navigation: any, params?: RouteParams) {
  navigation.navigate('login', params);
}

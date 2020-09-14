export class Resp{
  message: string;
  documentation_url: string;

  constructor(message: string, documentation_url: string) {
    this.message = message;
    this.documentation_url = documentation_url;
  }
}

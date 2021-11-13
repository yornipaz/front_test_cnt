import { HttpHeaders } from "@angular/common/http";

export class HeaderFactory {

  public static CONTENT_TYPE:string = 'Content-Type';

  public static applicationJson(headers: HttpHeaders = new HttpHeaders()){
    return headers.append(this.CONTENT_TYPE,'application/json');
  }

  public static applicationXWwwFormUrlencoded(headers: HttpHeaders = new HttpHeaders()){
    return headers.append(this.CONTENT_TYPE,'application/x-www-form-urlencoded');
  }
}

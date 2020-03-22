const camelCase = require('camelcase');
const decamelCase = require('decamelize');
import * as moment from 'moment';

export class Token {
  expiredAt: string;
  token: string;
  id: number;
  createdAt: string;
  copied = false;

  fromJson(data): Token {
    Object.keys(data).forEach(k => {
      this[camelCase(k)] = data[k];
    });
    return this;
  }

  toSnakeCaseObject(): object {
    const obj: any = {};
    Object.keys(this).forEach(k => {
      obj[decamelCase(k)] = this[k];
    });
    return obj;
  }

  get createdAtFormatted(): string {
    return this.createdAt ? moment(this.createdAt).format('DD.MM.YYYY HH:mm:ss') : null;
  }

  get expiredAtFormatted(): string {
    return this.expiredAt ? moment(this.expiredAt).format('DD.MM.YYYY HH:mm:ss') : null;
  }
}

const camelCase = require('camelcase');
const decamelCase = require('decamelize');

export class User {
  nickname: string;
  isAdmin: boolean;
  id: number;
  password: string;
  passwordConfirmation: string;

  fromJson(data): User {
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
}

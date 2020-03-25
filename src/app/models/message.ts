const camelCase = require('camelcase');
const decamelCase = require('decamelize');

export class Message {
  id: number;
  userId: number;
  idiotId: number;
  message: string;

  createdAt: string;
  updatedAt: string;

  fromJson(data): Message {
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

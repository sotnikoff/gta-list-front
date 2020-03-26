const camelCase = require('camelcase');
const decamelCase = require('decamelize');

export class Profile {
  id: number;
  createdBy: number;
  rStarId: number;
  name: string;
  fromIdiot: boolean;

  createdAt: string;
  updatedAt: string;

  fromJson(data): Profile {
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

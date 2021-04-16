import {Entity, model, property} from '@loopback/repository';

@model(
  {
    settings: {
      postgresql: {
        table: 'userr',
      },
    },
  }
)
export class User extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  uid?: string;

  @property({
    type: 'string',
    required: true,
  })
  fname: string;

  @property({
    type: 'string',
    required: true,
  })
  mname: string;

  @property({
    type: 'string',
    required: true,
  })
  lname: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  phone: string;

  @property({
    type: 'string',
    required: true,
  })
  role: string;

  @property({
    type: 'string',
    required: true,
  })
  address: string;


  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {
  // describe navigational properties here
}

export type UserWithRelations = User & UserRelations;

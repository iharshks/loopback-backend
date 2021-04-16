import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {UserDataDataSource} from '../datasources';
import {User, UserRelations} from '../models';

export class UserRepository extends DefaultCrudRepository<
  User,
  typeof User.prototype.uid,
  UserRelations
> {
  constructor(
    @inject('datasources.userData') dataSource: UserDataDataSource,
  ) {
    super(User, dataSource);
  }
}

import {DefaultCrudRepository} from '@loopback/repository';
import {InviteStatus, InviteStatusRelations} from '../models';
import {DbMongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class InviteStatusRepository extends DefaultCrudRepository<
  InviteStatus,
  typeof InviteStatus.prototype.id,
  InviteStatusRelations
> {
  constructor(
    @inject('datasources.dbMongo') dataSource: DbMongoDataSource,
  ) {
    super(InviteStatus, dataSource);
  }
}

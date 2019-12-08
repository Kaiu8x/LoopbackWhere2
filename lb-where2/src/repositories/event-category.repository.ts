import {DefaultCrudRepository} from '@loopback/repository';
import {EventCategory, EventCategoryRelations} from '../models';
import {DbMongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EventCategoryRepository extends DefaultCrudRepository<
  EventCategory,
  typeof EventCategory.prototype.id,
  EventCategoryRelations
> {
  constructor(
    @inject('datasources.dbMongo') dataSource: DbMongoDataSource,
  ) {
    super(EventCategory, dataSource);
  }
}

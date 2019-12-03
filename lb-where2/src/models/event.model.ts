import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Event extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'object',
  })
  direction?: object;

  @property({
    type: 'date',
  })
  date?: string;

  @property({
    type: 'number',
  })
  category?: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  messages?: any[];

  @property({
    type: 'array',
    itemType: 'string',
  })
  invited?: any[];

  @property({
    type: 'number',
    required: true,
  })
  owner: number;

  @property({
    type: 'array',
    itemType: 'string',
  })
  photoUrls?: string[];


  constructor(data?: Partial<Event>) {
    super(data);
  }
}

export interface EventRelations {
  // describe navigational properties here
}

export type EventWithRelations = Event & EventRelations;

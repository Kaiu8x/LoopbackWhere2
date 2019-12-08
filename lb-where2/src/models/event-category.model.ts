import {Entity, model, property} from '@loopback/repository';

@model()
export class EventCategory extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  en: string;

  @property({
    type: 'string',
    required: true,
  })
  es: string;


  constructor(data?: Partial<EventCategory>) {
    super(data);
  }
}

export interface EventCategoryRelations {
  // describe navigational properties here
}

export type EventCategoryWithRelations = EventCategory & EventCategoryRelations;

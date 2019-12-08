import {Entity, model, property} from '@loopback/repository';

@model()
export class InviteStatus extends Entity {
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
  })
  es?: string;


  constructor(data?: Partial<InviteStatus>) {
    super(data);
  }
}

export interface InviteStatusRelations {
  // describe navigational properties here
}

export type InviteStatusWithRelations = InviteStatus & InviteStatusRelations;

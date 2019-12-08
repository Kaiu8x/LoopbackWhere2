import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getModelSchemaRef,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {EventCategory} from '../models';
import {EventCategoryRepository} from '../repositories';

export class EventCategoryController {
  constructor(
    @repository(EventCategoryRepository)
    public eventCategoryRepository : EventCategoryRepository,
  ) {}

  @post('/event-categories', {
    responses: {
      '200': {
        description: 'EventCategory model instance',
        content: {'application/json': {schema: getModelSchemaRef(EventCategory)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EventCategory, {
            title: 'NewEventCategory',
            
          }),
        },
      },
    })
    eventCategory: EventCategory,
  ): Promise<EventCategory> {
    return this.eventCategoryRepository.create(eventCategory);
  }

  @get('/event-categories/count', {
    responses: {
      '200': {
        description: 'EventCategory model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(EventCategory)) where?: Where<EventCategory>,
  ): Promise<Count> {
    return this.eventCategoryRepository.count(where);
  }

  @get('/event-categories', {
    responses: {
      '200': {
        description: 'Array of EventCategory model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(EventCategory, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(EventCategory)) filter?: Filter<EventCategory>,
  ): Promise<EventCategory[]> {
    return this.eventCategoryRepository.find(filter);
  }

  @patch('/event-categories', {
    responses: {
      '200': {
        description: 'EventCategory PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EventCategory, {partial: true}),
        },
      },
    })
    eventCategory: EventCategory,
    @param.query.object('where', getWhereSchemaFor(EventCategory)) where?: Where<EventCategory>,
  ): Promise<Count> {
    return this.eventCategoryRepository.updateAll(eventCategory, where);
  }

  @get('/event-categories/{id}', {
    responses: {
      '200': {
        description: 'EventCategory model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(EventCategory, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(EventCategory)) filter?: Filter<EventCategory>
  ): Promise<EventCategory> {
    return this.eventCategoryRepository.findById(id, filter);
  }

  @patch('/event-categories/{id}', {
    responses: {
      '204': {
        description: 'EventCategory PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(EventCategory, {partial: true}),
        },
      },
    })
    eventCategory: EventCategory,
  ): Promise<void> {
    await this.eventCategoryRepository.updateById(id, eventCategory);
  }

  @put('/event-categories/{id}', {
    responses: {
      '204': {
        description: 'EventCategory PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() eventCategory: EventCategory,
  ): Promise<void> {
    await this.eventCategoryRepository.replaceById(id, eventCategory);
  }

  @del('/event-categories/{id}', {
    responses: {
      '204': {
        description: 'EventCategory DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.eventCategoryRepository.deleteById(id);
  }
}

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
import {InviteStatus} from '../models';
import {InviteStatusRepository} from '../repositories';

export class InviteStatusController {
  constructor(
    @repository(InviteStatusRepository)
    public inviteStatusRepository : InviteStatusRepository,
  ) {}

  @post('/invite-statuses', {
    responses: {
      '200': {
        description: 'InviteStatus model instance',
        content: {'application/json': {schema: getModelSchemaRef(InviteStatus)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InviteStatus, {
            title: 'NewInviteStatus',
            
          }),
        },
      },
    })
    inviteStatus: InviteStatus,
  ): Promise<InviteStatus> {
    return this.inviteStatusRepository.create(inviteStatus);
  }

  @get('/invite-statuses/count', {
    responses: {
      '200': {
        description: 'InviteStatus model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(InviteStatus)) where?: Where<InviteStatus>,
  ): Promise<Count> {
    return this.inviteStatusRepository.count(where);
  }

  @get('/invite-statuses', {
    responses: {
      '200': {
        description: 'Array of InviteStatus model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(InviteStatus, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(InviteStatus)) filter?: Filter<InviteStatus>,
  ): Promise<InviteStatus[]> {
    return this.inviteStatusRepository.find(filter);
  }

  @patch('/invite-statuses', {
    responses: {
      '200': {
        description: 'InviteStatus PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InviteStatus, {partial: true}),
        },
      },
    })
    inviteStatus: InviteStatus,
    @param.query.object('where', getWhereSchemaFor(InviteStatus)) where?: Where<InviteStatus>,
  ): Promise<Count> {
    return this.inviteStatusRepository.updateAll(inviteStatus, where);
  }

  @get('/invite-statuses/{id}', {
    responses: {
      '200': {
        description: 'InviteStatus model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(InviteStatus, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.query.object('filter', getFilterSchemaFor(InviteStatus)) filter?: Filter<InviteStatus>
  ): Promise<InviteStatus> {
    return this.inviteStatusRepository.findById(id, filter);
  }

  @patch('/invite-statuses/{id}', {
    responses: {
      '204': {
        description: 'InviteStatus PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(InviteStatus, {partial: true}),
        },
      },
    })
    inviteStatus: InviteStatus,
  ): Promise<void> {
    await this.inviteStatusRepository.updateById(id, inviteStatus);
  }

  @put('/invite-statuses/{id}', {
    responses: {
      '204': {
        description: 'InviteStatus PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() inviteStatus: InviteStatus,
  ): Promise<void> {
    await this.inviteStatusRepository.replaceById(id, inviteStatus);
  }

  @del('/invite-statuses/{id}', {
    responses: {
      '204': {
        description: 'InviteStatus DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.inviteStatusRepository.deleteById(id);
  }
}

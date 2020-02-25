import { ConnectionRelations } from './enums';
import { ID } from './types';

export interface Connection {
    user1ID: ID,
    user2ID: ID,
    relations: ConnectionRelation[]
}

export interface ConnectionRelation {
    name: ConnectionRelations,
    isCurrent: boolean
}

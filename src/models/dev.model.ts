import { ID } from './types';
import { SkillLevels, DevAppStages, Accesses, DevEventTypes, DevReputations } from './enums';
import { Award } from './user.model';

export interface Dev {
    userID: ID,
    learnings: Learning[],
    skills: Skill[],
    apps: MyDevApp[],
    events: MyDevEvent[],
    awards: Award[],
    reputation: DevReputations
}

export interface Learning {
    topic: string,
    description: string,
    targetSkillLevel: SkillLevels,
    tags: string[],
}

export interface Skill {
    topic: string,
    description: string,
    level: SkillLevels,
    tags: string[]
}

export interface MyDevApp {
    appID: ID,
    role: string
}

export interface DevApp {
    id: ID,
    name: string,
    description: string,
    topics: string[],
    stage: DevAppStages,
    devs: ID[],
    tags: string[]
}

export interface MyDevEvent {
    eventID: ID,
    role: string
}

export interface DevEvent {
    eventID: ID,
    name: string,
    description: string,
    type: DevEventTypes,
    startsOn: Date,
    duration: number,
    access: Accesses,
    links: string[],
    tags: string[]
}

import { ID } from './types';

// Topic can only be created once (no update on its title), and title is unique.
export interface Topic {
    title: string,
    description: string,
    parentTopic: string,
    likes: number,
    followers: number,
    contexts: string[]
}

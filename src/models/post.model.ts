import { ID } from './types';
import { Accesses, PostCategories } from './enums';

export interface Post {
    id: ID,
    authorID: ID,
    title: string,
    category: PostCategories,
    content: PostContent,
    topics: string[],
    participants: ID[],
    likes: number,
    views: number,
    shares: number,
    comments: Comment[],
    access: Accesses,
    nextPostID: ID,             // This is a series
    contexts: string[],
    postedOn: Date,
    modifiedOn: Date
}

export interface Comment {
    id: ID,
    postID: ID,
    authorID: ID,
    content: string,
    likes: string[],
    comments: Comment[],
    commentedOn: Date,
    modifiedOn: Date
}

export interface PostContent {
    contents: string[]      // Multi-lang for article
}

export class PostGeneral implements PostContent {
    contents: string[] = [];
}

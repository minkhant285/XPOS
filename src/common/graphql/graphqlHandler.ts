import { Post, PostCategories, Accesses } from "../../models";

export function getAllPostsHdlr(){

}

// export function addNewPostHdlr(variables: any) {
//      return { variables }
// }

export function addNewPostHdlr(variables: Post) {
     return { variables : {
          authorID: variables.authorID,
          title: variables.title,
          category: PostCategories[variables.category],
          content: variables.content,
          topics: variables.topics,
          participants: variables.participants,
          comments: variables.comments,
          access: Accesses[variables.access],
          nextPostID: variables.nextPostID,
          contexts: variables.contexts,
          postedOn: variables.postedOn,
          modifiedOn: variables.modifiedOn}
}
}

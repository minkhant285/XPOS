import gql from "graphql-tag";

export const getAllPostsSchema = gql`query {
    getPosts {
        id
      authorID
      title
      category
      content {
        contents
      }
      topics
      participants
      likes
      views
      shares
      comments{
          id
        authorID
        content
        likes
        comments {
          id
          authorID
          content
          likes
          commentedOn
          modifiedOn
        }
        commentedOn
        modifiedOn
      }
      access
      nextPostID
      contexts
      postedOn
      modifiedOn
      }
}`

export const addPostSchema = gql`
mutation(
  $authorID: String!,
  $title: String!,
  $category: String!,
  $content: PostContentInput!,
  $topics: [String!]!,
  $participants: [String!]!,
  $comments: [CommentInput!]!,
  $access: String!,
  $nextPostID: String!,
  $contexts: [String!]!,
  $postedOn: DateTime!,
  $modifiedOn: DateTime!
){
  addPost(input: {
      authorID: $authorID,
      title: $title,
      category: $category,
      content: $content,
      topics: $topics,
      participants: $participants,
      comments: $comments,
      access: $access,
      nextPostID: $nextPostID,
      contexts: $contexts,
      postedOn: $postedOn,
      modifiedOn: $modifiedOn,
  })
}
`

export const addComment = gql`
mutation(
    $postID: String!,
    $authorID:String!,
    $content : String!,
    $likes: [String!]!,
    $comments: [CommentInput!]!,
    $commentedOn:DateTime!,
    $modifiedOn:DateTime!
  ){
    addComment(input: {
      postID: $postID,
      comment: {
        authorID: $authorID,
        content:$content,
        likes: $likes,
        comments:$comments,
        commentedOn: $commentedOn,
        modifiedOn:$modifiedOn
      }
    })

  }`

export const addLike = gql`
mutation($postID: String!){
  addLike(input:$postID)
}`

export const removeLike = gql`
mutation($postID:String!){
  removeLike(input:$postID)
}`

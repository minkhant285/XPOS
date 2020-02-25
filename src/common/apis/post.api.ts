import { addNewPostHdlr } from "../graphql/graphqlHandler";
import { useCxGqlMutation, useCxGqlQuery } from "../hooks/useGqlQuery";
import { Post } from "../../models";
import { getAllPostsSchema } from "../graphql/graphqlSchema";

export const getPostSSV = useCxGqlQuery(getAllPostsSchema);

// export const addPostApi = (schema: any) => {
//     return useCxGqlMutation(schema);

// }
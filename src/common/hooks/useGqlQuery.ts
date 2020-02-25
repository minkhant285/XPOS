import { useQuery, useMutation } from "@apollo/react-hooks";

export const useCxGqlQuery = (schema: any) => {
   return useQuery(schema);
}

export const useCxGqlMutation = (schema: any) => {
   return useMutation(schema);
}
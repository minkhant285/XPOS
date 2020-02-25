import React from 'react';
import './homeStyle.scss';
import '../../theme/Apptheme.scss';

import { useCxGqlQuery, useCxGqlMutation } from '../../common/hooks/useGqlQuery';
import { getAllPostsSchema,addPostSchema } from '../../common/graphql/graphqlSchema';
import { addNewPostHdlr } from '../../common/graphql/graphqlHandler';
import { Post, PostCategories, Accesses } from '../../models';
import { from } from 'apollo-boost';
// import { getPostSSV } from '../../common/apis/post.api';


const Home: React.FC = () => {

    const [postData,setPostData] = React.useState();
    const getPostSSV = useCxGqlQuery(getAllPostsSchema);

    const [category,setCategory] = React.useState(PostCategories.Article);
    const [access,setAccess] = React.useState(Accesses.Public);
    const [addPost] = useCxGqlMutation(addPostSchema);
    // const [addPost] = addPostApi(addPostSchema);

    const newPostData: Post = {
        id: '',
        authorID: "1212",
        category: category,
        content: { contents: ["graphql hooks test"] },
        modifiedOn: new Date,
        postedOn: new Date,
        likes: 0,
        comments: [],
        contexts: ['devX'],
        nextPostID: '',
        participants: [],
        shares: 0,
        title: '',
        topics: [],
        views: 0,
        access,
    };

    React.useEffect(()=>{
        getPostSSV.data && setPostData(getPostSSV.data.getPosts);
    },[getPostSSV.data]);

    const handleAddPost = () => {
        console.log("category value:"+category)
        addPost(addNewPostHdlr(newPostData)).then(
            res=>{
                getPostSSV.startPolling(2000);
            },err => {
                console.log(err)
            }
        )
    }



    return (
        <div>
            <button onClick={() => {getPostSSV.refetch().then(res=>{console.log(res)})}}>click</button>
            <button onClick={handleAddPost  }>addpost</button>
            {
                postData ?
               postData.map((res: any) =>
                    (<div key={res.id}>
                        {res.id} <br />
                        {res.content.contents}
                    </div>
                    )
                ) : <div>hi</div>
            }
        </div>
    )

}

export default Home

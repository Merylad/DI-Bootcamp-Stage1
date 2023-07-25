import posts from './posts.json'

const PostList = () =>{
  return(
    <>
        <h1>Hi this is a title</h1>
        {posts.map(post=>{
            return(
                <>
                <h2>{post.title}</h2>
                <p>{post.content} </p>
                </>
            )
        })}
    </>
  )
}

export default PostList
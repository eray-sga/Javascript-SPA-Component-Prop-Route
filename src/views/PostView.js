import Comment from "../components/Comment.js"
import { urlParse } from "../utils.js"

const getPost = async(id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

    if(response.ok){
        const data = await response.json()
        return data
    }
}

const getComment = async(id) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)

    if(response.ok){
        const data = await response.json()
        return data
    }
}

const PostView = {
    render: async() => {
        const request = urlParse()
        const post = await getPost(request.id)
        const comment = await getComment(request.id)

        return `
            <h3>${post.title}</h3>
            <p>${post.body}</p>
            <div>Yazar: ${post.userId}</div>
            ${Comment.render({
                value: comment.length
            })}
        `
    }
}

export default PostView
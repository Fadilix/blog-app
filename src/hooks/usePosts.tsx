import axios from 'axios';
import { useEffect, useState } from 'react'

export interface Post {
    id: number,
    title: string,
    image: string,
    description: string,
    category: string
}
const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axios.get<{ result: Post[] }>("https://blog-api-gamma-seven.vercel.app/posts")
            setPosts(data.result)
        }
        fetchPosts();
    }, [])
    return posts;
}

export default usePosts;
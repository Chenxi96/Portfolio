import Editor from "../components/editor/Editor";

import { useState, useEffect } from "react"


interface blogs {
    title: string,
    body: string,
    browser: string,
}

const Blog = () => {
    const [blogs, setBlogs] = useState<Array<blogs>>();

    
        useEffect(() => {
            const getBlogs = async () => {
                const res = await fetch('https://admin-page-2pcv.onrender.com/api/listblogs', {
                    method: 'GET'   
                })
                const blogs = await res.json();
                setBlogs(blogs)
            }
            getBlogs();
        }, [])


    return (
        <section className="container">
            <div className="row gap-2">
                {blogs && blogs.map(({body}) => {
                    return (
                            <Editor
                                value={body}
                            />
                    )
                })}
            </div>
        </section>
    )
}

export default Blog;
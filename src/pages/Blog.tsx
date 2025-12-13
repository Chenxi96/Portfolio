import Editor from "../components/editor/Editor";
import { useQuill } from 'react-quilljs';

import { useState, useEffect, useRef } from "react"


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
            <div className="row">
                {blogs && blogs.map(({body}, key) => {
                    return (
                        <div className="col" key={key}>
                            <Editor
                                value={body}
                            />
                        </div>
                        
                    )
                })}
            </div>
        </section>
    )
}

export default Blog;
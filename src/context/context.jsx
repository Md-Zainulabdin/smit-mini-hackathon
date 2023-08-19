import { createContext, useContext, useState } from "react";

export const BlogContext = createContext();
export const useBlog = () => useContext(BlogContext);

export const BlogProvider = ({children}) => {

    const [blog, setBlog] = useState();
    return (
        <BlogContext.Provider value={{
          blog,
          setBlog
        }}>
            {children}
        </BlogContext.Provider>
    )
}
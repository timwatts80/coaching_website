// pages/[slug].tsx

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from 'react';
import { getSinglePost, getPosts } from '../../lib/posts';

// PostPage page component
const PostPage = (props: any) => {
    // Render post title and content in the page from props
    return (
        <div>
            <h1>{props.post.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: props.post.html }} />
        </div>
    )
}

export async function getStaticPaths() {
    const posts = await getPosts();

    // Check if posts is not undefined or null
    if (Array.isArray(posts)) {
        // Get the paths we want to create based on posts
        const paths = posts.map(({ slug }) => ({ params: { slug } }));

        // { fallback: false } means posts not found should 404.
        return { paths, fallback: true };
    } else {
        // Return empty paths array if posts is undefined or null
        return { paths: [], fallback: true };
    }
}


// Pass the page slug over to the "getSinglePost" function
// In turn passing it to the posts.read() to query the Ghost Content API
export async function getStaticProps(context: { params: { slug: any; }; }) {
    const post = await getSinglePost(context.params.slug)

    console.log(post); // Add this line to log the returned post

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: { post }
    }
}

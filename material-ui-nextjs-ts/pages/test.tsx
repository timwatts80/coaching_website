import { getPosts, getSinglePost } from '../lib/posts';
import Link from 'next/link';

export async function getStaticProps(context: any) {
    const posts = await getPosts()

    console.log(posts); // Add this line to log the returned posts

    if (!posts) {
        return {
            notFound: true,
        }
    }

    return {
        props: { posts }
    }
}

export default function IndexPage(props: { posts: any[]; }): JSX.Element {
    const { posts } = props; // Declare and assign the 'posts' variable

    console.log(posts); // Add this line to log the returned posts

    return (
        <ul>
            {posts.map(post => (
                <li key={post.id}>
                    <Link href={`/${post.slug}`}>
                        {post.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

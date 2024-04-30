import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: process.env.GHOST_API_URL as string,
    key: process.env.GHOST_CONTENT_API_KEY as string,
    version: "v5.0"
  });

  export async function getPosts() {
    return await api.posts
      .browse({
        limit: "all"
      })
      .catch((err: any) => {
        console.error(err);
      });
  }

  export async function getSinglePost(postSlug: any) {
    return await api.posts
      .read({
        slug: postSlug
      })
      .catch(err => {
        console.error(err);
      });
  }
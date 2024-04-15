import { getStoryblokApi} from "@storyblok/react/rsc";
import StoryblokStory from "@storyblok/react/story";
 
export default async function Home() {
  const { data } = await fetchData();
 
  return (
    <div>
      <StoryblokStory story={data.story} />
    </div>
  );
}
 
import { ISbStoriesParams } from "@storyblok/react/rsc";

export async function fetchData() {
  let sbParams: ISbStoriesParams = { version: "draft" };

  const storyblokApi = getStoryblokApi();
  return storyblokApi.get(`cdn/stories/home`, sbParams);
}
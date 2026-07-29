import rss from '@astrojs/rss';
import { getSortedPosts } from '../lib/posts';

export async function GET(context: { site: URL }) {
  const posts = await getSortedPosts();
  return rss({
    title: 'Ideas in Shuffle',
    description: 'Thoughts and ideas in shuffle mode. Essays on fintech infrastructure, AI tooling and business.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.excerpt || '',
      link: `/p/${post.data.slug}`,
    })),
  });
}

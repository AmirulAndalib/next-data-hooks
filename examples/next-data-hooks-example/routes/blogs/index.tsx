import Link from 'next/link';
import { createDataHook } from 'next-data-hooks';
import getBlogPosts from 'helpers/get-blog-posts';

export const useBlogPostIndex = createDataHook('BlogPostIndex', async () => {
  const blogPosts = await getBlogPosts();
  return blogPosts.map(({ title, slug }) => ({ title, slug }));
});

function BlogPost() {
  const blogPostIndex = useBlogPostIndex();

  return (
    <>
      <Link href="/">
        <a>← Home</a>
      </Link>

      <h1>Blog Posts</h1>
      <ul>
        {blogPostIndex.map(({ title, slug }) => (
          <li key={slug}>
            <Link href={`/blogs/${slug}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default BlogPost;

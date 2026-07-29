import { getCollection } from 'astro:content';

// Format date for display
export function formatDate(date: Date): string {
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  return `${String(date.getDate()).padStart(2, '0')} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Format date short (MM.YY)
export function formatDateShort(date: Date): string {
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const y = String(date.getFullYear()).slice(2);
  return `${m}.${y}`;
}

// Get all posts sorted by date (newest first)
export async function getSortedPosts() {
  const posts = await getCollection('posts');
  return posts.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}

// Estimate reading time from body (fallback if readMinutes not set)
export function estimateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

// Get posts filtered by tag
export async function getPostsByTag(tag: string) {
  const posts = await getSortedPosts();
  if (tag === 'All') return posts;
  return posts.filter((p) => p.data.tag === tag);
}

// Count posts per tag
export async function getTagCounts() {
  const posts = await getSortedPosts();
  const counts: Record<string, number> = {};
  for (const p of posts) {
    counts[p.data.tag] = (counts[p.data.tag] || 0) + 1;
  }
  return counts;
}

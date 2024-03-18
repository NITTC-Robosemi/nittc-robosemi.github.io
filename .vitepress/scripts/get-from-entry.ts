import { ContentData } from "vitepress";

export function getTitle(entry: ContentData): string {
  return entry.frontmatter.title ?? entry.src?.split("\n").find((row => row.startsWith("# ")))?.replace("# ", "") ?? "No Title";
}

export function getPublishedAt(frontmatter: Record<string, any>): string {
  const dateString: string | undefined = frontmatter.publishedAt;
  if (!dateString) return "";
  const date = new Date(dateString);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

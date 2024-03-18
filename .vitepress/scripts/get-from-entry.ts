import { ContentData } from "vitepress";

export function getTitle(entry: ContentData): string {
  return entry.frontmatter.title ?? entry.src?.split("\n").find((row => row.startsWith("# ")))?.replace("# ", "") ?? "No Title";
}

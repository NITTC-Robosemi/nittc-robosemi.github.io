import { ContentData, withBase } from "vitepress";

export function getTitle(entry: ContentData): string {
  return entry.frontmatter.title ?? entry.src?.split("\n").find((row => row.startsWith("# ")))?.replace("# ", "") ?? "No Title";
}

export function getDescription(entry: ContentData): string {
  return entry.frontmatter.description;
}

export function getTags(entry: ContentData): string[] {
  return entry.frontmatter.tags;
}

export function getThumbnail(entry: ContentData): string {
  return withBase(entry.frontmatter.thumbnail);
}

export function getThumbnailOrDefault(entry: ContentData): string {
  return getThumbnail(entry) ?? withBase("/assets/TJUJ9115.PNG");
}

export function getDisplayOnCarousel(entry: ContentData): boolean {
  return entry.frontmatter.displayOnCarousel ?? true;
}

// @ts-expect-error
import { data } from './entries.data'
import { ContentData, withBase } from "vitepress";

const entries: ContentData[] = [...data];
export function getEntry(path: string) {
  return entries.find((entry) => withBase(entry.url) === path);
}

export function getEntryIndex(path: string) {
  return entries.findIndex((entry) => withBase(entry.url) === path);
}

import { data } from './entries.data.js'
import { withBase } from "vitepress";

const entries = [...data];

export function getEntry(path: string) {
  return entries.find((entry) => withBase(entry.url) === path);
}

export function getEntryIndex(path: string) {
  return entries.findIndex((entry) => withBase(entry.url) === path);
}

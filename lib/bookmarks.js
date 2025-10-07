// Simple localStorage helpers for drive bookmarks
const KEY = "driveBookmarks";

function safeParse(raw) {
  try {
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.warn("Failed to parse bookmarks", e);
    return [];
  }
}

export function getBookmarks() {
  if (typeof window === "undefined") return [];
  const raw = localStorage.getItem(KEY);
  return safeParse(raw);
}

export function addBookmark(bookmark) {
  if (typeof window === "undefined") return [];
  const current = getBookmarks();
  // prevent duplicates by id
  const exists = current.find((b) => b.id === bookmark.id);
  if (exists) return current;
  const updated = [bookmark, ...current];
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
}

export function removeBookmark(id) {
  if (typeof window === "undefined") return [];
  const current = getBookmarks();
  const updated = current.filter((b) => b.id !== id);
  localStorage.setItem(KEY, JSON.stringify(updated));
  return updated;
}

export function isBookmarked(id) {
  if (typeof window === "undefined") return false;
  const current = getBookmarks();
  return current.some((b) => b.id === id);
}

const bookmarks = { getBookmarks, addBookmark, removeBookmark, isBookmarked };

export default bookmarks;

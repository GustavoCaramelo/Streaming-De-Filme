export function getMyList(): string[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem("myList") || "[]");
}

export function addToMyList(id: string): string[] {
  const current = getMyList();
  const updated = [...new Set([...current, id])];
  localStorage.setItem("myList", JSON.stringify(updated));
  return updated;
}

export function removeFromMyList(id: string): string[] {
  const current = getMyList();
  const updated = current.filter((item) => item !== id);
  localStorage.setItem("myList", JSON.stringify(updated));
  return updated;
}

export function isInMyList(id: string): boolean {
  return getMyList().includes(id);
}

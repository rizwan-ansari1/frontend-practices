import type { User } from "./types";

export function filterUsers(users: User[], query: string): User[] {
  const q = query.trim().toLowerCase();
  if (q === "") return users;
  return users.filter((u) => u.name.toLowerCase().includes(q));
}

export function getInitials(name: string, maxLetters: number = 2): string {
  return name
    .split(" ")
    .map((word) => word[0])
    .slice(0, maxLetters)
    .join("")
    .toUpperCase();
}

export function formatCount(count: number, label?: string): string {
  const word = label ?? "person";
  return `${count} ${word}${count === 1 ? "" : "s"}`;
}

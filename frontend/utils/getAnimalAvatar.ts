import { animalAvatarMap } from "./animalAvatarMap";

export function getAnimalAvatar(avatar: string): string {
  return animalAvatarMap[avatar] ?? avatar;
}
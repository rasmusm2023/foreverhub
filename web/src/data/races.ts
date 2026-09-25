export type Race = {
  name: string;
  faction: string;
  slug: string;
  summary: string;
};

export function getRaceBySlug(slug: string): Race | undefined {
  return races.find((race) => race.slug === slug);
}

export const races: Race[] = [
  {
    name: "Human",
    faction: "Alliance",
    slug: "human",
    summary:
      "Humans are versatile and ambitious, bringing their technical, arcane, and spiritual wisdom toward the goal of a peaceful world.",
  },
  {
    name: "Dwarf",
    faction: "Alliance",
    slug: "dwarf",
    summary:
      "The ancient Dwarves are known for their engineering prowess, their resistance, and their love of treasure.",
  },
  {
    name: "Gnome",
    faction: "Alliance",
    slug: "gnome",
    summary:
      "Gnomes are brilliant and eccentric inventors, known for their quick wits and expansive minds.",
  },
  {
    name: "Night Elf",
    faction: "Alliance",
    slug: "night-elf",
    summary:
      "The mysterious and ageless Night Elves possess an innate connection to nature and a mastery of the shadows.",
  },
  {
    name: "High Order Skyborne",
    faction: "Alliance",
    slug: "high-order-skyborne",
    summary: "High Order Skyborne of the Alliance, a Forever race.",
  },
  {
    name: "Orc",
    faction: "Horde",
    slug: "orc",
    summary:
      "Focused, ferocious, and sometimes monstrous, the Horde values strength and honor, but struggles to keep aggression in check.",
  },
  {
    name: "Undead",
    faction: "Horde",
    slug: "undead",
    summary:
      "The plague of undeath was unleashed upon the land, and those who survived are the Forsaken.",
  },
  {
    name: "Tauren",
    faction: "Horde",
    slug: "tauren",
    summary:
      "The peaceful Tauren have long roamed the central plains, but now their way of life is under threat.",
  },
  {
    name: "Troll",
    faction: "Horde",
    slug: "troll",
    summary:
      "The savage and mysterious Trolls are known for their regeneration and their affinity for the elements.",
  },
  {
    name: "Windshaper Skyborne",
    faction: "Horde",
    slug: "windshaper-skyborne",
    summary: "Windshaper Skyborne of the Horde, a Forever race.",
  },
];

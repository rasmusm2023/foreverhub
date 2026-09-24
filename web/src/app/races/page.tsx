const races = [
  { name: "Human", faction: "Alliance" },
  { name: "Orc", faction: "Horde" },
  { name: "Dwarf", faction: "Alliance" },
  { name: "Night Elf", faction: "Alliance" },
  { name: "High Order Skyborne", faction: "Alliance" },
  { name: "Undead", faction: "Horde" },
  { name: "Tauren", faction: "Horde" },
  { name: "Gnome", faction: "Alliance" },
  { name: "Troll", faction: "Horde" },
  { name: "Windshaper Skyborne", faction: "Horde" },
];

export default function Races() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold">Races</h1>
      <p className="mt-2 text-zinc-400">
        This is a list of all the races in WoW Forever.
      </p>

      <ul className="mt-6 list-disc pl-5">
        {races.map((race) => (
          <li key={race.name}>
            {race.name} — {race.faction}
          </li>
        ))}
      </ul>
    </main>
  );
}

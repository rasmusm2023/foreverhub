import { races } from "@/data/races";
import { Metadata } from "next";
import { RaceList } from "@/components/RaceList";

export const metadata: Metadata = {
  title: "Races",
};

export default function Races() {
  const alliance = races.filter((race) => race.faction === "Alliance");
  const horde = races.filter((race) => race.faction === "Horde");

  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold">Races</h1>
      <p className="mt-2 text-zinc-400">
        This is a list of all the races in WoW Forever.
      </p>

      <RaceList title="Alliance" races={alliance}></RaceList>
      <RaceList title="Horde" races={horde}></RaceList>
    </main>
  );
}

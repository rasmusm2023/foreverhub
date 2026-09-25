import { Race } from "@/data/races";
import Link from "next/link";

type RaceListProps = {
  title: string;
  races: Race[];
};

export function RaceList({ title, races }: RaceListProps) {
  return (
    <section>
      <h2 className="mt-8 text-xl font-semibold">{title}</h2>
      <ul className="mt-6 list-disc pl-5">
        {races.map((race) => (
          <li key={race.name}>
            <Link href={`/races/${race.slug}`}>{race.name}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

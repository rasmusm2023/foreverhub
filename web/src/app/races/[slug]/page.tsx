import { Metadata } from "next";
import { getRaceBySlug } from "@/data/races";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: PageProps<"/races/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const race = getRaceBySlug(slug);

  return {
    title: race ? race.name : "Race not found",
  };
}

export default async function RacePage({ params }: PageProps<"/races/[slug]">) {
  const { slug } = await params;
  const race = getRaceBySlug(slug);

  if (!race) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-3xl font-semibold">{race.name}</h1>
      <p className="mt-2 text-zinc-400">{race.faction}</p>
      <p className="mt-2 text-zinc-400">{race.summary}</p>
    </main>
  );
}

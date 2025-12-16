"use client";

import { useState, useMemo } from "react";
import type { Metadata } from "next";

const ripData = [
  { deceased: "Alex Torres", mentionedBy: ["Maxx Hudec"] },
  { deceased: "Alli Deily", mentionedBy: ["Jillian Rae Rosenberg"] },
  { deceased: "Andrew Tenn", mentionedBy: ["Anj Jones"] },
  { deceased: "Andy Staatemeier", mentionedBy: ["Nathaniel Redmond"] },
  { deceased: "Antoinette", mentionedBy: ["Anj Jones", "Maxx Hudec"] },
  { deceased: "Aubrey Grace", mentionedBy: ["Stephanie Brown"] },
  { deceased: "Beau Foster", mentionedBy: ["Damien Paatterson"] },
  { deceased: "Betty Petterson", mentionedBy: ["Ashe Elizabeth"] },
  { deceased: "Billy Hennefer", mentionedBy: ["Bianca Crawford Hennefer", "Neil Daly"] },
  { deceased: "Billy Ray Hennefer", mentionedBy: ["Bianca Crawford Hennefer"] },
  { deceased: "Bobby Rist", mentionedBy: ["Steven Gaddis JR"] },
  { deceased: "Brandon Kuhner", mentionedBy: ["Stephanie Brown"] },
  { deceased: "Brian Sharp", mentionedBy: ["Desiree Argento"] },
  { deceased: "Bruce Craig", mentionedBy: ["Unknown"] },
  { deceased: "Bum Chuck aka Charles", mentionedBy: ["Maxx Hudec"] },
  { deceased: "Camille", mentionedBy: ["Maxx Hudec"] },
  { deceased: "Chad Thompson", mentionedBy: ["Neil Daly", "Stephanie Brown"] },
  { deceased: "Christopher Kangas", mentionedBy: ["Hotlapracinginc Mulligan"] },
  { deceased: "Chris Scott", mentionedBy: ["Eric Dodge"] },
  { deceased: "Cory Wood", mentionedBy: ["Stephanie Brown"] },
  { deceased: "Crystal Grauke", mentionedBy: ["Lucia Lowrance"] },
  { deceased: "Dale Patton", mentionedBy: ["Shelene Haddy"] },
  { deceased: "Damien Paatterson", mentionedBy: ["Unknown"] },
  { deceased: "Danny Bonilla", mentionedBy: ["Ryan D O Ty"] },
  { deceased: "Danny Mex", mentionedBy: ["Maxx Hudec"] },
  { deceased: "Danny Muñoz", mentionedBy: ["Eric Quintero"] },
  { deceased: "David Santos", mentionedBy: ["Bianca Crawford Hennefer", "Lucia Lowrance"] },
  { deceased: "Dean Patton", mentionedBy: ["Shelene Haddy"] },
  { deceased: "Dennis Patton", mentionedBy: ["Shelene Haddy"] },
  { deceased: "Derek Snelling", mentionedBy: ["Noah Lovato"] },
  { deceased: "Dirty Greg", mentionedBy: ["Stephanie Brown", "Steven Gaddis JR"] },
  { deceased: "DJ. Ferguson", mentionedBy: ["Mikey Hescock"] },
  { deceased: "Donna Champeau", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Eileen Pelt", mentionedBy: ["Amanda Stephens"] },
  { deceased: "Emilio Lozada", mentionedBy: ["Steven Gaddis JR"] },
  { deceased: "Erin Jahn", mentionedBy: ["Laura Ramirez"] },
  { deceased: "Gavin Brantley", mentionedBy: ["Maxx Hudec"] },
  { deceased: "Gene Elliot", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Grant Bandy", mentionedBy: ["Mikey Hescock"] },
  { deceased: "Harry Petterson", mentionedBy: ["Ashe Elizabeth"] },
  { deceased: "Hoss", mentionedBy: ["Noah Lovato"] },
  { deceased: "Janice Nyholm", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Jason", mentionedBy: ["Bianca Crawford Hennefer"] },
  { deceased: "Jason Vian", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Jessie Purkey", mentionedBy: ["Bianca Crawford Hennefer"] },
  { deceased: "Joey (may they find his killer)", mentionedBy: ["Neil Daly"] },
  { deceased: "John", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Johnny Soto", mentionedBy: ["Lucia Lowrance"] },
  { deceased: "John Johnston", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Josh Johnston", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Josh KAST", mentionedBy: ["Shaylyn Kelly"] },
  { deceased: "Josh Proud", mentionedBy: ["Maxx Hudec"] },
  { deceased: "Julian Moran", mentionedBy: ["Anj Jones"] },
  { deceased: "Larry Hensley", mentionedBy: ["Stephanie Brown"] },
  { deceased: "Larry Terronez", mentionedBy: ["Keith Hepburn"] },
  { deceased: "Lee Thompson", mentionedBy: ["Lucia Lowrance"] },
  { deceased: "Leslie Elias", mentionedBy: ["Nathaniel Redmond"] },
  { deceased: "Levi Rist", mentionedBy: ["Desiree Argento", "Steven Gaddis JR"] },
  { deceased: "Lori Palacio", mentionedBy: ["Shelene Haddy"] },
  { deceased: "Loren Bottomley", mentionedBy: ["Noah Lovato"] },
  { deceased: "Lucia Lowrance", mentionedBy: ["Laura Ramirez"] },
  { deceased: "Margene", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Mark Bofenkamp", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Matthew Richards", mentionedBy: ["Laura Ramirez"] },
  { deceased: "Mike Mack", mentionedBy: ["Shelene Haddy"] },
  { deceased: "Nancy Downes", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Pam Beck", mentionedBy: ["Stephanie Brown"] },
  { deceased: "Papa Joe Jo Linhares", mentionedBy: ["Maxx Hudec"] },
  { deceased: "Paul Scott", mentionedBy: ["Eric Dodge", "Eric Quintero"] },
  { deceased: "Peter Derkin", mentionedBy: ["Shane Slattery"] },
  { deceased: "Pete Drainville", mentionedBy: ["Josh Kezy"] },
  { deceased: "Pete Vadonic", mentionedBy: ["Bianca Crawford Hennefer"] },
  { deceased: "Phillip Dave \"Goosebee\"", mentionedBy: ["Maxx Hudec"] },
  { deceased: "Ralph Fletcher", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Ricky Bonilla", mentionedBy: ["Ryan D O Ty"] },
  { deceased: "Robert Forbes", mentionedBy: ["Mikey Hescock"] },
  { deceased: "Robert McGrath", mentionedBy: ["Damien Paatterson", "Lucia Lowrance"] },
  { deceased: "Robert Taylor", mentionedBy: ["Eric Dodge"] },
  { deceased: "Rob Masson", mentionedBy: ["Stephanie Brown"] },
  { deceased: "Roger Elliott", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Ron Hall Jr.", mentionedBy: ["Derick Casper"] },
  { deceased: "Scott Burnett", mentionedBy: ["Jennifer Johnson"] },
  { deceased: "Sharon Brady", mentionedBy: ["Mikey Hescock"] },
  { deceased: "Sharon Davis", mentionedBy: ["Shelene Haddy"] },
  { deceased: "Shaun Callahan", mentionedBy: ["Zac Patton"] },
  { deceased: "Shawn West", mentionedBy: ["Mark Bowden"] },
  { deceased: "Skip Jones \"Popz\"", mentionedBy: ["Anj Jones"] },
  { deceased: "Stu Stewart", mentionedBy: ["Ryan Myers"] },
  { deceased: "Tammy Oliver", mentionedBy: ["Nathaniel Redmond"] },
  { deceased: "Thea Stratton", mentionedBy: ["Lucia Lowrance"] },
  { deceased: "Tommy Gee", mentionedBy: ["Shane Slattery"] },
  { deceased: "Tony Torres", mentionedBy: ["Bianca Crawford Hennefer"] },
  { deceased: "Travis Lewis", mentionedBy: ["Amanda Stephens", "Unknown"] },
  { deceased: "Travis Pate", mentionedBy: ["Maxx Hudec", "Neil Daly"] },
  { deceased: "Trevor Downes aka \"Irish\"", mentionedBy: ["Maxx Hudec"] },
  { deceased: "Warren Johnson", mentionedBy: ["Brian Bofenkamp"] },
  { deceased: "Wesley Newell", mentionedBy: ["Stephanie Brown"] },
];

// Sort alphabetically by deceased name
const sortedData = [...ripData].sort((a, b) =>
  a.deceased.localeCompare(b.deceased)
);

export default function RIPPage() {
  const [search, setSearch] = useState("");

  const filteredData = useMemo(() => {
    if (!search.trim()) return sortedData;
    const term = search.toLowerCase();
    return sortedData.filter(
      (entry) =>
        entry.deceased.toLowerCase().includes(term) ||
        entry.mentionedBy.some((name) => name.toLowerCase().includes(term))
    );
  }, [search]);

  return (
    <div className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
          Private Notes
        </p>
        <h1 className="mt-2 text-4xl text-[#0f2e24]">RIP Podcast Memorial</h1>
        <p className="mt-4 text-base text-[#1f4e3c]">
          Remembering those mentioned by our community. {sortedData.length}{" "}
          names honored.
        </p>

        <div className="mt-6">
          <input
            type="text"
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-[#c9dfcf] bg-white/80 px-5 py-3 text-sm text-[#1f4e3c] placeholder-[#5da37c]/60 outline-none focus:border-[#5da37c] focus:ring-2 focus:ring-[#5da37c]/20"
          />
        </div>

        {search && (
          <p className="mt-3 text-sm text-[#5da37c]">
            Showing {filteredData.length} of {sortedData.length} entries
          </p>
        )}
      </section>

      <section className="panel p-8">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filteredData.map((entry, idx) => (
            <article
              key={`${entry.deceased}-${idx}`}
              className="rounded-2xl border border-[#c9dfcf] bg-white/70 p-4 transition hover:bg-white/90"
            >
              <p className="font-semibold text-[#0f2e24]">{entry.deceased}</p>
              <p className="mt-1 text-xs text-[#5da37c]">
                Mentioned by:{" "}
                <span className="text-[#1f4e3c]">
                  {entry.mentionedBy.join(", ")}
                </span>
              </p>
            </article>
          ))}
        </div>

        {filteredData.length === 0 && (
          <p className="text-center text-sm text-[#5da37c]">
            No matches found for &ldquo;{search}&rdquo;
          </p>
        )}
      </section>
    </div>
  );
}


import { GuestForm } from "@/components/forms/GuestForm";
import { SupportButton } from "@/components/SupportButton";

export const revalidate = 300;

const episodes = [
  {
    episode: 27,
    title: "Matt Collins",
    description:
      "Ryan and Nathaniel welcome Matt Collins to discuss the journey of starting his new insulation business, Mountain Insulation, the challenges faced, and the importance of community support.",
    date: "January 09, 2026",
    duration: "1:28:20",
    status: "complete",
  },
  {
    episode: 26,
    title: "Elizabeth McGuire",
    description:
      "Ryan interviews Elizabeth McGuire, who shares her journey from England to Grass Valley, her relationship with Walter Anderson, and the challenges they face in life and recovery.",
    date: "January 09, 2026",
    duration: "1:26:06",
    status: "complete",
  },
  {
    episode: 25,
    title: "Ryan Doty",
    description:
      "Ryan explores the theme of battling inner demons, emphasizing the importance of mental health and spiritual warfare. He discusses the necessity of community support, the power of love, and the role of positive thinking.",
    date: "January 09, 2026",
    duration: "1:27:07",
    status: "complete",
  },
  {
    episode: 24,
    title: "Ryan Doty",
    description:
      "Ryan shares personal reflections on dealing with haters, the importance of self-care, and the need for discernment in life. He emphasizes the significance of letting go of negativity and focusing on what matters.",
    date: "January 09, 2026",
    duration: "48:44",
    status: "complete",
  },
  {
    episode: 23,
    title: "Ryan & Ocean Doty",
    description:
      "Ryan reflects on the New Year, sharing personal updates and thoughts on the past year. He delves into the history and significance of the Nisenan Tribe, expressing a desire to learn more about their culture.",
    date: "January 09, 2026",
    duration: "1:23:31",
    status: "complete",
  },
  {
    episode: 22,
    title: "Christmas Episode",
    description:
      "Ryan and Nathaniel celebrate the Christmas spirit by sharing personal stories, discussing community engagement, and reflecting on nostalgic holiday memories. They emphasize the importance of togetherness.",
    date: "January 09, 2026",
    duration: "1:27:19",
    status: "complete",
  },
  {
    episode: 21,
    title: "Tyler Ullom",
    description:
      "Ryan and guest cohost Tyler Ullom reflect on their past interactions, emphasizing personal growth, the importance of self-reflection, and the impact of their community. They discuss their creative endeavors in music.",
    date: "December 22, 2025",
    duration: "1:14:13",
    status: "complete",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/tylerullom.m4wm/" },
      {
        label: "YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_k4SfLhB1upNsFiQIErcIiHdZZZ6YptQHg",
      },
    ],
  },
  {
    episode: 20,
    title: "Theo Lang & Gary Pate",
    description:
      "Ryan and guest cohost Gary Pate engage in a lively discussion about skateboarding culture, personal experiences, and the revival of local skate communities. They introduce their guest, Theo Lang.",
    date: "December 22, 2025",
    duration: "1:13:14",
    status: "complete",
  },
  {
    episode: 19,
    title: "Ryan Jensen",
    description:
      "Ryan Jensen shares his journey from Daly City to Grass Valley, reflecting on his experiences at the Five Mile House, his passion for cooking, and the importance of community and connection.",
    date: "December 20, 2025",
    duration: "1:50:55",
    status: "complete",
  },
  {
    episode: 18,
    title: "Ryan Durham",
    description:
      "In this heartfelt episode with special guest cohost Ryan Durham, Ryan Doty shares his emotional journey through a recent court experience. Their discussion emphasizes the importance of family support and community love.",
    date: "December 19, 2025",
    duration: "1:09:45",
    status: "complete",
  },
  {
    episode: 17,
    title: "Maxx Hudec",
    description:
      "Ryan and Nathaniel welcome Maxx Hudec, a local entrepreneur and gold mining expert. They discuss Maxx's journey in the gold mining industry, the importance of environmental stewardship, and local history.",
    date: "December 17, 2025",
    duration: "2:29:39",
    status: "complete",
  },
  {
    episode: 16,
    title: "RIP - Memorial Episode",
    description:
      "Ryan reflects on the lives lost to substance abuse, violence, or cancer, sharing personal stories and urging listeners to cherish life and support one another. He emphasizes the importance of community involvement.",
    date: "December 17, 2025",
    duration: "2:06:41",
    status: "complete",
  },
  {
    episode: 15,
    title: "Frank Raucho",
    description:
      "Frank Raucho takes center stage alongside cohosts Ryan and Nathaniel. Frank, known for his insightful recovery podcast and active involvement with Project Heart in Grass Valley, shares his personal journey of recovery.",
    date: "December 13, 2025",
    duration: "2:22:10",
    status: "complete",
  },
  {
    episode: 14,
    title: "Mayor Hilary Hodge",
    description:
      "Ryan and Nathaniel interview Mayor Hilary Hodge of Grass Valley, exploring her journey into politics, the intricacies of local governance, and the importance of community engagement.",
    date: "December 12, 2025",
    duration: "1:16:10",
    status: "complete",
  },
  {
    episode: 13,
    title: "Nathan and Megan Lopez",
    description:
      "This conversation explores the profound journey of recovery from addiction, highlighting the impact of loss and grief on the path to sobriety. Nathan and Megan Lopez share their personal stories and challenges.",
    date: "December 11, 2025",
    duration: "1:56:30",
    status: "complete",
  },
  {
    episode: 12,
    title: "Brodie Farber",
    description:
      "Ryan, Nathaniel, and Brodie delve into Brodie's journey from a small-town fighter to making it to the UFC. They discuss Brodie's early influences, his training experiences, and the challenges he faced.",
    date: "December 11, 2025",
    duration: "1:31:00",
    status: "complete",
  },
  {
    episode: 11,
    title: "Ashley Davis",
    description:
      "We sit down with Ashley Davis, a dedicated nurse at Sierra Nevada Memorial Hospital, to explore the intersection of healthcare and community in Grass Valley. Ashley shares insights into healthcare management challenges.",
    date: "December 10, 2025",
    duration: "1:25:09",
    status: "complete",
  },
  {
    episode: 10,
    title: "Barbara Sadie Pacheco Bishop",
    description:
      "Host Ryan welcomes Barbara Sadie Pacheco Bishop, who shares her remarkable life story. Born in 1923 in Paso Robles, California, Barbara recounts her early years and childhood experiences.",
    date: "December 09, 2025",
    duration: "1:20:33",
    status: "complete",
  },
  {
    episode: 9,
    title: "Elora Sofia",
    description:
      "Young author Elora Sofia shares her inspiring journey as a writer and illustrator. Starting her creative path at the age of nine, Elora discusses her fantasy series, Guardians of Felina.",
    date: "December 09, 2025",
    duration: "45:24",
    status: "complete",
  },
  {
    episode: 8,
    title: "Nick Doty",
    description:
      "Ryan and his cousin Nick Doty explore various themes including their shared experiences growing up in Grass Valley, the role of music in mental health, and the impact of AI on creativity.",
    date: "December 07, 2025",
    duration: "2:31:22",
    status: "complete",
  },
  {
    episode: 7,
    title: "Ryan Durham aka Big Daddy Salsa",
    description:
      "The hosts engage in a lively conversation with special guest Ryan Durham aka Big Daddy Salsa. They explore his musical journey, the impact of AI on music creation, and the importance of community.",
    date: "December 05, 2025",
    duration: "2:02:12",
    status: "complete",
    links: [{ label: "Website", url: "https://bigdaddyssalsa.com/" }],
  },
  {
    episode: 6,
    title: "Mark Bowden",
    description:
      "Ryan and Nathaniel welcome Mark Bowden, who shares his inspiring journey of overcoming adversity and finding purpose through drifting. The conversation delves into the importance of mentorship and community.",
    date: "December 03, 2025",
    duration: "1:45:41",
    status: "complete",
    links: [{ label: "Instagram", url: "https://www.instagram.com/3k_drift_/" }],
  },
  {
    episode: 5,
    title: "James Maple",
    description:
      "Host Ryan interviews musician James Maple, who shares his journey of starting a music studio with his partner Cozy. They discuss their roots in Grass Valley and the release of their album.",
    date: "December 03, 2025",
    duration: "1:39:28",
    status: "complete",
  },
  {
    episode: 4,
    title: "Tyler Ullom",
    description:
      "Ryan and Nathaniel welcome Tyler Ullom, a beloved member of the Grass Valley community. They reminisce about their childhood, the friendships formed, and the challenges faced growing up.",
    date: "December 02, 2025",
    duration: "1:00:13",
    status: "complete",
    links: [
      { label: "Instagram", url: "https://www.instagram.com/tylerullom.m4wm/" },
      {
        label: "YouTube Music",
        url: "https://music.youtube.com/playlist?list=OLAK5uy_k4SfLhB1upNsFiQIErcIiHdZZZ6YptQHg",
      },
    ],
  },
  {
    episode: 3,
    title: "Gary Pate",
    description:
      "The hosts reflect on their Thanksgiving experiences, introduce their guest Gary Pate, and delve into the local skateboarding community, discussing its history and impact on Grass Valley.",
    date: "December 01, 2025",
    duration: "1:33:12",
    status: "complete",
  },
  {
    episode: 2,
    title: "Episode 2",
    description:
      "Ryan and Nathaniel share personal stories, including the adventures of Ryan's special dog, Patty, and the challenges of caring for family members with dementia. They discuss future plans for the podcast.",
    date: "December 01, 2025",
    duration: "1:50:40",
    status: "complete",
  },
  {
    episode: 1,
    title: "Episode 1",
    description:
      "In the inaugural episode, hosts Ryan Doty and Nathaniel Redmond introduce their vision for the show, which aims to explore local history, personal stories, and community engagement in Grass Valley.",
    date: "December 01, 2025",
    duration: "1:33:24",
    status: "complete",
  },
];

type Episode = (typeof episodes)[number];

function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <article className="panel flex flex-col gap-4 p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#1f4a3a] text-sm font-bold text-white">
          {episode.episode}
        </span>
        <div className="flex items-center gap-2 text-xs text-[#5da37c]">
          <span>{episode.date}</span>
          <span>·</span>
          <span>{episode.duration}</span>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#0f2e24]">{episode.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#2c6150]">
          {episode.description}
        </p>
      </div>
      {episode.links && episode.links.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {episode.links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[#cfe3d3] px-3 py-1 text-xs font-medium text-[#1f4a3a] transition hover:bg-[#e3f3ec]"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      <div className="mt-auto flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#6dac87]">
          Released
        </span>
        <span className="text-lg text-[#2f6b4e]">✓</span>
      </div>
    </article>
  );
}

export default async function GuestsPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="panel p-8">
        <p className="text-xs uppercase tracking-[0.4em] text-[#5da37c]">
          All Episodes
        </p>
        <h1 className="mt-2 text-4xl text-[#0f2e24]">
          Podcast Episodes & Guests
        </h1>
        <p className="mt-4 text-sm text-[#2c6150]">
          Meet the people sharing their stories on Welcome to Grass Valley.
          {episodes.length} episodes and counting!
        </p>
      </section>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {episodes.map((episode) => (
          <EpisodeCard key={episode.episode} episode={episode} />
        ))}
      </section>

      <section className="panel p-6 text-center">
        <p className="text-sm text-[#5da37c] italic">
          ...{episodes.length} episodes so far and counting!
        </p>
      </section>

      <section className="panel flex flex-col items-center gap-4 bg-[#e3f3ec] p-8 text-center">
        <p className="text-lg font-medium text-[#1f4a3a]">
          💡 We need elderly guests! They are always the best and have lived
          longer than us!
        </p>
        <p className="text-sm text-[#2c6150]">
          Help keep these stories on the air by supporting the show.
        </p>
        <SupportButton variant="primary" className="mt-2">
          Support the Show
        </SupportButton>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="panel p-6">
          <h2 className="text-2xl text-[#0f2e24]">Suggest a Guest</h2>
          <p className="mt-4 text-sm text-[#2c6150]">
            Know someone with a great story? Let us know! We&apos;re always
            looking for interesting people from the Grass Valley community.
          </p>
        </div>
        <GuestForm />
      </section>
    </div>
  );
}

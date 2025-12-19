import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Definitely Not a Diddy Page",
  description: "Nothing to see here. Move along.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const names = [
  { name: "Puffy", year: "Childhood", note: "Named for huffing and puffing when angry" },
  { name: "Puff Daddy", year: "1995-2001", note: "Sounding like a rejected porn alias" },
  { name: "P. Diddy", year: "2001", note: "That period was for dramatic pauses" },
  { name: "Diddy", year: "2005", note: "The 'P' was 'coming between him and his fans'" },
  { name: "P. Diddy", year: "UK Only", note: "Lost lawsuit to British DJ 'Diddy' Dearlove" },
  { name: "Sean John", year: "2008", note: "Wanted to be called his clothing brand name" },
  { name: "Swag", year: "2011", note: "Lasted ONE WEEK. Created a special Twitter account." },
  { name: "Puff Daddy", year: "2014", note: "Back to basics (again)" },
  { name: "Brother Love", year: "2017", note: "WWE's Bruce Pritchard: 'Find a new gimmick'" },
  { name: "Baby Oil Baron", year: "2024+", note: "Courtesy of the federal government" },
];

const celebrities = [
  {
    name: "Will Smith",
    quote: "I don't have sh*t to do with Puffy... I ain't been nowhere near no damn freak-off... I don't even like baby oil.",
    context: "December 2024 concert",
  },
  {
    name: "Ashton Kutcher",
    quote: "I've got a lot I can't tell... Can't tell that one either... Diddy party stories, man...",
    context: "2019 Hot Ones (went viral post-arrest)",
  },
  {
    name: "Usher",
    quote: "Hell no.",
    context: "When asked if he'd send his kids to 'Puffy's Flavor Camp' (he lived there at 14)",
  },
  {
    name: "Dame Dash",
    quote: "I didn't go to those parties. I went to one in the Hamptons about 20 years ago with Aaliyah and that's about it.",
    context: "Immediate distancing",
  },
  {
    name: "Kesha",
    quote: "Wake up in the morning like f**k P. Diddy",
    context: "Permanent lyric change debuted at Coachella 2024",
  },
];

const memes = [
  "'No Diddy' — new slang replacing 'no homo'",
  "50 Cent's AI-generated 'Diddy Oil' products on Instagram",
  "600+ Roblox games including 'Survive Diddy' and 'Diddy Party' simulators",
  "'When you at Diddy party and that Unreleased Ciroc start kicking in'",
  "'Getting invited to a Diddy party and finding out you the hoes'",
  "Gabriel Iglesias' baby oil TikTok — 1.4 million likes",
  "#diddy on TikTok — 1.1 billion+ views",
  "Diddy staring meme format (sleep paralysis demon energy)",
];

const raidInventory = [
  { item: "Baby Oil", count: "~200 bottles", icon: "🧴" },
  { item: "Astroglide", count: "~900 bottles", icon: "💧" },
  { item: "AR-15s", count: "3 (serials scratched off)", icon: "🔫" },
  { item: "Controlled Substances", count: "MDMA, Cocaine, Ketamine, GHB", icon: "💊" },
  { item: "Psilocybin Mushrooms", count: "Labeled 'Golden Teachers'", icon: "🍄" },
  { item: "Weed Box", count: "Labeled 'Diddy'", icon: "🌿" },
  { item: "Prescription", count: "Made out to 'Frank Black' (alias)", icon: "📝" },
  { item: "Erectile Supplements", count: "'Vital Honey' brand", icon: "🍯" },
  { item: "Men's Black Hair Dye", count: "Multiple boxes", icon: "🎨" },
  { item: "Mirror Affirmations", count: "'You a legend' 'You're an icon Puff Daddy'", icon: "🪞" },
];

export default function DiddyPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a20 50%, #0a0a0a 100%)",
        color: "#fff",
        fontFamily: "system-ui, -apple-system, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Scanlines overlay */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)",
          pointerEvents: "none",
          zIndex: 1000,
        }}
      />

      {/* Breaking News Ticker */}
      <div
        style={{
          background: "linear-gradient(90deg, #ff0040, #ff0080, #ff0040)",
          padding: "8px 0",
          overflow: "hidden",
          borderBottom: "3px solid #ffd700",
        }}
      >
        <div
          style={{
            display: "flex",
            animation: "ticker 30s linear infinite",
            whiteSpace: "nowrap",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} style={{ marginRight: "100px", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "2px" }}>
              🚨 BREAKING: 1,000+ BOTTLES SEIZED 🚨 BAIL DENIED 4 TIMES 🚨 "COSTCO DOESN&apos;T SELL BABY OIL" 🚨 
              128 CALLS TO ONE WITNESS IN 4 DAYS 🚨 FROM PUFF DADDY TO THE DIDDLER 🚨 
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 10px #ff0080, 0 0 20px #ff0080, 0 0 30px #ff0080; }
          50% { text-shadow: 0 0 20px #ffd700, 0 0 30px #ffd700, 0 0 40px #ffd700; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        @keyframes slideIn {
          from { transform: translateX(-100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>

      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px", position: "relative", zIndex: 1 }}>
        
        {/* Main Header */}
        <header style={{ textAlign: "center", marginBottom: "60px" }}>
          <div
            style={{
              display: "inline-block",
              background: "#ffd700",
              color: "#000",
              padding: "4px 20px",
              fontWeight: "bold",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              marginBottom: "20px",
              transform: "rotate(-2deg)",
            }}
          >
            🔥 EXCLUSIVE ROAST MATERIAL 🔥
          </div>
          
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: "900",
              textTransform: "uppercase",
              lineHeight: "0.9",
              margin: "0 0 20px 0",
              animation: "glow 3s ease-in-out infinite",
            }}
          >
            THE BABY OIL<br />
            <span style={{ color: "#ff0080" }}>BARON</span>
          </h1>
          
          <p style={{ fontSize: "1.2rem", color: "#888", maxWidth: "600px", margin: "0 auto 30px" }}>
            From &quot;I&apos;ll Be Missing You&quot; to everyone missing the non-felon Diddy. 
            A comprehensive guide to the roasts, memes, and absolute chaos.
          </p>

          {/* Oil Counter */}
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)",
              border: "3px solid #ff0080",
              borderRadius: "10px",
              padding: "20px 40px",
              boxShadow: "0 0 30px rgba(255, 0, 128, 0.3)",
            }}
          >
            <div style={{ fontSize: "0.7rem", letterSpacing: "3px", color: "#ff0080", marginBottom: "5px" }}>
              BOTTLES SEIZED IN FEDERAL RAID
            </div>
            <div style={{ fontSize: "4rem", fontWeight: "900", fontFamily: "monospace", color: "#ffd700" }}>
              1,000+
            </div>
            <div style={{ fontSize: "0.8rem", color: "#666" }}>
              (200 Baby Oil + 900 Astroglide — humidity-controlled like fine cigars)
            </div>
          </div>
        </header>

        {/* Katt Williams Section */}
        <section
          style={{
            background: "linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 0, 128, 0.1))",
            border: "2px solid #ffd700",
            borderRadius: "15px",
            padding: "30px",
            marginBottom: "40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
            <span style={{ fontSize: "2rem" }}>🎤</span>
            <h2 style={{ margin: 0, color: "#ffd700", fontSize: "1.5rem" }}>KATT WILLIAMS CALLED IT</h2>
          </div>
          <blockquote
            style={{
              fontSize: "1.3rem",
              fontStyle: "italic",
              borderLeft: "4px solid #ff0080",
              paddingLeft: "20px",
              margin: "0 0 15px 0",
              color: "#fff",
            }}
          >
            &quot;Not 1,000 bottles of baby oil, Jesus! It ain&apos;t that much ashy in the world... 
            They put the drugs in the baby oil. You think you getting a massage, b****, you can&apos;t even get up. 
            <span style={{ color: "#ffd700", fontWeight: "bold" }}> That&apos;s why God gave me eczema, I can&apos;t even use baby oil.</span>&quot;
          </blockquote>
          <p style={{ color: "#888", fontSize: "0.9rem", margin: 0 }}>
            — Katt Williams, post-arrest. Also predicted the downfall on Club Shay Shay in January 2024.
          </p>
        </section>

        {/* Chappelle Section */}
        <section
          style={{
            background: "rgba(255, 255, 255, 0.03)",
            border: "1px solid #333",
            borderRadius: "15px",
            padding: "30px",
            marginBottom: "40px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "15px" }}>
            <span style={{ fontSize: "2rem" }}>🎭</span>
            <h2 style={{ margin: 0, color: "#ff0080", fontSize: "1.5rem" }}>DAVE CHAPPELLE&apos;S SNL MONOLOGUE</h2>
          </div>
          <blockquote
            style={{
              fontSize: "1.2rem",
              fontStyle: "italic",
              borderLeft: "4px solid #ff0080",
              paddingLeft: "20px",
              margin: "0 0 15px 0",
            }}
          >
            &quot;Can you imagine if you were me reading a newspaper and found out everyone in Hollywood had an orgy behind your back? 
            <span style={{ color: "#ffd700" }}>I look like I&apos;ll tell.</span> The last thing you wanna see at the orgy is me looking across at you.&quot;
          </blockquote>
          <p style={{ color: "#888", marginBottom: "15px" }}>On the 1,000 bottles:</p>
          <blockquote
            style={{
              fontSize: "1.1rem",
              fontStyle: "italic",
              borderLeft: "4px solid #ffd700",
              paddingLeft: "20px",
              margin: 0,
            }}
          >
            &quot;If you&apos;re 55 with 1,000 bottles, you committed—can&apos;t stop, won&apos;t stop. I never threw out an empty baby oil bottle. 
            Who uses that much? Not illegal... but if he used Crisco, he&apos;d have gotten away—&apos;He just likes to cook.&apos;&quot;
          </blockquote>
        </section>

        {/* Crime Scene Tape Divider */}
        <div
          style={{
            background: "repeating-linear-gradient(45deg, #ffd700, #ffd700 10px, #000 10px, #000 20px)",
            height: "30px",
            margin: "50px 0",
            transform: "rotate(-1deg)",
          }}
        />

        {/* Name Changes Timeline */}
        <section style={{ marginBottom: "50px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2rem",
              color: "#ff0080",
              marginBottom: "10px",
              textTransform: "uppercase",
              letterSpacing: "3px",
            }}
          >
            🎭 Identity Crisis Timeline 🎭
          </h2>
          <p style={{ textAlign: "center", color: "#888", marginBottom: "30px" }}>
            Nothing screams &quot;stable genius&quot; like 9+ rebrands from a guy dodging his own shadow
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {names.map((item, index) => (
              <div
                key={item.name + index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  padding: "15px 20px",
                  background: index === names.length - 1 
                    ? "linear-gradient(90deg, rgba(255, 0, 128, 0.2), rgba(255, 215, 0, 0.2))"
                    : "rgba(255, 255, 255, 0.03)",
                  borderRadius: "10px",
                  border: index === names.length - 1 ? "2px solid #ff0080" : "1px solid #222",
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: index === names.length - 1 ? "#ff0080" : "#333",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "bold",
                    fontSize: "0.8rem",
                    flexShrink: 0,
                  }}
                >
                  {index + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: "bold", fontSize: "1.1rem", color: index === names.length - 1 ? "#ffd700" : "#fff" }}>
                    {item.name}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "#888" }}>{item.note}</div>
                </div>
                <div style={{ fontSize: "0.75rem", color: "#666", textAlign: "right" }}>{item.year}</div>
              </div>
            ))}
          </div>
        </section>

        {/* The Lawyer's Defense */}
        <section
          style={{
            background: "linear-gradient(135deg, #1a0a0a, #2a0a15)",
            border: "2px solid #ff0040",
            borderRadius: "15px",
            padding: "30px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#ff0040", marginBottom: "20px" }}>💀 THE LAWYER&apos;S LEGENDARY DEFENSE 💀</h2>
          <blockquote style={{ fontSize: "1.3rem", fontStyle: "italic", margin: "0 0 15px 0" }}>
            &quot;He has a big house, he buys in bulk. I think they have Costcos in every place where he has a home.&quot;
          </blockquote>
          <p style={{ color: "#888", marginBottom: "20px" }}>Then added, not realizing how bad it sounded:</p>
          <blockquote style={{ fontSize: "1.2rem", fontStyle: "italic", color: "#ffd700", margin: "0 0 20px 0" }}>
            &quot;One bottle of baby oil goes a long way. I don&apos;t know what you&apos;d even need 1,000 for.&quot;
          </blockquote>
          <div
            style={{
              background: "#000",
              padding: "15px",
              borderRadius: "10px",
              border: "1px solid #ffd700",
            }}
          >
            <p style={{ color: "#ffd700", fontWeight: "bold", margin: 0, fontSize: "1.1rem" }}>
              🛒 COSTCO CLAPPED BACK: &quot;We don&apos;t even sell baby oil.&quot;
            </p>
          </div>
        </section>

        {/* Raid Inventory */}
        <section style={{ marginBottom: "50px" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "1.8rem",
              color: "#ffd700",
              marginBottom: "30px",
              textTransform: "uppercase",
            }}
          >
            📦 Federal Raid Inventory 📦
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "15px",
            }}
          >
            {raidInventory.map((item) => (
              <div
                key={item.item}
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid #333",
                  borderRadius: "10px",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <span style={{ fontSize: "1.8rem" }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: "bold", color: "#fff" }}>{item.item}</div>
                  <div style={{ fontSize: "0.8rem", color: "#888" }}>{item.count}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Crime Scene Tape Divider */}
        <div
          style={{
            background: "repeating-linear-gradient(-45deg, #ffd700, #ffd700 10px, #000 10px, #000 20px)",
            height: "30px",
            margin: "50px 0",
            transform: "rotate(1deg)",
          }}
        />

        {/* Freak-Off Section */}
        <section
          style={{
            background: "linear-gradient(180deg, rgba(138, 43, 226, 0.1), rgba(75, 0, 130, 0.2))",
            border: "2px solid #8a2be2",
            borderRadius: "15px",
            padding: "30px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ color: "#8a2be2", marginBottom: "20px", textAlign: "center" }}>
            🎪 THE &quot;FREAK-OFFS&quot;: ACCORDING TO FEDERAL INDICTMENT 🎪
          </h2>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {[
              "Multi-day 'produced sex performances' that Diddy 'arranged, directed, masturbated during, and often electronically recorded'",
              "Staff stocked rooms with: controlled substances, baby oil, lubricant, extra linens, and special lighting",
              "Post-marathon IV fluids to 'recover' (hangover cure from hell)",
              "Exotic dancer 'The Punisher' testified Diddy wore a religious face covering during sessions — eyes only visible",
              "Humidity-controlled storage for the baby oil collection (like fine cigars)",
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  padding: "12px 0",
                  borderBottom: i < 4 ? "1px solid rgba(138, 43, 226, 0.3)" : "none",
                  color: "#ddd",
                }}
              >
                <span style={{ color: "#8a2be2", marginRight: "10px" }}>▸</span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* More Comedian Quotes */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ textAlign: "center", color: "#ff0080", marginBottom: "30px" }}>
            🎤 MORE COMEDIAN TAKEDOWNS 🎤
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "15px", padding: "25px", border: "1px solid #333" }}>
              <div style={{ fontWeight: "bold", color: "#ff0080", marginBottom: "10px" }}>Nikki Glaser (Golden Globes)</div>
              <blockquote style={{ margin: 0, fontStyle: "italic", color: "#ddd" }}>
                &quot;Challengers was more sexually charged than Diddy&apos;s credit card... 
                Afterparty sucks this year—no baby oil, just olive oil. It&apos;s a &apos;Stanley Tucci freak-off.&apos;&quot;
              </blockquote>
            </div>
            
            <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "15px", padding: "25px", border: "1px solid #333" }}>
              <div style={{ fontWeight: "bold", color: "#ffd700", marginBottom: "10px" }}>Kevin Hart (BET Awards)</div>
              <blockquote style={{ margin: 0, fontStyle: "italic", color: "#ddd" }}>
                &quot;No after-parties! That&apos;s where sh** gets slippery. 
                We&apos;re learning a lot about people—take your a** home.&quot;
              </blockquote>
            </div>
            
            <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "15px", padding: "25px", border: "1px solid #333" }}>
              <div style={{ fontWeight: "bold", color: "#8a2be2", marginBottom: "10px" }}>SNL&apos;s Michael Che (Weekend Update)</div>
              <blockquote style={{ margin: 0, fontStyle: "italic", color: "#ddd" }}>
                &quot;The U.S. added 245,000 new jobs. Unfortunately, they were all &apos;Diddy accusers.&apos;&quot;
              </blockquote>
            </div>
            
            <div style={{ background: "rgba(255, 255, 255, 0.03)", borderRadius: "15px", padding: "25px", border: "1px solid #333" }}>
              <div style={{ fontWeight: "bold", color: "#00bfff", marginBottom: "10px" }}>SNL&apos;s Colin Jost (on Royals)</div>
              <blockquote style={{ margin: 0, fontStyle: "italic", color: "#ddd" }}>
                &quot;Prince Harry and William didn&apos;t go—although before Diddy could even finish writing the invite, 
                Prince Andrew was there.&quot;
              </blockquote>
            </div>
          </div>
        </section>

        {/* Celebrity Flee Zone */}
        <section
          style={{
            background: "linear-gradient(135deg, rgba(0, 100, 0, 0.1), rgba(0, 50, 0, 0.2))",
            border: "2px solid #00aa00",
            borderRadius: "15px",
            padding: "30px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ color: "#00aa00", marginBottom: "25px", textAlign: "center" }}>
            🏃 CELEBRITY FLEE ZONE 🏃
          </h2>
          <p style={{ textAlign: "center", color: "#888", marginBottom: "25px" }}>
            Everyone who ever attended a White Party is now claiming they &quot;left early&quot;
          </p>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
            {celebrities.map((celeb) => (
              <div
                key={celeb.name}
                style={{
                  background: "rgba(0, 0, 0, 0.3)",
                  borderRadius: "10px",
                  padding: "20px",
                  borderLeft: "4px solid #00aa00",
                }}
              >
                <div style={{ fontWeight: "bold", color: "#00aa00", marginBottom: "8px" }}>{celeb.name}</div>
                <blockquote style={{ margin: "0 0 8px 0", fontStyle: "italic", color: "#ddd" }}>
                  &quot;{celeb.quote}&quot;
                </blockquote>
                <div style={{ fontSize: "0.8rem", color: "#666" }}>{celeb.context}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Self-Own Prophecies */}
        <section
          style={{
            background: "linear-gradient(180deg, #1a1a00, #0a0a00)",
            border: "2px solid #ffd700",
            borderRadius: "15px",
            padding: "30px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <h2 style={{ color: "#ffd700", marginBottom: "25px" }}>
            🔮 THE PROPHECIES THAT AGED PERFECTLY 🔮
          </h2>
          
          <div style={{ marginBottom: "25px", padding: "20px", background: "rgba(255, 215, 0, 0.1)", borderRadius: "10px" }}>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "10px" }}>1999 Entertainment Tonight Interview</div>
            <blockquote style={{ fontSize: "1.3rem", fontStyle: "italic", margin: 0, color: "#ffd700" }}>
              &quot;They&apos;re going to probably be arresting me, doing all types of crazy things 
              just because we want to have a good time.&quot;
            </blockquote>
          </div>
          
          <div style={{ marginBottom: "25px", padding: "20px", background: "rgba(255, 0, 128, 0.1)", borderRadius: "10px" }}>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "10px" }}>2002 Conan O&apos;Brien</div>
            <blockquote style={{ fontSize: "1.1rem", fontStyle: "italic", margin: 0, color: "#ff0080" }}>
              Joked about his tactics for keeping women from leaving parties, suggesting using locks. 
              When Conan said it sounded &quot;kinda dangerous,&quot; Diddy responded: &quot;It&apos;s a little kinky.&quot;
            </blockquote>
          </div>
          
          <div style={{ padding: "20px", background: "rgba(138, 43, 226, 0.1)", borderRadius: "10px" }}>
            <div style={{ fontSize: "0.8rem", color: "#888", marginBottom: "10px" }}>Found on Bathroom Mirror</div>
            <blockquote style={{ fontSize: "1.2rem", fontStyle: "italic", margin: 0, color: "#8a2be2" }}>
              &quot;You a legend&quot; &quot;You&apos;re an icon Puff Daddy&quot;
            </blockquote>
            <div style={{ fontSize: "0.9rem", color: "#666", marginTop: "10px" }}>
              (Handwritten self-affirmations discovered during raid)
            </div>
          </div>
        </section>

        {/* Meme Gallery */}
        <section style={{ marginBottom: "50px" }}>
          <h2 style={{ textAlign: "center", color: "#ff0080", marginBottom: "30px" }}>
            📱 MEME MADNESS 📱
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "15px",
            }}
          >
            {memes.map((meme, i) => (
              <div
                key={i}
                style={{
                  background: "linear-gradient(135deg, rgba(255, 0, 128, 0.1), rgba(138, 43, 226, 0.1))",
                  border: "1px solid #444",
                  borderRadius: "10px",
                  padding: "15px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>😂</span>
                <span style={{ color: "#ddd" }}>{meme}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Stats */}
        <section
          style={{
            background: "#0a0a0a",
            border: "2px solid #ff0040",
            borderRadius: "15px",
            padding: "30px",
            marginBottom: "40px",
          }}
        >
          <h2 style={{ color: "#ff0040", textAlign: "center", marginBottom: "30px" }}>
            ⚖️ THE LEGAL RECKONING ⚖️
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "20px",
              textAlign: "center",
            }}
          >
            {[
              { stat: "4", label: "Times Bail Denied" },
              { stat: "128", label: "Calls to One Witness (in 4 days)" },
              { stat: "120+", label: "Accusers via Tony Buzbee" },
              { stat: "25", label: "Alleged Minor Victims" },
              { stat: "50", label: "Months Sentenced" },
              { stat: "$500K+", label: "Fine" },
            ].map((item) => (
              <div key={item.label} style={{ padding: "15px" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "#ff0040", fontFamily: "monospace" }}>
                  {item.stat}
                </div>
                <div style={{ fontSize: "0.8rem", color: "#888", textTransform: "uppercase", letterSpacing: "1px" }}>
                  {item.label}
                </div>
              </div>
            ))}
          </div>
          
          <div style={{ marginTop: "30px", padding: "20px", background: "rgba(255, 0, 64, 0.1)", borderRadius: "10px" }}>
            <h3 style={{ color: "#ff0040", marginBottom: "15px", textAlign: "center" }}>Empire Collapse</h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "center" }}>
              {[
                "Revolt TV: GONE",
                "Sean John: Dormant",
                "Howard Degree: Revoked",
                "Key to NYC: Returned",
                "Diddy Day Miami: Cancelled",
                "Peloton Music: Removed",
                "Net Worth: Halved",
              ].map((item) => (
                <span
                  key={item}
                  style={{
                    background: "rgba(255, 0, 64, 0.2)",
                    padding: "8px 15px",
                    borderRadius: "20px",
                    fontSize: "0.8rem",
                    color: "#ff8080",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Final Quote */}
        <section
          style={{
            textAlign: "center",
            padding: "40px 20px",
            marginBottom: "40px",
          }}
        >
          <blockquote
            style={{
              fontSize: "1.5rem",
              fontStyle: "italic",
              color: "#888",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            &quot;He didn&apos;t just fall; he slid a**-first into infamy, lubed and laughingstock.&quot;
          </blockquote>
          <p style={{ color: "#666", marginTop: "15px" }}>— The Internet, 2024-2025</p>
        </section>

        {/* Disclaimer */}
        <footer
          style={{
            textAlign: "center",
            padding: "30px",
            borderTop: "1px solid #333",
            color: "#555",
            fontSize: "0.75rem",
          }}
        >
          <p style={{ marginBottom: "10px" }}>
            ⚠️ SATIRE DISCLAIMER ⚠️
          </p>
          <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: "1.6" }}>
            This page is a satirical compilation based on publicly available comedy material, 
            news reports, and social media commentary. All quotes attributed to comedians are 
            paraphrased from their public performances. The allegations against Sean Combs are 
            serious matters currently proceeding through the legal system. This content is 
            intended for comedic purposes only.
          </p>
          <p style={{ marginTop: "20px", color: "#333" }}>
            You found the secret page. Congratulations? 🎉
          </p>
        </footer>
      </main>
    </div>
  );
}

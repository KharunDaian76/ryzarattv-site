import { motion } from "framer-motion";
import {
  ChevronDown,
  Cpu,
  Gamepad2,
  Headphones,
  Keyboard,
  MemoryStick,
  MessageCircle,
  MonitorCog,
  Mouse,
  Radio,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const twitchUrl = "https://www.twitch.tv/ryzarattv";
const discordUrl = "https://discord.gg/UySfWZjjA";

const games = [
  {
    name: "Overwatch 2",
    type: "Hero Shooter",
    note: "Competitive",
    image: "/images/games/overwatch.jpg",
  },
  {
    name: "Counter-Strike 2",
    type: "Tactical FPS",
    note: "Ranked",
    image: "/images/games/cs2.jpg",
  },
  {
    name: "VALORANT",
    type: "Tactical Shooter",
    note: "Competitive",
    image: "/images/games/valorant.jpg",
  },
  {
    name: "Where Winds Meet",
    type: "Open-World RPG",
    note: "Adventure",
    image: "/images/games/where-winds-meet.jpg",
  },
  {
    name: "Steam Library",
    type: "Variety",
    note: "Whatever feels fun",
    image: "/images/games/steam.jpg",
  },
];

const setup = [
  {
    icon: Cpu,
    label: "CPU",
    value: "Intel Core i5-14400F",
  },
  {
    icon: MonitorCog,
    label: "GPU",
    value: "NVIDIA GeForce RTX 4060 Ti",
  },
  {
    icon: MemoryStick,
    label: "RAM",
    value: "16 GB DDR5-4800",
  },
  {
    icon: ShieldCheck,
    label: "Motherboard",
    value: "Gigabyte B760M H",
  },
  {
    icon: Mouse,
    label: "Mouse",
    value: "Attack Shark R11 Ultra",
  },
  {
    icon: Keyboard,
    label: "Keyboard",
    value: "Attack Shark R68HE",
  },
  {
    icon: Headphones,
    label: "Headset",
    value: "Moondrop Gravity Rays",
  },
];

const rules = [
  "Respect everyone.",
  "No harassment or discrimination.",
  "No spoilers or backseating unless requested.",
  "Avoid spam and self-promotion.",
  "Listen to the moderators.",
  "Relax and enjoy the stream.",
];

function SectionHeading({ number, label, title, text }) {
  return (
    <div className="section-heading">
      <div>
        <p className="section-kicker">{label}</p>
        <h2>{title}</h2>
        {text && <p className="section-description">{text}</p>}
      </div>

      <span className="section-index">{number}</span>
    </div>
  );
}

function App() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main>
      <nav className="site-nav">
        <button
          className="nav-brand"
          type="button"
          onClick={() => scrollTo("home")}
        >
          IZA
        </button>

        <div className="nav-links">
          <button type="button" onClick={() => scrollTo("about")}>
            About
          </button>

          <button type="button" onClick={() => scrollTo("games")}>
            Games
          </button>

          <button type="button" onClick={() => scrollTo("setup")}>
            Setup
          </button>

          <button type="button" onClick={() => scrollTo("community")}>
            Community
          </button>

          <button type="button" onClick={() => scrollTo("support")}>
            Support
          </button>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-background" />
        <div className="hero-overlay" />
        <div className="grain" />

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="avatar-shell"
            initial={{ opacity: 0, scale: 0.86 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1 }}
          >
            <img
              src="/images/avatar.png"
              alt="IZA manga avatar"
              className="avatar"
            />
          </motion.div>

          <p className="eyebrow">ENGLISH • РУССКИЙ</p>

          <h1>IZA</h1>

          <p className="handle">RYZARATTV</p>

          <p className="hero-description">
            Competitive games. Late-night adventures.
            <br />
            Occasional chaos.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={twitchUrl}
              target="_blank"
              rel="noreferrer"
            >
              <Radio size={18} />
              Watch on Twitch
            </a>

            <a
              className="button button-secondary"
              href={discordUrl}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Join Discord
            </a>
          </div>
        </motion.div>

        <button
          className="scroll-button"
          type="button"
          onClick={() => scrollTo("about")}
        >
          <span>Explore</span>
          <ChevronDown size={19} />
        </button>
      </section>

      <section className="content-section" id="about">
        <motion.div
          className="content-shell"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            number="01"
            label="ABOUT IZA"
            title="Ranked intensity. Relaxed atmosphere."
          />

          <div className="about-grid">
            <div className="about-copy">
              <p className="large-copy">
                こんにちは ✦ Welcome! I’m IZA.
              </p>

              <p>
                Mostly you’ll find me grinding competitive games,
                exploring new worlds, and occasionally getting lost in
                random Steam games.
              </p>

              <p>
                Whether it’s ranked, a chill session, or a late-night
                adventure, everyone is welcome here.
              </p>
            </div>

            <div className="about-notes">
              <article>
                <span>Languages</span>
                <strong>English / Russian</strong>
              </article>

              <article>
                <span>Stream mood</span>
                <strong>Competitive • Cozy • Unpredictable</strong>
              </article>

              <article>
                <span>Main focus</span>
                <strong>Games, community, good conversations</strong>
              </article>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="content-section alternate-section" id="games">
        <motion.div
          className="content-shell"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            number="02"
            label="MAIN GAMES"
            title="Competitive by default. Curious by nature."
            text="The current rotation changes, but these are the worlds you will see most often."
          />

          <div className="games-grid">
            {games.map((game, index) => (
              <motion.article
                className="game-card"
                key={game.name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -8 }}
              >
                <div
                  className="game-card-image"
                  style={{
                    backgroundImage: `url(${game.image})`,
                  }}
                />

                <div className="game-card-shade" />

                <span className="card-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <Gamepad2 size={24} />

                <div className="game-card-content">
                  <p>{game.note}</p>
                  <h3>{game.name}</h3>
                  <span>{game.type}</span>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="content-section" id="setup">
        <motion.div
          className="content-shell"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            number="03"
            label="SETUP"
            title="The hardware behind the stream."
            text="More equipment can be added later as the setup evolves."
          />

          <div className="setup-grid">
            {setup.map(({ icon: Icon, label, value }) => (
              <article className="setup-card" key={label}>
                <Icon size={22} />

                <div>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        className="content-section alternate-section"
        id="community"
      >
        <motion.div
          className="content-shell"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <SectionHeading
            number="04"
            label="COMMUNITY"
            title="Good games are better with good people."
          />

          <div className="community-grid">
            <article className="rules-card">
              <div className="card-title-row">
                <ShieldCheck size={23} />
                <h3>House Rules</h3>
              </div>

              <div className="rules-list">
                {rules.map((rule) => (
                  <p key={rule}>
                    <span>✦</span>
                    {rule}
                  </p>
                ))}
              </div>
            </article>

            <article className="community-card">
              <Users size={28} />

              <p className="section-kicker">DISCORD COMMUNITY</p>

              <h3>Stay close to the stream.</h3>

              <p>
                Join for updates, conversations, gaming sessions,
                announcements, and the occasional chaos between streams.
              </p>

              <a
                className="button button-primary"
                href={discordUrl}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={18} />
                Join the Discord
              </a>
            </article>
          </div>
        </motion.div>
      </section>

      <section className="support-section" id="support">
        <div className="support-background" />

        <motion.div
          className="support-card"
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.8 }}
        >
          <Sparkles size={26} />

          <p className="section-kicker">SUPPORT THE JOURNEY</p>

          <h2>Watching is already support.</h2>

          <p>
            Following, chatting, and spending time in the stream already
            means a lot. A donation option will be added here when IZA
            chooses the payment service she wants to use.
          </p>

          <button className="button button-disabled" type="button" disabled>
            Donation link coming soon
          </button>
        </motion.div>
      </section>

      <footer>
        <div>
          <strong>IZA</strong>
          <span>RYZARATTV</span>
        </div>

        <p>English • Russian • Twitch • Discord</p>

        <button type="button" onClick={() => scrollTo("home")}>
          Back to top
        </button>
      </footer>
    </main>
  );
}

export default App;
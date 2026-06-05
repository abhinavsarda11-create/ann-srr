import React from "react";
import {
  Moon,
  BookOpen,
  Plane,
  Hand,
  Wrench,
  Code2,
  Heart,
  Armchair,
} from "lucide-react";
import "./App.css";
import blossoms from "./blossoms.jpg";
import hearts from "./hearts.jpg";

const memories = [
  {
    title: "Our Late Night Talks",
    body: "Hours slipping past midnight, just your voice and mine. Those were the conversations I never wanted to end.",
    icon: <Moon size={22} />,
  },
  {
    title: "Studying Together",
    body: "Open books, tired eyes, and you somehow making even syllabus pages feel like the best company in the world.",
    icon: <BookOpen size={22} />,
  },
  {
    title: "All The Places We Went",
    body: "Every trip, every plate of food shared — I remember the way you laughed before I remember where we were.",
    icon: <Plane size={22} />,
  },
  {
    title: "Your Hand In Mine",
    body: "Walking with our fingers tangled, the quiet hugs — small things, but they meant everything to me.",
    icon: <Hand size={22} />,
  },
  {
    title: "Makers Lab",
    body: "Our project, our late hours soldering and second-guessing — building something together felt like us.",
    icon: <Wrench size={22} />,
  },
  {
    title: "The Website We Built",
    body: "Side by side, screen by screen. Every commit had a piece of both of us in it.",
    icon: <Code2 size={22} />,
  },
  {
    title: "That Bench",
    body: "You told me things about yourself I'll carry forever. I listened to remember — not just to reply.",
    icon: <Armchair size={22} />,
  },
  {
    title: "What I Never Said Enough",
    body: "I love you. Not as a line, but as the reason I kept showing up — and the reason I'm here saying sorry now.",
    icon: <Heart size={22} />,
  },
];

function Petals() {
  const petals = Array.from({ length: 24 });
  return (
    <div aria-hidden className="petals">
      {petals.map((_, i) => {
        const left = Math.random() * 100;
        const delay = Math.random() * 12;
        const duration = 10 + Math.random() * 14;
        const size = 8 + Math.random() * 14;
        const opacity = 0.4 + Math.random() * 0.5;
        return (
          <span
            key={i}
            className="petal"
            style={{
              left: `${left}vw`,
              width: size,
              height: size,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              opacity,
            }}
          />
        );
      })}
    </div>
  );
}

function MemoryCard({ title, body, icon, index }) {
  return (
    <article
      className="card"
      style={{ animation: `fadeUp 0.8s ease-out ${index * 0.08}s both` }}
    >
      <div className="card-icon">{icon}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-body">{body}</p>
    </article>
  );
}

export default function App() {
  return (
    <div className="app">
      <Petals />

      {/* HERO */}
      <header className="hero">
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${blossoms})` }}
        />
        <div className="hero-glow" />
        <div className="hero-inner">
          <span className="eyebrow">for anushka · from tumahra sarda</span>
          <h1 className="title">
            I'm sorry,
            <br />
            <span className="title-script">Anushka</span>
          </h1>
          <p className="lede">
            I don't know if a website can hold everything I feel. But I built
            this anyway — because somewhere between the misunderstanding and
            the silence, I needed you to see what I see when I think of us.
          </p>
          <a href="#memories" className="cta">
            <Heart size={16} fill="currentColor" className="heart-pulse" />
            our memories
          </a>
        </div>
      </header>

      {/* LETTER */}
      <section className="letter-wrap">
        <div className="letter">
          <p className="letter-greeting">Dear Anushka,</p>
          <div className="letter-body">
            <p>
              I know I hurt you. I didn't mean to, and that doesn't undo it —
              but please believe me when I say the last thing I ever wanted
              was to be the reason your eyes looked away from mine.
            </p>
            <p>
              You already know I love you. You've known for a long time.
              And maybe that's exactly why this misunderstanding stings so much
              — because the people who matter most are the easiest to wound
              without trying.
            </p>
            <p>
              So before I ask for anything, I just want you to remember us.
              Scroll slow. I remembered every detail.
            </p>
          </div>
        </div>
      </section>

      {/* MEMORIES */}
      <section id="memories" className="memories">
        <div className="section-head">
          <p className="eyebrow">things i remember</p>
          <h2 className="h2">
            All the small <em>forevers</em>
          </h2>
        </div>
        <div className="grid">
          {memories.map((m, i) => (
            <MemoryCard key={m.title} {...m} index={i} />
          ))}
        </div>
      </section>

      {/* PROMISE */}
      <section className="promise-wrap">
        <div className="promise">
          <img src={hearts} alt="Two paper hearts tied together" />
          <div className="promise-text">
            <p className="eyebrow">a promise</p>
            <h3>I'll be softer. I'll be slower. I'll listen first.</h3>
            <p className="muted">
              You sat on that bench and trusted me with pieces of you. I want
              to keep earning that, every day — not just on the days when it's
              easy. Whenever you're ready to talk, I'm here. No defending.
              Just listening.
            </p>
          </div>
        </div>
      </section>

      {/* SIGN OFF */}
      <footer className="footer">
        <Heart size={32} fill="currentColor" className="heart-pulse footer-heart" />
        <p className="quote">
          "Forgive me, not because I deserve it — but because you know I mean it."
        </p>
        <p className="signature">— Sarda</p>
      </footer>
    </div>
  );
}

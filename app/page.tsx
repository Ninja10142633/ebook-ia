"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [lang, setLang] = useState<"pt" | "en">("pt");
  const t = {
    pt: {
      brand: "IAEbookIA",
      title: "Domine a IA e Lucre com Seu Celular",
      sub: "Método direto ao ponto para transformar habilidades em renda — com templates, prompts e passos práticos.",
      cta: "Quero Começar Agora",
      see: "Ver conteúdo",
      bulletsTitle: "O que você recebe",
      bullets: [
        "Guia passo a passo para lucrar com IA usando o celular",
        "Templates & prompts prontos para copiar e colar",
        "Ferramentas gratuitas de roteiro, design e automação",
        "Táticas de venda e posicionamento que convertem",
      ],
      testi: "Depoimentos",
      depo1: "“Em 7 dias fechei meus primeiros serviços só com o celular.”",
      depo2: "“Os prompts aceleraram tudo. Vale cada centavo.”",
      finalTitle: "Pronto para dar o próximo passo?",
      finalSub: "Construa renda com IA de forma prática, rápida e premium.",
      buy: "Garantir meu acesso",
      warranty: "Garantia 7 dias",
      format: "PDF + Templates",
    },
    en: {
      brand: "IAEbookIA",
      title: "Master AI & Profit Using Only Your Phone",
      sub: "No-fluff method to turn skills into income — with templates, prompts and practical steps.",
      cta: "Start Now",
      see: "See contents",
      bulletsTitle: "What you get",
      bullets: [
        "Step-by-step guide to profit with AI using your phone",
        "Copy–paste templates & prompts",
        "Free tools for scripting, design & automation",
        "Sales tactics & positioning that convert",
      ],
      testi: "Testimonials",
      depo1: "“Closed my first gigs in 7 days using only my phone.”",
      depo2: "“Prompts sped up everything. Totally worth it.”",
      finalTitle: "Ready for your next step?",
      finalSub: "Build income with AI — fast, premium and practical.",
      buy: "Get access",
      warranty: "7-day warranty",
      format: "PDF + Templates",
    },
  }[lang];

  return (
    <main>
      <div className="gradient-glow" aria-hidden />

      {/* NAV */}
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="size-10 rounded-xl flex items-center justify-center font-extrabold text-zinc-900"
            style={{
              backgroundImage: "linear-gradient(135deg,#FFD76E,#F5C64B)",
            }}
          >
            IA
          </div>
          <span className="font-semibold tracking-wide">{t.brand}</span>
        </div>
        <button
          onClick={() => setLang(lang === "pt" ? "en" : "pt")}
          className="badge"
        >
          {lang === "pt" ? "EN 🇺🇸" : "PT 🇧🇷"}
        </button>
      </header>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 py-10 md:py-16 grid md:grid-cols-[1.1fr_.9fr] gap-10 items-center">
        <div className="animate-fade-up delay-100">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight animate-fade-up delay-200">
            <span
              className="bg-clip-text text-transparent animate-gradient"
              style={{
                backgroundImage:
                  "linear-gradient(90deg,#FFD76E,#F5C64B,#FFEEA9,#FFD76E)",
                backgroundSize: "300% 300%",
              }}
            >
              {t.title}
            </span>
          </h1>
          <p className="mt-5 text-zinc-300 max-w-xl animate-fade-up delay-300">
            {t.sub}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4 animate-fade-up delay-400">
           <a
      href="https://buy.stripe.com/14AaEZdiQ0FrbRP16N2kw00"
    target="_blank"
    rel="noopener noreferrer"
    className="btn-gold"
      >
      {t.cta}
  </a>
            <a href="#conteudo" className="badge hover:bg-zinc-800">
              {t.see}
            </a>
          </div>

          <div className="mt-5 flex gap-3 text-xs text-zinc-400 animate-fade-up delay-500">
            <span className="badge">{t.warranty}</span>
            <span className="badge">{t.format}</span>
          </div>
        </div>

        {/* Capa dinâmica */}
        <div className="relative animate-fade-up delay-600 animate-float">
          <div
            className="absolute -inset-6 rounded-2xl blur-3xl opacity-40 animate-pulse-slow"
            style={{
              background:
                "radial-gradient(circle, rgba(245,198,75,.3) 0%, rgba(168,85,247,.15) 100%)",
            }}
          />
          <div className="relative glass rounded-2xl p-3 shadow-[0_20px_80px_rgba(0,0,0,.7)] transition-all duration-700">
            <Image
              key={lang}
              src={
                lang === "pt"
                  ? "/meuEbookResetei.png"
                  : "/meuEbookResetei-en2.png"
              }
              alt={
                lang === "pt"
                  ? "Capa 3D do Ebook IA Revolution"
                  : "3D Cover of AI Revolution Ebook"
              }
              width={420}
              height={640}
              className="rounded-xl object-cover w-full max-w-sm mx-auto shadow-[0_0_40px_rgba(245,198,75,.3)] opacity-0 animate-fade-in transition-all duration-700 ease-in-out"
              priority
            />
          </div>
        </div>
      </section>

      {/* CONTEÚDO */}
      <section
        id="conteudo"
        className="max-w-6xl mx-auto px-6 pb-6 animate-fade-up"
      >
        <div className="glass rounded-2xl p-8 md:p-10">
          <h2 className="text-xl font-bold" style={{ color: "var(--gold)" }}>
            {t.bulletsTitle}
          </h2>
          <ul className="mt-6 grid sm:grid-cols-2 gap-4">
            {t.bullets.map((b, i) => (
              <li
                key={i}
                className="glass rounded-xl p-4 hover:border-amber-400/40 transition"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="mt-1 size-2 rounded-full"
                    style={{ background: "var(--gold)" }}
                  />
                  <p className="text-zinc-300">{b}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="max-w-6xl mx-auto px-6 py-12 animate-fade-up">
        <h3 className="text-lg font-semibold" style={{ color: "var(--gold)" }}>
          {t.testi}
        </h3>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <blockquote className="glass rounded-2xl p-6 hover:shadow-[0_20px_60px_rgba(0,0,0,.6)] transition">
            <p className="text-zinc-200 italic">“{t.depo1}”</p>
            <cite className="mt-3 block text-xs text-zinc-500">— João</cite>
          </blockquote>
          <blockquote className="glass rounded-2xl p-6 hover:shadow-[0_20px_60px_rgba(0,0,0,.6)] transition">
            <p className="text-zinc-200 italic">“{t.depo2}”</p>
            <cite className="mt-3 block text-xs text-zinc-500">— Ana</cite>
          </blockquote>
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        id="comprar"
        className="relative overflow-hidden animate-fade-up"
      >
        <div
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(90deg,rgba(245,198,75,.12),rgba(168,85,247,.10),rgba(245,198,75,.12))",
          }}
        />
        <div className="max-w-6xl mx-auto px-6 py-14 text-center">
          <h3
            className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(90deg,#FFD76E,#F5C64B)",
            }}
          >
            {t.finalTitle}
          </h3>
          <p className="mt-3 text-zinc-300">{t.finalSub}</p>
          <a href="#" className="mt-7 inline-flex btn-gold">
            {t.buy}
          </a>
        </div>
      </section>

      <footer className="border-t border-zinc-800/60 animate-fade-up">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-zinc-500 flex items-center justify-between">
          <span>© {new Date().getFullYear()} IAEbookIA</span>
          <span className="text-zinc-600">Feito com 💛 e IA</span>
        </div>
      </footer>
    </main>
  );
}

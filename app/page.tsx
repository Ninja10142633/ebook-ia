"use client"
import { useState } from "react"
import Image from "next/image"

export default function Home() {
  const [lang, setLang] = useState<"pt" | "en">("pt")

  const toggleLang = () => setLang(lang === "pt" ? "en" : "pt")

  const content = {
    pt: {
      title: "Aprenda e Lucre com o Celular!",
      subtitle: "Transforme seu tempo livre em renda com estratégias práticas e comprovadas.",
      cta: "Comprar Agora",
      aboutTitle: "Sobre o Ebook",
      aboutText: "Este ebook te ensina passo a passo como gerar renda usando apenas seu celular, com dicas reais, exemplos e exercícios práticos.",
      testimonialsTitle: "Depoimentos",
      testimonial1: "Incrível! Consegui aumentar minha renda trabalhando apenas pelo celular.",
      testimonial2: "Conteúdo direto e fácil de aplicar. Recomendo!",
    },
    en: {
      title: "Learn and Earn with Your Phone!",
      subtitle: "Turn your free time into income with practical, proven strategies.",
      cta: "Buy Now",
      aboutTitle: "About the Ebook",
      aboutText: "This ebook teaches you step by step how to make income using only your phone, with real tips, examples, and practical exercises.",
      testimonialsTitle: "Testimonials",
      testimonial1: "Amazing! I managed to increase my income working just from my phone.",
      testimonial2: "Straightforward content that's easy to apply. Highly recommend!",
    },
  }

  const t = content[lang]

  return (
    <main className="font-sans overflow-x-hidden">

      {/* Navbar */}
      <header className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="text-3xl font-extrabold text-white tracking-wide drop-shadow-lg">EbookIA</h1>
        <button
          onClick={toggleLang}
          className="bg-white text-indigo-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-all shadow"
        >
          {lang === "pt" ? "EN" : "PT"}
        </button>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-32 px-6 bg-gradient-to-r from-purple-700 via-indigo-700 to-pink-600 overflow-hidden">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-2xl">{t.title}</h2>
        <p className="text-lg md:text-xl mb-10 text-gray-200 max-w-2xl">{t.subtitle}</p>
        <a
          href="#"
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-12 py-4 rounded-full font-bold text-lg hover:scale-105 hover:shadow-2xl transition-transform shadow-lg"
        >
          {t.cta}
        </a>
      </section>

      {/* About Section */}
      <section className="bg-indigo-900 text-white py-24 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h3 className="text-4xl font-bold mb-6">{t.aboutTitle}</h3>
            <p className="text-lg">{t.aboutText}</p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/ebook-cover.png"
              alt="Ebook Cover"
              width={320}
              height={440}
              className="rounded-3xl shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-6 bg-gradient-to-r from-pink-500 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">{t.testimonialsTitle}</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-transform">
              <p className="text-lg italic">"{t.testimonial1}"</p>
            </div>
            <div className="bg-white text-gray-900 p-8 rounded-3xl shadow-2xl hover:scale-105 transition-transform">
              <p className="text-lg italic">"{t.testimonial2}"</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-24 px-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700">
        <h3 className="text-4xl font-bold mb-6 text-white">{t.cta}</h3>
        <a
          href="#"
          className="bg-white text-indigo-700 px-12 py-4 rounded-full font-bold text-lg hover:scale-110 hover:shadow-2xl transition-transform shadow-lg"
        >
          {t.cta}
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-800 py-6 text-center text-gray-200">
        <p>&copy; {new Date().getFullYear()} EbookIA. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}

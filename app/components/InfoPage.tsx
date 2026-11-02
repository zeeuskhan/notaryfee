import Link from "next/link";

export default function InfoPage({eyebrow,title,description,children}:{eyebrow:string;title:string;description:string;children:React.ReactNode}) {
 return <main className="min-h-screen bg-[#f7f8f3] text-[#17251f]">
  <header className="border-b border-[#e3e9e1] bg-white"><nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5"><Link href="/" className="text-2xl font-extrabold tracking-tight">Notary<span className="text-[#176b4a]">Fee</span></Link><Link href="/" className="rounded-lg bg-[#176b4a] px-4 py-2 text-sm font-bold text-white">Open calculator ↗</Link></nav></header>
  <article className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
   <p className="text-xs font-bold uppercase tracking-[.18em] text-[#176b4a]">{eyebrow}</p>
   <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{title}</h1>
   <p className="mt-5 text-lg leading-8 text-[#66736c]">{description}</p>
   <div className="prose prose-stone mt-10 max-w-none prose-headings:font-bold prose-headings:tracking-tight prose-a:text-[#176b4a] prose-li:leading-7 prose-p:leading-8">{children}</div>
   <div className="mt-14 rounded-2xl border border-[#dce6dc] bg-white p-6"><h2 className="text-xl font-bold">Need an estimate?</h2><p className="mt-2 text-sm leading-6 text-[#66736c]">Use the free NotaryFee calculator to organize notarial charges, travel and job expenses. Always verify the rules that apply to your location.</p><Link href="/#calculator" className="mt-4 inline-flex rounded-lg bg-[#176b4a] px-5 py-3 text-sm font-bold text-white">Calculate a quote →</Link></div>
  </article>
  <footer className="border-t border-[#e3e9e1] bg-white"><div className="mx-auto flex max-w-5xl flex-wrap gap-x-6 gap-y-3 px-5 py-8 text-sm text-[#66736c]"><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/editorial-policy">Editorial policy</Link><Link href="/methodology">Methodology</Link><Link href="/notary-fees-by-state">State fee guide</Link></div></footer>
 </main>
}
import Link from "next/link";
import type { ReactNode } from "react";

export default function InfoPage({eyebrow,title,description,children}:{eyebrow:string;title:string;description:string;children:ReactNode}) {
 return <main className="info-page">
  <header className="info-header"><nav className="info-nav"><Link href="/" className="info-brand">Notary<span>Fee</span></Link><Link href="/#calculator" className="info-button">Open calculator ↗</Link></nav></header>
  <article className="info-article">
   <p className="info-eyebrow">{eyebrow}</p><h1>{title}</h1><p className="info-description">{description}</p>
   <div className="info-content">{children}</div>
   <div className="info-cta"><h2>Need an estimate?</h2><p>Use the free NotaryFee calculator to organize notarial charges, travel and job expenses. Always verify the rules that apply to your location.</p><Link href="/#calculator" className="info-button">Calculate a quote →</Link></div>
  </article>
  <footer className="info-footer"><div><Link href="/about">About</Link><Link href="/contact">Contact</Link><Link href="/privacy-policy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/editorial-policy">Editorial policy</Link><Link href="/methodology">Methodology</Link><Link href="/notary-fees-by-state">State fee guide</Link></div><small>© {new Date().getFullYear()} NotaryFee. Informational estimates only.</small></footer>
 </main>;
}
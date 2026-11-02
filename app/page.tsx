"use client";

import { useMemo, useState } from "react";

const money = (n:number) => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Number.isFinite(n)?n:0);
export default function Home() {
  const [service,setService] = useState("General notarization");
  const [signings,setSignings] = useState(1);
  const [fee,setFee] = useState(10);
  const [miles,setMiles] = useState(12);
  const [rate,setRate] = useState(0.7);
  const [travel,setTravel] = useState(15);
  const [expenses,setExpenses] = useState(5);
  const [target,setTarget] = useState(30);
  const [client,setClient] = useState("");
  const [date,setDate] = useState("");
  const total = useMemo(()=>Math.max(0,signings)*Math.max(0,fee)+Math.max(0,miles)*Math.max(0,rate)+Math.max(0,travel)+Math.max(0,expenses),[signings,fee,miles,rate,travel,expenses]);
  const profit = total - Math.max(0,expenses);
  const hourly = Math.max(0,target);
  const printQuote = () => window.print();
  return <main>
    <nav className="nav"><a className="brand" href="#">Notary<span>Fee</span></a><div className="navlinks"><a href="#calculator">Calculator</a><a href="#how">How it works</a><a href="#faq">FAQs</a></div><a className="navcta" href="#calculator">Calculate free ↗</a></nav>
    <section className="hero">
      <div className="eyebrow"><i/> FREE MOBILE NOTARY PRICING TOOL</div>
      <h1>Know your numbers.<br/><em>Quote with confidence.</em></h1>
      <p className="lead">Estimate your notary service fees, travel costs, expenses and job profit in one simple calculator. Build a clear quote before you head out.</p>
      <div className="hero-actions"><a className="primary" href="#calculator">Open fee calculator <span>→</span></a><a className="secondary" href="#how">See how it works</a></div>
      <div className="trust"><span>✓ Free to use</span><span>✓ No account required</span><span>✓ Print-ready estimate</span></div>
    </section>
    <section className="calc-wrap" id="calculator">
      <div className="section-head"><div><div className="eyebrow">YOUR ESTIMATE</div><h2>Mobile notary fee calculator</h2><p>Enter your service and travel details to estimate a client quote.</p></div><span className="live">● LIVE CALCULATION</span></div>
      <div className="calculator">
        <div className="fields">
          <div className="field full"><label>Service type</label><select value={service} onChange={e=>setService(e.target.value)}><option>General notarization</option><option>Loan signing appointment</option><option>Remote appointment (estimate only)</option><option>Hospital or care facility visit</option><option>Jail or correctional facility visit</option><option>Other mobile notary service</option></select></div>
          <div className="field"><label>Number of notarizations</label><input type="number" min="0" value={signings} onChange={e=>setSignings(+e.target.value)}/></div>
          <div className="field"><label>Fee per notarization ($)</label><input type="number" min="0" step="0.01" value={fee} onChange={e=>setFee(+e.target.value)}/></div>
          <div className="field"><label>Round-trip distance (miles)</label><input type="number" min="0" step="0.1" value={miles} onChange={e=>setMiles(+e.target.value)}/></div>
          <div className="field"><label>Travel rate per mile ($)</label><input type="number" min="0" step="0.01" value={rate} onChange={e=>setRate(+e.target.value)}/></div>
          <div className="field"><label>Additional travel / convenience fee ($)</label><input type="number" min="0" step="0.01" value={travel} onChange={e=>setTravel(+e.target.value)}/></div>
          <div className="field"><label>Other job expenses ($)</label><input type="number" min="0" step="0.01" value={expenses} onChange={e=>setExpenses(+e.target.value)}/></div>
          <div className="field full"><label>Client name (optional)</label><input value={client} onChange={e=>setClient(e.target.value)} placeholder="Enter client or business name"/></div>
          <div className="field full"><label>Appointment date (optional)</label><input type="date" value={date} onChange={e=>setDate(e.target.value)}/></div>
        </div>
        <aside className="result">
          <div className="result-label">ESTIMATED CLIENT QUOTE</div><div className="total">{money(total)}</div><p className="muted">Illustrative estimate based on your entries</p>
          <div className="breakdown"><div><span>Notarization fees</span><b>{money(signings*fee)}</b></div><div><span>Mileage / travel</span><b>{money(miles*rate)}</b></div><div><span>Additional travel fee</span><b>{money(travel)}</b></div><div><span>Other expenses</span><b>{money(expenses)}</b></div></div>
          <div className="profit"><span>Estimated amount after listed expenses</span><strong>{money(profit)}</strong></div>
          <button className="print" onClick={printQuote}>Print / Save quote as PDF ↗</button>
          <p className="disclaimer">Not a legal fee determination. Verify current state, county and local rules before quoting or charging a fee.</p>
        </aside>
      </div>
      <p className="smallnote">Your inputs are used in this page to calculate the estimate. This demo does not submit or store your quote.</p>
    </section>
    <section className="info" id="how"><div className="eyebrow">SIMPLE BY DESIGN</div><h2>From service details to a clear quote</h2><div className="steps"><article><b>01</b><h3>Add your service</h3><p>Enter the number of notarizations and the per-item fee you intend to charge.</p></article><article><b>02</b><h3>Include travel costs</h3><p>Add round-trip mileage, your chosen mileage rate and any additional travel fee.</p></article><article><b>03</b><h3>Review and share</h3><p>Check the estimate, then print or save the quote as a PDF for your records.</p></article></div></section>
    <section className="guide"><div><div className="eyebrow">PRICING BASICS</div><h2>What can go into a mobile notary quote?</h2><p>A mobile notary appointment may involve more than the notarization itself. Depending on applicable rules and the service agreement, an estimate may account for permitted notarization charges, travel, time, printing, parking or other disclosed expenses.</p><p>Keep each line item clear. Explain optional travel or convenience charges to the customer before the appointment, and never present an estimate as an official state-approved fee schedule unless you have verified that claim with an authoritative source.</p></div><div className="guide-card"><h3>Before you charge</h3><ul><li>Check your state's current notary fee limits.</li><li>Confirm whether travel fees are regulated separately.</li><li>Disclose extra charges before accepting the appointment.</li><li>Keep a record of the agreed quote and receipt.</li></ul></div></section>
    <section className="faq" id="faq"><div className="eyebrow">HELP CENTER</div><h2>Frequently asked questions</h2><details><summary>How do I calculate a mobile notary fee?</summary><p>Add your planned notarization charges, round-trip mileage multiplied by your chosen rate, any separately disclosed travel fee, and other job expenses. Check local rules before charging.</p></details><details><summary>Does this calculator show official state notary fees?</summary><p>No. It is a flexible estimate tool. Fee limits and rules vary by state and may change. Verify current requirements with your Secretary of State or other official state authority.</p></details><details><summary>Can I include a travel fee?</summary><p>You can enter a travel amount to model an estimate. Whether and how a travel or convenience fee may be charged depends on applicable state and local rules and your agreement with the customer.</p></details><details><summary>Can I save the quote as a PDF?</summary><p>Yes. Select “Print / Save quote as PDF” and choose “Save as PDF” in your browser's print dialog.</p></details><details><summary>Does NotaryFee store my client details?</summary><p>This calculator demo does not send or store the information you enter. The values stay in the current page session.</p></details></section>
    <section className="info" aria-labelledby="resources-title"><div className="eyebrow">NOTARY RESOURCE CENTER</div><h2 id="resources-title">Free guides for notary professionals</h2><p className="lead">Understand fee rules, travel pricing and appointment costs before preparing a quote.</p><div className="steps"><article><h3><a href="/notary-fees-by-state">Notary fees by state →</a></h3><p>Learn what to verify in your state's notarial fee schedule.</p></article><article><h3><a href="/mobile-notary-travel-fees">Mobile notary travel fees →</a></h3><p>Compare mileage, flat trip charges and advance disclosures.</p></article><article><h3><a href="/loan-signing-fees">Loan signing agent fees →</a></h3><p>Separate signing work from statutory notarial charges.</p></article><article><h3><a href="/notary-profit-calculator">Notary job costs and profit →</a></h3><p>Review expenses and the time behind each appointment.</p></article><article><h3><a href="/methodology">Calculator methodology →</a></h3><p>See how estimates are calculated and what they do not decide.</p></article><article><h3><a href="/editorial-policy">Editorial policy →</a></h3><p>Understand our source standards and correction process.</p></article></div></section>
    <footer><a className="brand" href="/">Notary<span>Fee</span></a><p>Independent estimating tool for notary professionals. Always verify current official requirements.</p><div className="navlinks" style={{flexWrap:"wrap",margin:"18px 0"}}><a href="/about">About</a><a href="/contact">Contact</a><a href="/privacy-policy">Privacy</a><a href="/terms">Terms</a><a href="/editorial-policy">Editorial policy</a><a href="/methodology">Methodology</a><a href="/notary-fees-by-state">State fee guide</a></div><small>© {new Date().getFullYear()} NotaryFee. Estimates are informational, not legal or tax advice.</small></footer>
  </main>;
}

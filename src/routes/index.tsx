import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight, Phone, Mail, MapPin, MessageCircle, Wrench, Settings, Zap,
  Sparkles, ShieldCheck, Clock, Users, Award, CheckCircle2, Quote,
} from "lucide-react";

import { LoadingScreen } from "@/components/LoadingScreen";

import { Navbar } from "@/components/Navbar";
import { Floor } from "@/components/Floor";
import { Logo } from "@/components/Logo";
import { LuxuryLift } from "@/components/LuxuryLift";
import { BuildingLift } from "@/components/BuildingLift";
import { LiftCutaway } from "@/components/LiftCutaway";

import hero from "@/assets/hero-building.jpg";
import sAmc from "@/assets/service-amc.jpg";
import sInstall from "@/assets/service-install.jpg";
import sRepair from "@/assets/service-repair.jpg";
import sModern from "@/assets/service-modern.jpg";
import pRes from "@/assets/proj-residential.jpg";
import pCom from "@/assets/proj-commercial.jpg";
import pHos from "@/assets/proj-hospital.jpg";
import pHot from "@/assets/proj-hotel.jpg";
import pMall from "@/assets/proj-mall.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CIKAY Elevator Pvt Ltd | Lift Installation, AMC, Repair & Modernization" },
      { name: "description", content: "CIKAY Elevator Pvt Ltd offers reliable lift installation, AMC, repair and modernization across residential, commercial and industrial projects. 24/7 support." },
      { name: "keywords", content: "elevator, lift installation, AMC, lift repair, modernization, CIKAY, India" },
      { property: "og:title", content: "CIKAY Elevator Private Limited" },
      { property: "og:description", content: "Premium elevator solutions — installation, AMC, repair, modernization." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return <span ref={ref}>{n.toLocaleString()}{suffix}</span>;
}

const services = [
  { icon: Settings, title: "Lift AMC", img: sAmc, desc: "Comprehensive annual maintenance contracts with scheduled inspections, control panel diagnostics and priority response." },
  { icon: Wrench, title: "Lift Installation", img: sInstall, desc: "Turnkey installation of passenger, freight and capsule elevators — from shaft design to commissioning." },
  { icon: Zap, title: "Lift Repair", img: sRepair, desc: "Rapid diagnostics and on-site repair of motors, drives, doors and controllers with genuine spare parts." },
  { icon: Sparkles, title: "Lift Modernization", img: sModern, desc: "Upgrade aging lifts with touch panels, LED interiors, energy-efficient drives and modern safety systems." },
];

const reasons = [
  { icon: Users, title: "Experienced Technicians", desc: "Factory-trained engineers with decades of combined field experience." },
  { icon: Clock, title: "Fast Response", desc: "Priority dispatch with SLA-backed response times across all AMC plans." },
  { icon: Award, title: "Genuine Parts", desc: "OEM-grade components for long-term reliability and safety compliance." },
  { icon: Phone, title: "24/7 Emergency Support", desc: "Round-the-clock helpline for breakdowns, entrapments and urgent service." },
  { icon: ShieldCheck, title: "Safety Compliance", desc: "Installations and audits aligned with national elevator safety standards." },
  { icon: CheckCircle2, title: "Affordable AMC Plans", desc: "Flexible silver, gold and platinum maintenance plans for every building." },
];

const projects = [
  { title: "Residential Buildings", img: pRes },
  { title: "Commercial Complexes", img: pCom },
  { title: "Hospitals", img: pHos },
  { title: "Hotels", img: pHot },
  { title: "Shopping Malls", img: pMall },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Facility Manager, Skyline Residency", text: "CIKAY transformed our aging elevator system. The modernization was completed on schedule with zero disruption to residents." },
  { name: "Priya Nair", role: "Operations Head, Meridian Hotels", text: "Their AMC team is exceptional — proactive servicing, transparent reports and a response time we can actually rely on." },
  { name: "Anand Verma", role: "Project Director, Crescent Mall", text: "From installation to handover, CIKAY delivered a flawless experience. Safety compliance was their top priority throughout." },
];

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background">
      <LoadingScreen />
      <Navbar />
      

      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,oklch(0.72_0.18_50/0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,oklch(0.3_0.1_265/0.4),transparent_55%)]" />
      </div>

      <main>
        {/* HERO - Floor 10 */}
        <section id="hero" className="relative flex min-h-screen items-center px-4 py-32 lg:px-12 lg:pr-[160px]">
          <div className="absolute inset-0 -z-10">
            <img src={hero} alt="Modern skyscraper lobby" width={1920} height={1080} className="h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
          </div>
          <div className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
            <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.25em] text-primary"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Floor 10 · Welcome
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
              className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Reliable Elevator <br />
              Solutions For <span className="gold-text">Modern Buildings</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.7 }}
              className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg"
            >
              Installation, AMC, Repair & Modernization Services across residential, commercial and industrial projects.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.9 }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.03]">
                Get Free Quote <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="tel:+919639099990" className="glass inline-flex items-center gap-2 rounded-full px-7 py-4 font-medium text-foreground transition hover:border-primary/60">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-[360px] animate-float"
            >
              <LuxuryLift className="w-full" />
            </motion.div>
          </div>
        </section>

        {/* ABOUT - Floor 8 */}
        <Floor id="about" number="8" label="About Us">
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                Engineered for <span className="gold-text">safety</span>, built for trust.
              </h2>
              <p className="mt-6 max-w-3xl text-lg text-muted-foreground">
                CIKAY Elevator Private Limited delivers reliable elevator installation, maintenance, modernization and repair services with a strong focus on safety, performance and customer satisfaction.
              </p>
              <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
                {[
                  { n: 1000, s: "+", label: "Service Visits" },
                  { n: 500, s: "+", label: "Satisfied Clients" },
                  { n: 24, s: "/7", label: "Support" },
                  { n: 100, s: "%", label: "Safety Commitment" },
                ].map((s) => (
                  <div key={s.label} className="glass rounded-2xl p-5 text-center">
                    <div className="gold-text font-display text-3xl font-bold leading-tight md:text-4xl">
                      <Counter to={s.n} suffix={s.s} />
                    </div>
                    <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass rounded-3xl p-4">
              <BuildingLift className="mx-auto h-[440px] w-full max-w-[320px]" />
              <p className="mt-2 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
                Live · Cabin in motion
              </p>
            </div>
          </div>
        </Floor>

        {/* SERVICES - Floor 6 */}
        <Floor id="services" number="6" label="Services">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Our <span className="gold-text">Services</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Four pillars of elevator service excellence — from new installations to legacy modernization.
            </p>

            {/* Animated cutaway covering every service parameter */}
            <div className="glass mt-10 grid items-center gap-8 rounded-3xl p-6 md:grid-cols-[1fr_1.2fr] md:p-10">
              <div className="mx-auto h-[480px] w-full max-w-[380px]">
                <LiftCutaway className="h-full w-full" />
              </div>
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-primary">
                  Anatomy of Service
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground md:text-3xl">
                  Every component <span className="gold-text">we cover</span>
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  From the traction motor in the machine room to the buffer at the pit floor — our AMC, installation, repair and modernization services keep every moving part safe, smooth and certified.
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-foreground/90">
                  {[
                    "Traction Motor", "Controller Panel",
                    "Steel Cables", "Guide Rails",
                    "Cabin & Doors", "Counterweight",
                    "Safety Brake", "Buffer / Pit",
                  ].map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {services.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="glass group relative overflow-hidden rounded-2xl"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img src={s.img} alt={s.title} loading="lazy" width={800} height={600}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                    <div className="absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground shadow-lg">
                      <s.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-2xl font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                    <a href="#contact" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all">
                      Learn more <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Floor>

        {/* WHY - Floor 4 */}
        <Floor id="why" number="4" label="Why Choose Us">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Why Choose <span className="gold-text">CIKAY</span>
            </h2>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r, i) => (
                <motion.div
                  key={r.title}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="glass group rounded-2xl p-6 transition hover:border-primary/40"
                >
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <r.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{r.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Floor>

        {/* PROJECTS - Floor 3 */}
        <Floor id="projects" number="3" label="Projects">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Projects <span className="gold-text">Delivered</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">Trusted across residential, commercial and institutional sectors.</p>
            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {projects.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
                >
                  <img src={p.img} alt={p.title} loading="lazy" width={800} height={600}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="font-display text-base font-semibold text-foreground md:text-lg">{p.title}</h3>
                    <div className="mt-1 h-0.5 w-8 bg-primary transition-all group-hover:w-full" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Floor>

        {/* TESTIMONIALS - Floor 2 */}
        <Floor id="testimonials" number="2" label="Testimonials">
          <div className="mx-auto max-w-6xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Trusted by <span className="gold-text">industry leaders</span>
            </h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="glass relative rounded-2xl p-7"
                >
                  <Quote className="h-8 w-8 text-primary/40" />
                  <p className="mt-4 text-foreground/90">"{t.text}"</p>
                  <div className="mt-6 border-t border-border/60 pt-4">
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Floor>

        {/* CONTACT - Ground */}
        <Floor id="contact" number="G" label="Contact Us">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <h2 className="font-display text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  You've arrived at <span className="gold-text">Ground Floor</span>
                </h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Let's discuss your elevator project. Our team responds within one business day.
                </p>
                <div className="mt-10 space-y-5">
                  <a href="tel:+919639099990" className="glass flex items-center gap-4 rounded-xl p-4 transition hover:border-primary/50">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground"><Phone className="h-5 w-5" /></div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</div>
                      <div className="font-medium text-foreground">+91 96390 99990</div>
                    </div>
                  </a>
                  <a href="mailto:sales@cikayelevator.com" className="glass flex items-center gap-4 rounded-xl p-4 transition hover:border-primary/50">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground"><Mail className="h-5 w-5" /></div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Sales</div>
                      <div className="font-medium text-foreground">sales@cikayelevator.com</div>
                    </div>
                  </a>
                  <a href="mailto:info@cikayelevator.com" className="glass flex items-center gap-4 rounded-xl p-4 transition hover:border-primary/50">
                    <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground"><Mail className="h-5 w-5" /></div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Information</div>
                      <div className="font-medium text-foreground">info@cikayelevator.com</div>
                    </div>
                  </a>
                </div>
              </div>

              <ContactForm />
            </div>
          </div>
        </Floor>

        {/* FOOTER */}
        <footer className="relative border-t border-border/60 px-4 py-14 lg:px-12 lg:pr-[160px]">
          <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <Logo size={48} />
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                CIKAY Elevator Private Limited — reliable elevator installation, AMC, repair and modernization for modern India.
              </p>
            </div>
            <div>
              <h4 className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-foreground">About</a></li>
                <li><a href="#services" className="hover:text-foreground">Services</a></li>
                <li><a href="#projects" className="hover:text-foreground">Projects</a></li>
                <li><a href="#contact" className="hover:text-foreground">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-3 text-xs uppercase tracking-[0.2em] text-primary">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+91 96390 99990</li>
                <li>sales@cikayelevator.com</li>
                <li>info@cikayelevator.com</li>
              </ul>
            </div>
          </div>
          <div className="mx-auto mt-12 flex max-w-6xl items-center justify-between border-t border-border/60 pt-6 text-xs text-muted-foreground">
            <span>© 2025 CIKAY Elevator Private Limited</span>
            <span className="flex items-center gap-2"><MapPin className="h-3 w-3" /> India</span>
          </div>
        </footer>
      </main>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919639099990"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="animate-pulse-ring fixed bottom-6 left-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }} transition={{ duration: 0.7 }}
      onSubmit={(e) => { e.preventDefault(); setSent(true); }}
      className="glass relative overflow-hidden rounded-3xl p-7"
    >
      {/* Cabin styling */}
      <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="mb-6 flex items-center justify-between">
        <h3 className="font-display text-2xl font-semibold text-foreground">Request a Callback</h3>
        <div className="rounded border border-primary/40 bg-foreground/10 px-2 py-0.5 font-mono text-xs text-primary">▼ G</div>
      </div>
      <div className="grid gap-4">
        <Field label="Name" type="text" />
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Phone" type="tel" />
          <Field label="Email" type="email" />
        </div>
        <div>
          <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</label>
          <textarea rows={4} className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground shadow-[var(--shadow-glow)] transition hover:scale-[1.02]">
            Request Callback <ArrowRight className="h-4 w-4" />
          </button>
          <a href="tel:+919639099990" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium text-foreground transition hover:border-primary/50">
            Get Free Quote
          </a>
        </div>
        {sent && (
          <p className="text-sm text-primary">Thanks — we'll be in touch shortly.</p>
        )}
      </div>
    </motion.form>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input type={type} className="w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30" />
    </div>
  );
}

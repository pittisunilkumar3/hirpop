import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "../../projectData";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: `${project.title} — HRIPOP Media`, description: project.detail } : {};
}

export default async function ProjectCaseStudy({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <main className="case-page">
      <header className="case-header">
        <Link className="case-brand" href="/#home" aria-label="HRIPOP Media home"><img src="/assets/hripop-logo.png" alt="HRIPOP" /></Link>
        <Link className="case-back" href="/#projects">← Back to our work</Link>
      </header>
      <section className="case-hero" style={{ "--case-image": `url(${project.image})` }}>
        <div className="case-hero-copy">
          <span className={`case-status${project.status.startsWith("Upcoming") ? " is-upcoming" : ""}`}>{project.status}</span>
          <p>The HRIPOP experience</p>
          <h1>{project.title}</h1>
          <strong>{project.tagline}</strong>
        </div>
      </section>
      <section className="case-content">
        <div><span>The idea</span><h2>{project.detail}</h2></div>
        <div className="case-facts"><article><span>HRIPOP role</span><p>{project.role}</p></article><article><span>Experience focus</span><p>{project.focus}</p></article></div>
        <div className="case-close"><p>Another idea brought into reality.</p><Link href="/#contact">Imagine with us <span>→</span></Link></div>
      </section>
    </main>
  );
}

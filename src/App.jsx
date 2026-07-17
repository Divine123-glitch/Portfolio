import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaExternalLinkAlt, FaBrain, FaRobot, FaCloud, FaDatabase, FaServer, FaCode, FaFire, FaAws } from 'react-icons/fa';
import { SiPython, SiJavascript, SiReact, SiFastapi, SiTailwindcss, SiPytorch, SiScikitlearn, SiLangchain, SiDocker, SiGooglecloud, SiPostgresql, SiMongodb, SiSqlite, SiFirebase } from 'react-icons/si';
import { BsRobot, BsCpu, BsStars } from 'react-icons/bs';
import SectionTitle from './components/SectionTitle';
import { navItems, skills, experiences, projects, education } from './data/content';

const resumeLinks = [
  { label: 'AI Resume', href: '/DIVINE_JOSHUA_GBADAMOSI_AI_Engineer.pdf' },
  { label: 'Data Resume', href: '/DIVINE_JOSHUA_GBADAMOSI_Data_Analyst.pdf' },
  { label: 'Full-Stack Resume', href: '/DIVINE_JOSHUA_GBADAMOSI_Full_Stack_Developer.pdf' },
  { label: 'Cover Letter', href: '/Cover Letter.pdf' },
];

const skillIcons = {
  Python: SiPython,
  JavaScript: SiJavascript,
  React: SiReact,
  FastAPI: SiFastapi,
  'Tailwind CSS': SiTailwindcss,
  PyTorch: SiPytorch,
  'Scikit-learn': SiScikitlearn,
  Transformers: FaBrain,
  LangChain: SiLangchain,
  'OpenAI API': FaRobot,
  Docker: SiDocker,
  AWS: FaAws,
  Azure: FaCloud,
  GCP: SiGooglecloud,
  PostgreSQL: FaDatabase,
  MongoDB: FaDatabase,
  SQLite: FaDatabase,
  Firebase: FaFire,
};

function App() {
  const [mounted, setMounted] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    setMounted(true);
    const fullText = 'Building intelligent AI systems, scalable machine learning solutions, and data-driven applications that solve real-world problems.';
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index += 1;
      if (index > fullText.length) clearInterval(interval);
    }, 30);
    const handleScroll = () => setShowBackToTop(window.scrollY > 600);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const stats = useMemo(() => [
    { value: '6+', label: 'Featured Projects' },
    { value: 'AI Fellow', label: 'AI Engineering Fellow' },
    { value: '20+', label: 'Technical Skills' },
    { value: 'Open', label: 'Open to Opportunities' },
  ], []);

  if (!mounted) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-950">
        <div className="flex flex-col items-center gap-4">
          <div className="h-16 w-16 animate-spin rounded-full border-4 border-sky-400/30 border-t-sky-400" />
          <p className="text-lg font-medium text-slate-200">Loading portfolio experience…</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent text-slate-100">
      <div className="animated-grid fixed inset-0 -z-10 opacity-40" />
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-lg font-semibold tracking-[0.3em] text-white">DIVINE</a>
          <div className="hidden gap-6 text-sm text-slate-300 md:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-sky-300">
                {item}
              </a>
            ))}
          </div>
          <a href="#contact" className="rounded-full border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200 transition hover:bg-sky-500/20">
            Let’s Connect
          </a>
        </nav>
      </header>

      <main id="home">
        <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-sky-400/40 shadow-glow">
                <img src="/IMG-20250504-WA0011.jpg" alt="Divine Gbadamosi portrait" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-sky-300">AI Engineer • Machine Learning Engineer • Data Analyst • Full-Stack Developer</p>
                <p className="mt-2 text-sm text-slate-300">Building intelligent AI systems, scalable ML solutions, and data-driven applications.</p>
              </div>
            </div>
            <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Hello, I’m <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">Divine Joshua Gbadamosi</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-slate-300">{typedText}<span className="ml-1 animate-pulse">|</span></p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-105">View Projects</a>
              {resumeLinks.map((resume) => (
                <a key={resume.label} href={resume.href} download className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10">
                  <span className="mr-2 inline-block">⬇</span>{resume.label}
                </a>
              ))}
            </div>
            <div className="mt-10 flex gap-4 text-2xl text-slate-300">
              <a href="https://github.com/Divine123-glitch" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-sky-300"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/divine-joshua-572604237" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-sky-300"><FaLinkedin /></a>
              <a href="mailto:joshuaolaoluwa344@gmail.com" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-sky-300"><FaEnvelope /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="glass relative overflow-hidden rounded-3xl p-8 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-violet-500/20" />
            <div className="relative">
              <div className="mb-6 flex items-center gap-3 text-sm text-slate-400">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Live portfolio · Optimized for modern teams
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <div className="mb-4 flex items-center gap-3 text-sky-300"><BsRobot size={24} /> AI Systems</div>
                  <p className="text-sm text-slate-300">Designing smart, production-ready AI products with measurable impact.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5">
                  <div className="mb-4 flex items-center gap-3 text-violet-300"><BsCpu size={24} /> ML Engineering</div>
                  <p className="text-sm text-slate-300">Experiments, pipelines, and deployment strategies built for scale.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/70 p-5 sm:col-span-2">
                  <div className="mb-4 flex items-center gap-3 text-fuchsia-300"><BsStars size={24} /> Data & Product</div>
                  <p className="text-sm text-slate-300">I bridge scientific reasoning, data analysis, and full-stack delivery to create solutions that matter.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="About" title="About Me" description="I combine scientific thinking, modern AI, and software engineering to build systems with real-world impact." />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="glass relative overflow-hidden rounded-[2rem] p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-violet-500/10" />
              <div className="relative flex flex-col items-center">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-r from-sky-500/40 via-violet-500/30 to-cyan-500/40 blur-2xl" />
                  <img
                    src="/IMG-20250504-WA0011.jpg"
                    alt="Divine Gbadamosi portrait"
                    onError={(event) => {
                      event.currentTarget.src = '/profile.svg';
                    }}
                    className="h-56 w-56 rounded-full border border-sky-400/40 object-cover shadow-glow"
                  />
                </div>
                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {['Python', 'AI', 'ML', 'React'].map((badge) => (
                    <span key={badge} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">{badge}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl">
              <p className="text-lg leading-8 text-slate-300">
                I am Divine Gbadamosi, an AI Engineer, Machine Learning Engineer, Data Analyst, and Full-Stack Developer passionate about building intelligent systems that solve real-world problems.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                My journey into technology began with a strong foundation in Biology, where I developed analytical thinking and a deep appreciation for scientific problem-solving. This curiosity led me into Artificial Intelligence, Machine Learning, and Software Engineering, where I discovered my passion for creating impactful, data-driven solutions.
              </p>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                I specialize in developing end-to-end machine learning systems, AI-powered applications, intelligent automation workflows, and modern web applications. My experience includes working with transformer models, vector databases, retrieval-augmented generation (RAG), FastAPI, React, and cloud technologies to build scalable, production-ready software.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {resumeLinks.map((resume) => (
                  <a key={resume.label} href={resume.href} download className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
                    <span className="mr-2">⬇</span>{resume.label}
                  </a>
                ))}
                <a href="#contact" className="rounded-full border border-white/15 bg-white/5 px-6 py-3 font-semibold text-slate-100 transition hover:bg-white/10">Let’s Connect</a>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Skills" title="Technical Stack" description="A broad toolkit for research, product development, and deployment across AI and modern web engineering." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skillIcons[skill.name];
              const progress = skill.name === 'Python' || skill.name === 'React' || skill.name === 'FastAPI' ? 92 : skill.name === 'PyTorch' || skill.name === 'Transformers' || skill.name === 'OpenAI API' ? 88 : skill.name === 'Tailwind CSS' || skill.name === 'LangChain' ? 84 : 78;
              return (
                <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className="glass rounded-2xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 p-3 text-sky-300"><Icon size={20} /></div>
                    <h3 className="text-lg font-medium text-white">{skill.name}</h3>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-slate-800">
                    <div className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" style={{ width: `${progress}%` }} />
                  </div>
                  <p className="mt-2 text-sm text-slate-400">Proficiency {progress}%</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Experience" title="Professional Journey" description="Focused on building practical AI solutions and helping teams turn ideas into shipped systems." />
          <div className="grid gap-6 lg:grid-cols-1">
            {experiences.map((exp, index) => (
              <motion.div key={exp.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="glass rounded-3xl p-8">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                    <p className="mt-2 text-lg text-sky-300">{exp.company}</p>
                  </div>
                  <p className="rounded-full border border-sky-400/20 bg-sky-500/10 px-4 py-2 text-sm text-slate-300">{exp.period}</p>
                </div>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Projects" title="Selected Work" description="A range of applied AI, machine learning, and full-stack builds that showcase impact and breadth." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="glass group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/30">
                <div className="mb-5 h-32 rounded-2xl bg-gradient-to-br from-sky-500/20 via-violet-500/20 to-transparent" />
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition group-hover:text-sky-200">
                  View repository <FaExternalLinkAlt />
                </a>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Education" title="Academic Foundation" description="A unique blend of scientific training and software engineering knowledge." />
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className="glass rounded-3xl p-8">
                <p className="text-sm uppercase tracking-[0.3em] text-sky-300">{item.subtitle}</p>
                <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-4 text-lg leading-8 text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle eyebrow="Contact" title="Let’s Build Something Meaningful" description="Open to collaborations, consulting opportunities, and ambitious AI product work." />
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-3 text-lg font-semibold text-white"><FaEnvelope /> Email</div>
              <a href="mailto:joshuaolaoluwa344@gmail.com" className="mt-3 block text-sky-300">joshuaolaoluwa344@gmail.com</a>
              <div className="mt-8 flex items-center gap-3 text-lg font-semibold text-white"><FaPhone /> Phone</div>
              <p className="mt-3 text-slate-300">+2347086807232</p>
              <div className="mt-8 flex gap-4 text-2xl text-slate-300">
                <a href="https://github.com/Divine123-glitch" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-sky-300"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/divine-joshua-572604237" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:text-sky-300"><FaLinkedin /></a>
              </div>
            </div>
            <form className="glass rounded-3xl p-8">
              <div className="grid gap-6 md:grid-cols-2">
                <input className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none ring-0" placeholder="Your name" />
                <input className="rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none ring-0" placeholder="Your email" />
              </div>
              <textarea className="mt-6 h-40 w-full rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none ring-0" placeholder="Tell me about your project" />
              <button className="mt-6 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 font-semibold text-white transition hover:scale-105">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/70 px-6 py-8 text-center text-sm text-slate-400">
        <p>© 2026 Divine Gbadamosi. Crafted for thoughtful AI and product engineering.</p>
      </footer>

      {showBackToTop && (
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 right-6 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 p-4 text-white shadow-glow">
          <FaArrowUp />
        </button>
      )}
    </div>
  );
}

export default App;

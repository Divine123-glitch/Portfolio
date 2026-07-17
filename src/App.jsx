import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaExternalLinkAlt, FaBrain, FaRobot, FaCloud, FaDatabase, FaServer, FaCode, FaFire, FaAws, FaMoon, FaSun } from 'react-icons/fa';
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
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');
    const initialTheme = savedTheme === 'light' ? 'light' : 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

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

  const isDark = theme === 'dark';
  const themeClasses = {
    shell: isDark ? 'min-h-screen bg-transparent text-slate-100' : 'min-h-screen bg-transparent text-slate-900',
    header: isDark ? 'sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl' : 'sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-xl',
    navText: isDark ? 'text-slate-300 hover:text-sky-300' : 'text-slate-600 hover:text-sky-600',
    brand: isDark ? 'text-white' : 'text-slate-900',
    chip: isDark ? 'border border-sky-400/30 bg-sky-500/10 px-4 py-2 text-sm font-medium text-sky-200' : 'border border-sky-500/20 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-700',
    heroText: isDark ? 'text-slate-300' : 'text-slate-700',
    heroMuted: isDark ? 'text-slate-400' : 'text-slate-500',
    heroTitle: isDark ? 'text-white' : 'text-slate-900',
    buttonSecondary: isDark ? 'rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:bg-white/10' : 'rounded-full border border-slate-300 bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-200',
    card: isDark ? 'glass' : 'glass-light',
    cardInner: isDark ? 'rounded-2xl border border-white/10 bg-slate-950/70 p-5' : 'rounded-2xl border border-slate-200 bg-white/80 p-5',
    statCard: isDark ? 'rounded-2xl border border-white/10 bg-white/5 p-4' : 'rounded-2xl border border-slate-200 bg-white/80 p-4',
    input: isDark ? 'rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500' : 'rounded-2xl border border-slate-300 bg-white px-4 py-3 text-slate-900 outline-none ring-0 placeholder:text-slate-400',
    footer: isDark ? 'border-t border-white/10 bg-slate-950/70 px-6 py-8 text-center text-sm text-slate-400' : 'border-t border-slate-200 bg-white/80 px-6 py-8 text-center text-sm text-slate-500',
  };

  if (!mounted) {
    return (
      <div className={`flex min-h-screen items-center justify-center ${isDark ? 'bg-slate-950 text-slate-200' : 'bg-slate-50 text-slate-700'}`}>
        <div className="flex flex-col items-center gap-4">
          <div className={`h-16 w-16 animate-spin rounded-full border-4 ${isDark ? 'border-sky-400/30 border-t-sky-400' : 'border-sky-500/20 border-t-sky-500'}`} />
          <p className="text-lg font-medium">Loading portfolio experience…</p>
        </div>
      </div>
    );
  }

  return (
    <div className={themeClasses.shell}>
      <div className="animated-grid fixed inset-0 -z-10 opacity-40" />
      <header className={themeClasses.header}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className={`text-lg font-semibold tracking-[0.3em] ${themeClasses.brand}`}>DIVINE</a>
          <div className={`hidden gap-6 text-sm md:flex ${themeClasses.navText}`}>
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="transition">
                {item}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className={`rounded-full border p-2 transition ${isDark ? 'border-white/10 bg-white/5 text-slate-200 hover:bg-white/10' : 'border-slate-300 bg-slate-100 text-slate-700 hover:bg-slate-200'}`}
              aria-label="Toggle color theme"
            >
              {isDark ? <FaSun /> : <FaMoon />}
            </button>
            <a href="#contact" className={themeClasses.chip}>
              Let’s Connect
            </a>
          </div>
        </nav>
      </header>

      <main id="home">
        <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-3xl">
            <div className="mb-6 flex items-center gap-4">
              <div className={`relative h-20 w-20 overflow-hidden rounded-full border-2 ${isDark ? 'border-sky-400/40 shadow-glow' : 'border-sky-500/30 shadow-lg'}`}>
                <img src="/IMG-20250504-WA0011.jpg" alt="Divine Gbadamosi portrait" className="h-full w-full object-cover" />
              </div>
              <div>
                <p className={`text-sm uppercase tracking-[0.35em] ${isDark ? 'text-sky-300' : 'text-sky-600'}`}>AI Engineer • Machine Learning Engineer • Data Analyst • Full-Stack Developer</p>
                <p className={`mt-2 text-sm ${themeClasses.heroText}`}>Building intelligent AI systems, scalable ML solutions, and data-driven applications.</p>
              </div>
            </div>
            <h1 className={`text-4xl font-semibold leading-tight sm:text-6xl ${themeClasses.heroTitle}`}>
              Hello, I’m <span className="bg-gradient-to-r from-sky-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">Divine Joshua Gbadamosi</span>
            </h1>
            <p className={`mt-6 text-xl leading-8 ${themeClasses.heroText}`}>{typedText}<span className="ml-1 animate-pulse">|</span></p>
            <div className="mt-10 flex flex-wrap gap-3">
              <a href="#projects" className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 font-semibold text-white shadow-glow transition hover:scale-105">View Projects</a>
              {resumeLinks.map((resume) => (
                <a key={resume.label} href={resume.href} download className={themeClasses.buttonSecondary}>
                  <span className="mr-2 inline-block">⬇</span>{resume.label}
                </a>
              ))}
            </div>
            <div className={`mt-10 flex gap-4 text-2xl ${themeClasses.heroText}`}>
              <a href="https://github.com/Divine123-glitch" target="_blank" rel="noreferrer" className={`rounded-full border p-3 transition ${isDark ? 'border-white/10 bg-white/5 hover:text-sky-300' : 'border-slate-300 bg-slate-100 hover:text-sky-600'}`}><FaGithub /></a>
              <a href="https://www.linkedin.com/in/divine-joshua-572604237" target="_blank" rel="noreferrer" className={`rounded-full border p-3 transition ${isDark ? 'border-white/10 bg-white/5 hover:text-sky-300' : 'border-slate-300 bg-slate-100 hover:text-sky-600'}`}><FaLinkedin /></a>
              <a href="mailto:joshuaolaoluwa344@gmail.com" className={`rounded-full border p-3 transition ${isDark ? 'border-white/10 bg-white/5 hover:text-sky-300' : 'border-slate-300 bg-slate-100 hover:text-sky-600'}`}><FaEnvelope /></a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className={`${themeClasses.card} relative overflow-hidden rounded-3xl p-8 shadow-2xl`}>
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 via-transparent to-violet-500/20" />
            <div className="relative">
              <div className={`mb-6 flex items-center gap-3 text-sm ${themeClasses.heroMuted}`}>
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" /> Live portfolio · Optimized for modern teams
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className={themeClasses.cardInner}>
                  <div className="mb-4 flex items-center gap-3 text-sky-300"><BsRobot size={24} /> AI Systems</div>
                  <p className={`text-sm ${themeClasses.heroText}`}>Designing smart, production-ready AI products with measurable impact.</p>
                </div>
                <div className={themeClasses.cardInner}>
                  <div className="mb-4 flex items-center gap-3 text-violet-300"><BsCpu size={24} /> ML Engineering</div>
                  <p className={`text-sm ${themeClasses.heroText}`}>Experiments, pipelines, and deployment strategies built for scale.</p>
                </div>
                <div className={`${themeClasses.cardInner} sm:col-span-2`}>
                  <div className="mb-4 flex items-center gap-3 text-fuchsia-300"><BsStars size={24} /> Data & Product</div>
                  <p className={`text-sm ${themeClasses.heroText}`}>I bridge scientific reasoning, data analysis, and full-stack delivery to create solutions that matter.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle isDark={isDark} eyebrow="About" title="About Me" description="I combine scientific thinking, modern AI, and software engineering to build systems with real-world impact." />
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={`${themeClasses.card} relative overflow-hidden rounded-[2rem] p-8`}>
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
                    <span key={badge} className={`rounded-full border px-4 py-2 text-sm ${isDark ? 'border-white/10 bg-white/5 text-slate-200' : 'border-slate-300 bg-slate-100 text-slate-700'}`}>{badge}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className={`${isDark ? 'rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 shadow-2xl' : 'rounded-[2rem] border border-slate-200 bg-white/90 p-8 shadow-2xl'}`}>
              <p className={`text-lg leading-8 ${themeClasses.heroText}`}>
                I am Divine Gbadamosi, an AI Engineer, Machine Learning Engineer, Data Analyst, and Full-Stack Developer passionate about building intelligent systems that solve real-world problems.
              </p>
              <p className={`mt-5 text-lg leading-8 ${themeClasses.heroText}`}>
                My journey into technology began with a strong foundation in Biology, where I developed analytical thinking and a deep appreciation for scientific problem-solving. This curiosity led me into Artificial Intelligence, Machine Learning, and Software Engineering, where I discovered my passion for creating impactful, data-driven solutions.
              </p>
              <p className={`mt-5 text-lg leading-8 ${themeClasses.heroText}`}>
                I specialize in developing end-to-end machine learning systems, AI-powered applications, intelligent automation workflows, and modern web applications. My experience includes working with transformer models, vector databases, retrieval-augmented generation (RAG), FastAPI, React, and cloud technologies to build scalable, production-ready software.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                {resumeLinks.map((resume) => (
                  <a key={resume.label} href={resume.href} download className="rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
                    <span className="mr-2">⬇</span>{resume.label}
                  </a>
                ))}
                <a href="#contact" className={themeClasses.buttonSecondary}>Let’s Connect</a>
              </div>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className={themeClasses.statCard}>
                    <p className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{stat.value}</p>
                    <p className={`mt-1 text-sm ${themeClasses.heroMuted}`}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle isDark={isDark} eyebrow="Skills" title="Technical Stack" description="A broad toolkit for research, product development, and deployment across AI and modern web engineering." />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => {
              const Icon = skillIcons[skill.name];
              const progress = skill.name === 'Python' || skill.name === 'React' || skill.name === 'FastAPI' ? 92 : skill.name === 'PyTorch' || skill.name === 'Transformers' || skill.name === 'OpenAI API' ? 88 : skill.name === 'Tailwind CSS' || skill.name === 'LangChain' ? 84 : 78;
              return (
                <motion.div key={skill.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.03 }} className={`${themeClasses.card} rounded-2xl p-5`}>
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl bg-gradient-to-br from-sky-500/20 to-violet-500/20 p-3 text-sky-300"><Icon size={20} /></div>
                    <h3 className={`text-lg font-medium ${isDark ? 'text-white' : 'text-slate-900'}`}>{skill.name}</h3>
                  </div>
                  <div className={`mt-4 h-2 rounded-full ${isDark ? 'bg-slate-800' : 'bg-slate-200'}`}>
                    <div className="h-2 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" style={{ width: `${progress}%` }} />
                  </div>
                  <p className={`mt-2 text-sm ${themeClasses.heroMuted}`}>Proficiency {progress}%</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle isDark={isDark} eyebrow="Experience" title="Professional Journey" description="Focused on building practical AI solutions and helping teams turn ideas into shipped systems." />
          <div className="grid gap-6 lg:grid-cols-1">
            {experiences.map((exp, index) => (
              <motion.div key={exp.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className={`${themeClasses.card} rounded-3xl p-8`}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{exp.title}</h3>
                    <p className={`mt-2 text-lg ${isDark ? 'text-sky-300' : 'text-sky-600'}`}>{exp.company}</p>
                  </div>
                  <p className={`rounded-full border px-4 py-2 text-sm ${isDark ? 'border-sky-400/20 bg-sky-500/10 text-slate-300' : 'border-sky-200 bg-sky-50 text-slate-700'}`}>{exp.period}</p>
                </div>
                <p className={`mt-6 max-w-3xl text-lg leading-8 ${themeClasses.heroText}`}>{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle isDark={isDark} eyebrow="Projects" title="Selected Work" description="A range of applied AI, machine learning, and full-stack builds that showcase impact and breadth." />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => {
              const accent = index % 3 === 0 ? 'from-sky-500 via-cyan-400 to-blue-600' : index % 3 === 1 ? 'from-violet-500 via-fuchsia-500 to-purple-700' : 'from-emerald-500 via-teal-400 to-cyan-600';
              return (
                <motion.article key={project.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className={`${themeClasses.card} group rounded-3xl p-6 transition hover:-translate-y-1 hover:border-sky-400/30`}>
                  <div className={`relative mb-5 h-32 overflow-hidden rounded-2xl bg-gradient-to-br ${accent}`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.45),transparent_35%)]" />
                    <div className="absolute bottom-4 left-4 h-16 w-16 rounded-2xl border border-white/40 bg-white/20 backdrop-blur-sm" />
                    <div className="absolute right-4 top-4 h-10 w-20 rounded-full border border-white/40 bg-white/20" />
                    <div className="absolute bottom-5 right-5 h-12 w-12 rounded-full border border-white/40 bg-white/30" />
                  </div>
                  <h3 className={`text-xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                  <p className={`mt-3 text-sm leading-7 ${themeClasses.heroText}`}>{project.description}</p>
                  <a href={project.link} target="_blank" rel="noreferrer" className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${isDark ? 'text-sky-300 group-hover:text-sky-200' : 'text-sky-600 group-hover:text-sky-500'}`}>
                    View repository <FaExternalLinkAlt />
                  </a>
                </motion.article>
              );
            })}
          </div>
        </section>

        <section id="education" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle isDark={isDark} eyebrow="Education" title="Academic Foundation" description="A unique blend of scientific training and software engineering knowledge." />
          <div className="grid gap-6 md:grid-cols-2">
            {education.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }} className={`${themeClasses.card} rounded-3xl p-8`}>
                <p className={`text-sm uppercase tracking-[0.3em] ${isDark ? 'text-sky-300' : 'text-sky-600'}`}>{item.subtitle}</p>
                <h3 className={`mt-3 text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{item.title}</h3>
                <p className={`mt-4 text-lg leading-8 ${themeClasses.heroText}`}>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionTitle isDark={isDark} eyebrow="Contact" title="Let’s Build Something Meaningful" description="Open to collaborations, consulting opportunities, and ambitious AI product work." />
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className={`${themeClasses.card} rounded-3xl p-8`}>
              <div className={`flex items-center gap-3 text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}><FaEnvelope /> Email</div>
              <a href="mailto:joshuaolaoluwa344@gmail.com" className={`mt-3 block ${isDark ? 'text-sky-300' : 'text-sky-600'}`}>joshuaolaoluwa344@gmail.com</a>
              <div className={`mt-8 flex items-center gap-3 text-lg font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}><FaPhone /> Phone</div>
              <p className={`mt-3 ${themeClasses.heroText}`}>+2347086807232</p>
              <div className={`mt-8 flex gap-4 text-2xl ${themeClasses.heroText}`}>
                <a href="https://github.com/Divine123-glitch" target="_blank" rel="noreferrer" className={`rounded-full border p-3 transition ${isDark ? 'border-white/10 bg-white/5 hover:text-sky-300' : 'border-slate-300 bg-slate-100 hover:text-sky-600'}`}><FaGithub /></a>
                <a href="https://www.linkedin.com/in/divine-joshua-572604237" target="_blank" rel="noreferrer" className={`rounded-full border p-3 transition ${isDark ? 'border-white/10 bg-white/5 hover:text-sky-300' : 'border-slate-300 bg-slate-100 hover:text-sky-600'}`}><FaLinkedin /></a>
              </div>
            </div>
            <form className={`${themeClasses.card} rounded-3xl p-8`}>
              <div className="grid gap-6 md:grid-cols-2">
                <input className={themeClasses.input} placeholder="Your name" />
                <input className={themeClasses.input} placeholder="Your email" />
              </div>
              <textarea className={`mt-6 h-40 w-full ${themeClasses.input}`} placeholder="Tell me about your project" />
              <button className="mt-6 rounded-full bg-gradient-to-r from-sky-500 to-violet-500 px-6 py-3 font-semibold text-white transition hover:scale-105">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className={themeClasses.footer}>
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

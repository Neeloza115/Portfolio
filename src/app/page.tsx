'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import type { CSSProperties, RefObject } from 'react';
import '../app/globals.css';
import { useGlowHover } from '@/hooks/useGlowHover';
import Reveal from '@/components/Reveal';
import { TiltCard } from '@/components/TiltCard';
import courseRecommenderPreview from '@/assets/course-recommender-preview.png';

type Project = {
  title: string;
  href: string;
  glow: CSSProperties;
  role: string;
  team?: string[];
  timeline: string;
  overview: string;
  badges: string[];
  preview: 'course' | 'path' | 'collision' | 'matrix' | 'moodflix' | 'weather' | 'portfolio';
};

const projects: Project[] = [
    {
    title: 'Course Recommendation',
    href: 'https://course-recommendation-u3yt.onrender.com',
    glow: { '--glow-r': 204, '--glow-g': 0, '--glow-b': 0 } as CSSProperties,
    role: 'Software Developer',
    timeline: 'Completed: October 2025 - April 2026',
    overview: 
      "Built a full-stack course recommender that personalizes suggestions using TF-IDF–based ranking and user preferences, with a FastAPI backend and React frontend. Implemented caching and reranking to deliver fast, relevant recommendations based on difficulty, popularity, and user history.",
    badges: [ 'React', 'FastAPI', 'Python', 'scikit-learn', 'SQL' ],
    preview: 'course',
  },
  {
    title: 'Path Finding Experiment',
    href: 'https://github.com/Neeloza115/ShortestPathsAnalyzer/tree/main',
    glow: { '--glow-r': 227, '--glow-g': 116, '--glow-b': 0 } as CSSProperties,
    role: 'Software Developer - Helped implement shortest-path algorithms and experiment tooling',
    team: ['Austin B, Team Member', 'Joshua Finemore, Team Member'],
    timeline: 'Completed: March 2025 - April 2025',
    overview:
      'Implemented and compared shortest-path algorithms including Dijkstra, Bellman-Ford, A*, and all-pairs methods on synthetic and London Subway networks.',
    badges: ['Python', 'LaTeX', 'Matplotlib', 'Pandas', 'GitHub'],
    preview: 'path',
  },
  {
    title: 'Collision Detection',
    href: 'https://github.com/Neeloza115/CollisionDetector',
    glow: { '--glow-r': 244, '--glow-g': 180, '--glow-b': 0 } as CSSProperties,
    role: 'Sole Developer - Built the collision-detection algorithms independently',
    timeline: 'Completed: October 2024 - December 2024',
    overview:
      'Developed a Java 2D collision-detection system supporting AABB, circle, and polygon collisions with JUnit coverage for correctness.',
    badges: ['Java', 'JUnit', 'Geometry', 'Testing', 'GitHub'],
    preview: 'collision',
  },
  {
    title: 'Cybersecurity System',
    href: 'https://github.com/Neeloza115/MacEngComp24',
    glow: { '--glow-r': 51, '--glow-g': 184, '--glow-b': 100 } as CSSProperties,
    role: 'Team Member - Developed facial recognition and encryption algorithms',
    team: ['Harsh Shukla, Team Member', 'Dharav Shah, Team Member', 'Mahad Hassan, Team Member'],
    timeline: 'Completed: December 2025',
    overview:
      'Designed and built secure encryption software with facial-recognition support. Finished second out of 30+ teams.',
    badges: ['Python', 'Flask', 'OpenCV', 'MySQL', 'GitHub'],
    preview: 'matrix',
  },
  {
    title: 'Moodflix App',
    href: 'https://moodflix-2d6f5aefae7e.herokuapp.com/moodflix/',
    glow: { '--glow-r': 255, '--glow-g': 90, '--glow-b': 90 } as CSSProperties,
    role: 'Sole Developer - Developed and deployed the website',
    timeline: 'Completed: July 2024',
    overview:
      'Created a full-stack web app that recommends movies based on mood and language, with filters for multiple viewing preferences.',
    badges: ['Python', 'Django', 'SQLite', 'JavaScript', 'HTML5', 'CSS3'],
    preview: 'moodflix',
  },
  {
    title: 'Weather App',
    href: 'https://neelsweatherapp-b698fb795223.herokuapp.com',
    glow: { '--glow-r': 92, '--glow-g': 136, '--glow-b': 218 } as CSSProperties,
    role: 'Sole Developer - Developed and deployed the website alone',
    timeline: 'Completed: June 2024',
    overview:
      'Created a full-stack weather app that serves real-time conditions and forecasts with dynamic visual feedback for each location.',
    badges: ['Python', 'Django', 'SQLite', 'JavaScript', 'HTML5', 'CSS3'],
    preview: 'weather',
  },
  {
    title: 'First Portfolio Website',
    href: 'https://neeloza115.github.io',
    glow: { '--glow-r': 128, '--glow-g': 128, '--glow-b': 128 } as CSSProperties,
    role: 'Sole Developer - Developed and deployed the website alone',
    timeline: 'Completed: May 2024',
    overview:
      'Created an early portfolio site to showcase core skills and get hands-on web development experience.',
    badges: ['JavaScript', 'HTML5', 'CSS3'],
    preview: 'portfolio',
  },
];

function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm body-text">
      {label}
    </span>
  );
}

function ProjectPreview({
  preview,
  matrixContainerRef,
  matrixCanvasRef,
}: {
  preview: Project['preview'];
  matrixContainerRef: RefObject<HTMLDivElement | null>;
  matrixCanvasRef: RefObject<HTMLCanvasElement | null>;
}) {
  if (preview === 'course') {
    return (
      <div className="project-preview-shell project-preview-course" aria-hidden="true">
        <Image
          src={courseRecommenderPreview}
          alt=""
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
        <div className="project-preview-course-overlay" />
      </div>
    );
  }

  if (preview === 'path') {
    return (
      <div className="project-preview-shell project-preview-path" aria-hidden="true">
        <div className="project-preview-grid" />
        <div className="project-preview-line project-preview-line-a" />
        <div className="project-preview-line project-preview-line-b" />
        <div className="project-preview-line project-preview-line-c" />
        <span className="project-preview-node project-preview-node-1" />
        <span className="project-preview-node project-preview-node-2" />
        <span className="project-preview-node project-preview-node-3" />
        <span className="project-preview-node project-preview-node-4" />
      </div>
    );
  }

  if (preview === 'collision') {
    return (
      <div className="project-preview-shell project-preview-collision" aria-hidden="true">
        <div className="collision-shape collision-square" />
        <div className="collision-shape collision-circle" />
        <div className="collision-shape collision-triangle" />
      </div>
    );
  }

  if (preview === 'matrix') {
    return (
      <div ref={matrixContainerRef} className="project-preview-shell project-preview-matrix matrix-container" aria-hidden="true">
        <canvas ref={matrixCanvasRef} className="h-full w-full" />
      </div>
    );
  }

  if (preview === 'moodflix') {
    return (
      <div className="project-preview-shell project-preview-moodflix movie-rec" aria-hidden="true">
        <div className="moodflix-chip-row">
          <span>Moody</span>
          <span>Funny</span>
          <span>Hindi</span>
        </div>
        <div className="moodflix-posters">
          <div className="poster poster-a" />
          <div className="poster poster-b" />
          <div className="poster poster-c" />
          <div className="poster poster-d" />
          <div className="poster poster-e" />
        </div>
      </div>
    );
  }

  if (preview === 'weather') {
    return (
      <div className="project-preview-shell cloud-preview" aria-hidden="true">
        <div className="forecast-pill">24 C</div>
        <div className="cloud x1"></div>
        <div className="cloud x2"></div>
        <div className="cloud x3"></div>
        <div className="cloud x4"></div>
        <div className="cloud x5"></div>
      </div>
    );
  }

  return (
    <div className="project-preview-shell project-preview-portfolio" aria-hidden="true">
      <div className="browser-frame">
        <div className="browser-dots">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-hero" />
        <div className="browser-grid">
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  matrixContainerRef,
  matrixCanvasRef,
}: {
  project: Project;
  matrixContainerRef: RefObject<HTMLDivElement | null>;
  matrixCanvasRef: RefObject<HTMLCanvasElement | null>;
}) {
  return (
    <div className="col-span-12 p-4">
      <Reveal>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.href}
          className="kill-link-style group"
        >
          <TiltCard
            className="cards project-card relative cursor-pointer text-left rounded-lg border-4 p-2 shadow-md md:p-8 sm:p-8 glow-hover glow-hover-small overflow-hidden"
            style={project.glow}
            tiltLimit={10}
            scale={1.02}
          >
            <div className="flex flex-col justify-start gap-y-2 px-2 pb-4 pt-2 md:px-8 md:pt-4">
              <h3 className="text-2xl font-extrabold md:text-4xl">{project.title}</h3>
            </div>

            <div className="flex flex-col items-start gap-x-16">
              <div className="flex w-full flex-col items-start gap-x-10 gap-y-10 md:flex-row md:gap-y-0">
                <div className="flex w-full flex-col gap-x-16 gap-y-8 text-left text-gray-300 md:flex-row">
                  <div className="flex flex-col gap-y-6 text-left md:w-1/2">
                    <div>
                      <h5 className="heading text-lg font-bold">My Role</h5>
                      <p className="body-text">{project.role}</p>
                    </div>

                    {project.team ? (
                      <div>
                        <h5 className="heading text-lg font-bold">Team</h5>
                        {project.team.map((member) => (
                          <p key={member} className="body-text">
                            {member}
                          </p>
                        ))}
                      </div>
                    ) : null}

                    <div>
                      <h5 className="heading text-lg font-bold">Timeline &amp; Status</h5>
                      <p className="body-text">
                        <span className="highlight font-medium">{project.timeline}</span>
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-y-5 text-left md:w-1/2">
                    <div>
                      <h5 className="heading text-lg font-bold">Overview</h5>
                      <p className="body-text">{project.overview}</p>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.badges.map((badge) => (
                        <TechBadge key={badge} label={badge} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <ProjectPreview
                preview={project.preview}
                matrixContainerRef={matrixContainerRef}
                matrixCanvasRef={matrixCanvasRef}
              />
            </div>
          </TiltCard>
        </a>
      </Reveal>
    </div>
  );
}

export default function Home() {
  const matrixContainerRef = useRef<HTMLDivElement | null>(null);
  const matrixCanvasRef = useRef<HTMLCanvasElement | null>(null);

  useGlowHover();

  useEffect(() => {
    if (
      window.innerWidth < 1024 ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return;
    }

    const canvas = matrixCanvasRef.current;
    const container = matrixContainerRef.current;
    const ctx = canvas?.getContext('2d');

    if (!canvas || !ctx || !container) return;

    const matrixChars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const fontSize = 16;

    const resizeCanvas = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
    };

    resizeCanvas();

    let columns = Math.floor(canvas.width / fontSize);
    let drops: number[] = Array.from({ length: columns }).fill(1) as number[];

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#6aff97';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const handleResize = () => {
      resizeCanvas();
      columns = Math.floor(canvas.width / fontSize);
      drops = Array.from({ length: columns }).fill(1) as number[];
    };

    let intervalId: number | null = null;

    const startAnimation = () => {
      if (intervalId === null) {
        intervalId = window.setInterval(draw, 50);
      }
    };

    const stopAnimation = () => {
      if (intervalId !== null) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    window.addEventListener('resize', handleResize);
    container.addEventListener('mouseenter', startAnimation);
    container.addEventListener('mouseleave', stopAnimation);

    return () => {
      stopAnimation();
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mouseenter', startAnimation);
      container.removeEventListener('mouseleave', stopAnimation);
    };
  }, []);

  return (
    <main className="relative flex flex-col items-center bg-main-page-mobile bg-cover bg-center bg-no-repeat transition-opacity duration-300 md:bg-work-page">
      <Reveal initiallyVisible className="w-full">
        <section id="hero" className="flex w-full justify-center px-4 pb-8 pt-32">
          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center">
            <div className="shine relative w-full max-w-5xl rounded-xl border border-gray-700 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_10px_30px_rgba(51,184,100,0.7)] md:p-12">
              <div className="pt-10">
                <h1 className="text-3xl font-bold sm:text-6xl lg:text-7xl">
                  <span className="typing-line block">Hi, I&apos;m <span>Neel.</span></span>
                  <span className="typing-line mt-2 block">
                    I like to <span className="italic font-semibold">fix things</span>
                  </span>
                </h1>

                <span className="typing-line mt-3 block text-lg font-medium">
                  Software Engineer Intern at Activision Blizzard
                </span>
                <p className="mt-1 text-sm">Previously at Scotiabank and Quotograph.io</p>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="w-full" delay={80}>
        <section className="flex w-full justify-center px-4 pb-8">
          <div className="relative z-10 flex w-full max-w-5xl flex-col rounded-xl border border-gray-700 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.7)] md:p-12">
            <div className="p-4 pt-8 text-4xl font-extrabold md:text-6xl">My Projects</div>
            <div className="grid grid-cols-12">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  matrixContainerRef={matrixContainerRef}
                  matrixCanvasRef={matrixCanvasRef}
                />
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}

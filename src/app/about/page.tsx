'use client';

import type { CSSProperties } from 'react';
import Image, { type StaticImageData } from 'next/image';
import Profile from '../../assets/pixelcut-export.png';
import McMaster from '../../assets/imgbin-mcmaster-university-medical-centre-mcmaster-faculty-of-science-mcmaster-faculty-of-social-sciences-student-xNy2S8ZgpjF80csA4UuU4mjyM_t.jpg';
import Software from '../../assets/software.png';
import { useGlowHover } from '@/hooks/useGlowHover';
import Reveal from '@/components/Reveal';
import { TiltCard } from '@/components/TiltCard';

type StoryCard = {
  title: string;
  body: string;
  image: StaticImageData;
  alt: string;
  reverse?: boolean;
};

type ExperienceCard = {
  company: string;
  glow: CSSProperties;
  role: string;
  timeline: string;
  overview: string;
  stack: string[];
};

const storyCards: StoryCard[] = [
  {
    title: 'About me',
    body:
      'Welcome to my corner of the web. I enjoy solving difficult problems, learning quickly, and building backend and data systems that turn noisy signals into something genuinely useful.',
    image: Profile,
    alt: 'Portrait of Neel Oza',
  },
  {
    title: 'My education',
    body:
      'I am studying Computer Science at McMaster University with a Math minor and expect to graduate in May 2027. The program has pushed me across algorithms, operating systems, databases, networks, distributed systems, and software design.',
    image: McMaster,
    alt: 'McMaster University campus',
    reverse: true,
  },
  {
    title: 'Why computer science?',
    body:
      'I have always liked figuring out how things work, from building with Lego to trying to assemble a drone. That curiosity turned into a real direction through high school web development and kept growing through university and internships.',
    image: Software,
    alt: 'Programming workspace with code on screen',
  },
];

const formalSkills = [
  'Python',
  'Java',
  'JavaScript',
  'TypeScript',
  'SQL',
  'C/C++',
  'Data Structures',
  'Algorithms',
  'Operating Systems',
  'Databases',
  'Distributed Systems',
];

const practicalSkills = [
  'React',
  'Next.js',
  'Node.js',
  'FastAPI',
  'Flask',
  'Kafka',
  'PySpark',
  'Kubernetes',
  'Docker',
  'AWS',
  'Jenkins',
  'Databricks',
  'Elasticsearch',
  'PostgreSQL',
  'MySQL',
  'Prometheus',
  'Grafana',
  'Kibana',
  'Power BI',
];

const experiences: ExperienceCard[] = [
  {
    company: 'Microsoft (Activision Blizzard)',
    glow: { '--glow-r': 128, '--glow-g': 128, '--glow-b': 128 } as CSSProperties,
    role: 'Software Engineering Intern',
    timeline: 'Ongoing: Jan 2026 - Aug 2026',
    overview:
      'Built production observability tooling across 100+ Call of Duty microservices, including Elasticsearch log ingestion, normalization, KNN-based root-cause ranking, and a self-service Python CLI adopted by 20+ engineering teams.',
    stack: ['Python', 'Elasticsearch', 'Kubernetes', 'Jenkins', 'Kibana'],
  },
  {
    company: 'Scotiabank',
    glow: { '--glow-r': 255, '--glow-g': 0, '--glow-b': 0 } as CSSProperties,
    role: 'Data Engineer Intern',
    timeline: 'Completed: Sept 2025 - Dec 2025',
    overview:
      'Designed distributed PySpark ETL pipelines and scalable SQL data models for insurance reporting, improved reporting throughput by 40%, reduced dashboard latency by about 3x, and migrated legacy SAS pipelines to Python services.',
    stack: ['Python', 'PySpark', 'SQL', 'Power BI', 'Databricks'],
  },
];

function SkillPill({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm body-text">
      {label}
    </span>
  );
}

function StorySection({ title, body, image, alt, reverse }: StoryCard) {
  return (
    <Reveal>
      <article className="relative rounded-xl border border-gray-700 p-6 shadow-[0_10px_30px_rgba(0,0,0,0.7)] md:p-8">
        <div className={`grid items-center gap-8 ${reverse ? 'lg:grid-cols-[1fr_1.05fr]' : 'lg:grid-cols-[1.05fr_1fr]'}`}>
          <div className={reverse ? 'lg:order-2' : ''}>
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <Image
                src={image}
                alt={alt}
                width={1200}
                height={800}
                className="h-[300px] w-full object-cover md:h-[360px]"
              />
            </div>
          </div>
          <div className={reverse ? 'lg:order-1' : ''}>
            <h2 className="heading text-2xl font-bold md:text-3xl">{title}</h2>
            <p className="body-text mt-4 max-w-xl text-base leading-8 md:text-lg">{body}</p>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function ExperienceSection({ company, glow, role, timeline, overview, stack }: ExperienceCard) {
  return (
    <div className="col-span-12 p-4">
      <Reveal>
        <TiltCard
          className="cards relative overflow-hidden rounded-lg border-4 p-2 shadow-md transition duration-200 ease hover:shadow-xl md:p-8 glow-hover glow-hover-small"
          style={glow}
          tiltLimit={10}
          scale={1.02}
        >
          <div className="flex flex-col justify-start gap-y-2 px-2 pb-4 pt-2 md:px-8 md:pt-4">
            <h3 className="text-2xl font-extrabold md:text-4xl">{company}</h3>
          </div>

          <div className="flex flex-col items-start gap-x-16">
            <div className="flex w-full flex-col items-start gap-x-10 gap-y-10 md:flex-row md:gap-y-0">
              <div className="flex w-full flex-col gap-x-16 gap-y-8 text-left text-gray-300 md:flex-row">
                <div className="flex flex-col gap-y-6 text-left md:w-1/2">
                  <div>
                    <h5 className="heading text-lg font-bold">My Role</h5>
                    <p className="body-text">{role}</p>
                  </div>

                  <div>
                    <h5 className="heading text-lg font-bold">Timeline &amp; Status</h5>
                    <p className="body-text">
                      <span className="highlight font-medium">{timeline}</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-y-5 text-left md:w-1/2">
                  <div>
                    <h5 className="heading text-lg font-bold">Overview</h5>
                    <p className="body-text">{overview}</p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {stack.map((item) => (
                      <SkillPill key={item} label={item} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </Reveal>
    </div>
  );
}

export default function Aboutpage() {
  useGlowHover();

  return (
    <main className="relative flex flex-col items-center bg-main-page-mobile bg-no-repeat pt-20 text-custom-light md:bg-info-page">
      <Reveal initiallyVisible className="w-full">
        <section className="flex w-full justify-center px-4 pb-8 pt-12">
          <div className="relative z-10 flex h-full w-full max-w-5xl flex-col items-center justify-center">
            <div className="shine relative w-full rounded-xl border border-gray-700 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.7)] hover:shadow-[0_10px_30px_rgba(51,184,100,0.7)] md:p-12">
              <div className="pt-10 sm:pt-5">
                <h1 className="text-3xl font-bold sm:text-6xl lg:text-7xl">
                  <span className="typing-line block">Some info</span>
                  <span className="typing-line about-title mt-2 block italic font-semibold">
                    about me
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="w-full" delay={60}>
        <section className="flex w-full justify-center px-4 pb-8">
          <div className="flex w-full max-w-5xl flex-col gap-8">
            {storyCards.map((card) => (
              <StorySection key={card.title} {...card} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal className="w-full" delay={100}>
        <section className="flex w-full justify-center px-4 pb-8">
          <div className="w-full max-w-5xl rounded-xl border border-gray-700 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.7)] md:p-12">
            <h2 className="text-2xl font-bold lg:text-3xl">My skills</h2>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="typing-line-skills rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="heading text-lg font-bold">Formal education</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {formalSkills.map((skill) => (
                    <SkillPill key={skill} label={skill} />
                  ))}
                </div>
              </div>

              <div className="typing-line-skills rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="heading text-lg font-bold">Also skilled in</h3>
                <div className="mt-4 flex flex-wrap gap-3">
                  {practicalSkills.map((skill) => (
                    <SkillPill key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal className="w-full" delay={120}>
        <section className="flex w-full justify-center px-4 pb-8">
          <div className="relative z-10 flex w-full max-w-5xl flex-col rounded-xl border border-gray-700 p-8 shadow-[0_10px_30px_rgba(0,0,0,0.7)] md:p-12">
            <div className="p-4 pt-8 text-4xl font-extrabold md:text-6xl">My Experience</div>
            <div className="grid grid-cols-12">
              {experiences.map((experience) => (
                <ExperienceSection key={experience.company} {...experience} />
              ))}
            </div>
          </div>
        </section>
      </Reveal>
    </main>
  );
}

"use client";

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Code2, Github, Linkedin, Mail, MenuIcon, Moon, Sun, X, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { LanguageToggle } from '@/components/LanguageToggle'
import { useTranslation } from '@/hooks/useTranslation'
import { Footer } from '@/components/Footer'

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation()

  useEffect(() => setMounted(true), [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const toggleTheme = () => {
    if (theme === 'dark') {
      setTheme('light')
    } else {
      setTheme('dark')
    }
  }

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (!section) {
      console.error(`Element with id ${id} not found.`);
      return;
    }
    const offset = -80;
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = section.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition + offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (mounted) {
      console.log("Current theme:", theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme, mounted]);

  if (!mounted) return null

  const skills = [
    { name: 'Python', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: 'Java', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: 'Nodejs', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: 'Nextjs', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: 'Flask', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
    { name: 'React', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: 'JavaScript', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: 'TypeScript', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: 'MySQL', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: 'SQLite', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" },
    { name: 'Arduino', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg" },
    { name: 'Git', logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
    { name: 'GitHub', logo: theme === 'dark' ? "/logos/github-mark-white.svg" : "/logos/github-mark.svg" },
  ]

  const projects = [
    {
      title: t('projects.nlwConnect.title'),
      description: t('projects.nlwConnect.description'),
      image: "/previews/nlw-connect.png?height=200&width=300",
      technologies: ["Java", "Spring Boot", "Docker"],
      githubUrl: "https://github.com/joao-ac/NLW-Connect-2025"
    },
    {
      title: t('projects.taskList.title'),
      description: t('projects.taskList.description'),
      image: "/previews/tarefas.png?height=200&width=300",
      technologies: ["Python", "Flask", "SQLite", "JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/joao-ac/app_lista_de_tarefas"
    },
    {
      title: t('projects.portfolio.title'),
      description: t('projects.portfolio.description'),
      image: "/previews/portfolio.png?height=200&width=300",
      technologies: ["Nextjs", "JavaScript", "HTML", "CSS"],
      liveUrl: "https://joao-ac.github.io/",
      githubUrl: "https://github.com/joao-ac/joao-ac.github.io"
    },
    {
      title: t('projects.youtubeShorts.title'),
      description: t('projects.youtubeShorts.description'),
      image: "/previews/nlw.png?height=200&width=300",
      technologies: ["React", "Vite", "Nodejs", "Express", "ytdl-core", "@xenova/transformers", "CORS", "Axios"],
      githubUrl: "https://github.com/joao-ac/NLW-ai"
    },
    {
      title: t('projects.pygame.title'),
      description: t('projects.pygame.description'),
      image: "/previews/pygame.png?height=200&width=300",
      technologies: ["Python", "Pygame", "Object-Oriented Programming"],
      githubUrl: "https://github.com/joao-ac/ProjetoGame"
    },
    {
      title: t('projects.spark.title'),
      description: t('projects.spark.description'),
      image: "/previews/spark.png?height=200&width=300",
      technologies: ["Apache Spark", "Python", "Docker", "Hadoop", "Data Analysis", "Distributed Computing"],
      githubUrl: "https://github.com/joao-ac/trabalho-spark"
    }
  ]

  const education = [
    {
      logo: "/logos/uninter.png",
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "Centro Universitário Internacional Uninter",
      graduation: t('education.graduation', { year: '2025' }),
      description: t('education.description.uninter')
    }
  ];

  const coursesAndCertificates = [
    {
      logo: "/logos/rocketseat.png",
      title: "NLW AI",
      institution: "Rocketseat",
      graduation: "2023",
      description: t('education.description.nlwAI')
    },
    {
      logo: "/logos/cisco.png",
      title: "Computer Hardware Basics",
      institution: "Cisco",
      graduation: "2023",
      description: t('education.description.hardwareBasics')
    },
    {
      logo: "/logos/cisco.png",
      title: "Introduction to Data Science",
      institution: "Cisco",
      graduation: "2024",
      description: t('education.description.dataScience')
    },
    {
      logo: "/logos/cisco.png",
      title: "Python Essentials 1",
      institution: "Cisco",
      graduation: "2024",
      description: t('education.description.pythonEssentials')
    },
    {
      logo: "/logos/udemy.png",
      title: "Looker and LookML",
      institution: "Udemy",
      graduation: "2024",
      description: t('education.description.looker')
    },
    {
      logo: "/logos/rocketseat.png",
      title: "NLW Connect",
      institution: "Rocketseat",
      graduation: "2025",
      description: t('education.description.nlwConnect')
    },
    {
      logo: "/logos/google-looker.jpg",
      title: "Google Looker Certification",
      institution: "Google Cloud",
      graduation: "2025",
      description: t('courses.description.googleLooker')
    }
  ];

  const languages = [
    {
      name: t('languages.portuguese.name'),
      level: t('languages.portuguese.level'),
      proficiency: parseInt(t('languages.portuguese.proficiency'))
    },
    {
      name: t('languages.english.name'),
      level: t('languages.english.level'),
      proficiency: parseInt(t('languages.english.proficiency'))
    },
    {
      name: t('languages.spanish.name'),
      level: t('languages.spanish.level'),
      proficiency: parseInt(t('languages.spanish.proficiency'))
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-background text-foreground">
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
          <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
            <div className="flex items-center gap-6">
              <a className="flex items-center space-x-2" href="/">
                <Code2 className="h-6 w-6" />
                <span className="font-bold sm:inline-block text-lg">DevPortfolio</span>
              </a>
              <div className="relative hidden sm:block">
                <Button className="transition-transform duration-300" variant="ghost" size="icon" onClick={toggleMenu}>
                  {isMenuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                </Button>
                {isMenuOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background border">
                    <div className="py-1">
                      <a
                        href="#about"
                        onClick={() => { scrollToSection('#about'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.about')}
                      </a>
                      <a
                        href="#education"
                        onClick={() => { scrollToSection('#education'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.education')}
                      </a>
                      <a
                        href="#courses"
                        onClick={() => { scrollToSection('#courses'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.courses')}
                      </a>
                      <a
                        href="#languages"
                        onClick={() => { scrollToSection('#languages'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.languages')}
                      </a>
                      <a
                        href="#skills"
                        onClick={() => { scrollToSection('#skills'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.skills')}
                      </a>
                      <a
                        href="#projects"
                        onClick={() => { scrollToSection('#projects'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.projects')}
                      </a>
                      <a
                        href="#contact"
                        onClick={() => { scrollToSection('#contact'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.contact')}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-right gap-4 mr-4">
              <LanguageToggle />
              <Button
                className="transition-transform duration-300 transform flex items-right gap-2 min-w-[40px]"
                variant="ghost"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <>
                    <Moon className="h-5 w-5" />
                    <span className="hidden sm:inline">{t('theme.dark')}</span>
                  </>
                ) : (
                  <>
                    <Sun className="h-5 w-5" />
                    <span className="hidden sm:inline">{t('theme.light')}</span>
                  </>
                )}
              </Button>
              <div className="relative sm:hidden">
                <Button className="transition-transform duration-300" variant="ghost" size="icon" onClick={toggleMenu}>
                  {isMenuOpen ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
                </Button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-background border mr-4">
                    <div className="py-1">
                      <a
                        href="#about"
                        onClick={() => { scrollToSection('#about'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.about')}
                      </a>
                      <a
                        href="#education"
                        onClick={() => { scrollToSection('#education'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.education')}
                      </a>
                      <a
                        href="#courses"
                        onClick={() => { scrollToSection('#courses'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.courses')}
                      </a>
                      <a
                        href="#languages"
                        onClick={() => { scrollToSection('#languages'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.languages')}
                      </a>
                      <a
                        href="#skills"
                        onClick={() => { scrollToSection('#skills'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.skills')}
                      </a>
                      <a
                        href="#projects"
                        onClick={() => { scrollToSection('#projects'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.projects')}
                      </a>
                      <a
                        href="#contact"
                        onClick={() => { scrollToSection('#contact'); toggleMenu(); }}
                        className="block px-4 py-2 text-sm text-foreground hover:bg-accent"
                      >
                        {t('navigation.contact')}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </header>
        <main className="container mx-auto px-4 py-12 space-y-24 pb-48">
          <section id="about" className="text-center">
            <h1 className="text-4xl font-bold mb-6">{t('about.title')}</h1>
            <p className="mb-8 text-lg leading-relaxed max-w-[900px] mx-auto">
              {t('about.description')}
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="transition-colors" variant="link" size="icon" as="a" href="https://github.com/joao-ac" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button className="transition-colors" variant="link" size="icon" as="a" href="https://www.linkedin.com/in/joao-ac1406/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </section>

          <section id="education" className="space-y-8">
            <h2 className="text-4xl font-bold text-center">{t('education.title')}</h2>
            <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
              {education.map((edu, index) => (
                <Card key={index} className="transition-transform hover:-translate-y-2 hover:shadow-lg h-full flex flex-col">
                  <CardHeader className="flex flex-col justify-stretch pb-4">
                    <div className="flex mb-4">
                      <div className="w-16 h-16 relative mr-4 flex-shrink-0">
                        <Image
                          src={edu.logo}
                          alt={edu.institution}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <CardTitle className="text-xl mb-1">{edu.title}</CardTitle>
                        <CardDescription className="text-base mb-1">{edu.institution}</CardDescription>
                        <CardDescription className="text-base">{edu.graduation}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-base leading-relaxed">{edu.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="courses" className="space-y-8">
            <h2 className="text-4xl font-bold text-center">{t('courses.title')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesAndCertificates.map((course, index) => (
                <Card key={index} className="transition-transform hover:-translate-y-2 hover:shadow-lg h-full flex flex-col">
                  <CardHeader className="flex flex-col justify-stretch pb-4">
                    <div className="flex mb-4">
                      <div className="w-16 h-16 relative mr-4 flex-shrink-0">
                        <Image
                          src={course.logo}
                          alt={course.institution}
                          fill
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col justify-center">
                        <CardTitle className="text-xl mb-1">{course.title}</CardTitle>
                        <CardDescription className="text-base mb-1">{course.institution}</CardDescription>
                        <CardDescription className="text-base">{course.graduation}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-base leading-relaxed">{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="languages" className="space-y-8">
            <h2 className="text-4xl font-bold text-center">{t('languages.title')}</h2>
            <div className="max-w-4xl mx-auto">
              <Card className="transition-transform hover:-translate-y-2 hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{t('languages.description')}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {languages.map((language, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{language.name}</span>
                        <span className="text-sm text-muted-foreground">{language.level}</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${language.proficiency}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="skills" className="space-y-8">
            <h2 className="text-4xl font-bold text-center">{t('navigation.skills')}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-card rounded-lg border shadow-sm transition-transform hover:-translate-y-2 hover:shadow-lg">
                  <div className="w-16 h-16 relative mb-4">
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <span className="text-base font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-8">
            <h2 className="text-4xl font-bold text-center">{t('projects.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="transition-transform hover:-translate-y-2 hover:shadow-lg h-full flex flex-col">
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="relative w-full h-48 mb-6">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <p className="text-base mb-6 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 pt-4">
                    {project.liveUrl && (
                      <Button asChild variant="outline" size="sm">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Live
                        </a>
                      </Button>
                    )}
                    <Button asChild variant="outline" size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          <section id="contact" className="flex flex-col items-center space-y-8">
            <h2 className="text-4xl font-bold text-center">{t('contact.title')}</h2>
            <Card className="w-full max-w-2xl">
              <CardHeader>
                <CardTitle className="text-xl">{t('contact.subtitle')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <Mail className="h-6 w-6 text-primary" />
                    <span className="text-lg">{t('contact.email')}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="h-6 w-6 text-primary" />
                    <a
                      href="https://www.linkedin.com/in/joao-ac1406/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:underline"
                    >
                      {t('contact.linkedin')}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Github className="h-6 w-6 text-primary" />
                    <a
                      href="https://github.com/joao-ac"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:underline"
                    >
                      {t('contact.github')}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-6 w-6 text-primary" />
                    <a
                      href="https://wa.me/5545999851704"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg hover:underline"
                    >
                      {t('contact.phone')}
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

"use client";

import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect, useRef } from "react"
import { Github, Linkedin, Mail, MapPin, Globe, ExternalLink, Lock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

// Add a new card scrolling effect variant
const cardScrollVariant = {
  hidden: { 
    opacity: 0, 
    y: 70, 
    rotateX: 10,
    scale: 0.95,
    filter: "blur(3px)"
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    rotateX: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      type: "spring", 
      damping: 20, 
      stiffness: 90,
      mass: 1,
      duration: 0.6
    }
  },
  exit: {
    opacity: 0,
    y: -50,
    rotateX: -5,
    scale: 0.97,
    filter: "blur(3px)",
    transition: { duration: 0.4 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const socialIconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 200, damping: 15 }
  }
};

const skillTagVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 10 }
  }
};

// Custom icon components for unsupported icons
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

const ChevronLeft = ({ size = 24, ...props }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = ({ size = 24, ...props }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);

const X = ({ size = 24, ...props }: IconProps) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

// Custom hook for scroll animations
const useAnimationOnScroll = () => {
  const [scrollY, setScrollY] = useState(0);
  
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return scrollY;
};

// Animated Section Component
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className, 
  id,
  delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  
  useEffect(() => {
    if (!ref.current) return;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            setHasShown(true);
          } else if (entry.boundingClientRect.top > 0 && !hasShown) {
            // Only reset animation when scrolling back up and hasn't been shown yet
            setInView(false);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
    );
    
    observer.observe(ref.current);
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasShown]);
  
  return (
    <motion.section
      ref={ref}
      id={id}
      className={`${className} card-scroll-section`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={cardScrollVariant}
    >
      <div className="card-content w-full h-full">
        {children}
      </div>
    </motion.section>
  );
};

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Trigger animations after initial load
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const realEstateImages = [
    {
      src: "/real-estate-screenshot.png",
      alt: "Real Estate Dashboard",
    },
    {
      src: "/real-estate-properties.png",
      alt: "Properties Management",
    },
    {
      src: "/real-estate-map.png",
      alt: "Property Map View",
    },
  ];

  const handleOpenGallery = (index: number) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
  };

  const handleCloseGallery = () => {
    setShowGallery(false);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? realEstateImages.length - 1 : prev - 1));
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === realEstateImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container py-4">
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              Alex Almansa
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <div className="flex gap-6">
                <Link href="#about" className="nav-link">
                  About
                </Link>
                <Link href="#experience" className="nav-link">
                  Experience
                </Link>
                <Link href="#skills" className="nav-link">
                  Skills
                </Link>
                <Link href="#projects" className="nav-link">
                  Projects
                </Link>
              </div>
              <Button asChild variant="default" size="sm" className="btn-primary ml-2">
                <a href="mailto:alexalmansa5@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </a>
              </Button>
            </div>
            {/* Mobile Contact Button */}
            <div className="md:hidden">
              <Button asChild variant="default" size="sm" className="btn-primary">
                <a href="mailto:alexalmansa5@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-20 overflow-hidden perspective-container">
        {/* Hero Section */}
        <section className="section relative mb-12">
          <div className="container">
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
              <motion.div 
                className="flex-1 space-y-4 md:space-y-6 text-center md:text-left"
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                variants={staggerContainer}
              >
                <motion.h1 
                  className="hero-title text-3xl md:text-4xl lg:text-5xl"
                  variants={fadeIn}
                >
                  Hi, I'm <span className="text-primary">Alex Almansa</span>
                </motion.h1>
                <motion.h2 
                  className="hero-subtitle text-xl md:text-2xl"
                  variants={fadeIn}
                >
                  DevOps / Cloud Engineer
                </motion.h2>
                <motion.p 
                  className="hero-description text-sm md:text-base"
                  variants={fadeIn}
                >
                  Cloud & DevOps Engineer with expertise in AWS, GCP, and Kubernetes. Passionate about automating complex processes
                  and creating well-documented solutions. Skilled in infrastructure as code using Terraform and cloud formation, 
                  CI/CD, and container orchestration with Docker. Experience in monitoring, security, and cost optimization strategies.
                </motion.p>
                <motion.div 
                  className="flex justify-center md:justify-start gap-4 pt-4"
                  variants={fadeIn}
                >
                  <Button asChild variant="default" className="btn-primary">
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                  <Button asChild variant="outline" className="btn-outline">
                    <a href="/alex-almansa-cv.pdf" download="Alex_Almansa_CV.pdf">
                      <Download className="w-5 h-5 mr-2" />
                      Download CV
                    </a>
                  </Button>
                </motion.div>
                <motion.div 
                  className="flex justify-center md:justify-start gap-4 pt-4"
                  variants={staggerContainer}
                >
                  <motion.div variants={socialIconVariants}>
                    <Link
                      href="https://github.com/alexalmansa"
                      target="_blank"
                      className="social-link"
                    >
                      <Github className="w-6 h-6" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </motion.div>
                  <motion.div variants={socialIconVariants}>
                    <Link
                      href="https://linkedin.com/in/alexalmansa"
                      target="_blank"
                      className="social-link"
                    >
                      <Linkedin className="w-6 h-6" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </motion.div>
                  <motion.div variants={socialIconVariants}>
                    <Link
                      href="mailto:alexalmansa5@gmail.com"
                      className="social-link"
                    >
                      <Mail className="w-6 h-6" />
                      <span className="sr-only">Email</span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex-shrink-0 mb-6 md:mb-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: isLoaded ? 1 : 0, 
                  scale: isLoaded ? 1 : 0.8,
                  transition: { 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 100
                  }
                }}
              >
                <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-float mx-auto">
                  <Image
                    src="/profile-image.png"
                    alt="Alex Almansa profile picture"
                    width={320}
                    height={320}
                    className="object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Card sections with vertical scrolling effect */}
        <div className="relative py-4 space-y-12">
          <AnimatedSection id="about" className="section bg-secondary/30 rounded-xl">
            <div className="container">
              <motion.h2 
                className="section-title"
                variants={fadeIn}
              >
                <span>01.</span> About Me
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                <motion.div 
                  className="md:col-span-2 space-y-4 md:space-y-6"
                  variants={staggerContainer}
                >
                  <motion.p 
                    className="text-sm md:text-base"
                    variants={fadeIn}
                  >
                    Hello! I'm Alex Almansa, a DevOps and Cloud Engineer with a passion for building and optimizing cloud
                    infrastructure. My journey in tech began during my studies at La Salle BCN, where I developed a strong
                    foundation in computer engineering.
                  </motion.p>
                  <motion.p 
                    className="text-sm md:text-base"
                    variants={fadeIn}
                  >
                    I specialize in cloud technologies like AWS and GCP, with expertise in Kubernetes environments. My
                    approach combines technical knowledge with a focus on efficiency and reliability to create robust
                    infrastructure solutions.
                  </motion.p>
                  <motion.p 
                    className="text-sm md:text-base"
                    variants={fadeIn}
                  >
                    One of my core passions is automating complex processes and making apparently difficult tasks simple and accessible. 
                    I believe in the power of well-documented code and clear documentation to transform complex technical challenges into 
                    manageable solutions, enabling teams to work more efficiently and reducing operational overhead.
                  </motion.p>
                  <motion.p 
                    className="text-sm md:text-base"
                    variants={fadeIn}
                  >
                    Based in Barcelona, I'm available for travel and always looking for new challenges in the DevOps and
                    cloud engineering space.
                  </motion.p>

                  <motion.div 
                    className="pt-4 md:pt-6"
                    variants={fadeIn}
                  >
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Languages</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                      <div className="space-y-1">
                        <p className="font-medium">Spanish</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Native</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">Catalan</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Native</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">English</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Advanced (C1)</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-medium">French</p>
                        <p className="text-xs md:text-sm text-muted-foreground">Basic</p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="space-y-6 md:space-y-8"
                  variants={staggerContainer}
                >
                  <motion.div 
                    className="card p-4 md:p-6"
                    variants={fadeIn}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Contact Information</h3>
                    <div className="space-y-3">
                      <div className="contact-item text-sm md:text-base">
                        <Mail className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                        <span>alexalmansa5@gmail.com</span>
                      </div>
                      <div className="contact-item text-sm md:text-base">
                        <MapPin className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                        <span>Carrer Montseny 5, Sant Feliu de Codines, Barcelona</span>
                      </div>
                      <div className="contact-item text-sm md:text-base">
                        <Globe className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" />
                        <span>Based in Barcelona</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    className="card p-4 md:p-6"
                    variants={fadeIn}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Availability</h3>
                    <div className="flex items-center gap-2 text-sm md:text-base">
                      <span>Traveling availability</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection id="experience" className="section rounded-xl">
            <div className="container">
              <motion.h2 
                className="section-title"
                variants={fadeIn}
              >
                <span>02.</span> Experience
              </motion.h2>
              <motion.div 
                className="space-y-12"
                variants={staggerContainer}
              >
                <motion.div 
                  className="timeline-item"
                  variants={fadeIn}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="timeline-dot"></div>
                  <h3 className="text-xl font-bold">DevOps / Cloud Engineer</h3>
                  <h4 className="text-primary font-medium">NUVOLAR</h4>
                  <p className="text-muted-foreground">2024 - Present</p>
                  <div className="mt-4 space-y-2">
                    <p>
                      As the DevOps Engineer responsible for the company's main backend project, I manage monitoring,
                      implement CI/CD pipelines, and handle resource provisioning in AWS and Google Cloud within a
                      Kubernetes environment. Additionally, I maintain the cloud infrastructure company-wide.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="timeline-item"
                  variants={fadeIn}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="timeline-dot"></div>
                  <h3 className="text-xl font-bold">Backend Developer</h3>
                  <h4 className="text-primary font-medium">NUVOLAR</h4>
                  <p className="text-muted-foreground">2021 - 2023</p>
                  <div className="mt-4 space-y-2">
                    <p>
                      Contributed to the development of the Scheduling Engine, a microservices-based system for efficiently
                      assigning crew to flights. Utilized Java and the Spring framework to build scalable and maintainable
                      applications, and implemented RabbitMQ for reliable inter-service communication.
                    </p>
                  </div>
                </motion.div>

                <motion.div 
                  className="timeline-item"
                  variants={fadeIn}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                >
                  <div className="timeline-dot"></div>
                  <h3 className="text-xl font-bold">Software Developer</h3>
                  <h4 className="text-primary font-medium">V2M</h4>
                  <p className="text-muted-foreground">2019 - 2021</p>
                  <div className="mt-4 space-y-2">
                    <p>
                      Worked in a consulting role primarily focused on mobile app development and backend services. I
                      contributed to multiple projects, including supporting the Mobile World Congress 2021 (MWC2021) app.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection id="education" className="section bg-secondary/30 rounded-xl">
            <div className="container">
              <motion.h2 
                className="section-title"
                variants={fadeIn}
              >
                <span>03.</span> Education
              </motion.h2>
              <motion.div 
                className="timeline-item"
                variants={fadeIn}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                <div className="timeline-dot"></div>
                <h3 className="text-xl font-bold">Bachelor Degree in Computer Engineering</h3>
                <h4 className="text-primary font-medium">La Salle BCN, Ramon Llull University</h4>
                <p className="text-muted-foreground">2016 - 2021</p>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection id="skills" className="section rounded-xl">
            <div className="container">
              <motion.h2 
                className="section-title"
                variants={fadeIn}
              >
                <span>04.</span> Skills
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <motion.div 
                  className="space-y-6 md:space-y-8"
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeIn}>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Cloud Platforms</h3>
                    <div className="flex flex-wrap gap-2">
                      {["AWS", "Google Cloud Platform (GCP)"].map((skill, index) => (
                        <motion.span 
                          key={skill} 
                          className="skill-tag text-xs md:text-sm"
                          variants={skillTagVariants}
                          custom={index}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Infrastructure as Code</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Terraform", "CloudFormation", "OpenTofu",  "Helm"].map((skill, index) => (
                        <motion.span 
                          key={skill} 
                          className="skill-tag text-xs md:text-sm"
                          variants={skillTagVariants}
                          custom={index}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">CI/CD</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"].map((skill, index) => (
                        <motion.span 
                          key={skill} 
                          className="skill-tag text-xs md:text-sm"
                          variants={skillTagVariants}
                          custom={index}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
                <motion.div 
                  className="space-y-6 md:space-y-8"
                  variants={staggerContainer}
                >
                  <motion.div variants={fadeIn}>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Containerization and Orchestration</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Kubernetes", "Docker"].map((skill, index) => (
                        <motion.span 
                          key={skill} 
                          className="skill-tag text-xs md:text-sm"
                          variants={skillTagVariants}
                          custom={index}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Programming Languages</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Java", "Python", "Bash", "JavaScript", "Go"].map((skill, index) => (
                        <motion.span 
                          key={skill} 
                          className="skill-tag text-xs md:text-sm"
                          variants={skillTagVariants}
                          custom={index}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                  <motion.div variants={fadeIn}>
                    <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Other Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {["Prometheus", "Grafana", "Loki","RabbitMQ",  "PostgreSQL", "Spring Framework"].map((skill, index) => (
                        <motion.span 
                          key={skill} 
                          className="skill-tag text-xs md:text-sm"
                          variants={skillTagVariants}
                          custom={index}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection id="projects" className="section bg-secondary/30 rounded-xl">
            <div className="container">
              <motion.h2 
                className="section-title"
                variants={fadeIn}
              >
                <span>05.</span> Personal Projects
              </motion.h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
                variants={staggerContainer}
              >
                <motion.div 
                  className="project-card"
                  variants={fadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <div className="project-image">
                    <Image 
                      src="/drop-in-screenshot.png" 
                      alt="Drop In Surf Wave Pool website screenshot" 
                      width={600} 
                      height={300}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h3 className="project-title text-lg md:text-xl font-bold mt-3 md:mt-4">Drop In - Surf Wave Pool Booking Platform</h3>
                  <p className="project-description text-sm md:text-base mt-2 text-muted-foreground">
                    A modern web application for booking sessions at a wave pool surfing facility. Built with Next.js 13+,
                    TypeScript, and Supabase, it offers a seamless experience for surf enthusiasts.
                  </p>
                  <div className="tech-stack mt-3 md:mt-4">
                    {["Next.js", "TypeScript", "Supabase", "Stripe", "Google Maps API", "Tailwind CSS", "Shadcn UI"].map((tech, index) => (
                      <motion.span 
                        key={tech} 
                        className="skill-tag text-xs md:text-sm"
                        variants={skillTagVariants}
                        custom={index}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-3 md:mt-4">
                    <Button asChild variant="default" size="sm" className="btn-primary text-xs md:text-sm">
                      <Link href="https://dropin-surf.com" target="_blank">
                        <ExternalLink className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        Visit Website
                      </Link>
                    </Button>
                  </div>
                </motion.div>
                <motion.div 
                  className="project-card"
                  variants={fadeIn}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                >
                  <div className="project-image">
                    <Image 
                      src="/real-estate-screenshot.png" 
                      alt="Real Estate Management System dashboard screenshot" 
                      width={600} 
                      height={300}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  
                  <h3 className="mt-3 md:mt-4 text-lg md:text-xl font-bold">Real Estate Management System</h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    A modern, responsive web application for managing real estate properties, buildings, tenants, and
                    related operations. This comprehensive system streamlines property management workflows and financial
                    operations.
                  </p>
                  
                  <h4 className="mt-3 md:mt-4 text-md md:text-lg font-semibold">Project Gallery</h4>
                  <div className="project-gallery grid grid-cols-3 gap-2 md:gap-3 mt-2 md:mt-3">
                    {realEstateImages.map((image, index) => (
                      <motion.div 
                        key={index} 
                        className="gallery-item"
                        onClick={() => handleOpenGallery(index)}
                        whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                      >
                        <Image 
                          src={image.src} 
                          alt={image.alt}
                          width={300}
                          height={169}
                          className="w-full h-full object-cover rounded-sm md:rounded"
                        />
                      </motion.div>
                    ))}
                  </div>
                  
                  <div className="tech-stack mt-3 md:mt-4">
                    {["Next.js 14", "TypeScript", "Tailwind CSS", "Radix UI", "Supabase", "AWS S3", "Google Maps API", "Framer Motion"].map((tech, index) => (
                      <motion.span 
                        key={tech} 
                        className="skill-tag text-xs md:text-sm"
                        variants={skillTagVariants}
                        custom={index}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-3 md:mt-4">
                    <Button asChild variant="outline" disabled size="sm" className="btn-outline text-xs md:text-sm">
                      <span>
                        <Lock className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                        Private Project
                      </span>
                    </Button>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>

          <AnimatedSection id="contact" className="section rounded-xl">
            <div className="container">
              <motion.h2 
                className="section-title"
                variants={fadeIn}
              >
                <span>06.</span> Contact
              </motion.h2>
              <motion.div 
                className="max-w-xl mx-auto space-y-6"
                variants={fadeIn}
              >
                <p className="text-sm md:text-lg text-muted-foreground text-center md:text-left">
                  I'm currently open to new opportunities and collaborations in the DevOps and cloud engineering space.
                  Feel free to reach out if you'd like to discuss potential projects or opportunities.
                </p>
                <motion.div 
                  className="flex justify-center md:justify-start gap-4 pt-4"
                  variants={fadeIn}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <Button asChild variant="default" className="btn-primary">
                    <a href="mailto:alexalmansa5@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Me
                    </a>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </main>

      {/* Full screen gallery */}
      {showGallery && (
        <div className="gallery-fullscreen fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={handleCloseGallery}>
          <div className="gallery-fullscreen-content relative max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={realEstateImages[currentImageIndex].src}
              alt={realEstateImages[currentImageIndex].alt}
              width={1200}
              height={675}
              className="w-full h-auto rounded-md"
            />
            <button className="gallery-close absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black/50 rounded-full text-white" onClick={handleCloseGallery}>
              <X size={20} />
            </button>
            <button className="gallery-nav gallery-prev absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black/50 rounded-full text-white" onClick={handlePrevImage}>
              <ChevronLeft size={20} />
            </button>
            <button className="gallery-nav gallery-next absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-black/50 rounded-full text-white" onClick={handleNextImage}>
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      <footer className="py-4 md:py-6 border-t text-center">
        <div className="container text-sm md:text-base text-center text-muted-foreground">
          <p>© 2025 Alex Almansa - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}


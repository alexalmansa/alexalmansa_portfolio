"use client";

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Github, Linkedin, Mail, MapPin, Phone, Globe, ExternalLink, Lock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export default function Home() {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
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
            <div className="flex gap-8">
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
              <Link href="#contact" className="nav-link">
                Contact
              </Link>
            </div>
          </nav>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="section">
          <div className="container">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12">
              <div className="flex-1 space-y-6">
                <h1 className="hero-title">
                  Hi, I'm <span className="text-primary">Alex Almansa</span>
                </h1>
                <h2 className="hero-subtitle">DevOps / Cloud Engineer</h2>
                <p className="hero-description">
                  Cloud & DevOps Engineer with expertise in AWS, GCP, and Kubernetes. Passionate about automating complex processes
                  and creating well-documented solutions. Skilled in infrastructure as code using Terraform and cloud formation, 
                  CI/CD, and container orchestration with Docker. Experience in monitoring, security, and cost optimization strategies.
                </p>
                <div className="flex gap-4 pt-4">
                  <Button asChild variant="default" className="btn-primary">
                    <Link href="#contact">Get in Touch</Link>
                  </Button>
                  <Button asChild variant="outline" className="btn-outline">
                    <a href="/alex-almansa-cv.pdf" download="Alex_Almansa_CV.pdf">
                      <Download className="w-5 h-5 mr-2" />
                      Download CV
                    </a>
                  </Button>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link
                    href="https://github.com/alexalmansa"
                    target="_blank"
                    className="social-link"
                  >
                    <Github className="w-6 h-6" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                  <Link
                    href="https://linkedin.com/in/alexalmansa"
                    target="_blank"
                    className="social-link"
                  >
                    <Linkedin className="w-6 h-6" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                  <Link
                    href="mailto:alexalmansa5@gmail.com"
                    className="social-link"
                  >
                    <Mail className="w-6 h-6" />
                    <span className="sr-only">Email</span>
                  </Link>
                </div>
              </div>
              <div className="flex-shrink-0">
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/20 animate-float">
                  <Image
                    src="/profile-image.png"
                    alt="Alex Almansa profile picture"
                    width={320}
                    height={320}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section bg-secondary/30">
          <div className="container">
            <h2 className="section-title">
              <span>01.</span> About Me
            </h2>
            <div className="grid md:grid-cols-3 gap-12">
              <div className="md:col-span-2 space-y-6">
                <p>
                  Hello! I'm Alex Almansa, a DevOps and Cloud Engineer with a passion for building and optimizing cloud
                  infrastructure. My journey in tech began during my studies at La Salle BCN, where I developed a strong
                  foundation in computer engineering.
                </p>
                <p>
                  I specialize in cloud technologies like AWS and GCP, with expertise in Kubernetes environments. My
                  approach combines technical knowledge with a focus on efficiency and reliability to create robust
                  infrastructure solutions.
                </p>
                <p>
                  One of my core passions is automating complex processes and making apparently difficult tasks simple and accessible. 
                  I believe in the power of well-documented code and clear documentation to transform complex technical challenges into 
                  manageable solutions, enabling teams to work more efficiently and reducing operational overhead.
                </p>
                <p>
                  Based in Barcelona, I'm available for travel and always looking for new challenges in the DevOps and
                  cloud engineering space.
                </p>

                <div className="pt-6">
                  <h3 className="text-xl font-semibold mb-4">Languages</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-1">
                      <p className="font-medium">Spanish</p>
                      <p className="text-sm text-muted-foreground">Native</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">Catalan</p>
                      <p className="text-sm text-muted-foreground">Native</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">English</p>
                      <p className="text-sm text-muted-foreground">Advanced (C1)</p>
                    </div>
                    <div className="space-y-1">
                      <p className="font-medium">French</p>
                      <p className="text-sm text-muted-foreground">Basic</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="card p-6">
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-3">
                    <div className="contact-item">
                      <Phone />
                      <span>+34639420113</span>
                    </div>
                    <div className="contact-item">
                      <Mail />
                      <span>alexalmansa5@gmail.com</span>
                    </div>
                    <div className="contact-item">
                      <MapPin />
                      <span>Carrer Montseny 5, Sant Feliu de Codines, Barcelona</span>
                    </div>
                    <div className="contact-item">
                      <Globe />
                      <span>Based in Barcelona</span>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-semibold mb-4">Availability</h3>
                  <div className="flex items-center gap-2">
                    <span>Traveling availability</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="section">
          <div className="container">
            <h2 className="section-title">
              <span>02.</span> Experience
            </h2>
            <div className="space-y-12">
              <div className="timeline-item">
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
              </div>

              <div className="timeline-item">
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
              </div>

              <div className="timeline-item">
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
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="section bg-secondary/30">
          <div className="container">
            <h2 className="section-title">
              <span>03.</span> Education
            </h2>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <h3 className="text-xl font-bold">Bachelor Degree in Computer Engineering</h3>
              <h4 className="text-primary font-medium">La Salle BCN, Ramon Llull University</h4>
              <p className="text-muted-foreground">2016 - 2021</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="section">
          <div className="container">
            <h2 className="section-title">
              <span>04.</span> Skills
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Cloud Platforms</h3>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Google Cloud Platform (GCP)"].map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Infrastructure as Code</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Terraform", "CloudFormation", "OpenTofu",  "Helm"].map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">CI/CD</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD"].map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Containerization and Orchestration</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Kubernetes", "Docker"].map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "Python", "Bash", "JavaScript", "Go"].map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Other Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Prometheus", "Grafana", "Loki","RabbitMQ",  "PostgreSQL", "Spring Framework"].map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="section bg-secondary/30">
          <div className="container">
            <h2 className="section-title">
              <span>05.</span> Personal Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="project-card">
                <div className="project-image">
                  <Image 
                    src="/drop-in-screenshot.png" 
                    alt="Drop In Surf Wave Pool website screenshot" 
                    width={600} 
                    height={300}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                <h3 className="project-title">Drop In - Surf Wave Pool Booking Platform</h3>
                <p className="project-description">
                  A modern web application for booking sessions at a wave pool surfing facility. Built with Next.js 13+,
                  TypeScript, and Supabase, it offers a seamless experience for surf enthusiasts.
                </p>
                <div className="tech-stack">
                  {["Next.js", "TypeScript", "Supabase", "Stripe", "Google Maps API", "Tailwind CSS", "Shadcn UI"].map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="default" className="btn-primary">
                    <Link href="https://dropin-surf.com" target="_blank">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="project-card">
                <div className="project-image">
                  <Image 
                    src="/real-estate-screenshot.png" 
                    alt="Real Estate Management System dashboard screenshot" 
                    width={600} 
                    height={300}
                    className="w-full h-full object-cover rounded-md"
                  />
                </div>
                
                <h3 className="mt-4 text-xl font-bold">Real Estate Management System</h3>
                <p className="mt-2 text-muted-foreground">
                  A modern, responsive web application for managing real estate properties, buildings, tenants, and
                  related operations. This comprehensive system streamlines property management workflows and financial
                  operations.
                </p>
                
                <h4 className="mt-4 font-semibold">Project Gallery</h4>
                <div className="project-gallery">
                  {realEstateImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="gallery-item"
                      onClick={() => handleOpenGallery(index)}
                    >
                      <Image 
                        src={image.src} 
                        alt={image.alt}
                        width={300}
                        height={169}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="tech-stack mt-4">
                  {["Next.js 14", "TypeScript", "Tailwind CSS", "Radix UI", "Supabase", "AWS S3", "Google Maps API", "Framer Motion"].map((tech) => (
                    <span key={tech} className="skill-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-4">
                  <Button asChild variant="outline" disabled className="btn-outline">
                    <span>
                      <Lock className="w-4 h-4 mr-2" />
                      Private Project
                    </span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <h2 className="section-title">
              <span>06.</span> Contact
            </h2>
            <div className="max-w-xl space-y-6">
              <p className="text-lg text-muted-foreground">
                I'm currently open to new opportunities and collaborations in the DevOps and cloud engineering space.
                Feel free to reach out if you'd like to discuss potential projects or opportunities.
              </p>
              <div className="flex gap-4 pt-4">
                <Button asChild variant="default" className="btn-primary">
                  <a href="mailto:alexalmansa5@gmail.com">
                    <Mail className="w-4 h-4 mr-2" />
                    Email Me
                  </a>
                </Button>
                <Button asChild variant="outline" className="btn-outline">
                  <a href="tel:+34639420113">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Me
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Full screen gallery */}
      {showGallery && (
        <div className="gallery-fullscreen" onClick={handleCloseGallery}>
          <div className="gallery-fullscreen-content" onClick={(e) => e.stopPropagation()}>
            <Image 
              src={realEstateImages[currentImageIndex].src}
              alt={realEstateImages[currentImageIndex].alt}
              width={1200}
              height={675}
              className="w-full h-auto"
            />
            <button className="gallery-close" onClick={handleCloseGallery}>
              <X size={24} />
            </button>
            <button className="gallery-nav gallery-prev" onClick={handlePrevImage}>
              <ChevronLeft size={24} />
            </button>
            <button className="gallery-nav gallery-next" onClick={handleNextImage}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}

      <footer className="py-6 border-t">
        <div className="container text-center text-muted-foreground">
          <p>© 2025 Alex Almansa - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}


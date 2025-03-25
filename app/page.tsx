import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, MapPin, Phone, Globe, ExternalLink, Lock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="container mx-auto py-6">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold">
            Alex Almansa
          </Link>
          <div className="flex gap-6">
            <Link href="#about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#experience" className="hover:text-primary transition-colors">
              Experience
            </Link>
            <Link href="#skills" className="hover:text-primary transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="hover:text-primary transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center gap-8 py-16">
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Hi, I'm <span className="text-primary">Alex Almansa</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground">DevOps / Cloud Engineer</h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Cloud & DevOps Engineer with expertise in AWS, GCP, and Kubernetes. Skilled in infrastructure as code
              using Terraform and cloud formation, CI/CD, and container orchestration with Docker. Experience in
              monitoring, security, and cost optimization strategies.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild variant="default">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="outline">
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
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/alexalmansa"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="mailto:alexalmansa5@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
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
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">01.</span> About Me
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-4">
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
                Based in Barcelona, I'm available for travel and always looking for new challenges in the DevOps and
                cloud engineering space.
              </p>

              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3">Languages</h3>
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
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-primary" />
                    <span>639420113</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-5 h-5 text-primary" />
                    <span>alexalmansa5@gmail.com</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Carrer Montseny 5, Sant Feliu de Codines, Barcelona</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    <span>Based in Barcelona</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Availability</h3>
                <div className="flex items-center gap-2">
                  <span>Traveling availability</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">02.</span> Experience
          </h2>
          <div className="space-y-12">
            <div className="border-l-2 border-primary pl-6 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
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

            <div className="border-l-2 border-primary pl-6 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
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

            <div className="border-l-2 border-primary pl-6 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
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
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">03.</span> Education
          </h2>
          <div className="border-l-2 border-primary pl-6 relative">
            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
            <h3 className="text-xl font-bold">Bachelor Degree in Computer Engineering</h3>
            <h4 className="text-primary font-medium">La Salle BCN, Ramon Llull University</h4>
            <p className="text-muted-foreground">2016 - 2021</p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">04.</span> Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Cloud Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Google Cloud Platform (GCP)", "Azure", "Kubernetes", "Docker"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Infrastructure as Code</h3>
                <div className="flex flex-wrap gap-2">
                  {["Terraform", "CloudFormation", "Ansible", "Pulumi"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">CI/CD</h3>
                <div className="flex flex-wrap gap-2">
                  {["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "CircleCI"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Monitoring & Observability</h3>
                <div className="flex flex-wrap gap-2">
                  {["Prometheus", "Grafana", "ELK Stack", "Datadog", "New Relic"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {["Java", "Python", "Bash", "JavaScript", "Go"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Other Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {["RabbitMQ", "Kafka", "Redis", "PostgreSQL", "MongoDB", "Spring Framework"].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">05.</span> Personal Projects
          </h2>

          <div className="space-y-16">
            {/* Drop In Project */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Drop In - Surf Wave Pool Booking Platform</h3>
                <p className="text-lg">
                  A modern web application for booking sessions at a wave pool surfing facility. Built with Next.js 13+,
                  TypeScript, and Supabase, it offers a seamless experience for surf enthusiasts.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Authentication with Google OAuth and email/password</li>
                      <li>Secure payment processing with Stripe</li>
                      <li>Interactive booking system with real-time availability</li>
                      <li>Location services with Google Maps integration</li>
                      <li>Responsive design with dark/light mode support</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        "Next.js",
                        "TypeScript",
                        "Supabase",
                        "Stripe",
                        "Google Maps API",
                        "Tailwind CSS",
                        "Shadcn UI",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href="https://dropinbcn.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Visit Website
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden border border-border">
                <Image
                  src="https://sjc.microlink.io/0Kux1vIS9UvImFh0mYHxSIHfwljYdKobhQcml6mzqTvnFmHjng0dcgUKGia3X8DvPTeTBaLSsnjP-OzHVjTGwQ.jpeg"
                  alt="Drop In Surf Wave Pool website screenshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Real Estate Management System Project */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-bold">Real Estate Management System</h3>
                  <Lock className="w-5 h-5 text-muted-foreground" title="Private Project" />
                </div>
                <p className="text-lg">
                  A modern, responsive web application for managing real estate properties, buildings, tenants, and
                  related operations. This comprehensive system streamlines property management workflows and financial
                  operations.
                </p>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-semibold">Key Features:</h4>
                    <ul className="list-disc list-inside space-y-1 mt-2">
                      <li>Property and building management with location tracking</li>
                      <li>Tenant profiles, lease management, and document handling</li>
                      <li>Financial data export/import and reporting</li>
                      <li>Secure authentication with role-based access control</li>
                      <li>Fully responsive design optimized for all devices</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {[
                        "Next.js 14",
                        "TypeScript",
                        "Tailwind CSS",
                        "Radix UI",
                        "Supabase",
                        "AWS S3",
                        "Google Maps API",
                        "Framer Motion",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex items-center text-muted-foreground">
                    <Lock className="w-4 h-4 mr-2" />
                    Private Project - Not Publicly Available
                  </div>
                </div>
              </div>

              <div className="relative h-[400px] rounded-lg overflow-hidden border border-border">
                <Image
                  src="/real-estate-screenshot.png"
                  alt="Real Estate Management System dashboard screenshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
            <span className="text-primary">06.</span> Contact
          </h2>
          <div className="max-w-xl mx-auto text-center">
            <p className="text-lg mb-8">
              I'm currently open to new opportunities and collaborations in the DevOps and cloud engineering space. Feel
              free to reach out if you'd like to discuss potential projects or opportunities.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a href="mailto:alexalmansa5@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <a href="tel:+34639420113">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Me
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Alex Almansa - All Rights Reserved</p>
        </div>
      </footer>
    </div>
  )
}


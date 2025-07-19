import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import { Button } from "@/components/ui/button";
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { AccordionRoot, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { 
  ExternalLink, 
  Github, 
  Play, 
  Code, 
  Zap, 
  Shield, 
  Globe, 
  Database,
  ArrowRight,
  Star,
  Eye,
  GitBranch
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: 'fullstack' | 'frontend' | 'backend' | 'mobile' | 'ai';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  challenges: string[];
  solutions: string[];
  stats: {
    stars: number;
    forks: number;
    views: number;
  };
}

const projects: Project[] = [
  {
    id: "cosmic-portfolio",
    title: "Cosmic Portfolio",
    description: "A futuristic portfolio built with cosmic UI elements and advanced animations",
    longDescription: "A cutting-edge portfolio website that showcases modern web development techniques with cosmic UI elements, advanced animations, and responsive design. Features include interactive frames, dynamic charts, and seamless user experience.",
    image: "/projects/cosmic-portfolio.png",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Cosmic UI"],
    category: "frontend",
    difficulty: "advanced",
    liveUrl: "https://cosmic-portfolio.vercel.app",
    githubUrl: "https://github.com/daniyal/cosmic-portfolio",
    features: [
      "Interactive cosmic frames with dynamic paths",
      "Real-time data visualization with charts",
      "Smooth page transitions and animations",
      "Responsive design for all devices",
      "Dark/light theme switching",
      "Performance optimized with lazy loading"
    ],
    challenges: [
      "Complex SVG path animations",
      "Performance optimization for smooth animations",
      "Responsive frame scaling across devices"
    ],
    solutions: [
      "Implemented custom SVG renderer with ResizeObserver",
      "Used CSS transforms and GPU acceleration",
      "Created adaptive frame system with percentage-based coordinates"
    ],
    stats: {
      stars: 247,
      forks: 89,
      views: 15420
    }
  },
  {
    id: "ai-chat-platform",
    title: "AI Chat Platform",
    description: "Real-time AI-powered chat application with advanced features",
    longDescription: "A sophisticated chat platform that integrates multiple AI models, real-time messaging, and advanced conversation management. Built with modern architecture and scalable design patterns.",
    image: "/projects/ai-chat.png",
    technologies: ["Next.js", "OpenAI API", "Socket.io", "PostgreSQL", "Redis", "Docker"],
    category: "fullstack",
    difficulty: "advanced",
    liveUrl: "https://ai-chat-platform.vercel.app",
    githubUrl: "https://github.com/daniyal/ai-chat-platform",
    features: [
      "Multi-AI model integration (GPT-4, Claude, Gemini)",
      "Real-time messaging with WebSocket",
      "Conversation history and search",
      "File upload and processing",
      "User authentication and roles",
      "Analytics dashboard"
    ],
    challenges: [
      "Managing multiple AI API rate limits",
      "Real-time synchronization across users",
      "Large conversation data handling"
    ],
    solutions: [
      "Implemented intelligent rate limiting and queuing",
      "Used Redis for real-time data synchronization",
      "Optimized database queries with indexing and pagination"
    ],
    stats: {
      stars: 189,
      forks: 67,
      views: 12340
    }
  },
  {
    id: "ecommerce-saas",
    title: "E-Commerce SaaS",
    description: "Complete e-commerce platform with multi-tenant architecture",
    longDescription: "A comprehensive SaaS e-commerce solution that allows businesses to create and manage their online stores. Features include inventory management, payment processing, analytics, and more.",
    image: "/projects/ecommerce-saas.png",
    technologies: ["React", "Node.js", "Stripe", "MongoDB", "AWS S3", "JWT"],
    category: "fullstack",
    difficulty: "advanced",
    liveUrl: "https://ecommerce-saas.vercel.app",
    githubUrl: "https://github.com/daniyal/ecommerce-saas",
    features: [
      "Multi-tenant architecture",
      "Stripe payment integration",
      "Inventory management system",
      "Order tracking and notifications",
      "Analytics and reporting",
      "Admin dashboard"
    ],
    challenges: [
      "Multi-tenant data isolation",
      "Payment processing security",
      "Scalable file storage"
    ],
    solutions: [
      "Implemented tenant-based database schemas",
      "Used Stripe webhooks for secure payments",
      "Integrated AWS S3 for scalable file storage"
    ],
    stats: {
      stars: 156,
      forks: 45,
      views: 9870
    }
  },
  {
    id: "mobile-fitness-app",
    title: "Fitness Tracker Mobile App",
    description: "Cross-platform fitness tracking app with social features",
    longDescription: "A comprehensive fitness tracking application built with React Native that helps users track workouts, set goals, and connect with friends. Features include GPS tracking, workout plans, and social sharing.",
    image: "/projects/fitness-app.png",
    technologies: ["React Native", "Expo", "Firebase", "Redux", "Native Maps", "Push Notifications"],
    category: "mobile",
    difficulty: "intermediate",
    liveUrl: "https://fitness-app.expo.dev",
    githubUrl: "https://github.com/daniyal/fitness-app",
    features: [
      "GPS workout tracking",
      "Custom workout plans",
      "Social features and challenges",
      "Progress analytics",
      "Push notifications",
      "Offline support"
    ],
    challenges: [
      "GPS accuracy and battery optimization",
      "Real-time data synchronization",
      "Cross-platform compatibility"
    ],
    solutions: [
      "Implemented background location services",
      "Used Firebase for real-time sync",
      "Created platform-specific optimizations"
    ],
    stats: {
      stars: 98,
      forks: 34,
      views: 6540
    }
  },
  {
    id: "ml-recommendation-engine",
    title: "ML Recommendation Engine",
    description: "Machine learning recommendation system for content discovery",
    longDescription: "An intelligent recommendation engine that uses machine learning algorithms to suggest personalized content. Built with Python and deployed as a microservice.",
    image: "/projects/ml-engine.png",
    technologies: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Docker", "Kubernetes"],
    category: "ai",
    difficulty: "advanced",
    githubUrl: "https://github.com/daniyal/ml-recommendation-engine",
    features: [
      "Collaborative filtering algorithms",
      "Content-based recommendations",
      "Real-time model updates",
      "A/B testing framework",
      "Performance monitoring",
      "API documentation"
    ],
    challenges: [
      "Model training and deployment",
      "Real-time recommendation generation",
      "Scalability and performance"
    ],
    solutions: [
      "Used TensorFlow Serving for model deployment",
      "Implemented caching with Redis",
      "Containerized with Docker and orchestrated with Kubernetes"
    ],
    stats: {
      stars: 134,
      forks: 56,
      views: 8760
    }
  }
];

const categories = [
  { id: 'all', label: 'All Projects', icon: Code },
  { id: 'fullstack', label: 'Full Stack', icon: Globe },
  { id: 'frontend', label: 'Frontend', icon: Eye },
  { id: 'backend', label: 'Backend', icon: Database },
  { id: 'mobile', label: 'Mobile', icon: Zap },
  { id: 'ai', label: 'AI/ML', icon: Shield }
];

const difficulties = [
  { id: 'all', label: 'All Levels', color: 'text-gray-400' },
  { id: 'beginner', label: 'Beginner', color: 'text-green-400' },
  { id: 'intermediate', label: 'Intermediate', color: 'text-yellow-400' },
  { id: 'advanced', label: 'Advanced', color: 'text-red-400' }
];

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(project => {
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || project.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold text-shadow-lg text-shadow-primary mb-6">
              My Projects
            </h1>
            <p className="text-xl md:text-2xl opacity-80 max-w-3xl mx-auto">
              Exploring the intersection of creativity and technology through innovative web applications, 
              mobile experiences, and intelligent systems.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {projects.length}
              </div>
              <div className="opacity-70">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {projects.reduce((sum, p) => sum + p.stats.stars, 0)}
              </div>
              <div className="opacity-70">GitHub Stars</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">
                {projects.reduce((sum, p) => sum + p.stats.forks, 0)}
              </div>
              <div className="opacity-70">Forks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {projects.reduce((sum, p) => sum + p.stats.views, 0).toLocaleString()}
              </div>
              <div className="opacity-70">Total Views</div>
            </div>
          </div>

          {/* Filters */}
          <div className="mb-12">
            <TabsRoot value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="flex flex-wrap justify-center gap-2 mb-8">
                {categories.map(category => {
                  const Icon = category.icon;
                  return (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="flex items-center gap-2 px-6 py-3"
                    >
                      <Icon className="w-4 h-4" />
                      {category.label}
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </TabsRoot>

            <div className="flex flex-wrap justify-center gap-3">
              {difficulties.map(difficulty => (
                <Button
                  key={difficulty.id}
                  variant={selectedDifficulty === difficulty.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedDifficulty(difficulty.id)}
                  className={difficulty.color}
                >
                  {difficulty.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={twMerge([
                "group relative backdrop-blur-xl overflow-hidden transition-all duration-500 hover:scale-105",
                "[--color-frame-1-stroke:var(--color-primary)]/50",
                "[--color-frame-1-fill:var(--color-primary)]/20",
                "[--color-frame-2-stroke:var(--color-accent)]",
                "[--color-frame-2-fill:var(--color-accent)]/20",
                "[--color-frame-3-stroke:var(--color-accent)]",
                "[--color-frame-3-fill:var(--color-accent)]/20",
                "[--color-frame-4-stroke:var(--color-accent)]",
                "[--color-frame-4-fill:var(--color-accent)]/20",
                "[--color-frame-5-stroke:var(--color-primary)]/23",
                "[--color-frame-5-fill:transparent]",
              ])}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <Frame
                className="drop-shadow-2xl drop-shadow-primary/50 transition-all duration-500 group-hover:scale-110"
                paths={JSON.parse(
                  '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","37","12"],["L","0% + 59","12"],["L","0% + 85","0% + 33"],["L","79","0% + 12"],["L","50% - 3","12"],["L","50% + 16","30"],["L","100% - 35","30"],["L","100% - 16","47"],["L","100% - 16","100% - 47.05882352941177%"],["L","100% - 8","100% - 44.85294117647059%"],["L","100% - 9","100% - 16.666666666666668%"],["L","100% - 17","100% - 14.705882352941176%"],["L","100% - 17","100% - 30"],["L","100% - 34","100% - 12"],["L","50% + 13","100% - 12"],["L","50% + 15","100% - 26"],["L","50% - 11","100% - 12"],["L","37","100% - 12"],["L","19","100% - 30"],["L","19","0% + 50.490196078431374%"],["L","10","0% + 48.529411764705884%"],["L","10","0% + 20.098039215686274%"],["L","0% + 19.000000000000004","0% + 18.38235294117647%"],["L","19","29"],["L","37","12"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","50% + 10","15"],["L","50% + 19","15"],["L","50% + 24","0% + 20"],["L","50% + 16","0% + 20"],["L","50% + 10","15"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-3-stroke)","fill":"var(--color-frame-3-fill)"},"path":[["M","50% + 25","15"],["L","50% + 34","15"],["L","50% + 40","0% + 21"],["L","50% + 31","0% + 21"],["L","50% + 25","15"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-4-stroke)","fill":"var(--color-frame-4-fill)"},"path":[["M","50% + 40","15"],["L","50% + 52","15"],["L","50% + 61","0% + 23"],["L","50% + 49","0% + 23"],["L","50% + 40","15"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-5-stroke)","fill":"var(--color-frame-5-fill)"},"path":[["M","36","3"],["L","0% + 58","0"],["L","0% + 84","0% + 40"],["L","81","0% + 0"],["L","50% - 1","4"],["L","50% + 5","6"],["L","50% + 54","7"],["L","50% + 74","23"],["L","100% - 32","21"],["L","100% - 8","42"],["L","100% - 9","100% - 52.450980392156865%"],["L","100% + 0","100% - 50.245098039215684%"],["L","100% + 0","100% - 15.196078431372548%"],["L","100% - 7","100% - 13.480392156862745%"],["L","100% - 7","100% - 27"],["L","100% - 29","100% - 3"],["L","50% + 14","100% + 0"],["L","50% + 21","100% - 31"],["L","50% - 13","100% + 0"],["L","37","100% - 4"],["L","11","100% - 28"],["L","10","0% + 55.3921568627451%"],["L","0","0% + 52.94117647058823%"],["L","1","0% + 18.627450980392158%"],["L","11","0% + 16.666666666666668%"],["L","11","25"],["L","36","3"]]}]'
                )}
              />
              
              <div className="relative p-8 min-h-[500px] flex flex-col">
                {/* Project Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent/20">
                  <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                    <div className="text-4xl font-bold opacity-50">{project.title.charAt(0)}</div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Difficulty Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                    project.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {project.difficulty.charAt(0).toUpperCase() + project.difficulty.slice(1)}
                  </div>
                  <div className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                    {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 text-shadow-lg text-shadow-primary">
                    {project.title}
                  </h3>
                  <p className="opacity-80 mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center gap-4 mb-6 text-sm opacity-70">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitBranch className="w-4 h-4" />
                      {project.stats.forks}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {project.stats.views.toLocaleString()}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    onClick={() => setSelectedProject(project)}
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Details
                  </Button>
                  {project.liveUrl && (
                    <Button
                      variant="accent"
                      size="sm"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="secondary"
                      size="sm"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-2">No projects found</h3>
            <p className="opacity-70">Try adjusting your filters to see more projects</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-6">
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative p-8">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-2xl opacity-70 hover:opacity-100 transition-opacity"
              >
                ×
              </button>

              {/* Project Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedProject.difficulty === 'beginner' ? 'bg-green-500/20 text-green-400' :
                    selectedProject.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {selectedProject.difficulty.charAt(0).toUpperCase() + selectedProject.difficulty.slice(1)}
                  </div>
                  <div className="px-3 py-1 rounded-full text-sm font-medium bg-primary/20 text-primary">
                    {selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1)}
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold mb-4 text-shadow-lg text-shadow-primary">
                  {selectedProject.title}
                </h2>
                
                <p className="text-lg opacity-80 mb-6">
                  {selectedProject.longDescription}
                </p>

                <div className="flex flex-wrap gap-3 mb-6">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 mb-6">
                  {selectedProject.liveUrl && (
                    <Button asChild>
                      <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Live
                      </a>
                    </Button>
                  )}
                  {selectedProject.githubUrl && (
                    <Button variant="outline" asChild>
                      <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Details */}
              <AccordionRoot type="multiple" className="space-y-4">
                <AccordionItem value="features">
                  <AccordionTrigger className="text-lg font-semibold">
                    Key Features
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="challenges">
                  <AccordionTrigger className="text-lg font-semibold">
                    Challenges Faced
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {selectedProject.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="solutions">
                  <AccordionTrigger className="text-lg font-semibold">
                    Solutions Implemented
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {selectedProject.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </AccordionRoot>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects; 
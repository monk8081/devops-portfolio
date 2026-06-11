export const HERO_CONTENT = "Building cloud platforms that ship software at the speed of trust. DevOps Engineer specializing in AWS, Kubernetes, Terraform, and CI/CD automation — focused on reliability, scalability, and zero-downtime deployments.";

export const ABOUT_TEXT = "I design, automate, and deploy systems that turn code into production-grade reality. Currently at Culture Holidays, I own end-to-end DevOps for 50+ production projects — architecting multi-region AWS infrastructure, implementing Blue-Green deployments with zero downtime, and cutting deployment errors by ~90% through automated CI/CD pipelines. I work across AWS and Azure, orchestrate containers with Docker and Kubernetes (EKS), and define infrastructure with Terraform and Ansible. Behind the command line, I bridge collaboration and delivery using Azure DevOps, Jenkins, GitLab CI, Bitbucket Pipelines, and Python/Bash scripting. For me, DevOps isn't just about speed — it's about precision, repeatability, and creating systems that empower developers to ship confidently and innovate faster.";

export const SKILLS = [
  // Cloud
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', category: 'cloud', level: 90 },
  { name: 'Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', category: 'cloud', level: 80 },

  // Containers
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', category: 'containers', level: 90 },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', category: 'containers', level: 85 },
  { name: 'Helm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/helm/helm-original.svg', category: 'containers', level: 80 },

  // Infrastructure
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', category: 'infrastructure', level: 90 },
  { name: 'Ansible', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg', category: 'infrastructure', level: 85 },
  { name: 'Chef', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chef/chef-original.svg', category: 'infrastructure', level: 70 },

  // Monitoring
  { name: 'Prometheus', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg', category: 'monitoring', level: 85 },
  { name: 'Grafana', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg', category: 'monitoring', level: 85 },
  { name: 'CloudWatch', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/amazoncloudwatch.svg', category: 'monitoring', level: 90 },
  { name: 'New Relic', icon: 'https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/newrelic.svg', category: 'monitoring', level: 75 },

  // DevOps / Automation
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-plain.svg', category: 'devops', level: 90 },
  { name: 'Azure DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg', category: 'devops', level: 90 },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-plain.svg', category: 'devops', level: 85 },
  { name: 'GitLab CI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg', category: 'devops', level: 80 },
  { name: 'Bitbucket', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg', category: 'devops', level: 85 },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', category: 'devops', level: 90 },
  { name: 'Bash Scripting', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg', category: 'devops', level: 85 },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', category: 'devops', level: 80 },
  { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', category: 'devops', level: 85 },

  // Development
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', category: 'development', level: 75 },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg', category: 'development', level: 70 },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg', category: 'development', level: 70 },

  // Databases
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', category: 'database', level: 75 },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'database', level: 70 },
];

export const PROJECTS = [
  {
    title: 'CI/CD Pipeline for Java Application on Kubernetes',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Built an end-to-end CI/CD pipeline using Terraform for AWS infrastructure provisioning, Jenkins deployed via Ansible for build automation, SonarQube for static code analysis, and JFrog Artifactory for artifact management. Dockerized the Java application, deployed to Amazon EKS with Helm, and monitored cluster health with Prometheus & Grafana dashboards.',
    technologies: ['Terraform', 'Jenkins', 'Ansible', 'SonarQube', 'JFrog', 'Docker', 'AWS EKS', 'Helm', 'Prometheus', 'Grafana'],
    category: 'devops',
    githubLink: 'https://github.com/monk8081',
    websiteLink: '',
  },
  {
    title: 'Automating Tetris Deployments with ArgoCD, Terraform & Jenkins',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Provisioned EC2 and EKS clusters using Terraform. Configured Jenkins for CI/CD with SonarQube for code quality and Trivy for container security scanning. Implemented GitOps-based deployments using ArgoCD with automated image updates through Jenkins CI/CD pipeline — enabling fully automated and auditable deployment workflows.',
    technologies: ['Terraform', 'Jenkins', 'AWS EKS', 'EC2', 'ArgoCD', 'SonarQube', 'Trivy', 'Docker', 'GitOps'],
    category: 'devops',
    githubLink: 'https://github.com/monk8081',
    websiteLink: '',
  },
  {
    title: 'Multi-Region AWS Infrastructure — Culture Holidays',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    description: 'Architected production-grade multi-region AWS infrastructure (dev in ap-south-1, staging & production in us-east-1) for 50+ projects. Implemented Blue-Green deployments via PM2 + Nginx with zero downtime, secured delivery via CloudFront + AWS WAF (~35% speed boost), built a serverless daily-reporting pipeline (CloudFront logs → S3 → Lambda → SES), and reduced compute costs ~30% by right-sizing EC2 instances.',
    technologies: ['AWS EC2', 'CloudFront', 'AWS WAF', 'Lambda', 'S3', 'Nginx', 'PM2', 'SES', 'CloudWatch', 'Blue-Green'],
    category: 'devops',
    githubLink: 'https://github.com/monk8081',
    websiteLink: '',
  },
];

export const CONTACT = {
  address: 'Gurugram, Haryana, India',
  phoneNo: '+91 8543999103',
  email: 'mmaurya694@gmail.com',
  social: {
    github: 'https://github.com/monk8081',
    linkedin: 'https://www.linkedin.com/in/manish-kumar-9506b11ba/',
    twitter: '',
  }
};

export const SKILLS_BY_CATEGORY = {
  cloud: SKILLS.filter(skill => skill.category === 'cloud'),
  containers: SKILLS.filter(skill => skill.category === 'containers'),
  infrastructure: SKILLS.filter(skill => skill.category === 'infrastructure'),
  monitoring: SKILLS.filter(skill => skill.category === 'monitoring'),
  devops: SKILLS.filter(skill => skill.category === 'devops'),
  development: SKILLS.filter(skill => skill.category === 'development'),
  database: SKILLS.filter(skill => skill.category === 'database'),
};

export const PROJECTS_BY_CATEGORY = {
  all: PROJECTS,
  devops: PROJECTS.filter(project => project.category === 'devops'),
  fullstack: PROJECTS.filter(project => project.category === 'fullstack'),
};

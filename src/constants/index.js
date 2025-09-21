import { info } from "autoprefixer";
import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	sql,
	mui,
	arun_kumar,
	bhuwan_pahuja,
	harvinder,
  penny_picks,
  Infomania,
  ai_resume,
} from "../assets";
import grant_thornton from "../assets/company/grant_thornton.png";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Frontend Developer",
		icon: mobile,
	},
	{
		title: "Backend Developer",
		icon: backend,
	},
	{
		title: "FullStack Developer",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Material UI",
		icon: mui,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "MySQL",
		icon: sql,
	},

	{
		name: "git",
		icon: git,
	},
];

const experiences = [
	{
		title: "FullStack Developer",
		designation: "Senior Associate",
		company_name: "Grant Thornton",
		icon: grant_thornton,
		// iconBg: "#383E56",
		iconBg: "white",
		date: "June 2023 - July 2024",
		points: [
			"Implemented JWT-based authentication, securing access for 500+ user accounts and enhancing data protection.",
			"Designed and optimized SQL queries and stored procedures, reducing query execution time by ~20%.",
			"Built React-based UIs and implemented data pipelines/validation rules using Inferyx, improving efficiency in tax module workflows.",
			"Collaborated in Agile sprints, performing code reviews, debugging, and deployments, ensuring on-time delivery of features.",
		],
	},
	{
		title: "FullStack Developer",
		designation: "Consultant",
		company_name: "Grant Thornton",
		icon: grant_thornton,
		iconBg: "white",
		date: "August 2024 - Present",
		points: [
			"Analyzed requirements and contributed to design, development, integration, deployment, and unit testing of enterprise features.",
			"Developed tax-related modules (GSTR-1, GSTR-2A/2B, GSTR-3B, ITC-04) for flagship product GTaxPro, improving automation for compliance processes.",
			"Optimized React applications using lazy loading, Redux, and debouncing, improving page load speed by 30% and boosting customer satisfaction.",
			"Built and integrated multiple RESTful APIs with Node.js and Express, ensuring seamless data exchange and reducing backend response errors by 25%.",
		],
	},
];
const testimonials = [
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Abhinav does.",
		name: "Arun Kumar",
		designation: "Founder",
		company: "Atharv Investments",
		image: arun_kumar,
	},
	{
		testimonial:
			"Working with Abhinav has been a fantastic experience. His technical expertise and collaborative approach consistently help our team deliver high-quality solutions on time.",
		name: "Bhuwan Pahuja",
		designation: "Senior Consultant",
		company: "Deloitte",
		image: bhuwan_pahuja,
	},
	{
		testimonial:
			"Abhinav is a reliable teammate who always brings creative ideas and pays great attention to detail.",
		name: "Harvinder",
		designation: "Developer",
		company: "Leaf Technologies",
		image: harvinder,
	},
];

const projects = [
	{
		name: "Penny Picks",
		description:
			"E-commerce platform built with MERN stack, enabling users to securely browse, search, and purchase products with account management and order history features.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			{
				name: "nodeJS",
				color: "lime-text-gradient",
			},
		],
		image: penny_picks,
		source_code_link: "https://github.com/AbhinavChhiller/PennyPicks",
		live_demo_link: "https://pennypicks.onrender.com/",
	},
  {
		name: "InfoMania",
		description:
			"A responsive movie database app with React.js and Tailwind CSS, integrating TMDB API for real-time movie details, ratings, and reviews.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
		{
				name: "HTML-CSS",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
			
		],
		image: Infomania,
		source_code_link: "https://github.com/AbhinavChhiller/infoMania",
		live_demo_link: "https://infomania.netlify.app/",
	},
  {
		name: "AI Resume",
		description:
			"A responsive resume builder app with React.js and Tailwind CSS, allowing users to create, edit, and download their resumes with AI assistance.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
		{
				name: "strapi",
				color: "lime-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
      {
				name: "sql",
				color: "green-text-gradient",
			},
			
		],
		image: ai_resume,
		source_code_link: "https://github.com/AbhinavChhiller/ai-resume-frontend",
		live_demo_link: "https://ai-resume-frontend-au5b.onrender.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };

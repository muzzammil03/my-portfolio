import { FaCode } from "react-icons/fa";
import { TbDatabaseSearch, TbBrain } from "react-icons/tb";

const servicesData = [
  {
    title: 'Web Developer',
    shortDescription: 'Building clean, responsive, and interactive UIs.',
    icon: FaCode,
    details: [
      "Building responsive websites using HTML, CSS, and JavaScript.",
      "Developing dynamic, component-based UIs with React.",
      "Focus on clean, maintainable, and reusable code.",
      "Optimizing frontend performance and user experience."
    ]
  },
  {
    title: 'AI/ML Engineer',
    shortDescription: 'Building intelligent systems using ML and modern AI techniques.',
    icon: TbBrain,
    details: [
      "Supervised & Unsupervised Learning (regression, classification, clustering).",
      "Decision Trees and other classical ML algorithms.",
      "Understanding and working with Transformer architectures.",
      "Building RAG (Retrieval-Augmented Generation) based applications."
    ]
  },
  {
    title: 'Data Analyst',
    shortDescription: 'Turning raw data into actionable insights.',
    icon: TbDatabaseSearch,
    details: [
      'Collecting, cleaning, and analyzing large datasets.',
      'Creating dashboards and reports using tools like Excel, Power BI, or Tableau.',
      'Identifying trends, patterns, and correlations in complex data.',
      'Communicating findings with data visualizations and presentations.'
    ]
  }
];

export default servicesData;

import { FaCode } from "react-icons/fa";
import { TbDatabaseSearch } from "react-icons/tb";

const servicesData = [
  {
    title: 'Web Developer',
    shortDescription: 'Beautiful and elegant designs with intuitive interfaces.',
    icon: FaCode ,
    details: [
      "Create professional and quality websites at client's request.",
      'Web design in prototypes.',
      'SEO optimization.',
      'Solve performance problems.'
    ]
  },
  // {
  //   title: 'Web Designer',
  //   shortDescription: 'Beautiful and elegant designs with intuitive interfaces.',
        // icon: <FaPencilRuler />,
  //   details: [
  //     'Creative website designs.',
  //     'Responsive layouts.',
  //     'Brand-focused visuals.',
  //     'Modern UI trends.'
  //   ]
  // },
  // {
  //   title: 'Interfaces UI/UX',
  //   shortDescription: 'Beautiful and elegant designs with intuitive interfaces.',
  //   details: [
  //     'User research and testing.',
  //     'Wireframing and prototyping.',
  //     'Improved user experiences.',
  //     'Mobile-first designs.'
  //   ]
  // }
  {
  title: 'Data Analyst',
  shortDescription: 'Turning raw data into actionable insights.',
  icon: TbDatabaseSearch ,
  details: [
    'Collecting, cleaning, and analyzing large datasets.',
    'Creating dashboards and reports using tools like Excel, Power BI, or Tableau.',
    'Identifying trends, patterns, and correlations in complex data.',
    'Communicating findings with data visualizations and presentations.'
  ]
}

];

export default servicesData;

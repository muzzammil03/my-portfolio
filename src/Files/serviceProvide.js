import { FaCode } from "react-icons/fa";
import { TbDatabaseSearch, TbBrain } from "react-icons/tb";

const servicesData = [
  {
    title: "Web Development",
    shortDescription: "Fast, responsive websites and web apps for your business or idea.",
    icon: FaCode,
    details: [
      "Responsive websites and landing pages that look great on phones and computers.",
      "Interactive web apps built with React, from a simple tool to a multi-page app.",
      "Clean, reusable code that is easy to update later.",
      "Working contact forms, dark mode and smooth animations for a better visitor experience."
    ]
  },
  {
    title: "Data Analysis & Dashboards",
    shortDescription: "Turn your sales or business data into clear dashboards and insights.",
    icon: TbDatabaseSearch,
    details: [
      "Cleaning messy Excel or CSV data so you can trust the numbers.",
      "Interactive dashboards in Power BI and Excel that show sales, profit, customers and trends.",
      "Clear answers to questions like which product, region or customer group brings the most revenue.",
      "Findings explained in simple language, not just charts."
    ]
  },
  {
    title: "AI & Machine Learning",
    shortDescription: "Practical AI tools that save time, like document chatbots and prediction models.",
    icon: TbBrain,
    details: [
      "Chatbots that answer questions from your own documents (RAG) without making things up.",
      "Prediction models, such as estimating delivery time from order data.",
      "Image classification models, such as detecting objects or masks in photos.",
      "Simple Streamlit apps so your team can use the model without any coding."
    ]
  }
];

export default servicesData;

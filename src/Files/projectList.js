const projects = [
    {
    id: "rag-chatbot",
    title: "RAG Chatbot",
    category: "AI-ML",
    imgSrc: "/images/p16.png",
    videoSrc: "https://youtu.be/_mbfXx28wk4",
    githubLink: "https://github.com/muzzammil03/RAG-chatbot",
    description: "An AI-powered Retrieval-Augmented Generation (RAG) chatbot designed to answer questions from a custom knowledge base. The project combines document processing, text chunking, semantic embeddings, vector similarity search, and large language model generation to retrieve relevant information before generating context-aware responses. It demonstrates how RAG can reduce hallucinations and provide more reliable answers by grounding responses in retrieved documents.",
    techIcons: ["Python", "LangChain", "FAISS", "Hugging Face", "Groq"]
  },
  {
    id: "diwali-sales-analysis",
    title: "Diwali Sales Analysis",
    category: "Data Analyst",
    imgSrc: "/images/p.png",
    videoSrc: "https://youtu.be/79F2uWqIw08",
    githubLink: "https://github.com/muzzammil03/diwali-sales-analysis",
    description: "A comprehensive data analysis project focused on uncovering Diwali sales trends using Python, Pandas, and data visualization libraries like Matplotlib and Seaborn. The project involves cleaning raw sales data, handling missing values, and performing exploratory data analysis to understand customer behavior across different age groups, cities, and product categories. Key insights include identifying top-performing states, best-selling product categories, and customer demographics that contribute most to revenue, ultimately translating raw numbers into clear, actionable business recommendations.",
    techIcons: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"]
  },
  {
    id: "netflix-recommendation-system",
    title: "Netflix Recommendation System",
    category: "AI-ML",
    imgSrc: "/images/p13.png",
    videoSrc: "",
    githubLink: "https://github.com/muzzammil03/Netflix-Case-Study",
    description: "Built a content-based movie recommendation system using machine learning techniques to suggest relevant titles based on similarity in genre, cast, and description. The project involves extensive data preprocessing and feature engineering on the Netflix dataset, followed by vectorization of text-based features and computing similarity scores between titles. The result is a working recommendation engine that, given a movie or show a user likes, returns a ranked list of similar content, demonstrating a practical application of unsupervised learning and text-based similarity techniques.",
    techIcons: ["Python", "Pandas", "Scikit-learn", "NumPy", "Jupyter Notebook"]
  },
  {
    id: "porter-case-study",
    title: "Porter Delivery Analysis",
    category: "AI-ML",
    imgSrc: "/images/p14.png",
    videoSrc: "https://youtu.be/lsgBkp2ZOR0",
    githubLink: "https://github.com/muzzammil03/Porter-Case-Study",
    description: "An in-depth exploratory data analysis of Porter's delivery operations data, aimed at identifying patterns in delivery times, order volumes, and operational bottlenecks. The project covers data cleaning, feature extraction from timestamps, and statistical analysis to uncover relationships between factors like time of day, number of items, and delivery duration. Visualizations were used to highlight peak demand periods and performance trends, providing insights that could help optimize delivery efficiency and resource allocation for a logistics business.",
    techIcons: ["Python", "Pandas", "Matplotlib", "Seaborn"]
  },
  {
    id: "face-mask-detection",
    title: "Face Mask Detection",
    category: "AI-ML",
    imgSrc: "/images/p15.png",
    videoSrc: "https://youtu.be/B0Z6FZz1EXY",
    githubLink: "https://github.com/muzzammil03/face-mask-detection-",
    description: "A deep learning project that uses a Convolutional Neural Network (CNN) to detect whether a person is wearing a face mask or not, in real time. The model was trained on an image dataset and processes input using OpenCV for face detection before classification. The final application is deployed using Streamlit, providing a simple web interface where users can upload an image and instantly get a prediction along with confidence scores, making it a practical demonstration of computer vision applied to public health scenarios.",
    techIcons: ["Python", "TensorFlow", "Keras", "OpenCV", "NumPy", "Streamlit"]
  },
  {
    id: "swiggy-clone",
    title: "Swiggy Clone",
    category: "Frontend Web App",
    imgSrc: "/images/p1.png",
    videoSrc: "https://youtu.be/vwjQ9tMbG4I",
    demoLink: "https://my-swiggy-clone.netlify.app/",
    githubLink: "https://github.com/muzzammil03/Swiggy-clone",
    description: "A React-based clone of the Swiggy food delivery app, built to replicate the core browsing experience of the original platform. The app fetches live restaurant and menu data from an API and renders it through a responsive, component-based UI. It includes features like restaurant listings with ratings and cuisine tags, dynamic filtering, and a clean, mobile-friendly layout, showcasing practical use of React hooks, API integration, and state management for building real-world consumer-facing applications.",
    techIcons: ["React.js", "HTML5", "CSS3"]
  },
  {
    id: "vrinda-Strore-Dashboard",
    title: "Vrinda Store Dashboard",
    category: "Data Analyst",
    imgSrc: "/images/p2.png",
    videoSrc: "https://youtu.be/J4wXHCqV88k",
    githubLink: "https://github.com/muzzammil03/vrindaStroreDashboard",
    description: "An Excel-based store management dashboard designed to help track sales performance and inventory levels for a retail business. The dashboard consolidates raw sales and stock data into organized, easy-to-read visuals, including summary metrics, trend charts, and category-wise breakdowns. It enables quick identification of best-selling products, stock shortages, and overall sales trends, demonstrating how spreadsheet tools can be used to build functional, decision-support dashboards without relying on dedicated BI software.",
    techIcons: ["Excel", "Dashboard"]
  },
  {
    id: "zomato-dashboard",
    title: "Zomato Dashboard",
    category: "Data Analyst",
    imgSrc: "/images/p3.png",
    videoSrc: "https://youtu.be/SVnueDSnShI",
    githubLink: "https://github.com/muzzammil03/-Zomato-Data-Analysis-Project",
    description: "A data analysis project built on Zomato's restaurant dataset, aimed at uncovering trends across the food and restaurant industry. The analysis covers restaurant ratings, cuisine popularity, pricing patterns, and city-wise distribution of restaurants, using Python for data cleaning and Seaborn for creating clear, insightful visualizations. The project highlights how factors like online ordering availability and table booking options correlate with customer ratings, offering a data-driven perspective on what makes restaurants successful.",
    techIcons: ["Python", "Pandas", "NumPy", "Seaborn"]
  },
  {
    id: "madav-ecommerce-sales-dashboard",
    title: "Madav Ecommerce Sales Dashboard",
    category: "Data Analyst",
    imgSrc: "/images/p4.png",
    videoSrc: "https://youtu.be/L58s8i9dS5w",
    githubLink: "https://github.com/muzzammil03/Madav_Ecommerce_Sales_Dashboard",
    description: "A Power BI dashboard built to visualize and analyze ecommerce sales data for better business decision-making. The report brings together key metrics like revenue trends, product-category performance, and regional sales distribution into a single interactive view. Using DAX measures and dynamic filters, the dashboard allows stakeholders to drill down into specific time periods or product lines, turning raw transactional data into a clear, actionable overview of business performance.",
    techIcons: ["Power BI"]
  },
  {
    id: "video-game-sales-dashboard",
    title: "Video Game Sales Dashboard",
    category: "Data Analyst",
    imgSrc: "/images/p12.png",
    videoSrc: "https://youtu.be/3LDxxbiIm-Q",
    githubLink: "https://github.com/muzzammil03/video-game-sales-dashboard",
    description: "An interactive Power BI dashboard built to analyze global video game sales trends across platforms, genres, and years. The report includes a line chart tracking global sales growth over time, a visualization of the number of games released per year, a donut chart breaking down sales by platform, and a bar chart comparing sales across genres. Summary cards highlight key metrics like EU sales, while a platform-based slicer allows users to dynamically filter the entire dashboard, making it easy to explore trends within the video game industry using DAX-powered calculations.",
    techIcons: ["Power BI", "DAX"]
  },
  {
    id: "topcourses",
    title: "TopCourses",
    category: "Frontend Web App",
    imgSrc: "/images/p10.png",
    videoSrc: "https://youtu.be/WQw3eBXRzYU",
    demoLink: "https://top-coursess-app.netlify.app/",
    githubLink: "https://github.com/muzzammil03/topcourses",
    description: "TopCourses is a web application built with React.js that helps users browse and discover top online courses from various platforms like Udemy, Coursera, and edX. The platform aggregates course listings across different categories and allows users to filter by topic, price, ratings, and more. Each course entry provides key details like a brief overview, rating, and direct links to the course page. The app also enables users to create a personalized list of courses they are interested in, making the process of finding the right course faster and more organized.",
    techIcons: ["React.js"]
  },
  {
    id: "text-modifier",
    title: "Text Modifier",
    category: "Frontend Web App",
    imgSrc: "/images/p11.png",
    videoSrc: "",
    demoLink: "https://mytextmodifire.netlify.app/",
    githubLink: "https://github.com/muzzammil03/my-app",
    description: "Text Modifier is a simple React.js-based web application that allows users to perform various text transformations such as converting text to uppercase/lowercase, removing extra spaces, copying text to clipboard, and counting words and characters. It provides a minimalistic and responsive interface for quick and efficient text manipulation, built with clean component structure and real-time state updates, making it a useful lightweight tool for students, content creators, and developers who need fast text utilities without opening a full text editor.",
    techIcons: ["React.js"]
  }
];

export default projects;

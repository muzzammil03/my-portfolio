const projects = [
  // https://github.com/muzzammil03/diwali-sales-analysis
   {
  id: "diwali-sales-analysis",
  title: "Diwali Sales Analysis",
  category: "Data Analyst",
  imgSrc: "/images/p.png",  // Agar aapke paas project ka koi image hai to yahan daal sakte hain, warna generic placeholder rakh sakte hain
  videoSrc: "https://youtu.be/79F2uWqIw08", // Agar koi demo video hai to yahan daalein, warna empty ya placeholder
  githubLink: "https://github.com/muzzammil03/diwali-sales-analysis",
  description: "A comprehensive data analysis project focused on Diwali sales trends using Python, Pandas, and data visualization libraries like Matplotlib and Seaborn. Includes data cleaning, exploratory data analysis, and actionable business insights.",
  techIcons: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter Notebook"]
},

  {
    id: "swiggy-clone",
    title: "Swiggy Clone",
    category: "Web App",
    imgSrc: "/images/p1.png",
    videoSrc: "https://youtu.be/vwjQ9tMbG4I",
    demoLink: "https://my-swiggy-clone.netlify.app/",
    githubLink: "https://github.com/muzzammil03/Swiggy-clone",
    description: "A React-based clone of the Swiggy app that integrates a live API for food delivery services.",
    techIcons: ["React.js", "HTML5", "CSS3"]
  },
  {
    id: "vrinda-Strore-Dashboard",
    title: "Vrinda Store Dashboard",
    category: "Data Analyst",
    imgSrc: "/images/p2.png",
    videoSrc: "https://youtu.be/J4wXHCqV88k",
    // demoLink: "https://github.com/muzzammil03/vrindaStroreDashboard",
    githubLink: "https://github.com/muzzammil03/vrindaStroreDashboard",
    description: "An Excel-based store management dashboard built for tracking sales and inventory.",
    techIcons: ["Excel", "Dashboard"]
  },
  {
    id: "zomato-dashboard",
    title: "Zomato Dashboard",
    category: "Data Analyst",
    imgSrc: "/images/p3.png",
    videoSrc: "https://youtu.be/SVnueDSnShI",
    // demoLink: "https://github.com/muzzammil03/-Zomato-Data-Analysis-Project",
    githubLink: "https://github.com/muzzammil03/-Zomato-Data-Analysis-Project",
    description: "A data analysis project using Zomato's restaurant data to visualize trends in the food industry.",
    techIcons: ["Python", "Pandas", "NumPy", "Seaborn"]
  },
  {
    id: "madav-ecommerce-sales-dashboard",
    title: "Madav Ecommerce Sales Dashboard",
    category: "Data Analyst",
    imgSrc: "/images/p4.png",
    videoSrc: "https://youtu.be/L58s8i9dS5w",
    // demoLink: "https://github.com/muzzammil03/Madav_Ecommerce_Sales_Dashboard",
    githubLink: "https://github.com/muzzammil03/Madav_Ecommerce_Sales_Dashboard",
    description: "A Power BI dashboard designed to visualize ecommerce sales data and provide insights.",
    techIcons: ["Power BI"]
  },
  // {
  //   id: "my-notepad",
  //   title: "My Notepad",
  //   category: "Python Project",
  //   imgSrc: "/images/p5.png", // thumbnail or image preview
  //   videoSrc: "", // optional
  //   // demoLink: "#",
  //   githubLink: "https://github.com/muzzammil03/Python-projects/tree/main/my-notepad",
  //   description: "My Notepad is a basic text editor developed in Python that allows users to create, save, and open text files. The application provides a simple user interface for text editing, with features like saving files with custom names, opening existing text files, and editing them as needed. It helps users manage notes or other textual content in a lightweight and easy-to-use platform.",
  //   techIcons: ["Python"]
  // },
  // {
  //   id: "calculator",
  //   title: "Calculator",
  //   category: "Python Project",
  //   imgSrc: "/images/p8.png",
  //   videoSrc: "/videos/calc.mp4",
  //   // demoLink: "#",
  //   githubLink: "https://github.com/muzzammil03/Python-projects/tree/main/Calculator",
  //   description: "This Python-based calculator allows users to perform basic arithmetic operations such as addition, subtraction, multiplication, and division. It features a clean user interface with an easy-to-navigate layout. It’s built with a focus on usability and simplicity, ensuring that even beginners can use it efficiently. The project could be extended to include additional functions like square roots, percentages, or scientific calculations in future versions.",
  //   techIcons: ["Python"]
  // },
  // {
  //   id: "text-to-speech",
  //   title: "Text to Speech",
  //   category: "Python Project",
  //   imgSrc: "/images/p9.png",
  //   videoSrc: "/videos/TTS.mp4",
  //   // demoLink: "#",
  //   githubLink: "https://github.com/muzzammil03/Python-projects/tree/main/text%20to%20speech",
  //   description: "The Text to Speech project converts typed text into audible speech using Python. It utilizes libraries such as pyttsx3, which allow for text to be read aloud in a clear, natural-sounding voice. This project is useful for people with visual impairments, language learners, or anyone who wants to listen to text content rather than read it. The application supports multiple languages and can be customized to change the pitch, speed, and voice.",
  //   techIcons: ["Python"]
  // },
  {
    id: "topcourses",
    title: "TopCourses",
    category: "Web App",
    imgSrc: "/images/p10.png", // thumbnail or video preview
    videoSrc: "https://youtu.be/WQw3eBXRzYU", // optional
    demoLink: "https://top-coursess-app.netlify.app/",
    githubLink: "https://github.com/muzzammil03/topcourses",
    description: "TopCourses is a web application built with React.js that helps users browse and discover top online courses from various platforms like Udemy, Coursera, and edX. The platform aggregates course listings across different categories and allows users to filter by topic, price, ratings, and more. Each course entry provides key details like a brief overview, rating, and direct links to the course page. The app also enables users to create a personalized list of courses they are interested in.",
    techIcons: ["React.js"]
  },
  {
    id: "text-modifier",
    title: "Text Modifier",
    category: "Web App",
    imgSrc: "/images/p11.png", // update this path as needed
    videoSrc: "", // optional, update if you have a preview
    demoLink: "https://mytextmodifire.netlify.app/", // update if deployed
    githubLink: "https://github.com/muzzammil03/my-app",
    description: "Text Modifier is a simple React.js-based web application that allows users to perform various text transformations such as converting text to uppercase/lowercase, removing extra spaces, copying text to clipboard, and counting words and characters. It provides a minimalistic and responsive interface for quick and efficient text manipulation, useful for students, content creators, and developers.",
    techIcons: ["React.js"]
  }
  
];

export default projects;

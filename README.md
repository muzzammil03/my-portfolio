# 🌐 Muzzammil's Portfolio

A modern, responsive, and interactive personal portfolio website showcasing my work in **Web Development**, **AI/ML**, and **Data Analytics**. Built with React, Vite, Tailwind CSS, and Framer Motion.

🔗 **Live Demo:** [Add your deployed link here](https://your-portfolio-link.netlify.app)

---

## ✨ Features

- 🎨 **Responsive design**: works smoothly on mobile, tablet, and desktop
- 🌗 **Dark / Light mode**: remembers your choice and follows the system theme by default
- 🎞️ **Smooth animations** powered by Framer Motion
- 🔊 **Interactive sound effects** for clicks, theme toggle, and page changes
- 🗂️ **Projects showcase** with category filters, detail pages, GitHub links, live demos, and video walkthroughs
- 🎓 **Education & Certificates** sections
- 🛠️ **Skills & Services** sections covering Web Development, AI/ML, and Data Analysis
- 📬 **Working contact form** using EmailJS (no backend needed)
- 📄 **Downloadable CV**
- ⬆️ **Back-to-top** button

---

## 🛠️ Tech Stack

| Category | Technologies |
| --- | --- |
| Framework | React 19 |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS 4 |
| Routing | React Router DOM 7 |
| Animations | Framer Motion |
| Icons | React Icons |
| Contact Form | EmailJS |
| Linting | ESLint |
| Deployment | Netlify |

---

## 📸 Pages

| Route | Description |
| --- | --- |
| `/` | Home: hero, services, skills, and featured content |
| `/About` | About me, education, and certificates |
| `/Projects` | All projects with category filters |
| `/project/:id` | Detailed view of a single project |
| `/contact` | Contact form |

---

## 📁 Project Structure

```
my-portfolio/
├── public/
│   ├── images/              # Project, certificate & profile images
│   ├── sounds/              # UI sound effects
│   └── Muzzammil_CV.pdf     # Downloadable resume
├── src/
│   ├── components/          # Reusable components (Header, Footer, Education, etc.)
│   ├── routes/              # Page-level components (Home, About, Projects, Contact)
│   ├── Files/               # Data files (projects, skills, education, certificates, services)
│   ├── utils/               # Helper functions (e.g. playSound)
│   ├── App.jsx              # Routes & theme logic
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

```bash
   git clone https://github.com/muzzammil03/my-portfolio.git
   cd my-portfolio
```

2. **Install dependencies**

```bash
   npm install
```

3. **Set up environment variables** (see the section below)

4. **Start the development server**

```bash
   npm run dev
```

   Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔐 Environment Variables

The contact form uses [EmailJS](https://www.emailjs.com/). Create a `.env` file in the project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

You can get these values from your EmailJS dashboard after creating an email service and template.
The template should use the form fields `user_name`, `user_email`, and your message field.

> ⚠️ Never commit your `.env` file. It is already listed in `.gitignore`.

---

## 📜 Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

---

## ✏️ Customizing the Content

All portfolio content is stored in simple data files inside `src/Files/`, so you can update it without touching the components:

| File | What it controls |
| --- | --- |
| `projectList.js` | Projects (title, category, description, tech stack, GitHub, demo & video links) |
| `skills.js` | Skill icons shown in the skills section |
| `educationData.js` | Education timeline |
| `certificatesData.js` | Certificates |
| `serviceProvide.js` | Services offered |

To add a new project, add a new object to `projectList.js` and place its image in `public/images/`.

---

## 💼 Featured Projects

**AI / ML**
- RAG Chatbot
- Netflix Recommendation System
- Face Mask Detection
- Porter Delivery Analysis

**Data Analytics**
- Diwali Sales Analysis
- Vrinda Store Dashboard
- Zomato Dashboard
- Madav Ecommerce Sales Dashboard
- Video Game Sales Dashboard

**Frontend Web Apps**
- Swiggy Clone
- TopCourses
- Text Modifier

See the full list with details on the [Projects page](https://your-portfolio-link.netlify.app/Projects).

---

## 🌍 Deployment

This project can be deployed on any static hosting platform such as **Netlify**, **Vercel**, or **GitHub Pages**.

**Netlify**
1. Push your code to GitHub
2. Import the repo in Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add the EmailJS environment variables in *Site settings → Environment variables*

> Since this app uses client-side routing, add a `public/_redirects` file with the following line so direct links to routes (like `/About`) don't show a 404:
>
> ```
> /*  /index.html  200
> ```

---

## 📬 Contact

**Muzzammil Ahmed**

- 📧 Email: [muzzammil.cse3@gmail.com](mailto:muzzammil.cse3@gmail.com)
- 💼 LinkedIn: [muzzammilahmed03](https://www.linkedin.com/in/muzzammilahmed03/)
- 🐙 GitHub: [muzzammil03](https://github.com/muzzammil03)
- 🎨 Behance: [muzzammilahmad](https://www.behance.net/muzzammilahmad)

---

## 📄 License

This project is for personal portfolio use. Feel free to take inspiration, but please don't copy my personal content (name, images, CV, projects) as your own.

---

⭐ If you like this project, consider giving it a star!

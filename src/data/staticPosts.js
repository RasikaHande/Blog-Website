const staticPosts = [
  {
    title: "Mastering JavaScript Arrays",
    author: "Rasika Hande",
    description:
      "Arrays are the backbone of data handling in JavaScript. Mastering them allows developers to store, manipulate, and iterate over data efficiently.\n\nThis post explores built-in array methods like map, filter, reduce, and how they help keep your code readable and functional.",
    hashtags: ["#JavaScript", "#Arrays", "#WebDevelopment"],
    tip: "Use array methods like map, filter, and reduce to write clean code."
  },
  {
    title: "Understanding Flexbox in CSS",
    author: "Aarav Mehta",
    description:
      "Flexbox is a powerful CSS layout module that allows responsive alignment and distribution of space among items in a container.\n\nIt simplifies designing complex layouts and makes it easier to align elements both vertically and horizontally.",
    hashtags: ["#CSS", "#Flexbox", "#ResponsiveDesign"],
    tip: "Use 'justify-content' and 'align-items' to align items in a flex container."
  },
  {
    title: "React Hooks – useEffect Deep Dive",
    author: "Neha Sharma",
    description:
      "The useEffect hook in React helps manage side effects like API calls, subscriptions, or manually changing the DOM.\n\nBy understanding its dependencies and cleanup mechanism, you can avoid unwanted re-renders and memory leaks.",
    hashtags: ["#React", "#useEffect", "#Hooks"],
    tip: "Always clean up side effects in useEffect using the return function."
  },
  {
    title: "How to Write Clean JavaScript Code",
    author: "Vikram Joshi",
    description:
      "Clean code is maintainable, scalable, and easier to debug. It includes proper naming, consistent formatting, and modular structure.\n\nUsing modern JavaScript practices like arrow functions and destructuring can significantly enhance code quality.",
    hashtags: ["#CleanCode", "#JavaScript", "#BestPractices"],
    tip: "Use meaningful variable names and avoid deeply nested code."
  },
  {
    title: "Responsive Navbar Using Flexbox",
    author: "Pooja Nair",
    description:
      "Creating a responsive navbar is a common UI task. Flexbox simplifies alignment and spacing across different devices.\n\nThis post walks through building a navbar using Flexbox properties like 'gap', 'align-items', and 'justify-content'.",
    hashtags: ["#CSS", "#Flexbox", "#Navbar"],
    tip: "Use 'gap' property for consistent spacing in Flexbox containers."
  },
  {
    title: "Getting Started with Vite + React",
    author: "Aditya Deshmukh",
    description:
      "Vite is a modern build tool that offers fast development and instant hot module replacement. It works seamlessly with React.\n\nThis post explains how to set up a React project using Vite and why it’s a better choice over CRA.",
    hashtags: ["#Vite", "#React", "#Frontend"],
    tip: "Use Vite for instant hot reloading and faster startup times."
  },
  {
    title: "JavaScript Promises Explained",
    author: "Sana Shaikh",
    description:
      "Promises help handle asynchronous operations in JavaScript and avoid callback hell.\n\nLearn how to use `.then()`, `.catch()`, and `.finally()` effectively, and how to chain multiple asynchronous tasks.",
    hashtags: ["#JavaScript", "#Promises", "#Async"],
    tip: "Use async/await for better readability over promise chaining."
  },
  {
    title: "Using Bootstrap Grid System",
    author: "Kunal Verma",
    description:
      "Bootstrap's 12-column grid system provides a responsive layout structure that adjusts based on device size.\n\nLearn how to combine rows and columns, and apply classes like `.col-md-6`, `.offset`, and more.",
    hashtags: ["#Bootstrap", "#CSSFramework", "#GridSystem"],
    tip: "Use breakpoints like col-sm, col-md, col-lg to build responsive layouts."
  },
  {
    title: "Tailwind CSS Utility First Approach",
    author: "Meera Patel",
    description:
      "Tailwind CSS enables rapid development by providing utility classes for styling directly in your markup.\n\nThis post explores how Tailwind helps maintain consistency and simplifies responsive design.",
    hashtags: ["#TailwindCSS", "#UtilityFirst", "#Styling"],
    tip: "Use Tailwind's mobile-first breakpoints like sm:, md:, lg: for responsiveness."
  },
  {
    title: "Understanding the Virtual DOM in React",
    author: "Siddharth Iyer",
    description:
      "React uses a virtual DOM to optimize rendering performance. It compares changes in the virtual DOM and updates only what's necessary in the real DOM.\n\nThis results in faster UI updates and a smoother user experience.",
    hashtags: ["#React", "#VirtualDOM", "#Performance"],
    tip: "Avoid direct DOM manipulation—let React handle rendering efficiently."
  },

  // 10 more...

  {
    title: "Getting Started with MongoDB",
    author: "Ishita Bansal",
    description:
      "MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.\n\nThis post introduces you to its schema-less design, collections, and how to perform basic CRUD operations.",
    hashtags: ["#MongoDB", "#Database", "#NoSQL"],
    tip: "Use indexes to speed up query performance."
  },
  {
    title: "Node.js Event Loop Demystified",
    author: "Arjun Kapoor",
    description:
      "The Node.js event loop handles asynchronous operations in a single-threaded environment.\n\nUnderstanding it helps write non-blocking, performant backend code.",
    hashtags: ["#NodeJS", "#EventLoop", "#Backend"],
    tip: "Avoid blocking code to maintain a responsive event loop."
  },
  {
    title: "What is Express Middleware?",
    author: "Kriti Jain",
    description:
      "Middleware functions in Express.js have access to request and response objects, and can modify or terminate the request-response cycle.\n\nThey help manage routes, authentication, logging, and error handling.",
    hashtags: ["#ExpressJS", "#Middleware", "#Backend"],
    tip: "Use multiple middleware functions to separate concerns."
  },
  {
    title: "HTML5 Semantic Tags Explained",
    author: "Raj Malhotra",
    description:
      "Semantic tags like `<article>`, `<section>`, `<aside>`, and `<main>` improve the structure and accessibility of web pages.\n\nThey help search engines and screen readers understand the content better.",
    hashtags: ["#HTML", "#SemanticTags", "#WebStructure"],
    tip: "Use semantic tags to improve SEO and code clarity."
  },
  {
    title: "DSA: Mastering Binary Search",
    author: "Shruti Aggarwal",
    description:
      "Binary Search is a divide-and-conquer algorithm used to find elements in a sorted array efficiently.\n\nWith O(log n) complexity, it’s one of the most important search techniques in programming.",
    hashtags: ["#DSA", "#BinarySearch", "#Algorithms"],
    tip: "Always ensure the array is sorted before applying binary search."
  },
  {
    title: "C Language: Pointers and Memory",
    author: "Nikhil Thakur",
    description:
      "Pointers are variables that store memory addresses. They are powerful tools in C for dynamic memory and data structures like linked lists.\n\nUnderstanding pointers is key to mastering low-level programming.",
    hashtags: ["#C", "#Pointers", "#MemoryManagement"],
    tip: "Use `*` to dereference and `&` to access an address."
  },
  {
    title: "Django Basics: Views and URLs",
    author: "Tanvi Rao",
    description:
      "Django is a high-level Python web framework that promotes rapid development. Views handle request logic, while URL patterns route incoming requests.\n\nThis post explains how to connect views with templates.",
    hashtags: ["#Django", "#Python", "#WebDevelopment"],
    tip: "Use class-based views for complex logic and better structure."
  },
  {
    title: "Solidity Smart Contracts 101",
    author: "Rohan Jadhav",
    description:
      "Solidity is the language for writing smart contracts on Ethereum. This post introduces contracts, functions, and how they interact with the blockchain.\n\nLearn how to write, compile, and deploy simple contracts.",
    hashtags: ["#Solidity", "#Blockchain", "#SmartContracts"],
    tip: "Use `require()` to validate input and enforce business rules."
  },
  {
    title: "Understanding Git and GitHub",
    author: "Divya Kulkarni",
    description:
      "Git is a version control system, while GitHub is a remote hosting service. Together, they help developers collaborate efficiently.\n\nThis guide covers commits, branches, merges, and pull requests.",
    hashtags: ["#Git", "#GitHub", "#VersionControl"],
    tip: "Always pull before you push to avoid merge conflicts."
  },
  {
    title: "C++ STL: Vectors and Iterators",
    author: "Harsh Vardhan",
    description:
      "The Standard Template Library in C++ provides powerful containers and algorithms. Vectors are dynamic arrays that can grow at runtime.\n\nIterators make traversing containers efficient and type-safe.",
    hashtags: ["#C++", "#STL", "#Vectors"],
    tip: "Use `auto` with iterators to avoid verbose declarations."
  }

 
];

export default staticPosts;

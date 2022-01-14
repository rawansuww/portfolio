/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Welcome!",
  title2: "Rawan",
  logo_name: "rawan.{portfolio}",
  nickname: "rawan / hs",
  full_name: "Rawan Hazim Suwwan",
  subTitle:
    "Software engineer, DL scientist, coding enthusiast.",
  resumeLink:
    "https://docs.google.com/document/d/1A_jWRG74Rst427tg1izLa6vRXclS9_9F856jWJPJlDY/edit?usp=sharing",
  mail: "mailto:g00075916@aus.edu",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/rawansuww",
  linkedin: "https://www.linkedin.com/in/rawan-hazim-798688197/",
  gmail: "g00075916@aus.edu",
  instagram: "https://www.instagram.com/rawansuww/",
};

const skills = {
  data: [
    {
      title: "Software Development",
      fileName: "FullStackImg",
      skills: [
        "⚫️   Languages:      HTML5, CSS3, JavaScript, Java, C++, Python, Dart ",
        "⚫️   Frameworks/Environments:     Express, React, Flutter, Node.js, Android, jQuery, Git",
        "⚫️   Databases:     MongoDB, MySQL, PostgreSQL, Firebase"
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        // {
        //   skillName: "GraphQL",
        //   fontAwesomeClassname: "simple-icons:graphql",
        //   style: {
        //     color: "#DE33A6",
        //   },
        // },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        
        // {
        //   skillName: "Visual Basic",
        //   fontAwesomeClassname: "simple-icons:dot-net",
        //   style: {
        //     color: "#029FCE",
        //   },
        // },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
       
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Cloud Computing and Deep Learning",
      fileName: "CloudInfraImg",
      skills: [
        "⚫️ Previous experience working with AWS Elastic Beanstalk, RDS, Load Balancers and more.",
         "⚫️ Working with TensorFlow on neural networks such as GRUs, LSTMs, DNNs, CNNs and data manipulation techniques like SMOTEing.  ",
         "⚫️ Previous experience with container technology and Docker."
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
          
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#1488C6",
          },
          
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#1488C6",
          },
          
        }
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "American University of Sharjah",
      subtitle: "BSc in Computer Engineering",
      logo_path: "https://upload.wikimedia.org/wikipedia/en/c/c8/American_University_of_Sharjah_%28emblem%29.png",
      alt_name: "AUS",
      duration: "2017 - 2021",
      descriptions: [
        "Data Structures, DBMS, Networking, Security, IoT, Android Mobile App Development.",
        // "⚡ I have also completed various online courses for Backend , Web , Mobile App Development, etc.",
        // "⚡ I have implemented several projects based on what I've leart under my Computer Engineering course. ",
      ],
      website_link: "http://www.aus.edu/",
    },
    {
      title: "International Academic School",
      subtitle: "High School Diploma",
      logo_path: "https://www.easyuae.com/media/i/71/a6/71a65982d4e9cbcee5a64b032a6976bb.png",
      alt_name: "SSGC",
      duration: "2001 - 2017",
      descriptions: [
        ""
      ],
      website_link: "http://www.ias.sch.ae/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "“A Mobile-Based Novice Agriculturalist Plant Care Support System: Classifying Plant Diseases using Deep Learning”",
      subtitle: "International Conference on Information and Communications Security 2021",
      logo_path: "https://1000logos.net/wp-content/uploads/2019/03/Logo-IEEE.jpg",
      authors: "Authors: Rawan Suwwan, Tamer Shanableh, M.Reda, S. Alkafri, Y. Rashed",
      publisher: "IEEE",
      certificate_link:
        "https://ieeexplore.ieee.org/document/9464561/",
      alt_name: "MongoDB University",
      // color_code: "#2AAFED",
      color_code: "#47A048",
    },
    {
      title: "“Intrusion Detection for CAN Using Deep Learning Techniques“",
      subtitle: "International Conference on Applied Cybersecurity 2021",
      logo_path: "https://www.photochemistry.eu/wp-content/uploads/2020/06/sn.png",
      publisher:"Springer Nature",
      authors: "Authors: Rawan Suwwan, Fadi Aloul, Imran Zualkernan, S. Alkafri, L. Alsadek, K. Afifi",
      certificate_link:
        "https://www.linkedin.com/posts/rawan-hazim-798688197_happy-to-have-presented-our-paper-intrusion-activity-6866332359139065856-AHhY",
      alt_name: "hackathon",
      color_code: "#E2405F",
    },
    {
      

      title: "Special Issue: “Applications of Machine Learning and Deep Learning in Agriculture”",
      subtitle: "Journal: Informatics (ISSN 2227-9709, CiteScore 3.9)",
      logo_path: "https://sisaljournal.files.wordpress.com/2019/10/scopus.png",
      authors: "IN PROGRESS",
      certificate_link:
        "",
      alt_name: "MongoDB University",
      // color_code: "#F6B808",
      color_code: "#457FA9",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    
  ],
};


const extracurriculars = {
  extracurriculars: [
    {
      title: "Yale Young Global Scholars 2016",
      subtitle: "Biological and Biomedical Program",
      logo_path: "https://www.logolynx.com/images/logolynx/67/6797ab4626185d552ba8f8e19c172542.jpeg",
      authors: "Received Arab Student Leadership Award",
      publisher: "",
      certificate_link:
        "",
      alt_name: "Yale University",
      // color_code: "#2AAFED",
      color_code: "#000000",
    },
    {
      title: "RH124 Certification Part I",
      subtitle: "Redhat Administration",
      logo_path: "http://ltcert.com/wp-content/uploads/2015/09/rh124-featured-image4.png",
      authors: "2018",
      publisher: "",
      certificate_link:
        "",
      alt_name: "",
      // color_code: "#2AAFED",
      color_code: "#000000",
    },
    {
      title: "President of AWE SWE Affiliate",
      subtitle: "American University of Shajah",
      logo_path: "https://logos-download.com/wp-content/uploads/2019/07/Society_of_Women_Engineers_Logo.png",
      authors: "2018",
      publisher: "",
      certificate_link:
        "",
      alt_name: "",
      // color_code: "#2AAFED",
      color_code: "#000000",
    }

  ]


  
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Professional Experience and Competitions",
  description:
    "I have a total of 8 months experience in professional internships. I am on the lookout for opportunities to use my skills.",
  header_image_path: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/60014/woman-working-on-laptop-clipart-xl.png",
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Research Internship",
          company: "The Assembly",
          company_url: "https://valora-infotech.business.site/",
          logo_path: "valora.jpg",
          duration: "(Nov. 2019 – Jan 2020)",
          location: "Dubai, UAE",
          description:
          `Researched on technologies and live workshops
          We primarily used PERN and MERN Stack. 80% of my work was doing backend development and the remaining 20% was DevOps-related tasks.
          `,
            // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
          
        },
        {

          title: "Web Development Internship (Remote)",
          company: "Petrus Communications",
          company_url: "http://nightowls.company/",
          logo_path: "nightowls.jpg",
          duration: "(Jul. 2020 – Sep. 2020)",
          location: "London, UK(Remote) ",
          description:
          `
          WordPress, PHP Laravel, MySQL for web platforms
      
          `,
            // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
          
        },

        {

        title: "Cybersecurity Internship (Remote)",
        company: "Dubai Electronic Security Center (Government)",
        company_url: "http://nightowls.company/",
        logo_path: "nightowls.jpg",
        duration: "(Jun. 2021 – Sep. 2021)",
        location: "Dubai, UAE (Remote) ",
        description:
        `
        Interned at Dubai Electronic Security Center (government) in
network attacks, MQTT and web development
        `,

        },

        {

          title: "Startup Founder",
          company: "DECARB (Sheraa Incubator)",
          company_url: "http://nightowls.company/",
          logo_path: "nightowls.jpg",
          duration: "(Nov. 2021 – present)",
          location: "Dubai, UAE ",
          description:
          `
         Started my own sustainability-driven startup aimed to decarbonise businesses in an incubator
          `,
  
          }
      ],
    },
    {
      title: "Competitions",
      experiences: [
        {
          title: "IEEE Student Day 2021 Winner",
          company: "IEEE",
          company_url: "https://crosswoc.ieeedtu.in/",
          logo_path: "cwoc.png",
          duration: "2nd Place",
          location: "Work From Home",
          description:
            "",
         
        },
        {
          title: "Startup Sheraa Competition 2021",
          company: "Sheraa",
          company_url: "https://skillenza.com/",
          logo_path: "skillenza.png",
          duration: "3rd place",
          location: "Work from Home",
          description: "",
         
        },
        
       
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools. My best experience is to create NodeJS Backend Projects, Python Scripts, and React Project. Below are some of my projects. Note that not all of the mentioned projects are on GitHub yet.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/7946/student-with-the-laptop-clipart-xl.png",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "",
    subtitle:
      "",
    link: "",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "pet-managament-web-app",
      url: "",
      description: "Pet sentiment analysis with node-red integration and MQTT for IoT communication with a camera, with Express, Node, HTML, CSS",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "HTML",
          iconifyClass: "vscode-icons:file-type-html",
        },
        
        {
          name: "CSS",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Express",
          iconifyClass: "logos-express",
        },
        {
          name: "Node",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
      ],
    },
    {
      id: "1",
      name: "family-gps-app",
      url: "",
      description:
        "An Android mobile app that detects and updates and shows the location of whoever else has downloaded it. This is meant ideally for a use case between family and friends.",
      languages: [
        {
          name: "Java",
          iconifyClass: "vscode-icons:file-type-java",
        },
        {
          name: "Android",
          iconifyClass: "logos-android",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "2",
      name: "carpooling-web-app",
      url: "",
      description:
        "An",
      languages: [
        {
          name: "NodeJS",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "MongoDB",
          iconifyClass: "logos-mongodb",
        },
        {
          name: "Express",
          iconifyClass: "logos-express",
        },
      ],
    },
    {
      id: "3",
      name: "medical-delivery-web-app",
      url: "",
      description:
        "Java, JAX-RS, Tomcat, MySQL on AWS (PaaS), REST API, microservices architecture, Elastic Beanstalk, RDS, Backup ",
      languages: [
        {
          name: "Java",
          iconifyClass: "vscode-icons:file-type-java",
        },
        {
          name: "AWS",
          iconifyClass: "logos-aws",
        },
        {
          name: "MySQL",
          iconifyClass: "logos-mysql",
        },
        {
          name: "TomCat",
          iconifyClass: "logos-tomcat",
        },
        {
          name: "Jersey",
          iconifyClass: "logos-jersey",
        },
      ],
    },
    {
      id: "4",
      name: "can-bus-ids",
      url: "",
      description:
        "AI-based Intrusion Detection System on CAN Packets –Detecting Car Hacking, Cybersecurity COE444.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Keras",
          iconifyClass: "logos-pytorch",
        },
      ],

    },
    {
      id: "3",
      name: "plant-disease-classification",
      url: "",
      description:
        "Achieved up to 99% accuracy with PlantVillage and transfer learning",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Jupyter",
          iconifyClass: "logos-jupyter",
        },
        {
          name: "Tensorflow",
          iconifyClass: "logos-tensorflow",
        },
        {
          name: "Keras",
          iconifyClass: "logos-pytorch",
        },
      ],
    },
   
     
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
  extracurriculars
};

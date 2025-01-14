export const projectsData = [
    {
        id: 1,
        name: 'Library Management System',
        duration: 'Jun 2022 - May 2023',
        description: "Simple Library Management System developed using Java and MySQL as the group project of Rapid Application Course module in the university. This application demonstrate minimal CRUD functionalities for each actor (librarian, member, admin) involved with the system. This project helped me to put my java knowledge into practical use and understand how to work with Github",
        tools: ['java', 'mysql'],
        roles: ['Backend Development'],
        code: 'https://github.com/DinithKumudika/Library-Management-System',
        demo: '',
        associatedWith: 'University of Colombo School of Computing',
        cover: '/image/library-cover.png'
    },
    {
        id: 2,
        name: 'Web Server in C',
        duration: 'Jun 2022 - May 2023',
        description: "A HTTP web server written entirely using C programming language from scratch, with multi-threading for 2nd year of my university Networking course module. This web server can only handle GET requests from the clients and only works with linux operating system. Developing this I was able to get a deep understanding of inner workings of a web server and that knowledge has been useful in the full stack development.)",
        tools: ['c'],
        roles: ['Backend Development'],
        code: 'https://github.com/DinithKumudika/web_server',
        demo: '',
        associatedWith: 'University of Colombo School of Computing',
        cover: '/image/webserver-cover.png'
    },
    {
        id: 3,
        name: 'Ayumed - Clinic Management System',
        duration: 'Jun 2022 - May 2023',
        description: "Ayumed is a Clinic Management System developed from scratch using HTML, CSS, vanilla JS for the Client side and vanilla PHP for the server side and MySQL as the database. This was the 2nd year Group project of my university. Since university didn't allow use of frameworks (React js, Laravel, Bootstrap etc) we had to build lot of things from ground up including the MVC framework itself the project is built on. Ayumed offered features such as Appointment Scheduling (with email and SMS notifications), Patient Management (including patient records), Doctor Management, Prescription Management, Pharmacy Inventory Management. This was a very simple web application but helped me to understand the basics of web development.",
        tools: ['Php', 'HTML', 'CSS', 'Vanilla JS', 'MySQL', 'Web SMS', 'Git', 'Chart js', 'FullCalendar'],
        roles: ['UI Design', 'Frontend Development', 'Backend Development'],
        code: 'https://github.com/DinithKumudika/Ayumed-Clinic-Management-System',
        demo: '',
        associatedWith: 'University of Colombo School of Computing',
        cover: '/image/ayumed-cover.png'
    },
    {
        id: 4,
        name: 'MarkAssist',
        duration: 'Feb 2023 - Oct 2023',
        description: 'MarkAssist is a web application that helps in evaluating exam papers using the power of currently available Large Language Models (LLM) and other NLP libraries. Through MarkAssist we are trying to assist the process of evaluation of short descriptive answer based questions and MCQ marking. As a POC we developed the system to suit for the scale of university exams. This application include features such as Evaluation of students answers by comparing the similarity with the given marking scheme using LLM, Flexibility to provide keywords that should be considered while allocating marks for answers, Flexibility to configure range of marks relevant to the accuracy provided by the system, Handwritten answer recognition using currently available OCR solutions and Student/Lecturer Management',
        tools: ['React JS', 'Tailwind CSS', 'Python', 'OpenCV', 'MongoDB', 'Docker', 'Azure Vision', 'OpenAI'],
        roles: ['Backend Development'],
        code: 'https://github.com/DinithKumudika/MarkAssist',
        demo: '',
        associatedWith: 'University of Colombo School of Computing',
        cover: '/image/markassist-cover.png'
    },
    {
        id: 5,
        name: 'RAG Based Chatbot for financial uses',
        duration: 'Jan 2024 - Present',
        description: 'A prototype RAG (Retrieval Augmented Generation) based chatbot solution developed for banking and financial use cases as part of my Internship. Developing the solution as an .NET web API and the solution uses Microsoft Semantic Kernel as the underlying orchestration platform for LLM.',
        tools: ['C#', '.NET 8', 'React JS', 'MongoDB', 'Semantic Kernel', 'Ollama', 'Google Gemini'],
        code: '',
        roles: ['Full Stack Developer'],
        demo: '',
        associatedWith: 'LinearSix Pvt Ltd',
        cover: '/image/chatbot-cover.png'
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },
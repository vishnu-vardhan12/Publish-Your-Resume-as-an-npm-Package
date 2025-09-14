#!/usr/bin/env node

const chalk = require('chalk');
const boxen = require('boxen');

const resume = {
    header: chalk.bold.blue('VISHNU VARDHAN R') + '\n' +
            chalk.white('Phone: 6363787609\n') +
            chalk.white('Email: vishnuvardhan281201@gmail.com\n') +
            chalk.white('LinkedIn: linkedin.com/in/vishnu-vardhan-351817224\n') +
            chalk.white('GitHub: github.com/vishnu-vardhan12\n'),

    education: chalk.bold.yellow('\nEDUCATION\n') +
            chalk.white('- Vellore Institute of Technology, Chennai (Sep/2020 – May/2025)\n') +
            chalk.white('  M.Tech Integrated - Software Engineering, 8.43/10\n') +
            chalk.white('- Narayana Junior College (April/2018 – March/2020)\n') +
            chalk.white('  Class XI-XII, Higher Secondary, 78/100\n') +
            chalk.white('- Sri Chaitanya Techno School (April/2017 – March/2018)\n') +
            chalk.white('  Class X, High School, 84/100\n'),

    skills: chalk.bold.yellow('\nSKILLS\n') +
            chalk.white('- Programming Languages: C, C-sharp, Java, Python\n') +
            chalk.white('- Scripting Languages: Dot Net, React, JavaScript, SQL\n') +
            chalk.white('- Developer Tools: GIT, PostMan, VS Code, Jenkins\n') +
            chalk.white('- Database and Cloud: MySQL\n') +
            chalk.white('- Languages: English, Telugu, Hindi, Kannada\n') +
            chalk.white('- Good at: Agile Methodology, Code Verification, Critical Thinking, Time management\n'),

    experience: chalk.bold.yellow('\nEXPERIENCE\n') +
            chalk.white('- Thomson Reuters (Feb/2025 - Aug/2025)\n') +
            chalk.white('  Graduate Engineer Trainee, Bangalore, India\n') +
            chalk.white('  • Developing backend using C-sharp and Dot Net framework\n') +
            chalk.white('  • Creating dynamic and responsive user interfaces with React.js\n') +
            chalk.white('  • Gained experience in analyzing application performance\n') +
            chalk.white('  Skills: C-sharp, Dot Net, React, Git\n\n') +
            chalk.white('- Thermofisher Scientific (May/2024 - Nov/2024)\n') +
            chalk.white('  Dev-Ops Engineer, Bangalore, India\n') +
            chalk.white('  • DevOps experience with Jenkins, JFrog, Git, AWS, Docker\n') +
            chalk.white('  Skills: Jenkins, Git, AWS, Docker, JFrog\n\n') +
            chalk.white('- Zilion (May/2023 - July/2023)\n') +
            chalk.white('  Backend Developer, Bangalore, India\n') +
            chalk.white('  • Spring Boot REST API development\n') +
            chalk.white('  Skills: Rest API, Java, Spring Boot, IntelliJ IDEA\n'),

    projects: chalk.bold.yellow('\nPROJECTS\n') +
            chalk.white('- Room Reserve\n') +
            chalk.white('  • MERN stack web application for room booking and management\n') +
            chalk.white('- Crowd Funding Campaign\n') +
            chalk.white('  • Equity-based crowdfunding platform with payment integration\n'),

    certifications: chalk.bold.yellow('\nCERTIFICATIONS AND PAPERS\n') +
            chalk.white('- Enhancing PDF Information Retrieval Through a Gemini Pro LLM-Powered Chatbot\n') +
            chalk.white('- Natural Language Processing with Classification and Vector Spaces\n') +
            chalk.white('- TOC - Agile Scrum in Practice\n') +
            chalk.white('- Introduction to Generative AI\n'),

    positions: chalk.bold.yellow('\nPOSITIONS AND ACHIEVEMENTS\n') +
            chalk.white('- Team Saksham International (May 2021 – June 2024) - Manager\n') +
            chalk.white('- Place Xp (June 2022 – July 2023) - HR Department\n') +
            chalk.white('- VIT Finance and Management (March 2022 – May 2023) - Management Department\n')
};

const resumeBox = boxen(
    Object.values(resume).join('\n'),
    {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'blue'
    }
);

console.log(resumeBox);

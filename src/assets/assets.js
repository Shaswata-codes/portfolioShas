import { FaDribbble, FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { FiCpu, FiLayers, FiMonitor, FiSettings, FiSmartphone } from 'react-icons/fi';

// Profile
import profileImg from '../assets/profile.jpeg';

// Project images (PNG only)
import project1Img from '../assets/project1.png';
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';
import project4Img from '../assets/project4.png';
import project5Img from '../assets/project5.png';
import project6Img from '../assets/project6.png';

// Assets
export const assets = {
    profileImg,
};

// Navigation
export const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
];

// Social links
export const socialPlatforms = [
    { icon: FaTwitter, href: '#' },
    { icon: FaGithub, href: '#' },
    { icon: FaLinkedinIn, href: '#' },
    { icon: FaDribbble, href: '#' },
];

// Projects
export const projects = [
  {
    id: 1,
    title: 'Real Time Chat App',
    image: project1Img,
    link: 'https://github.com/Shaswata-codes/Chat-App'
  },
  {
    id: 2,
    title: 'Edu Portal',
    image: project2Img,
    link: 'https://github.com/Shaswata-codes/EduPortal'
  },
  {
    id: 3,
    title: 'Blog App',
    image: project3Img,
    link: 'https://github.com/Shaswata-codes/Chat-App'
  },
  {
    id: 4,
    title: 'MERN AUTH',
    image: project4Img,
    link: 'https://github.com/Shaswata-codes/Authentication-using-MERN'
  },
  {
    id: 5,
    title: 'Youtube AdBlocker Extension',
    image: project5Img,
    link: 'https://github.com/Shaswata-codes/Youtube-Add-Blocker-Extension'
  },
  {
    id: 6,
    title: 'Tab Changer Extension',
    image: project6Img,
    link: 'https://github.com/Shaswata-codes/Tab-Media-Pauser-Extension'
  },
];


// Skills
export const skills = [
    { id: 1, title: 'UI/UX Design', icon: FiMonitor },
    { id: 2, title: 'Frontend Dev', icon: FiCpu },
    { id: 3, title: 'Backend Dev', icon: FiLayers },
    { id: 4, title: 'Mobile Dev', icon: FiSmartphone },
    { id: 5, title: 'DevOps', icon: FiSettings },
];

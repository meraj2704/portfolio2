const blog1 = '/assets/blog1.png'
const blog2 = '/assets/react.jpg'

export interface IBlog {
    id:number;
    title:string;
    content:string;
    topic:string;
    author:string;
    date:string;
    bannerImage:string;
    images:string[];
}
export const blogData = [
    {
        id:1,
        title:"What does it take to become a web developer?",
        content:"Web development, also known as website development, encompasses a variety of tasks and processes involved in creating websites for the internet…",
        topic:"Web Development",
        author:"Meraj Hossain",
        date:"2022-01-20",
        bannerImage:blog1,
        images:[]
    },
    {
        id:2,
        title: "What does it take to become a React developer?",
        content: "Becoming a React developer involves mastering JavaScript, understanding component-based architecture, and familiarizing yourself with tools like React Router, Redux, and more. This journey includes learning about hooks, state management, and building dynamic user interfaces that are efficient and reusable.",
        topic: "React Development",
        author: "Meraj Hossain",
        date: "2022-01-20",
        bannerImage: blog2,
        images:[]
    },
]
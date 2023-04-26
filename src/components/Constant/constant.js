// CarouselImage
import frontEnd from "../../assets/carouselServices/fontend.jpg";
import backEnd from "../../assets/carouselServices/backend.jpg";
import uiux from "../../assets/carouselServices/uiux.jpeg";

//slick logo image
import html from "../../assets/programming languages/images.png"
import css from"../../assets/programming languages/CSS3_logo_and_wordmark.svg.png"
import js from "../../assets/programming languages/Javascript_Logo.png";
import react from "../../assets/programming languages/React.png";
import tailwind from "../../assets/programming languages/tailwind.png";
import bst from "../../assets/programming languages/Bootstrap_logo.svg.png";
import java from "../../assets/programming languages/java.png";
import redux from "../../assets/programming languages/redux.png";
import vs from "../../assets/programming languages/vs.png";
import git from "../../assets/programming languages/git.png";

//language countup
import communication from '../../assets/skills-bar/communication.png'
import motivation from '../../assets/skills-bar/motivation.jpg'
import leadership from '../../assets/skills-bar/leadership.png'
import presentation from '../../assets/skills-bar/presentation.png'

//icons
import { MdLineStyle,MdOutlineSportsKabaddi,MdOutlineReduceCapacity } from "react-icons/md";



export const HeaderOption=[
    {
        id:"1", title:"Home", path:"/"
    },
    {
        id:"2", title:"Services", path:"/"
    },
    {
        id:"3", title:"Careers", path:"/"
    },
    {
        id:"4", title:"Contact Us", path:"/"
    },
];

export const Services = [
    {
      key: "1",
      path: "/",
      name: "Web App Development",
      icon: "🤖",
    },
    {
      key: "2",
      path: "/",
      name: "Mobile App Development",
      icon: "🤖",
    },
    {
      key: "3",
      path: "/",
      name: "UI/UX Design",
      icon: "🤖",
    },
    {
      key: "4",
      path: "/",
      name: "E-Commerce Development",
      icon: "🤖",
    },
  ];



 export const CarouselImage= [
  {
    id:"1", title:"Front-end Development", image:frontEnd ,
},
{
    id:"2", title:"Back-end Development", image:backEnd,
},
{
    id:"3", title:"UI / UX Design", image: uiux,
},

];

export const SlickLogoImage= [
  {
    id:"1", title:"HTML", image:html ,
},
{
    id:"2", title:"CSS", image:css,
},
{
    id:"3", title:"JAVASCRIPT", image: js,
},
{
  id:"4", title:"REACT", image:react ,
},
{
  id:"5", title:"BOOTSTRAP", image:bst,
},
{
  id:"6", title:"JAVA", image: java,
},
{
  id:"7", title:"REDUX", image:redux ,
},
{
  id:"8", title:"TAILWIND", image:tailwind,
},
{
  id:"9", title:"VISUAL STUDIO CODE", image: vs,
},
{
  id:"10", title:"GIT HUB", image:git ,
},


];

export const Countup= [
  {
    id:"1", title:"Presentation", image:presentation, percentage:"100%",
},
{
    id:"2", title:"Communication", image:communication,  percentage:"90%",
},
{
    id:"3", title:"Motivation", image: motivation, percentage:"100%",
},
{
  id:"4", title:"Leadership", image: leadership, percentage:"80%",
},

];

export const Info= [
  {
    id:"1", title:"Highly Skilled", icon:<MdLineStyle size={"60px"} />, des:"Dedicated team with sound knowledge.",
},
{
    id:"2", title:"Innovation", icon:<MdOutlineSportsKabaddi size={"60px"}/>,  des:"Innovative ideas to accelerate the growth.",
},
{
    id:"3", title:"Transparency", icon: <MdOutlineReduceCapacity  size={"60px"}/>, des:"Consistent, efficient and effective development.",
},


];


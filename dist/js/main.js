"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var _react=_interopRequireDefault(require("react")),_reactRouterDom=require("react-router-dom"),_HeaderComponent=_interopRequireDefault(require("./Components/HeaderComponents/HeaderComponent.js")),_HeroComponent=_interopRequireDefault(require("./Components/HeroComponents/HeroComponent.js")),_HomePage=_interopRequireDefault(require("./Pages/HomePage.js")),_AboutPage=_interopRequireDefault(require("./Pages/AboutPage.js")),_ProjectsPage=_interopRequireDefault(require("./Pages/ProjectsPage.js")),_ContactPage=_interopRequireDefault(require("./Pages/ContactPage.js")),_FooterComponent=_interopRequireDefault(require("./Components/FooterComponents/FooterComponent.js")),_NotFound=_interopRequireDefault(require("./Pages/NotFound.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const App=()=>{const e=(0,_reactRouterDom.useLocation)();return _react.default.createElement(_react.default.Fragment,null,_react.default.createElement(_HeaderComponent.default,null),"/"===e.pathname&&_react.default.createElement(_HeroComponent.default,null),_react.default.createElement(_reactRouterDom.Routes,null,_react.default.createElement(_reactRouterDom.Route,{path:"/",element:_react.default.createElement(_HomePage.default,null)}),_react.default.createElement(_reactRouterDom.Route,{path:"/about",element:_react.default.createElement(_AboutPage.default,null)}),_react.default.createElement(_reactRouterDom.Route,{path:"/contact",element:_react.default.createElement(_ContactPage.default,null)}),_react.default.createElement(_reactRouterDom.Route,{path:"/projects",element:_react.default.createElement(_ProjectsPage.default,null)}),_react.default.createElement(_reactRouterDom.Route,{path:"*",element:_react.default.createElement(_NotFound.default,null)})),_react.default.createElement(_FooterComponent.default,null))},AppWrapper=()=>_react.default.createElement(_reactRouterDom.BrowserRouter,{basename:process.env.PUBLIC_URL},_react.default.createElement(App,null));var _default=exports.default=AppWrapper,_client=(_react=_interopRequireDefault(require("react")),_interopRequireDefault(require("react-dom/client")));require("./styles/main.scss");var _App=_interopRequireDefault(require("./App.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const root=_client.default.createRoot(document.getElementById("root"));root.render(_react.default.createElement(_react.default.StrictMode,null,_react.default.createElement(_App.default,null))),Object.defineProperty(exports,"__esModule",{value:!0}),exports.getImageUrl=void 0;const getImageUrl=e=>new URL("/assets/".concat(e),import.meta.url).href;exports.getImageUrl=getImageUrl,Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));var _AboutMeSectionA=_interopRequireDefault(require("../Components/AboutComponents/AboutMeSectionA.js")),_TechnicalSkillsSectionB=_interopRequireDefault(require("../Components/AboutComponents/TechnicalSkillsSectionB.js")),_LogosSectionC=_interopRequireDefault(require("../Components/AboutComponents/LogosSectionC.js")),_TestimonialsSectionD=_interopRequireDefault(require("../Components/AboutComponents/TestimonialsSectionD.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const AboutPage=()=>_react.default.createElement("div",{className:"App"},_react.default.createElement(_AboutMeSectionA.default,null),_react.default.createElement(_TechnicalSkillsSectionB.default,null),_react.default.createElement(_LogosSectionC.default,null),_react.default.createElement(_TestimonialsSectionD.default,null));_default=exports.default=AboutPage;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));var _ContactFormSectionA=_interopRequireDefault(require("../Components/ContactComponents/ContactFormSectionA.js")),_ContactInfoSectionB=_interopRequireDefault(require("../Components/ContactComponents/ContactInfoSectionB.js")),_ContactSloganSectionC=_interopRequireDefault(require("../Components/ContactComponents/ContactSloganSectionC.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const ContactPage=()=>_react.default.createElement("div",{className:"App"},_react.default.createElement(_ContactFormSectionA.default,null),_react.default.createElement(_ContactInfoSectionB.default,null),_react.default.createElement(_ContactSloganSectionC.default,null));_default=exports.default=ContactPage;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));var _SpecializeSectionA=_interopRequireDefault(require("../Components/HomeComponents/SpecializeSectionA.js")),_StasSectionB=_interopRequireDefault(require("../Components/HomeComponents/StasSectionB.js")),_ProcessSectionC=_interopRequireDefault(require("../Components/HomeComponents/ProcessSectionC.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const HomePage=()=>_react.default.createElement("div",{className:"App"},_react.default.createElement(_SpecializeSectionA.default,null),_react.default.createElement(_StasSectionB.default,null),_react.default.createElement(_ProcessSectionC.default,null));_default=exports.default=HomePage;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const NotFound=()=>_react.default.createElement("div",null,_react.default.createElement("h1",null,"404 - Page Not Found"),_react.default.createElement("p",null,"The page you are looking for does not exist."));_default=exports.default=NotFound;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));var _GallerySection=_interopRequireDefault(require("../Components/ProjectsComponents/GallerySection.js"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const ProjectsPage=()=>_react.default.createElement("div",{className:"App"},_react.default.createElement(_GallerySection.default,null));_default=exports.default=ProjectsPage;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));var _webDevelopmentThumbnail=_interopRequireDefault(require("../../assets/images/thumbnail/web-development-thumbnail-4.jpg")),_webDevelopmentThumbnail2=_interopRequireDefault(require("../../assets/images/thumbnail/web-development-thumbnail-2.jpg")),_webDevelopmentThumbnail3=_interopRequireDefault(require("../../assets/images/thumbnail/web-development-thumbnail-3.jpg")),_AvatarMaker=_interopRequireDefault(require("../../assets/images/myself/AvatarMaker.png"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("./_AboutMeSectionA.scss");const AboutMeSectionA=()=>_react.default.createElement("section",{id:"about-a",className:"text-center py-3"},_react.default.createElement("div",{className:"container"},_react.default.createElement("h2",{className:"section-title",lang:"fr"},"About Me"),_react.default.createElement("p",{className:"lead",lang:"fr"},"VOTRE VISION, MON ENGAGEMENT..."),_react.default.createElement("div",{className:"bottom-line"}),_react.default.createElement("p",{className:"lead"},"Laissez-moi vous parler un peu de moi et de ce que je fais..."),_react.default.createElement("div",{className:"about-info"},_react.default.createElement("img",{src:_AvatarMaker.default,alt:"Manuel Francisco",className:"bio-image"}),_react.default.createElement("div",{className:"bio bg-light"},_react.default.createElement("h4",{lang:"fr"},"Votre projet est entre de bonnes mains"),_react.default.createElement("p",{lang:"fr"},"Bienvenue dans l'univers où la créativité rencontre la fonctionnalité, où vos idées prennent vie sur le web. En tant qu'intégrateur web passionné, je m'engage à donner vie à votre projet avec une expertise méticuleuse et une passion inébranlable."),_react.default.createElement("h4",{lang:"fr"},"TRANSFORMEZ VOS IDÉES EN RÉALITÉ"),_react.default.createElement("p",{lang:"fr"},"Laissez-moi transformer vos concepts en une présence web percutante. Chaque détail compte, et je m'assure que votre site internet non seulement répond à vos attentes, mais les dépasse.")),_react.default.createElement("div",{className:"award-1"},_react.default.createElement("img",{src:_webDevelopmentThumbnail.default,alt:"Person writing a brainstorm",className:"bio-image",title:"Maquettes détaillées"}),_react.default.createElement("h3",{lang:"fr"},"Maquettes détaillées"),_react.default.createElement("p",{lang:"fr"},"Le plan de conception d'applications innovantes et conviviales")),_react.default.createElement("div",{className:"award-2"},_react.default.createElement("img",{src:_webDevelopmentThumbnail2.default,alt:"Person drawing mobile sketches",className:"bio-image",title:"Vous pouvez suivre tout le processus"}),_react.default.createElement("h3",{lang:"fr"},"Vous pouvez suivre tout le processus"),_react.default.createElement("p",{lang:"fr"},"Exploration des esquisses UI/UX  la base d'interfaces utilisateur intuitives et engageantes")),_react.default.createElement("div",{className:"award-3"},_react.default.createElement("img",{src:_webDevelopmentThumbnail3.default,alt:"Phone on a table",className:"bio-image",title:"Utilisation des outils"}),_react.default.createElement("h3",{lang:"fr"},"Utilisation des outils"),_react.default.createElement("p",{lang:"fr"},"Utilisation d'outils comme Photoshop, Figma ou Marvel pour atteindre vos objectifs")))));_default=exports.default=AboutMeSectionA;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("./_LogosSectionC.scss");const Logos=()=>_react.default.createElement("section",{id:"about-c",className:"py-4 bg-light"},_react.default.createElement("div",{className:"container"},_react.default.createElement("div",{className:"about-logos"},_react.default.createElement("img",{src:"img/about-logos/logo-envato.png",alt:""}),_react.default.createElement("img",{src:"img/about-logos/logo-wordpress.png",alt:""}),_react.default.createElement("img",{src:"img/about-logos/logo-woocommerce.png",alt:""}),_react.default.createElement("img",{src:"img/about-logos/logo-magento.png",alt:""}))));_default=exports.default=Logos;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=exports.TechnicalSkills=void 0;_react=_interopRequireDefault(require("react"));require("./_TechnicalSkillsSectionB.scss");var _google=_interopRequireDefault(require("../../assets/images/history/google.png")),_microsoft=_interopRequireDefault(require("../../assets/images/history/microsoft.png")),_netflix=_interopRequireDefault(require("../../assets/images/history/netflix.png")),_html=_interopRequireDefault(require("../../assets/images/skills/html.png")),_css=_interopRequireDefault(require("../../assets/images/skills/css.png")),_react2=_interopRequireDefault(require("../../assets/images/skills/react.png")),_node=_interopRequireDefault(require("../../assets/images/skills/node.png")),_graphql=_interopRequireDefault(require("../../assets/images/skills/graphql.png")),_mongodb=_interopRequireDefault(require("../../assets/images/skills/mongodb.png")),_figma=_interopRequireDefault(require("../../assets/images/skills/figma.png"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}const TechnicalSkills=()=>{const e=[{role:"Software Engineer",organisation:"Google",startDate:"Sept, 2022",endDate:"Present",experiences:["Worked on Google Maps","Reduced load times by 50%"],imageSrc:_google.default},{role:"UI Designer",organisation:"Mirosoft",startDate:"Aug, 2021",endDate:"Aug, 2022",experiences:["Worked on Windows 11","Designed the control panel"],imageSrc:_microsoft.default},{role:"SWE Intern",organisation:"Netflix",startDate:"Apr, 2020",endDate:"Jun, 2020",experiences:["Worked on component library","Helped create UI components"],imageSrc:_netflix.default}],t=[{title:"HTML",imageSrc:_html.default},{title:"CSS",imageSrc:_css.default},{title:"React",imageSrc:_react2.default},{title:"Node",imageSrc:_node.default},{title:"GraphQL",imageSrc:_graphql.default},{title:"MongoDB",imageSrc:_mongodb.default},{title:"Figma",imageSrc:_figma.default}];return _react.default.createElement("section",{className:"home-c  py-2",id:"experience"},_react.default.createElement("div",{className:"container"},_react.default.createElement("h2",{className:"section-title",lang:"fr"},"Experience"),_react.default.createElement("div",{className:"content"},_react.default.createElement("div",{className:"skills"},t.map(((e,t)=>_react.default.createElement("div",{key:t,className:"skill"},_react.default.createElement("div",{className:"skillImageContainer"},_react.default.createElement("img",{src:e.imageSrc,alt:e.title})),_react.default.createElement("p",null,e.title))))),_react.default.createElement("ul",{className:"history"},e.map(((e,t)=>_react.default.createElement("li",{key:t,className:"historyItem"},_react.default.createElement("img",{src:e.imageSrc,alt:"".concat(e.organisation," Logo")}),_react.default.createElement("div",{className:"historyItemDetails"},_react.default.createElement("h3",null,"".concat(e.role,", ").concat(e.organisation)),_react.default.createElement("p",null,"".concat(e.startDate," - ").concat(e.endDate)),_react.default.createElement("ul",null,e.experiences.map(((e,t)=>_react.default.createElement("li",{key:t},e))))))))))))};exports.TechnicalSkills=TechnicalSkills;_default=exports.default=TechnicalSkills;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));var _=_interopRequireDefault(require("../../assets/images/about-logos/01.jpg")),_2=_interopRequireDefault(require("../../assets/images/about-logos/02.jpg")),_3=_interopRequireDefault(require("../../assets/images/about-logos/03.jpg")),_4=_interopRequireDefault(require("../../assets/images/about-logos/04.jpg"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("./_TestimonialsSectionD.scss");const Testimonials=()=>{const e=[{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum soluta ipsam eos, eius ad error voluptate sint? Non, fugit!",imgSrc:_.default,name:"Sam Smith, New York"},{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum soluta ipsam eos, eius ad error voluptate sint? Non, fugit!",imgSrc:_2.default,name:"Sara Williams, Michigan"},{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum soluta ipsam eos, eius ad error voluptate sint? Non, fugit!",imgSrc:_3.default,name:"Jill Johnson, London"},{text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates officiis quia nostrum nam ab vel laudantium, ea, corrupti culpa illum soluta ipsam eos, eius ad error voluptate sint? Non, fugit!",imgSrc:_4.default,name:"Steve Thompson, Boston"}];return _react.default.createElement("section",{id:"about-d",className:"py-4"},_react.default.createElement("div",{className:"container"},_react.default.createElement("h2",{className:"section-title"},"Testimonials"),_react.default.createElement("div",{className:"bottom-line"}),_react.default.createElement("p",{className:"lead text-center"},"Take a look at what my clients say..."),_react.default.createElement("div",{className:"testimonials"},e.map(((e,t)=>_react.default.createElement(Testimonial,{key:t,text:e.text,imgSrc:e.imgSrc,name:e.name}))))))},Testimonial=e=>{let{text:t,imgSrc:a,name:r}=e;return _react.default.createElement("div",null,_react.default.createElement("p",null,t),_react.default.createElement("ul",null,_react.default.createElement("li",null,_react.default.createElement("img",{src:a,alt:r})),_react.default.createElement("li",null,r)))};_default=exports.default=Testimonials;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("./_ContactFormSectionA.scss");const ContactForm=()=>_react.default.createElement("section",{id:"contact-a",className:"text-center py-3"},_react.default.createElement("div",{className:"container"},_react.default.createElement("h2",{className:"section-title"},"Contact Me"),_react.default.createElement("div",{className:"bottom-line"}),_react.default.createElement("p",{className:"lead",lang:"fr"},"Voici comment vous pouvez me contacter"),_react.default.createElement("form",{method:"POST","data-netlify":"true","data-netlify-recaptcha":"true"},_react.default.createElement("div",{className:"text-fields"},_react.default.createElement("input",{type:"text",className:"text-input name-input",placeholder:"Name",name:"name"}),_react.default.createElement("input",{type:"text",className:"text-input subject-input",placeholder:"Subject",name:"subject"}),_react.default.createElement("input",{type:"email",className:"text-input email-input",placeholder:"Email Address",name:"email"}),_react.default.createElement("input",{type:"text",className:"text-input phone-input",placeholder:"Phone Number",name:"phone"}),_react.default.createElement("textarea",{className:"text-input message-input",placeholder:"Enter Message",name:"message"}),_react.default.createElement("div",{className:"my-2"},_react.default.createElement("div",{"data-netlify-recaptcha":"true"}))),_react.default.createElement("button",{type:"submit",className:"btn-dark"},"Submit"))));_default=exports.default=ContactForm;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("./_ContactInfoSectionB.scss");const ContactInfo=()=>_react.default.createElement("section",{id:"contact-b",className:"py-3 bg-dark"},_react.default.createElement("div",{className:"container"},_react.default.createElement("div",{className:"contact-info"},_react.default.createElement("div",null,_react.default.createElement("i",{className:"fas fa-envelope fa-2x"}),_react.default.createElement("h3",null,"Email"),_react.default.createElement("p",null,"anitafrancisco00@gmail.com")),_react.default.createElement("div",null,_react.default.createElement("i",{className:"fas fa-phone fa-2x"}),_react.default.createElement("h3",null,"Phone"),_react.default.createElement("p",null,"(033) 0611878144")),_react.default.createElement("div",null,_react.default.createElement("i",{className:"fas fa-address-card fa-2x"}),_react.default.createElement("h3",null,"Address"),_react.default.createElement("p",null,"Saint Etienne, Loire, FRANCE")))));_default=exports.default=ContactInfo;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("./_ContactSloganSectionC.scss");const ContactSection=()=>_react.default.createElement("section",{id:"contact-c",className:"bg-main py-4"},_react.default.createElement("div",{className:"container"},_react.default.createElement("h1",null,"Let's Start Your Next Project")));_default=exports.default=ContactSection;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("./_FooterComponent.scss");const Footer=()=>_react.default.createElement("footer",{id:"main-footer"},_react.default.createElement("div",{className:"footer-content container"},_react.default.createElement("p",null,"Copyright © 2024. All Rights Reserved"),_react.default.createElement("div",{className:"social"},_react.default.createElement("a",{href:"https://x.com/mfranciscodev",target:"_blank",rel:"noopener noreferrer","aria-label":"Twitter"},_react.default.createElement("i",{className:"fab fa-twitter"})),_react.default.createElement("a",{href:"https://www.facebook.com/Mfranciscodev",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook"},_react.default.createElement("i",{className:"fab fa-facebook"})),_react.default.createElement("a",{href:"https://www.linkedin.com/in/mfranciscodev",target:"_blank",rel:"noopener noreferrer","aria-label":"LinkedIn"},_react.default.createElement("i",{className:"fab fa-linkedin"})),_react.default.createElement("a",{href:"https://www.youtube.com/channel/UCU4_7sT8UiQKdIyZFfah0lA",target:"_blank",rel:"noopener noreferrer","aria-label":"YouTube"},_react.default.createElement("i",{className:"fab fa-youtube"})))));_default=exports.default=Footer;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireWildcard(require("react")),_reactRouterDom=require("react-router-dom");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_getRequireWildcardCache=function(e){return e?a:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=_getRequireWildcardCache(t);if(a&&a.has(e))return a.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&{}.hasOwnProperty.call(e,n)){var o=l?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}return r.default=e,a&&a.set(e,r),r}require("./_HeaderComponent.scss");const Header=()=>{const[e,t]=(0,_react.useState)(!1),a=(0,_reactRouterDom.useLocation)();(0,_react.useEffect)((()=>{const e=()=>{const e=document.querySelector(".nav");window.scrollY>e.offsetHeight+150?t(!0):t(!1)};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]);const r=e=>a.pathname===e?"active-link":"";return _react.default.createElement("header",{id:"header-inner"},_react.default.createElement("div",{className:"container"},_react.default.createElement("nav",{className:"nav ".concat(e?"active":""),id:"main-nav"},_react.default.createElement("div",{id:"logo"},_react.default.createElement("h1",{className:"logo"},_react.default.createElement(_reactRouterDom.Link,{className:"log",to:"/"},"Portfolio")),_react.default.createElement("p",null,"Manuel Francisco")),_react.default.createElement("ul",null,_react.default.createElement("li",null,_react.default.createElement(_reactRouterDom.Link,{to:"/",className:r("/")},"Home")),_react.default.createElement("li",null,_react.default.createElement(_reactRouterDom.Link,{to:"/about",className:r("/about")},"About")),_react.default.createElement("li",null,_react.default.createElement(_reactRouterDom.Link,{to:"/projects",className:r("/projects")},"Projects")),_react.default.createElement("li",null,_react.default.createElement(_reactRouterDom.Link,{to:"/contact",className:r("/contact")},"Contact")),_react.default.createElement("li",null,_react.default.createElement("a",{href:"https://cvdesignr.com/p/6565b586a9221?hl=fr_FR",target:"_blank",rel:"noopener noreferrer",className:r("/cv")},"Cv"))))))};_default=exports.default=Header;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireWildcard(require("react")),_reactRouterDom=require("react-router-dom");function _getRequireWildcardCache(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,a=new WeakMap;return(_getRequireWildcardCache=function(e){return e?a:t})(e)}function _interopRequireWildcard(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var a=_getRequireWildcardCache(t);if(a&&a.has(e))return a.get(e);var r={__proto__:null},l=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if("default"!==n&&{}.hasOwnProperty.call(e,n)){var o=l?Object.getOwnPropertyDescriptor(e,n):null;o&&(o.get||o.set)?Object.defineProperty(r,n,o):r[n]=e[n]}return r.default=e,a&&a.set(e,r),r}require("./_HeroComponent.scss");const useTypewriter=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:3e3;const[a,r]=(0,_react.useState)(""),[l,n]=(0,_react.useState)(0),[o,i]=(0,_react.useState)(!1),[c,s]=(0,_react.useState)(150);return(0,_react.useEffect)((()=>{const u=setTimeout((()=>{const c=e[l];r(o?c.substring(0,a.length-1):c.substring(0,a.length+1)),o||a!==c?o&&""===a?(i(!1),n((t=>(t+1)%e.length)),s(500)):s(o?30:150):(setTimeout((()=>i(!0)),t),s(150))}),c);return()=>clearTimeout(u)}),[a,o,c,e,l,t]),a},HeroComponent=()=>{const e=useTypewriter([" Développeur Web"," Intégrateur Web"]);return _react.default.createElement("section",{className:"hero"},_react.default.createElement("div",{className:"container"},_react.default.createElement("div",{className:"hero-content"},_react.default.createElement("h1",null,"Je Suis",_react.default.createElement("span",{className:"txt-type","data-wait":"3000","data-words":'[" Développeur Web", " " "Intégrateur Web"]'},e)),_react.default.createElement("p",{className:"lead",lang:"fr"},"FORMÉ EN INTÉGRATION & DEVELOPMENT WEB"),_react.default.createElement(_reactRouterDom.Link,{to:"/projects",className:"btn-light",role:"button",rel:"noopener noreferrer"},"View My Work"))))};_default=exports.default=HeroComponent;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("./_ProcessSectionC.scss");const Process=()=>_react.default.createElement("section",{id:"home-c",className:"text-center py-2"},_react.default.createElement("div",{className:"container"},_react.default.createElement("h2",{className:"section-title",lang:"fr"},"Mon Processus Créatif"),_react.default.createElement("div",{className:"bottom-line"}),_react.default.createElement("p",{className:"lead",lang:"fr"},"Chaque projet et design dans mon univers créatif suit une formule éprouvée pour atteindre les résultats recherchés."),_react.default.createElement("div",{className:"process"},_react.default.createElement(ProcessStep,{iconClass:"fas fa-book fa-4x process-icon my-2",title:"Discussion du Projet",description:"Nous entamons chaque projet par une discussion approfondie, explorant ensemble les détails cruciaux pour une mise en œuvre réussie."}),_react.default.createElement(ProcessStep,{iconClass:"fas fa-desktop fa-4x process-icon my-2",title:"Brainstorming du Concept",description:"Le processus créatif prend vie lors d'une session de brainstorming dynamique, où chaque idée trouve sa place pour définir le concept unique de votre projet."}),_react.default.createElement(ProcessStep,{iconClass:"fas fa-calendar-alt fa-4x process-icon my-2",title:"Planning",description:"La planification méticuleuse assure une expérience utilisateur fluide sur votre site ou application."}),_react.default.createElement(ProcessStep,{iconClass:"fas fa-exchange-alt fa-4x process-icon my-2",title:"Interaction au CŒUR",description:"Chaque étape respire l'interaction. Des icônes de qualité transforment vos idées en une interface interactive, ajustée en collaboration étroite avec votre approbation."})))),ProcessStep=e=>{let{iconClass:t,title:a,description:r}=e;return _react.default.createElement("div",null,_react.default.createElement("i",{className:t,"aria-hidden":"true"}),_react.default.createElement("h3",null,a),_react.default.createElement("p",null,r))};_default=exports.default=Process;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));var _webDevelopmentShowcase=_interopRequireDefault(require("../../assets/images/showcase/web-development-showcase-2.jpg")),_webDevelopmentShowcase2=_interopRequireDefault(require("../../assets/images/showcase/web-development-showcase-3.jpg")),_webDevelopmentShowcase3=_interopRequireDefault(require("../../assets/images/showcase/web-development-showcase-5.jpg")),_webDevelopmentShowcase4=_interopRequireDefault(require("../../assets/images/showcase/web-development-showcase-1.jpg"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("./_SpecializeSectionA.scss");const Specialize=()=>_react.default.createElement("section",{id:"home-a",className:"text-center py-2"},_react.default.createElement("div",{className:"container"},_react.default.createElement("h2",{className:"section-title",lang:"fr"},"Je me consacre à la"),_react.default.createElement("div",{className:"bottom-line"}),_react.default.createElement("p",{className:"lead",lang:"fr"},"Création d'expériences numériques uniques pour sites web et applications."),_react.default.createElement("p",{className:"lead",lang:"fr"},"Services professionnels de développeur web et d'intégrateur web"),_react.default.createElement("div",{className:"specials"},_react.default.createElement(SpecializeItem,{imgSrc:_webDevelopmentShowcase.default,alt:"Web integration services",title:"Discutions Votre Website",description:"Donnons vie à votre projet avec dévouement et professionnalisme."}),_react.default.createElement(SpecializeItem,{imgSrc:_webDevelopmentShowcase2.default,alt:"Web developer working on code",title:"Brainstorming Site internet",description:"Définissons ensemble le concept unique de votre projet lors d'une session où chaque idée prend vie."}),_react.default.createElement(SpecializeItem,{imgSrc:_webDevelopmentShowcase3.default,alt:"Web integration services",title:"Planification et Discussion",description:"Discutons des détails et établissons des plans solides pour assurer le succès de votre website."}),_react.default.createElement(SpecializeItem,{imgSrc:_webDevelopmentShowcase4.default,alt:"Web integration services",title:"Interaction au CŒUR",description:"Collaborons étroitement à chaque étape pour un processus transparent et des résultats qui dépassent vos attentes."})))),SpecializeItem=e=>{let{imgSrc:t,alt:a,title:r,description:l}=e;return _react.default.createElement("div",null,_react.default.createElement("img",{src:t,alt:a}),_react.default.createElement("h3",null,r),_react.default.createElement("p",null,l))};_default=exports.default=Specialize;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));var _certificate=_interopRequireDefault(require("../../assets/images/stats/certificate.svg")),_access_time=_interopRequireDefault(require("../../assets/images/stats/access_time.svg")),_check_circle_outline=_interopRequireDefault(require("../../assets/images/stats/check_circle_outline.svg"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("./_StasSectionB.scss");const Stats=()=>_react.default.createElement("section",{id:"home-b",className:"text-center py-2"},_react.default.createElement("div",{className:"stats"},_react.default.createElement(StatItem,{svg:_certificate.default,title:"Certificat",number:"20",alt:"icon termines"}),_react.default.createElement(StatItem,{svg:_access_time.default,title:"Heures de Formation",number:"+ 1125",alt:"icon project"}),_react.default.createElement(StatItem,{svg:_check_circle_outline.default,title:"Projets Terminés",number:"+ 35",alt:"icon project termines"}))),StatItem=e=>{let{svg:t,title:a,number:r,alt:l}=e;return _react.default.createElement("div",null,_react.default.createElement("ul",null,_react.default.createElement("li",null,_react.default.createElement("img",{src:t,alt:l})),_react.default.createElement("li",{className:"stats-title"},a),_react.default.createElement("li",{className:"stats-number"},r)))};_default=exports.default=Stats;Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;_react=_interopRequireDefault(require("react"));var _webDevelopmentImage=_interopRequireDefault(require("../../assets/images/items/web-development-image-1.jpg")),_webDevelopmentImage2=_interopRequireDefault(require("../../assets/images/items/web-development-image-2.jpg")),_webDevelopmentImage3=_interopRequireDefault(require("../../assets/images/items/web-development-image-3.jpg")),_webDevelopmentImage4=_interopRequireDefault(require("../../assets/images/items/web-development-image-4.jpg")),_webDevelopmentImage5=_interopRequireDefault(require("../../assets/images/items/web-development-image-5.jpg")),_webDevelopmentImage6=_interopRequireDefault(require("../../assets/images/items/web-development-image-6.jpg")),_webDevelopmentImage7=_interopRequireDefault(require("../../assets/images/items/web-development-image-7.jpg")),_webDevelopmentImage8=_interopRequireDefault(require("../../assets/images/items/web-development-image-8.jpg")),_webDevelopmentImage9=_interopRequireDefault(require("../../assets/images/items/web-development-image-14.jpg")),_webDevelopmentImage10=_interopRequireDefault(require("../../assets/images/items/web-development-image-10.jpg")),_webDevelopmentImage11=_interopRequireDefault(require("../../assets/images/items/web-development-image-11.jpg")),_webDevelopmentImage12=_interopRequireDefault(require("../../assets/images/items/web-development-image-12.jpg"));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}require("./_GallerySection.scss");const Gallery=()=>{const e=[{link:"https://manuelfrancisco42.github.io/interactive-rating-component/",imgSrc:_webDevelopmentImage.default,alt:"Interactive Rating Component website",category:"Interactive Rating",title:"Frontend Mentor"},{link:"https://manuelfrancisco42.github.io/frontend-four-card-feature-section/",imgSrc:_webDevelopmentImage2.default,alt:"Four card feature website",category:"Four Card Feature",title:"Frontend Mentor"},{link:"https://manuelfrancisco42.github.io/newsletter-sign-up-with-success/",imgSrc:_webDevelopmentImage3.default,alt:"Newsletter sign up website",category:"Newsletter Sign-up",title:"Frontend Mentor"},{link:"https://manuelfrancisco42.github.io/fem-recipe-page-/",imgSrc:_webDevelopmentImage4.default,alt:"Recipe page website",category:"Recipe Page",title:"Frontend Mentor"},{link:"https://manuelfrancisco42.github.io/frontend-product-preview-card/",imgSrc:_webDevelopmentImage5.default,alt:"Product Preview card website",category:"Product Preview",title:"Frontend Mentor"},{link:"https://manuelfrancisco42.github.io/ohmyfood_final/",imgSrc:_webDevelopmentImage6.default,alt:"Ohmyfood website",category:"Ohmyfood",title:"OpenClassRoom"},{link:"https://manuelfrancisco42.github.io/Booki/",imgSrc:_webDevelopmentImage7.default,alt:"iBook website",category:"iBook",title:"OpenClassRoom"},{link:"https://manuelfrancisco42.github.io/single-price-grid-component/",imgSrc:_webDevelopmentImage8.default,alt:"Single price component website",category:"Single Price",title:"Frontend Mentor"},{link:"https://manuelfrancisco42.github.io/Stats-Preview-Component/",imgSrc:_webDevelopmentImage9.default,alt:"Stats Preview website",category:"Stats Preview",title:"Frontend Mentor"},{link:"https://manuelfrancisco42.github.io/frontendMentorTipCalculatorApp/",imgSrc:_webDevelopmentImage10.default,alt:"Tip Calculator website",category:"Tip Calculator",title:"Frontend Mentor"},{link:"https://manuelfrancisco42.github.io/Print-it-JS-main/",imgSrc:_webDevelopmentImage11.default,alt:"Print-i-Js website",category:"Print-i-Js",title:"OpenClassRoom"},{link:"https://manuelfrancisco42.github.io/news-homepage/",imgSrc:_webDevelopmentImage12.default,alt:"News Homepage website",category:"News Homepage",title:"Frontend Mentor"}];return _react.default.createElement("section",{id:"work-a",className:"text-center py-3"},_react.default.createElement("div",{className:"container"},_react.default.createElement("h2",{className:"section-title"},"My Work"),_react.default.createElement("p",{className:"lead",lang:"fr"},"Découvrez quelques-uns de mes projets: ",_react.default.createElement("small",{className:"my-3"},"click to See")),_react.default.createElement("div",{className:"items"},e.map(((e,t)=>_react.default.createElement("a",{key:t,href:e.link,target:"_blank",rel:"noopener noreferrer","aria-label":"Link to ".concat(e.category||"project",": ").concat(e.title)},_react.default.createElement("div",{key:t,className:"item"},_react.default.createElement("div",{className:"item-image"},_react.default.createElement("img",{src:e.imgSrc,alt:e.title})),_react.default.createElement("div",{className:"item-text"},_react.default.createElement("div",{className:"item-text-wrap"},_react.default.createElement("p",{className:"item-text-category"},e.category),_react.default.createElement("h2",{className:"item-text-title"},e.title))))))))))};_default=exports.default=Gallery;
//# sourceMappingURL=main.js.map

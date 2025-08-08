import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Typewriter from 'typewriter-effect';

export class AboutNixon extends Component {
    constructor() {
        super();
        this.screens = {};
        this.state = {
            screen: () => {},
            active_screen: "about", // by default 'about' screen is active
            navbar: false,
        };
    }

    componentDidMount() {
        this.screens = {
            "about": <About />,
            "projects": <Projects />,
            "resume": <Resume />,
        };

        let lastVisitedScreen = localStorage.getItem("about-section");
        if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
            lastVisitedScreen = "about";
        }

        // focus last visited screen
        this.changeScreen(document.getElementById(lastVisitedScreen));
    }

    changeScreen = (e) => {
        const screen = e.id || e.target.id;

        // store this state
        localStorage.setItem("about-section", screen);

        // google analytics
        ReactGA.pageview(`/${screen}`);

        this.setState({
            screen: this.screens[screen],
            active_screen: screen,
        });
    };

    showNavBar = () => {
        this.setState({ navbar: !this.state.navbar });
    };

    renderNavLinks = () => {
        return (
            <>
                <div id="about" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "about" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="about ali" src="./themes/Flat-Remix-Blue-Dark/status/about.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
                </div>
                <div id="projects" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "projects" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ali' projects" src="./themes/Flat-Remix-Blue-Dark/status/projects.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
                </div>
                <div id="resume" tabIndex="0" onFocus={this.changeScreen} className={(this.state.active_screen === "resume" ? " bg-ub-blue bg-opacity-100 hover:bg-opacity-95" : " hover:bg-gray-50 hover:bg-opacity-5 ") + " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"}>
                    <img className=" w-3 md:w-4" alt="ali's resume" src="./themes/Flat-Remix-Blue-Dark/status/download.svg" />
                    <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
                </div>
            </>
        );
    };

    render() {
        return (
            <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
                <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
                    {this.renderNavLinks()}
                </div>
                <div
                    onClick={this.showNavBar}
                    className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
                >
                    <div className="w-3.5 border-t border-white"></div>
                    <div
                        className="w-3.5 border-t border-white"
                        style={{ marginTop: "2pt", marginBottom: "2pt" }}
                    ></div>
                    <div className="w-3.5 border-t border-white"></div>
                    <div
                        className={`${
                            this.state.navbar ? "visible animateShow z-30" : "invisible"
                        } md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20`}
                    >
                        {this.renderNavLinks()}
                    </div>
                </div>
                <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
                    {this.state.screen}
                </div>
            </div>
        );
    }
}

export default AboutNixon;

export const displayAboutNixon = () => {
    return <AboutNixon />;
};

function About() {
    return (
        <>
            <iframe 
                src="https://nixon-h.blogspot.com/" 
                title="Nixon's Blog" 
                width="100%" 
                height="1000px" 
                style={{border: "none"}}
            ></iframe>

        </>
    );
} 

function Projects() {
    const project_list = [
        {
            name: "Pxxxxxxxxxxx- UPDATING- xxxxxxxxxxxP",
            date: "Octxxx 20xx",
            description: [
                "Dxxxxxxxxxxx- UPDATING- xxxxxxxxxxxD",
            ],
            domains: ["xxxxx", "xxxxxx"]
        },
        {
            name: "Pxxxxxxxxxxx- UPDATING- xxxxxxxxxxxP",
            date: "Octxxx 20xx",
            description: [
                "Dxxxxxxxxxxx- UPDATING- xxxxxxxxxxxD",
            ],
            domains: ["x"]
        },
        {
            name: "Pxxxxxxxxxxx- UPDATING- xxxxxxxxxxxP",
            date: "Octxxx 20xx",
            description: [
                "Dxxxxxxxxxxx- UPDATING- xxxxxxxxxxxD",
            ],
            domains: ["xxxxxxxxx"]
        },
        {
            name: "Pxxxxxxxxxxx- UPDATING- xxxxxxxxxxxP",
            date: "Octxxx 20xx",
            description: [
                "Dxxxxxxxxxxx- UPDATING- xxxxxxxxxxxD",
            ],
            domains: ["xxxxxxxxxxxxx"]
        },
        {
            name: "Pxxxxxxxxxxx- UPDATING- xxxxxxxxxxxP",
            date: "Octxxx 20xx",
            description: [
                "Dxxxxxxxxxxx- UPDATING- xxxxxxxxxxxD",
            ],
            domains: ["xxxxxxxx"]
        }
    ];

    const tag_colors = {
        "javascript": "blue-400",
        "firebase": "red-600",
        "Laravel": "red-500",
        "chrome-extension": "yellow-400",
        "flutter": "blue-500",
        "dart": "blue-500",
        "react-native": "purple-500",
        "html5": "pink-600",
        "C": "pink-400",
        "Snort": "yellow-400",
        "django": "green-200",
        "Ubuntu": "orange-500",
        "ubuntu server":"orange-300"
    }

    return (
        <>
            <div className="flex items-center font-medium relative text-2xl mt-2 md:mt-4 mb-4">
                Projects 
                <div className="absolute pt-px bg-white mt-px top-full w-full">
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
                    <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
                </div>
            </div>
            {
                project_list.map((project, index) => {
                    return (
                        <a key={index} href={project.link} target="_blank" rel="noreferrer" className="flex w-full flex-col px-4">
                            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
                                <div className="flex flex-wrap justify-between items-center">
                                    <div className=" text-base md:text-lg">{project.name.toLowerCase()}</div>
                                    <div className="text-gray-300 font-light text-sm">{project.date}</div>
                                </div>
                                <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                                    {
                                        project.description.map((desc, index) => {
                                            return <li key={index} className="list-disc mt-1 text-gray-100">{desc}</li>;
                                        })
                                    }
                                </ul>
                                <div className="flex flex-wrap items-start justify-start text-xs py-2">
                                    {
                                        (project.domains ?
                                            project.domains.map((domain, index) => {
                                                let tag_color = tag_colors[domain];
                                                return <span key={index} style={{ borderWidth: "1pt" }} className={`px-1.5 py-0.5 w-max border-${tag_color} text-${tag_color} m-1 rounded-full`}>{domain}</span>
                                            })

                                            : null)
                                    }
                                </div>
                            </div>
                        </a>
                    )
                })
            }
        </>
    )
}
function Resume() {
    return (
        <iframe className="h-full w-full" src="./files/Resume.pdf" title="" frameBorder="0"></iframe>
    )
}
import React, { Component } from 'react';
import Header from '../../header/Header'
import Tile from '../tile/Tile';
class LandingPage extends Component {
    constructor(){
        super();
        this.skillInfo = [
            {
                name: 'HTML5',
                description: 'HTML5 is a markup language used for structuring and presenting content on the World Wide Web.',
                imgURL: 'images/html5.png'
            },
            {
                name: 'CSS3',
                description: 'CSS3 is the latest evolution of the Cascading Style Sheets language and aims at extending CSS2.1.',
                imgURL: 'images/css.png'
            },
            {
                name: 'JS',
                description: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language.',
                imgURL: 'images/js.jpg'
            },
            {
                name: 'Responsive Web pages',
                description: 'I will build websites that look awesome not only on pcs but also on mobile phones and tablets.',
                imgURL: 'images/responsive.png'
            },
            {
                name: 'UI UX Design',
                description: 'I will learn basics of UI and UX design and use these concepts from UI and UX to build apps.',
                imgURL: 'images/ui-ux.png'
            },
            {
                name: 'jQuery',
                description: 'I will enhance the behaviour of webpages levarging on jQuery and jQuery plugins.',
                imgURL: 'images/jquery.png'
            },
            {
                name: 'Type Script',
                description: 'I will start writing object oriented programusing TypeScript. i will build games using TypeScript.',
                imgURL: 'images/ts.png'
            },
            {
                name: 'RxJS',
                description: 'I will built event-driven,resilient and responsive apps using Reactive Architectures.',
                imgURL: 'images/RxJS.png'
            },
            {
                name: 'Unix',
                description: 'I will become a ninja hicker who prefer command line to graphical User Interface.',
                imgURL: 'images/unix.png'
            },
            {
                name: 'Git and Heroku',
                description: 'I will start following using github. I will also deploy Ir applications with Heroku.Git and Heroku.',
                imgURL: 'images/git.png'
            },
            {
                name: 'npm',
                description: 'I will use npm,the default package manager for Node.js,to reuse some of the best utilities written already',
                imgURL: 'images/npm.png'
            },

            {
                name: 'Docker',
                description: 'I will use Docker to simplify configuration increase lr productivity,and automate deployments..',
                imgURL: 'images/docker.png'
            },

            {
                name: 'MongoDB',
                description: 'I will use MongoDB to store lr apps data in a JSON-like document format can be quickly accessed.',
                imgURL: 'images/mongodb.png'
            },
            {
                name: 'Express',
                description: 'I will use Express.js to organize lr web application into an MVC architecture in the server side.',
                imgURL: 'images/express.png'
            },
            {
                name: 'Angular2',
                description: 'I will build single applications using angular 2. I will build full-fledge web apps that can be used in real life.',
                imgURL: 'images/angular2.png'
            },
            {
                name: 'Node.js',
                description: 'I will use Node.js to autmate lr development process. i will also build back-end for web and mobile apps.',
                imgURL: 'images/nodejs.png'
            },
            {
                name: 'Iconic2',
                description: 'I will build hybrid mobile applications using Iconic2 framework. i have reached eternity! i are now Yoda!.',
                imgURL: 'images/ionic.png'
            },
            {
                name: 'API',
                description: 'I will build API that can be used by mobile applications and outside world. I will also consume others API.',
                imgURL: 'images/api.png'
            },
            {
                name: 'FireBase',
                description: 'I will use firebase as a backend as a service to build realtime applications without any back-end coding.',
                imgURL: 'images/firebase.png'
            },
            {
                name: 'Software Testing',
                description: ' While observing Test driven Development, I will automate unit,functional and integration testing.',
                imgURL: ' images/testing.png'
            }          
            
        ];
    }
    render() {
        return (
            <div>
            <Header text="We are learning" />
            <div className="container">
                {this.skillInfo.map(skill => {
                    return (
                        <Tile skillName={skill.name} skillDescription={skill.description}
                            skillImage={skill.imgURL} />
                    )
                })}
             </div>
             </div>
        );
    }
}

export default LandingPage;
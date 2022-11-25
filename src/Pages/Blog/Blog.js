import React from 'react';

const Blog = () => {
    return (
        <div className='py-10 mb-10'> 

            <div>
                <h2 className='text-2xl py-6 text-center font-bold'>Some Frequently Asked Questions and Answers</h2>
            </div>
            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    1. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content">
                    <p> There are four main types of state to properly manage React apps: <br />
                        -Local state <br />
                        -Global state <br />
                        -Server state <b />
                        -URL state. <br />

                        <strong>Local (UI) state</strong>  Local state is data we manage in one or another component.
                        Local state is most often managed in React using the useState hook.<br />
                        <strong>Global (UI) state</strong>  Global state is data we manage across multiple components.Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least.<br />
                        <strong>Server state</strong>  Data that comes from an external server that must be integrated with our UI state.Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state.<br />

                        <strong>URL state </strong> Data that exists on our URLs, including the pathname and query parameters.URL state is often missing as a category of state, but it is an important one.
                        In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL!
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    2. How does prototypal inheritance work?
                </div>
                <div className="collapse-content">
                    <p> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.Classical inheritance is limited to classes inheriting from other classes. However prototypal inheritance includes not only prototypes inheriting from other prototypes but also objects inheriting from prototypes.One of the most important advantages of prototypal inheritance is that you can add new properties to prototypes after they are created. This allows you to add new methods to a prototype which will be automatically made available to all the objects which delegate to that prototype.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content">
                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. The next step is for the test cases and scripts to be made, then the code is tested.<br />

                        For Test-Driven Development (TDD), to write unit tests before writing any implementation. This makes the implementation details in the code shorter and easier to understand. In this instance, the best time to write unit tests is immediately. For others, most developers write unit tests after the code's been written.Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object.

                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    4.  React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content">
                    <p> This is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.<br/>
                    <strong>Angular</strong> developed by Google, was first released in 2010, making it the oldest of the lot. It is a TypeScript-based JavaScript framework. A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name  AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.<br/>
                    
                    <strong>Vue</strong> also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014. Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn't have the backing of a large company. The most current version is always announced on the official Vue website on their releases page.<br/>
                    <strong>React</strong> developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers also announce their newest version on the blog section of the React website.
                    
                    <br/><br/>
                    As “angular” and “react” are common words, it is difficult to grasp their popularity from Google Trends. Though, a good proxy for their popularity is the number of stars that their GitHub repositories get. A sudden shift in the number of stars of Vue occurred in mid-2016 and, recently, Vue has been up there with React among the most popular frameworks.
                    If you are looking strictly from the point of view of the current job market, your best bet is to learn Angular or React. However, given that Vue has gained popularity over the last three years, it may take some time for projects to use Vue, or new projects that adopt Vue to reach a maturity level that commands a higher number of developers.The sizes of the libraries won't be as big of a factor since caching and minification are pretty standard nowadays. Although there can be a significant difference between the sizes of the frameworks (e.g. Angular is the largest), they are still small compared to the average webpage size (about 2MB according to the most recent data). Additionally, if you use a popular CDN to load these libraries, it is highly probable that a user has the library already loaded in their local system.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
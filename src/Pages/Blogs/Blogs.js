import React from 'react';
import hasan from '../../assets/hasan.jpg';

const Blogs = () => {
    return (
        <div className='mx-16 md:mx-48'>
            <div className="shadow-lg ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={hasan} alt='' />
                    <div >
                        <h1 >Author</h1>
                        <h1 >Posted On 2022</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style text-red-700 text-center text-2xl px-5"> How will you improve the performance of a React Application?</h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl">
                        There are several ways to make efficient to improve performance of React application. Like, when we declare state components make it local components. Avoiding inline function definition in the render function. An arrow function will create a new instance of the function on each render if ites used in a JSX property. Its always advisable to use unique key property as key, otherwise when remvoe an index or push new data React assumes its the key which we have provided identify data key. Avoiding initializing state with props which can be change later, rather using props directly in the props. Spreading properties into a DOM element as it adds unknown HTML attribute, which is unnecessary and not good practice.
                    </p>



                </div>

            </div>

            <div className="shadow-lg ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={hasan} alt='' />
                    <div >
                        <h1 >Author</h1>
                        <h1 >Posted On 2022</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style  text-center text-2xl text-red-700">What are the different ways to manage a state in a React application?
                    </h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl">
                        Some major types of state need to properly manage in React apps: Like - (a)Local State, (b)Global State, (c) Server State (d)URL State. In local state using useState hook, track values within the component. In Global state used multiple components,  when data has to be accessed and updated across many parts of our program, we need to use global state. When need to integrate data from outside or external server use Server state. Using server state should use loading or error state. React Query helps us to manage server state smoothly.Additionally, for both local and global states, useReducer is an option that may be implemented in any way. Under the hood, it is quite similar to useState, except that it takes a reducer instead of a starting state.
                    </p>

                </div>

            </div>
            <div className="shadow-lg ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={hasan} alt='' />
                    <div >
                        <h1 >Author</h1>
                        <h1 >Posted On 2022</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style  text-center text-xl md:2xl text-red-700 px-5">How does prototypical inheritance work?</h1>

                    <p className="sp-style p-3 md:p-10 text-md md:text-xl">
                        All objects in JavaScript are instances of Object. When we read a property from object, and it is missing, JavaScript automatically takes it from the prototype. In programming, this is called “prototypal inheritance”. Prototypal inheritance is a feture in JavaScript used to add methods and properties in objects. If we want to read a property of obj or call a method, and it does not exist, then JavaScript tries to find it in the prototype.  Inheritance is a process through which an object may take on the traits and behaviors of another object. If we call obj.method(), and the method is taken from the prototype, this still references obj. So methods always work with the current object even if they are inherited.
                    </p>


                </div>

            </div>
            <div className="shadow-lg ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={hasan} alt='' />
                    <div >
                        <h1 >Author</h1>
                        <h1 >Posted On 2022</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style  text-center text-2xl text-red-700 px-5">Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl">
                        Using setState allows to move a state from one component to another without having to change the original. Before set products in setProducts rendering will be difficult if we destructuring products, so we should set products in setProducts then call products.  SetState is required for integrating an item into the current state(). Components that are stateful or stateless cannot be known by their parents and children, and they should not be concerned about whether or not they are defined as functions or classes. Any React component may have a state attached to it. A user action or a system event may cause the state of a component to change. If the component's state changes, React re-renders it. Before changing the state's value, it is important to create an initial state setup. To make changes to the object's current state, we use the setState() method. The component's current state has been maintained by requesting a re-render. If a synchronous call is performed to change an object's state, it may not be updated on the console at the right time.
                    </p>

                </div>

            </div>
            <div className="shadow-lg ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={hasan} alt='' />
                    <div >
                        <h1 >Author</h1>
                        <h1 >Posted On 2022</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style  text-center text-xl md:2xl text-red-700 px-5">You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h1>
                    <p className="sp-style p-3 md:p-10 text-md md:text-xl">
                        There are different methods in JavaScript that you can use to search for an item in an array. To discover a product by its name from an array, can be use array.find(). To get a truthy value, the callbackFn function is called once for each index in the array. If so, find returns the element's value instantly. Unless this is the case, find returns an error. We use the Array.find() method to find the first element that meets a certain condition. Just like the filter method, it takes a callback as an argument and returns the first element that meets the callback condition. For every index in the array. If we use the callbackFn function offered by find, you may change the array that it is called on.
                    </p>

                </div>

            </div>
            <div className="shadow-lg ">

                <div className="flex items-center mt-10 p-5">
                    <img className='w-10 h-10 rounded-full mr-3' src={hasan} alt='' />
                    <div >
                        <h1 >Author</h1>
                        <h1 >Posted On 2022</h1>
                    </div>

                </div>
                <div>
                    <h1 className="sp-style  text-center text-2xl text-red-700">What is a unit test? Why should write unit tests??</h1>
                    <p className="sp-style p-5 md:p-10 text-md md:text-xl">
                        Unit testing involves testing individual components of the software program or application. The main purpose behind this is to check that all the individual parts are working as intended. A unit is known as the smallest possible component of software that can be tested. Generally, it has a few inputs and a single output.
                        Cause of writing unit test:
                        To isolate a section of code.
                        To verify the correctness of code.
                        To test every function and procedure.
                        To fix bug early in development cycle and to save costs.
                        To help the developers to understand the code base and enable them to make changes quickly.
                        To help for code reuse.
                    </p>

                </div>

            </div>
        </div>
    );
};

export default Blogs;
import React from 'react';
import './Blogs.css'

import Pdf from "react-to-pdf";

const ref = React.createRef();

const Blogs = () => {
    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
           <div ref={ref}>
           <article className="all-browsers">
                <h1>Blogs for Learning</h1>
                <article className="browser">
                    <h2 className='fw-bolder'>What is cors?</h2>
                    <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API. <br /> In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.CORS comes into play to disable this mechanism and allow access to these resources. CORS will add a response header access-control-allow-origins and specify which origins are permitted. CORS ensures that we are sending the right headers.</p>
                </article>
                <article className="browser">
                    <h2 className='fw-bolder'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>Google Firebase is an application development platform that allows developers to create iOS, Android, and Web apps. Here's why you should use it! Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.
                        Indeed, Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps.

                        I might also want to consider leveraging this tool if I eventually wish to host and manage our app in the cloud. Being serverless, Firebase removes the need to worry about the technicalities of cloud server configuration.
                        With Firebase, it's pretty simple to connect and use built-in third-party authentication providers, including Google, Facebook, Twitter, among others.
                    </p>
                    <p><small className='fw-bold'>Auth0, MongoDB, Passport, Okta</small> are the most popular alternatives and competitors to Firebase Authentication.</p>
                </article>
                <article className="browser">
                    <h2 className='fw-bolder'>How does the private route work?</h2>
                    <p>Private Route component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page. Additionally, we can define the logic of isLogin utility function separately in utils folder.</p>
                </article>
                <article className="browser">
                    <h2 className='fw-bolder'>What is Node? How does Node work?</h2>
                    <p>Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />
                        Working of Node.js: Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                        Node.js basically works on two concept
                    </p>
                </article>
            </article>
            
            </div>  
          
        </div >
    );
};

export default Blogs;
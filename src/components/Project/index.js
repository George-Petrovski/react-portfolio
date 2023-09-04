import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import React, { useEffect, useState } from "react";
import Loader from 'react-loaders';

const Project = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        let timeout = setTimeout(() => {
           setLetterClass("text-animate-hover");
         }, 3000);
       
         return () => {
           clearTimeout(timeout);
         };
       }, []);

    return (
        <>
            <div className='container portfolio-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={Array.from("Technical Projects")}
                            idx={5}
                        />
                    </h1>
                    <p>
                        <a href='https://github.com/George-Petrovski/To-do-application' target='_blank' rel="noreferrer">(React) To Do Web App</a>
                        <br />
                        You can add things to a list, strike them out once completed and then delete if necessary.
                    </p>
                    <br />
                    <p>
                        <a href='https://github.com/George-Petrovski/Secret-Sharing' target='_blank' rel="noreferrer">(Express) Secret Sharing Web App</a>
                        <br />
                        After creating a username and password, these are stored in a mongoDB database with the password turned into a hash using mongoose-encryption. 
                        All of the webpages are styled through Embedded JavaScript and the application is running using express and connecting to the database using mongoose.
                    </p>
                    <br />
                    <p>
                        <a href='https://github.com/George-Petrovski/image-repository' target='_blank' rel="noreferrer">(FullStack) Image Hosting Web App</a>
                        <br />
                        The frontend is a React App that can upload and display photos via API requests to a backend. The backend runs on express and implements a RESTfull API 
                        that communicates with the Cloudinary plugin to store and retrieve images. 
                    </p>
                    <br />
                    <p>
                        <a href='https://github.com/George-Petrovski/comic-book' target='_blank' rel="noreferrer">(Express) Comic Book Web App</a>
                        <br />
                        An express application that uses handlebars to display the data on the page. Implemented RESTfull APIs to store the amount of times a particular page 
                        was viewed in a mongoDB via mongoose. 
                    </p>
                    <br />
                    <p>
                        <a href='https://github.com/George-Petrovski/comic-book' target='_blank' rel="noreferrer">(React) Artwork Repository Web App</a>
                        <br />
                        This react application uses react hooks to pull artwork data from a public API. A user can also make an account and save artworks to a list which will 
                        be linked to their account and retrieved when logged back in. 
                    </p>
                    <br />
                    <p>
                        <a href='https://github.com/George-Petrovski/TOXIC-COMMENT-ML/' target='_blank' rel="noreferrer">(ML Model) Toxic Comment Analysis Model</a>
                        <br />
                        In this Jupyter notebook I attempted the Kaggle challenge to accurately predict whether a comment is toxic or not and which cateogries of toxicity 
                        does it belong to. I implemented the BERT LLM as well as attempted to build a Neural Network from scratch to understand the differences between them. 
                        I have also looked at various ways of preparing the data to increase KPI metrics and created visual graphs to analyze the sample data.
                    </p>
                    <br />
                    <p>
                        <a href='https://github.com/George-Petrovski/Covid-Triage-Software' target='_blank' rel="noreferrer">(C++) Covid Triage Program </a>
                        <br />
                        This program is in C++ and can be used to Triage patients at a hospital based on the severity of their illness and if they have covid symptoms or not.
                    </p>
                    <br />
                    <p>
                        <a href='https://github.com/George-Petrovski/Ticketing-Software' target='_blank' rel="noreferrer">(C) Ticketing Program </a>
                        <br />
                        This program in C has employee and customer components where a customer can log a request which would create a ticket in the program 
                        and an employee can log in to view the tickets submitted by customers. Customers can only see their own tickets and additional comments can be added 
                        to the ticket so that the employee and customer can relay information to each other for clarification or status update.
                    </p>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Project
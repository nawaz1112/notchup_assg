import React from 'react';
import './main.css'

const Courses = () => {
    return (
        <>
            <div id="our-services" className="our-services">
                <h3 className="text-green mb-5 h1 text-center">Courses Offered</h3>
                <div className="features  mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="feature py-4 col-md-6 d-flex">
                                <div className="icon text-green mr-3"><i className="fa fa-gamepad" aria-hidden="true"></i>
                                </div>
                                <div className="px-4">
                                    <h5><a href="/">Game Development Jr 5-7 Years</a></h5>
                                    <p>Do you want to introduce your child to the creative world of animations and stories in a fun and interactive way?</p>
                                </div>
                            </div>
                            <div className="feature py-4 col-md-6 d-flex">
                                <div className="icon text-green mr-3"><i className="fa fa-gamepad" aria-hidden="true"></i>
                                </div>
                                <div className="px-4">
                                    <h5><a href="/">Game Development 8-12 Years</a></h5>
                                    <p>Bestselling course taught using tools developed at MIT (Scratch) for children new to the world of coding.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="feature py-4 col-md-6 d-flex">
                                <div className="icon text-green mr-3"><i className="fa fa-mobile" aria-hidden="true"></i>
                                </div>
                                <div className="px-4">
                                    <h5><a href="/">App Development 9-15 Years</a></h5>
                                    <p>Do you want your child to publish their own Apps on the Google Play Store? Then, this is the right course for them.</p>
                                </div>
                            </div>
                            <div className="feature py-4 col-md-6 d-flex">
                                <div className="icon text-green mr-3"><i className="fa fa-laptop" aria-hidden="true"></i>
                                </div>
                                <div className="px-4">
                                    <h5><a href="/">Web Development 10+ Years</a></h5>
                                    <p>Develop beautiful and interactive websites using HTML, CSS,  JavaScript and jQuery.</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="feature py-4 col-md-6 d-flex">
                                <div className="icon text-green mr-3"><i className="fa fa-globe" aria-hidden="true"></i>
                                </div>
                                <div className="px-4">
                                    <h5><a href="/">Python Programming with Artificial Intelligence </a></h5>
                                    <p>Learn python basics by creating interactive games and then move explore advanced topics in Artificial Intelligence .</p>
                                </div>
                            </div>
                            <div className="feature py-4 col-md-6 d-flex">
                                <div className="icon text-green mr-3"><i className="fa fa-street-view" aria-hidden="true"></i>
                                </div>
                                <div className="px-4">
                                    <h5><a href="/">Augmented Reality</a></h5>
                                    <p>Learn the basics of AR and C# programming using Unity and Vuforia to develop cool and interesting AR applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Courses;
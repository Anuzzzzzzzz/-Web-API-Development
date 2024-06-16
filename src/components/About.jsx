import React from 'react'
import { NavLink } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="text-primary fw-bold mb-4">About Us</h1>
                        <p className="lead mb-4">
                            Welcome to Ebuy, your number one source for all things related to electronics. We're dedicated to providing you the very best of products, with an emphasis on quality, customer service, and uniqueness.
                        </p>
                        <p className="lead mb-4">
                            Founded in 2024, Ebuy has come a long way from its beginnings. When we first started out, our passion for providing top-quality products at affordable prices drove us to start our own business. We are thrilled that we're able to turn our passion into our own website.
                        </p>
                        <p className="lead mb-4">
                            We hope you enjoy our products as much as we enjoy offering them to you. If you have any questions or comments, please don't hesitate to contact us.
                        </p>
                        <NavLink to="/contact" className="btn btn-outline-primary px-3">Contact Us</NavLink>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center">
                        <img src="/assets/images/about.png" alt="About Us" height="400px" width="400px" />
                    </div>
                </div>
            </div>
            <div className="container py-5">
                <h2 className="text-center text-primary fw-bold mb-4">Our Mission</h2>
                <p className="lead text-center mb-4">
                    Our mission is to provide our customers with the best online shopping experience by offering high-quality products at competitive prices, along with exceptional customer service.
                </p>
                <h2 className="text-center text-primary fw-bold mb-4">Our Vision</h2>
                <p className="lead text-center mb-4">
                    To be a leader in the e-commerce industry, known for our innovation, quality products, and commitment to customer satisfaction.
                </p>
                <h2 className="text-center text-primary fw-bold mb-4">Our Values</h2>
                <ul className="list-unstyled text-center lead">
                    <li>Integrity</li>

                    <li>Customer Focus</li>
                    
                    <li>Innovation</li>
                    
                    <li>Quality</li>
                    
                    <li>Teamwork</li>
                </ul>
            </div>
        </div>
    )
}

export default About

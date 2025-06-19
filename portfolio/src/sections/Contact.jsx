import React from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/ContactExperience'



const Contact = () => {
    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Contact Me" sub="Get in touch" />
                <div className="mt-16 grid-12-cols">

                    {/* Left Side - Contact Form */}
                    <div className="xl:col-span-5 border-2 border-red-500">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form className="w-full flex flex-col gap-7">
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Your name"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="your.email@example.com"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={6}
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>

                                <button type="submit">
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text"> Send Message </p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>

                                </button>
                            </form>
                        </div>

                    </div>

                    {/* Right Side - 3D Experience */}
                    <div className="xl:col-span-7 min-h-96 border-2 border-blue-500">
                        <div className='w-full h-full hover:cursor-grab rounded-3xl overflow-hidden'>
                            <ContactExperience />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default Contact


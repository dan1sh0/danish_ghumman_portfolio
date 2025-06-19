import React from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/ContactExperience'

const Contact = () => {
    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Contact Me" sub="Get in touch" />
                <div className="mt-16 relative">
                    <div className="grid-12-cols">
                        {/* Left Side - Contact Form */}
                        <div className="xl:col-span-5">
                            <div className="flex-center card-border rounded-xl p-10">
                                <form className="space-y-6">
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

                                    <button
                                        type="submit"
                                        className="w-full py-4 bg-white text-black font-semibold rounded-md flex justify-center items-center gap-2 hover:bg-white-50 transition-colors duration-300"
                                    >
                                        Send Message
                                    </button>
                                </form>
                            </div>

                        </div>

                        {/* Right Side - 3D Experience */}
                        <div className="xl:col-span-6">
                            <ContactExperience />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact


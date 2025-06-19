import React from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactExperience from '../components/ContactExperience'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { useState } from 'react'





const Contact = () => {

    const formRef = useRef(null);
    // inorder to intergrate the emailjs we need a way to get the form data 

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    //  show loading statem if loading we can disable the button 
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    // to handle submit, prevent default means it wont reload the page 
    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_ID
            )

            setFormData({
                name: '',
                email: '',
                message: ''
            })


        } catch (error) {
            console.log('Emailjs error', error)
        } finally {
            setLoading(false)
        }

    }


    return (
        <section id="contact" className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader title="Contact Me" sub="Get in touch" />
                <div className="mt-16 grid-12-cols">

                    {/* Left Side - Contact Form */}
                    <div className="xl:col-span-5 ">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form ref={formRef} onSubmit={handleSubmit} className="w-full flex flex-col gap-7" >
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Tell me about your project..."
                                        required
                                    />
                                </div>

                                <button type="submit" disabled={loading}>
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text"> {loading ? 'Sending ...' : 'Send Message'}  </p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>

                                </button>
                            </form>
                        </div>

                    </div>

                    {/* Right Side - 3D Experience */}
                    <div className="xl:col-span-7 min-h-96">
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


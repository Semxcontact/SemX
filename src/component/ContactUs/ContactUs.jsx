import React, { useState } from 'react'
import axios from 'axios'
import { FaFacebookF, FaLinkedinIn, FaTiktok, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa'

export default function ContactUs() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
    setSuccess('')
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.email || !form.subject || !form.message) {
      setError('All fields are required.')
      return
    }
    setLoading(true)
    setError('')
    setSuccess('')
    try {
      await axios.post('http://semxapi.runasp.net/api/contact', form)
      setSuccess('Your message has been sent successfully!')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setError('Failed to send. Please try again.')
    }
    setLoading(false)
  }

  return (
    <section id="contact" className="bg-gray-950 py-16 px-4 min-h-screen">
      <h2 className="text-4xl font-bold text-white text-center mb-10">Contact Us</h2>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="bg-gray-900 rounded-2xl shadow-lg p-8 flex flex-col justify-center h-full">
          <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 text-gray-300 text-lg">
              <FaEnvelope className="text-green-400 text-2xl" />
              <span className="text-xl font-medium">Semx.contact@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-lg">
              <FaPhoneAlt className="text-green-400 text-2xl" />
              <span className="text-xl font-medium">+201228161195</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 text-lg">
              <FaMapMarkerAlt className="text-green-400 text-2xl" />
              <span className="text-xl font-medium">Cairo</span>
            </div>
            <div className="flex gap-6 mt-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600 text-2xl">
                <FaFacebookF />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-500 text-2xl">
                <FaLinkedinIn />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 text-2xl">
                <FaTiktok />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-500 text-2xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
        {/* Contact Form */}
        <div className="bg-gray-900 rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-semibold text-white mb-6">Send us a message</h3>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows={5}
              value={form.message}
              onChange={handleChange}
              required
              className="bg-gray-800 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-lg transition"
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
           {error && <p className="text-red-500 text-center">{error}</p>}
            {success && <p className="text-green-400 text-center">{success}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
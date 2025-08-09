export default function ContactUs() {
  return (
    <section className="max-container padding-container py-10 pb-32">
      <div className="text-center">
        <h1 className="bold-52 lg:bold-88">Contact Us</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px] mx-auto">
          Have questions about Hilink? Need support for your hiking adventure? We're here to help you every step of the way.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16">
        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h2 className="bold-32 text-green-50 mb-6">Send us a Message</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-30 mb-2 regular-16">Full Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-3 border border-gray-20 rounded-lg focus:border-green-50 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gray-30 mb-2 regular-16">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 border border-gray-20 rounded-lg focus:border-green-50 focus:outline-none"
                placeholder="Enter your email address"
              />
            </div>
            <div>
              <label className="block text-gray-30 mb-2 regular-16">Subject</label>
              <select className="w-full px-4 py-3 border border-gray-20 rounded-lg focus:border-green-50 focus:outline-none">
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Feature Request</option>
                <option>Partnership</option>
                <option>Bug Report</option>
              </select>
            </div>
            <div>
              <label className="block text-gray-30 mb-2 regular-16">Message</label>
              <textarea 
                rows={5}
                className="w-full px-4 py-3 border border-gray-20 rounded-lg focus:border-green-50 focus:outline-none resize-vertical"
                placeholder="Tell us how we can help you..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-green-50 text-white rounded-lg bold-16 hover:bg-green-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="bg-green-50 rounded-2xl p-8 text-white">
            <h2 className="bold-32 mb-6">Get in Touch</h2>
            <p className="regular-16 mb-8">
              Whether you're planning your next adventure or need technical assistance, our team is ready to support your journey.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <img src="/location.svg" alt="Location" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="bold-16 mb-1">Visit Us</h3>
                  <p className="regular-14">123 Adventure Street, Mountain View, CA 94041</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <img src="/phone.png" alt="Phone" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="bold-16 mb-1">Call Us</h3>
                  <p className="regular-14">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <img src="/user.svg" alt="Email" className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="bold-16 mb-1">Email Us</h3>
                  <p className="regular-14">support@hilink.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="bold-24 text-green-50 mb-4">Support Hours</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="regular-16 text-gray-30">Monday - Friday</span>
                <span className="regular-16">9:00 AM - 6:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span className="regular-16 text-gray-30">Saturday</span>
                <span className="regular-16">10:00 AM - 4:00 PM PST</span>
              </div>
              <div className="flex justify-between">
                <span className="regular-16 text-gray-30">Sunday</span>
                <span className="regular-16">Closed</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="bold-24 text-green-50 mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center hover:bg-green-90 transition-all">
                <img src="/facebook.svg" alt="Facebook" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center hover:bg-green-90 transition-all">
                <img src="/instagram.svg" alt="Instagram" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center hover:bg-green-90 transition-all">
                <img src="/twitter.svg" alt="Twitter" className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center hover:bg-green-90 transition-all">
                <img src="/youtube.svg" alt="YouTube" className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

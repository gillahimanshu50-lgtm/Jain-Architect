import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <div className="font-bold text-2xl tracking-tighter text-white mb-6">
            Agarwal Architect<span className="text-orange-500">.</span>
          </div>
          <p className="mb-6">
            We build strong, beautiful homes for families. Simple process, great results.
          </p>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#0A66C2] hover:text-white transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#1DA1F2] hover:text-white transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Links</h4>
          <ul className="space-y-4">
            <li><a href="#home" className="hover:text-orange-500 transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-orange-500 transition-colors">Services</a></li>
            <li><a href="#reviews" className="hover:text-orange-500 transition-colors">Reviews</a></li>
            <li><a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Legal</h4>
          <ul className="space-y-4">
            <li><a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-500 transition-colors">Terms of Use</a></li>
          </ul>
        </div>

        <div id="contact">
          <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact</h4>
          <ul className="space-y-4">
            <li>123 Builder Street<br />New York, NY 10001</li>
            <li><a href="tel:+1234567890" className="hover:text-orange-500 transition-colors">+1 (234) 567-890</a></li>
            <li><a href="mailto:hello@arch.com" className="hover:text-orange-500 transition-colors">hello@arch.com</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 text-sm text-center">
        &copy; {new Date().getFullYear()} Agarwal Architect Business. All rights reserved.
      </div>
    </footer>
  );
}

import { Logo } from '@/components/ui/logo';

export function FooterSection() {
  return (
    <footer className="bg-[#F8F6EE] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-3 items-center">
          {/* Left Section - Logo */}
          <div className="flex justify-start">
            <Logo 
              wordmarkColor="#2D2C2B" 
              outlineColor="#2D2C2B"
              showOutline={true}
              className='w-32'
            />
          </div>
          
          {/* Middle Section - Copyright */}
          <div className="flex justify-center">
            <p className="text-gray-900 font-silka text-sm">
              © 2025 Gradebox. All rights reserved.
            </p>
          </div>
          
          {/* Right Section - Navigation Links */}
          <div className="flex justify-end space-x-6">
            <a 
              href="/privacy" 
              className="text-[#054BC1] font-silka text-sm hover:text-[#054BC1]/80 transition-colors duration-200"
            >
              Privacy
            </a>
            <a 
              href="/terms" 
              className="text-[#054BC1] font-silka text-sm hover:text-[#054BC1]/80 transition-colors duration-200"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

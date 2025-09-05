import React from 'react';

const Footer: React.FC = () => {
  // Define the array of image URLs manually (images from p1 to p23)
 const mediaPartners = [
  '/images/p1.jpg', '/images/p2.png', '/images/p3.jpg', '/images/p4.jpg',
  '/images/p5.jpg', '/images/p6.jpg', '/images/p7.png', '/images/p8.png',
  '/images/p9.png', '/images/p10.jpg', '/images/p11.png', '/images/p12.png',
  '/images/p13.jpg', '/images/p14.png', '/images/p15.png', '/images/p16.jpg',
  '/images/p17.png', '/images/p18.jpg', '/images/p19.png', '/images/p20.png',
  '/images/p21.jpg', '/images/p22.png', '/images/p23.png', '/images/p24.png',
  '/images/p25.jpg', '/images/p26.png', '/images/p27.png', '/images/p28.jpg',
  '/images/p29.png', '/images/p30.jpg', '/images/p31.jpg'
];


  return (
    <footer className="bg-black text-white py-10">
      {/* Top red line to divide footer */}
      <div className="border-t-4 border-red-600 mb-8"></div>

      <div className="container mx-auto px-4 max-w-screen-xl">
        {/* Footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-8">
          
          {/* Quick Links Section */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4 text-red-600">Quick Links</h2>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#solution" className="hover:underline">Solution</a></li>
            </ul>
          </div>

          {/* Company Contact Section */}
          <div className="text-center">
            <h2 className="text-xl font-semibold mb-4 text-red-600">Company Contact</h2>
            <ul className="space-y-2">
              <li>
                <span className="font-semibold">Address:</span> Office No-5, Virkar Complex, Lane Number 6, Dahanukar Colony, Kothrud, Pune
              </li>
              <li>
                <span className="font-semibold">Phone:</span> +91 9822968857
              </li>
              <li>
                <span className="font-semibold">Email:</span> 
                <a href="mailto:info@vmintellect.com" className="hover:underline"> info@vmintellect.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Media Partners Section */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-red-600 text-center">Our Media Partners</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-center">
            {/* Render Partner Logos dynamically from the mediaPartners array */}
            {mediaPartners.map((image, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={image} // Using the image URL from the array
                  alt={`Partner ${index + 1}`}
                  className="w-24 h-24 rounded-md shadow-lg transform hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm text-gray-500">
          <p>© 2025 VM Intellect™. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

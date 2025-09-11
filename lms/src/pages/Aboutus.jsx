// import React from 'react';
// import Footer from '../components/student/Footer';

// const Aboutus = () => {
//   return (
//     <>
//       <div className="bg-gradient-to-b from-purple-100 via-white to-purple-50 min-h-screen">
//         {/* Hero Section */}
//         <div className="md:px-36 px-8 pt-20 pb-10 text-center">
//           <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
//           <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
//             At <span className="text-purple-600 font-semibold">LearnNest</span>, 
//             we believe in empowering learners with world-class education and skills that
//             prepare them for the future. Our mission is to make learning accessible, engaging, 
//             and impactful for students and professionals across the globe.
//           </p>
//         </div>

//         {/* Vision + Mission */}
//         <div className="grid md:grid-cols-2 gap-8 md:px-36 px-8 py-10">
//           <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
//             <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Mission</h2>
//             <p className="text-gray-600">
//               To create a platform where learning never stops. We aim to provide 
//               high-quality courses across multiple disciplines and ensure that 
//               learners can achieve both personal and professional growth. 
//             </p>
//           </div>
//           <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition">
//             <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Vision</h2>
//             <p className="text-gray-600">
//               We envision a world where knowledge is accessible to everyone, 
//               anytime, anywhere. By blending technology with education, 
//               LearnNest strives to nurture a community of curious and confident learners.
//             </p>
//           </div>
//         </div>

    
//       </div>

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default Aboutus;



import React from 'react';
import Footer from '../components/student/Footer'; // Assuming this path is correct
import { assets } from '../assets/assets';

// A simple placeholder for icons. You can replace these with actual SVG icons from a library like 'react-icons'.
const IconPlaceholder = ({ className }) => <div className={`bg-purple-200 rounded-full ${className}`}></div>;

const Aboutus = () => {
  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-purple-50 via-purple-50 to-white pt-24 pb-20 text-center">
          <div className="md:px-36 px-8">
            <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">
              About <span className="text-purple-600">LearnNest</span>
            </h1>
            <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
              We believe in empowering learners with world-class education and skills that prepare them for the future. Our mission is to make learning accessible, engaging, and impactful for everyone, everywhere.
            </p>
          </div>
        </div>

        {/* Our Story Section - Alternating Layout */}
        <div className="py-20 md:px-36 px-8">
          {/* Mission */}
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="text-purple-600 font-semibold tracking-wide uppercase">Our Mission</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">A Platform Where Learning Never Stops</h2>
              <p className="text-gray-600 leading-loose">
                Our goal is to provide high-quality courses across multiple disciplines, ensuring learners can achieve both personal and professional growth. We are committed to fostering a supportive and interactive learning environment.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={assets.Aboutus_img1}
                alt="Illustration about a Global Community"
                className="w-full max-w-sm h-auto rounded-xl object-cover"
              />
            </div>
          </div>

          {/* Vision */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mt-20">
            <div className="md:w-1/2">
              <span className="text-purple-600 font-semibold tracking-wide uppercase">Our Vision</span>
              <h2 className="text-3xl font-bold text-gray-800 mt-2 mb-4">Knowledge Accessible to Everyone</h2>
              <p className="text-gray-600 leading-loose">
                We envision a world where education is not a privilege but a universal right. By blending technology with expert-led instruction, LearnNest strives to nurture a global community of curious and confident lifelong learners.
              </p>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src={assets.Aboutus_img2}
                alt="Illustration about a Global Community"
                className="w-full max-w-sm h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* "Why Choose Us?" Section */}
        <div className=" py-20">
          <div className="md:px-36 px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-800">Why Learn with Us?</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We are not just another e-learning platform. We are a community dedicated to your success.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12 text-left">
              {/* Feature 1 */}
              <div className="bg-white p-6 rounded-lg border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-purple-700">Expert Instructors</h3>
                <p className="mt-2 text-gray-600">Learn from industry leaders and certified professionals who are passionate about teaching.</p>
              </div>
              {/* Feature 2 */}
              <div className="bg-white p-6 rounded-lg border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-purple-700">Flexible Learning</h3>
                <p className="mt-2 text-gray-600">Access your courses anytime, anywhere, and learn at your own pace on any device.</p>
              </div>
              {/* Feature 3 */}
              <div className="bg-white p-6 rounded-lg border border-purple-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-lg font-semibold text-purple-700">Career Growth</h3>
                <p className="mt-2 text-gray-600">Gain practical skills and earn certificates that are recognized by top employers.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Aboutus;
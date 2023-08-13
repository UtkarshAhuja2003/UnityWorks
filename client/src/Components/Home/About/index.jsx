import React from 'react'

const index = () => {
  return (
    <div id='about' className='mt-8 w-[90%] mx-auto'>
      <section class="py-16 px-4 bg-white">
    <div class="container mx-auto">
      <h2 class="text-2xl font-semibold mb-4 text-center">Our Mission</h2>
      <p class="text-gray-600 text-center mx-auto w-[80%]">
      At UnityWorks, our mission is clear: we are committed to empowering differently-abled individuals by providing them with a platform that not only showcases their unique skills and talents but also connects them with employers who are eager to embrace diversity. Our ultimate goal is to bridge the gap between abilities and opportunities, fostering an environment where everyone can contribute meaningfully to the workforce.      </p>
    </div>
  </section>

  <section class="py-16 px-4 bg-gray-100">
    <div class="container mx-auto">
      <h2 class="text-2xl font-semibold mb-4 text-center">How It Works</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white p-6 rounded-md shadow-md">
          <h3 class="text-lg font-semibold mb-2">Step 1: Create an Account</h3>
          <p class="text-gray-600">
            Sign up for our platform and create your account.
          </p>
        </div>
        <div class="bg-white p-6 rounded-md shadow-md">
          <h3 class="text-lg font-semibold mb-2">Step 2: Post or Apply for Jobs</h3>
          <p class="text-gray-600">
            Browse and post job listings, or apply for jobs that match your skills.
          </p>
        </div>
        <div class="bg-white p-6 rounded-md shadow-md">
          <h3 class="text-lg font-semibold mb-2">Step 3: Connect with Employers/Candidates</h3>
          <p class="text-gray-600">
            Communicate and network with potential employers or candidates.
          </p>
        </div>
        <div class="bg-white p-6 rounded-md shadow-md">
          <h3 class="text-lg font-semibold mb-2">Step 4: Land Your Dream Job</h3>
          <p class="text-gray-600">
            Secure your dream job or find the perfect candidate.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="py-16 px-4 bg-white">
    <div class="container mx-auto w-[90%]">
      <h2 class="text-2xl font-semibold mb-4">Key Features</h2>
      <ul class="list-disc list-inside text-gray-600">
        <li>Feature 1: Tailored Job listing</li>
        <li>Feature 2: Accessible Design</li>
        <li>Feature 3: Effortless Navigation</li>
        <li>Feature 4: Profile Showcase</li>
      </ul>
    </div>
  </section>
    </div>
  )
}

export default index

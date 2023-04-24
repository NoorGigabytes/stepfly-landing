import React from 'react';
import Accordion from './includes/Accordion';
import TestimonialSlider from './includes/TestimonialSlider';

function Home() {
  return (
    <main className='text-white'>
      <section className='container mx-auto max-w-screen-lg px-6 py-20 mt-10'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          <div className='relative md:w-1/2 w-full md:pr-12 text-center md:text-left z-10'>
            <h1 className='lg:text-6xl text-4xl font-semibold'>LearnCodeOnline</h1>
            <p className='mt-10 text-lg'>High Quality Course at Affordable prices. We are latest in tech and highest in quality. <br/>Trusted by 300,000 Student and Professionals.</p>
          </div>
          <div className='md:w-1/2 w-full'>
            <img src='./assets/img/reason-Ico.png' alt='hero image' className='md:ml-auto md:mt-0 mt-28 mx-auto absolute md:relative inset-0 opacity-50 w-1/2 md:w-full md:opacity-100'/>
          </div>
        </div>
      </section>

      <section className='container mx-auto max-w-screen-lg px-6 mt-32'>
        <div className='sm:w-3/4 w-full'>
          <h1 className='lg:text-5xl text-4xl font-semibold'>Our Achievers</h1>
          <p className='mt-6 text-lg text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore hic quae eos minus. Ad, cupiditate deserunt aut enim recusandae ipsam laudantium pariatur reiciendis eius necessitatibus! Vero nulla vel nemo vitae.</p>
        </div>
        <div className='bg-indigo-600 sm:p-6 px-2 py-6 rounded-lg mt-16'>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-2'>
            <div className='my-auto ml-6'>
              <div className='w-min rounded-full bg-orange-500 shadow-lg'>
                <p className='px-4 py-2 font-semibold'>Trending</p>
              </div>
              <h1 className='md:text-3xl text-xl font-bold mt-4'>Get access to all the premium courses in a <span className='text-green-500'>Pro LCO Bundle</span></h1>
              <h2 className='md:text-xl text-md font-light mt-2'>A Quality Courses at a most Affordable Price!</h2>
              <div className='my-6'>
                <a href='/' className='md:text-xl text-md font-light border rounded-md px-4 py-2'>Enroll Now</a>
              </div>
            </div>
            <div className='mx-auto flex items-center justify-center'>
              <img src='./assets/img/LCO-01.webp' alt='card image 1' className='sm:w-3/4 w-1/2 mx-auto'/>
            </div>
          </div>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 mt-4'>
          <div className='bg-indigo-800 sm:p-6 px-2 py-6 rounded-lg'>
            <div className='grid sm:grid-cols-3 grid-cols-2 gap-2'>
              <div className='my-auto sm:ml-6 ml-2 sm:col-span-2 col-span-1'>
                <h1 className='lg:text-xl text-md font-semibold mt-4'>Know More about DSAs</h1>
                <div className='my-6'>
                  <a href='/' className='md:text-md text-md font-light border rounded-md px-2 py-1'>Enroll Now</a>
                </div>
              </div>
              <div className='mx-auto flex items-center justify-center'>
                <img src='./assets/img/python.svg' alt='card image 2' className='sm:w-3/4 w-1/2 mx-auto'/>
              </div>
            </div>
          </div>
          <div className='bg-orange-600 sm:p-6 px-2 py-6 rounded-lg'>
            <div className='grid sm:grid-cols-3 grid-cols-2 gap-2'>
              <div className='my-auto sm:ml-6 ml-2 sm:col-span-2 col-span-1'>
                <h1 className='lg:text-xl text-md font-semibold mt-4'>Know More about DSAs</h1>
                <div className='my-6'>
                  <a href='/' className='md:text-md text-md font-light border rounded-md px-2 py-1'>Enroll Now</a>
                </div>
              </div>
              <div className='mx-auto flex items-center justify-center'>
                <img src='./assets/img/web.svg' alt='card image 2' className='sm:w-3/4 w-1/2 mx-auto'/>
              </div>
            </div>
          </div>
          <div className='bg-emerald-500 sm:p-6 px-2 py-6 rounded-lg'>
            <div className='grid sm:grid-cols-3 grid-cols-2 gap-2'>
              <div className='my-auto sm:ml-6 ml-2 sm:col-span-2 col-span-1'>
                <h1 className='lg:text-xl text-md font-semibold mt-4'>Know More about DSAs</h1>
                <div className='my-6'>
                  <a href='/' className='md:text-md text-md font-light border rounded-md px-2 py-1'>Enroll Now</a>
                </div>
              </div>
                <div className='mx-auto flex items-center justify-center'>
                  <img src='./assets/img/js.svg' alt='card image 2' className='sm:w-3/4 w-1/2 mx-auto'/>
                </div>
              </div>
            </div>
          </div>
      </section>

      <section className='container mx-auto max-w-screen-lg px-6 mt-32'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-4'>
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
            <div className='bg-gray-900 sm:p-6 px-2 py-6 rounded-lg relative'>
              <div className=''>
                <div className='my-auto sm:ml-6 ml-3'>
                  <p className='text-violet-500'>Bundle</p>
                  <h1 className='lg:text-xl text-md font-semibold mt-4'>Full Stack web Developer with Django</h1>
                  <div className='my-6'>
                    <a href='/' className='md:text-md text-md font-light border rounded-md px-2 py-1'>View Bundle</a>
                  </div>
                </div>
                <div className='mx-auto flex items-center justify-center'>
                  <img src='./assets/img/python-logo.webp' alt='card image 2' className='absolute bottom-5 right-5 mx-auto'/>
                </div>
              </div>
            </div>
            <div className='bg-gray-900 sm:p-6 px-2 py-6 rounded-lg relative'>
              <div className=''>
                <div className='my-auto sm:ml-6 ml-3'>
                  <p className='text-violet-500'>Bundle</p>
                  <h1 className='lg:text-xl text-md font-semibold mt-4'>Pro Front End Developer - React</h1>
                  <div className='my-6'>
                    <a href='/' className='md:text-md text-md font-light border rounded-md px-2 py-1'>View Bundle</a>
                  </div>
                </div>
                <div className='mx-auto flex items-center justify-center'>
                  <img src='./assets/img/react-logo.webp' alt='card image 2' className='absolute bottom-5 right-5 mx-auto'/>
                </div>
              </div>
            </div>
            <div className='bg-gray-900 sm:p-6 px-2 py-6 rounded-lg relative'>
              <div className=''>
                <div className='my-auto sm:ml-6 ml-3'>
                  <p className='text-violet-500'>Bundle</p>
                  <h1 className='lg:text-xl text-md font-semibold mt-4'>Android P and JAVA Bundle</h1>
                  <div className='my-6'>
                    <a href='/' className='md:text-md text-md font-light border rounded-md px-2 py-1'>View Bundle</a>
                  </div>
                </div>
                <div className='mx-auto flex items-center justify-center'>
                  <img src='./assets/img/android-logo.webp' alt='card image 2' className='absolute bottom-5 right-5 mx-auto'/>
                </div>
              </div>
            </div>
            <div className='bg-gray-900 sm:p-6 px-2 py-6 rounded-lg relative'>
              <div className=''>
                <div className='my-auto sm:ml-6 ml-3'>
                  <p className='text-violet-500'>Bundle</p>
                  <h1 className='lg:text-xl text-md font-semibold mt-4'>AWS Serverless</h1>
                  
                  <div className='my-6'>
                    <a href='/' className='md:text-md text-md font-light border rounded-md px-2 py-1'>View Bundle</a>
                  </div>
                </div>
                <div className='mx-auto flex items-center justify-center'>
                  <img src='./assets/img/aws-logo.webp' alt='card image 2' className='absolute bottom-5 right-5 mx-auto'/>
                </div>
              </div>
            </div>
          </div>
          <div className='lg:ml-10 ml-0 my-auto'>
            <p className='text-violet-500'>Popular topics to learn now</p>
            <h1 className='lg:text-4xl text-xl font-semibold mt-10'>Don’t know where to start from?</h1>
            <p className='lg:text-xl text-lg text-gray-300 mt-5'>It’s ok to be confused as a beginner. Tech is vast but don’t worry. Our curated bundles will act as a guided learning path. Check out all Of our bundles and start your programming journey with us.</p>
            <div className='mt-8'>
              <a href='/' className='bg-slate-600 px-5 py-3 rounded-lg font-semibold'>View More</a>
            </div>
          </div>
        </div>
      </section>

      <section className='container mx-auto max-w-screen-lg px-6 mt-32'>
        <div className='sm:w-3/4 lg:w-1/2 pr-8 mb-4'>
          <p className='text-violet-500 font-semibold text-lg'>Why Choose LCO</p>
          <h1 className='lg:text-5xl text-4xl font-semibold mt-5'>Our Products</h1>
        </div>
        <div className='flex flex-col lg:flex-row gap-8'>
          <Accordion />
          <div className='lg:w-1/2 m-auto w-max'>
            <img className='hidden lg:block' src='./assets/img/reason-lco.svg' alt='products'/>
          </div>
        </div>
      </section>

      <section className='container mx-auto max-w-screen-lg px-6 mt-32'>
        <div className='bg-yellow-500 sm:p-6 px-2 py-6 rounded-lg overflow-visible'>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-2 text-black'>
            <div className='my-auto ml-6'>
              <div className='w-min rounded-full bg-purple-600 shadow-lg'>
                <p className='px-4 py-2 font-semibold text-white'>Discount</p>
              </div>
              <h1 className='md:text-3xl text-xl font-bold mt-4'>Welcome to LearnCodeOnline Pro</h1>
              <h2 className='md:text-xl text-md font-light mt-2'>Pay a small fee and access to entire LCO pro library. This includes all the video courses and tests. As of now we are offering this early bird pricing which will eventually change in future.</h2>
              <div className='my-6'>
                <a href='/' className='md:text-lg text-md font-light text-white bg-black rounded-md px-4 py-2'>Enroll for Free</a>
              </div>
            </div>
            <div className='mx-auto flex items-center justify-center sm:mt-0 mt-10'>
              <img src='./assets/img/lcopro-graphics.svg' alt='card image 1' className='sm:w-3/4 w-1/2 scale-125 mx-auto'/>
            </div>
          </div>
        </div>
      </section>

      <section className='container mx-auto max-w-screen-lg px-6 mt-32'>
        <div className='sm:w-3/4'>
          <p className='text-violet-500 font-semibold text-lg'>Why Choose LCO</p>
          <h1 className='lg:text-5xl text-4xl font-semibold mt-5'>Our Products</h1>
          <p className='mt-6 text-lg text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore hic quae eos minus. Ad, cupiditate deserunt aut enim recusandae ipsam laudantium pariatur reiciendis eius necessitatibus! Vero nulla vel nemo vitae.</p>
        </div>
        
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-4 mt-10'>
        <div className='bg-emerald-400 sm:p-6 px-2 py-6 rounded-lg text-black relative'>
          <div className='grid sm:grid-cols-3 grid-cols-2 gap-2 md:mb-28 mb-20'>
            <div className='my-auto sm:ml-6 col-span-2 ml-5 sm:ml-3'>
              <h1 className='md:text-3xl text-xl font-bold mt-4'>UI Color Picker</h1>
              <h2 className='md:text-lg text-sm font-normal mt-2'>Open Source free color library for your next UI color. Select Modern color for your Modern Project</h2>
              <div className='my-6'>
                <a href='/' className='md:text-md text-sm font-semibold bg-violet-600 rounded-md px-4 py-2 text-white'>Visit Website</a>
              </div>
            </div>
              <div className='mx-auto flex items-center justify-center absolute bottom-5 sm:right-5 -right-5'>
                <img src='./assets/img/ui color-picker.svg' alt='card image 2' className='md:w-full w-1/2 mx-auto'/>
              </div>
          </div>
        </div>
        <div className='bg-amber-200 sm:p-6 px-2 py-6 rounded-lg text-black relative'>
          <div className='grid sm:grid-cols-3 grid-cols-2 gap-2 md:mb-10 mb-16'>
            <div className='my-auto sm:ml-6 col-span-2 ml-5 sm:ml-3'>
              <h1 className='md:text-3xl text-xl font-bold mt-4'>Paymentr App</h1>
              <h2 className='md:text-lg text-sm font-normal mt-2'>Paymentr helps each individual to track their payments and subscriptions without missing a cycle</h2>
              <div className='my-6'>
                <a href='/' className='md:text-md text-sm font-semibold bg-violet-600 rounded-md px-4 py-2 text-white'>Visit Website</a>
              </div>
            </div>
              <div className='mx-auto flex items-center justify-center absolute bottom-5 right-5'>
                <img src='./assets/img/paymentr-app.svg' alt='card image 2' className='md:w-full w-1/2 mx-auto'/>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-sky-300 sm:p-6 px-2 py-6 rounded-lg mt-4 text-black'>
          <div className='grid sm:grid-cols-2 grid-cols-1 gap-2'>
            <div className='my-auto ml-6'>
              <div className='w-min rounded-full bg-yellow-500 shadow-lg'>
                <p className='px-4 py-2 font-semibold'>New</p>
              </div>
              <h1 className='md:text-3xl text-xl font-bold mt-4'>Welcome to API Playground</h1>
              <h2 className='md:text-xl text-md font-light mt-2'>API playground is a fun way to learn and practice API. Handling API can be challenging and you should practice A lot. Use our API playground to learn and code web/mobile Apps.</h2>
              <div className='my-6'>
                <a href='/' className='md:text-md text-md font-semibold bg-violet-600 rounded-md px-4 py-2 text-white'>Coming Soon</a>
              </div>
            </div>
            <div className='mx-auto flex items-center justify-center'>
              <img src='./assets/img/playground.svg' alt='card image 1' className='sm:w-3/4 w-1/2 scale-125 mx-auto mt-10'/>
            </div>
          </div>
        </div>
      </section>

      <section className='px-6 py-10 mt-32'>
        <div className='container mx-auto max-w-screen-lg '>
        <div className='flex sm:flex-row flex-col-reverse gap-2'>
            <div className='my-auto sm:w-1/2 w-full mt-8'>
              <h1 className='md:text-3xl text-xl font-bold mt-4'>What makes LCO unique</h1>
              <h2 className='md:text-lg text-md font-light mt-2'>LearnCodeOnline is not a marketplace for courses. It is not a startup focusing to sell courses. When we make courses, a lot of love and thought goes in. It is not about rolling out another course. For us, we want to Present best course, yet easy to understand so that we help you to change your life and love the tech, just like we do. Surely, we need to make money to run this platform, But priority is education, tech education.</h2>
              <h2 className='md:text-lg text-md font-light mt-2 font-semibold'>LCO - Benchmark of quality in ed-tech videos</h2>
              <div className='my-6'>
                <a href='/' className='md:text-md text-md font-semibold bg-violet-600 rounded-md px-4 py-3 text-white'>Check out free courses</a>
              </div>
            </div>
            <div className='mx-auto flex items-center justify-center'>
              <img src='./assets/img/image-msg.webp' alt='card image 1' className='sm:w-3/4 w-1/2 scale-125 mx-auto mt-10 my-auto'/>
            </div>
          </div>
        </div>
      </section>
      
      <section className='px-6 py-10 mt-32 bg-slate-100'>
        <div className='container mx-auto max-w-screen-lg '>
          <div className='sm:w-3/4 text-black'>
            <h1 className='lg:text-4xl text-3xl font-semibold'>We are a learning hub for everyone</h1>
            <p className='mt-6 text-lg text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore hic quae eos minus. Ad, cupiditate deserunt aut enim recusandae ipsam laudantium pariatur reiciendis eius necessitatibus! Vero nulla vel nemo vitae.</p>
          </div>
        <div className='grid md:grid-cols-4 grid-cols-2 gap-6'>
          <div>
            <img src='./assets/img/accreditations/accreditations-logo1.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
          </div>
          <div>
            <img src='./assets/img/accreditations/accreditations-logo2.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
          </div>
          <div>
            <img src='./assets/img/accreditations/accreditations-logo3.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
          </div>
          <div>
            <img src='./assets/img/accreditations/accreditations-logo4.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
          </div>
          <div>
            <img src='./assets/img/accreditations/accreditations-logo5.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
          </div>
          <div>
            <img src='./assets/img/accreditations/accreditations-logo6.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
          </div>
          <div>
            <img src='./assets/img/accreditations/accreditations-logo7.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
          </div>
          <div>
            <img src='./assets/img/accreditations/accreditations-logo8.png' alt='accreditations logo 1' className='mx-auto filter grayscale hover:filter-none transition-all ease-out duration-300' />
          </div>
        </div>
        </div>
      </section>

      <section className='px-6 py-10 mt-32'>
        <div className='container mx-auto max-w-screen-lg '>
          <TestimonialSlider/>
        </div>
      </section>

      <section className='px-6 py-10 my-32'>
        <div className='container mx-auto max-w-screen-lg'>
          <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 items-center mb-8'>
            <div className='col-span-2'>
              <h1 className='lg:text-5xl text-4xl font-semibold'>Our Blogs and Articles</h1>
              <p className='mt-6 text-lg text-justify'>A place to Learn, teach and discuss about code. Contribute and get rewarded. Serving coding community is our number 1 priority.</p>
            </div>
            <div className='my-6 lg:ml-auto'>
              <a href='/' className='md:text-md text-md font-semibold bg-violet-600 rounded-md px-4 py-2 text-white'>Read All</a>
            </div>
          </div>
          <div className='grid gap-4 grid-cols-1 lg:grid-cols-3 justify-items-center'>
            <div className=''>
              <img src='./assets/img/blogs/linux-blog.webp' alt='blog 1' className=''/>
              <h3 className='mt-5 text-xl font-bold'>Linux article series</h3>
              <p><a href='/' className='text-violet-500'>View More <span className='text-xl'>&rarr;</span></a></p>
            </div>
            <div className=''>
              <img src='./assets/img/blogs/kubernetes.webp' alt='blog 1' className=''/>
              <h3 className='mt-5 text-xl font-bold'>Kubernetes series</h3>
              <p><a href='/' className='text-violet-500'>View More <span className='text-xl'>&rarr;</span></a></p>
            </div>
            <div className=''>
              <img src='./assets/img/blogs/devops.webp' alt='blog 1' className=''/>
              <h3 className='mt-5 text-xl font-bold'>DevOps</h3>
              <p><a href='/' className='text-violet-500'>View More <span className='text-xl'>&rarr;</span></a></p>
            </div>
          </div>
        </div>
      </section>

    </main>
  )
}

export default Home

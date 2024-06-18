import {useEffect} from 'react'
import ScrollReveal from 'scrollreveal';

const About = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: false,
      distance: '80px',
      duration: 1500,
      delay: 100
    });
    sr.reveal('.toporigin', { origin: 'top' });
    sr.reveal('.bottomorigin', { origin: 'bottom' });
    sr.reveal('.leftorigin', { origin: 'left' });
    sr.reveal('.rightorigin', { origin: 'right' });
  },[])

  return (
    <div name='About' className=" h-full w-100vh bg-gradient-to-b from-orange-50 to-yellow-100 ">
    
    <div className='pt-10'>
    <h1 className=" font-display text-orange-900 text-center font-Vsoc  text-3xl font-extrabold leading-none tracking-tight md:text-5xl  lg:text-6xl lg:mb-24 rightorigin">
       About
      </h1>
    </div>
    <div className=' md:m-0 flex justify-center items-center'>
    <section className='px-4 sm:px-56 py-0 sm:pb-10  rounded-2xl  leftorigin'>
    <p className='text-sm font-Vsoc md:text-2xl p-8'>Vinyasa Summer of Code represents an exciting opportunity for students in computer science and design to delve into innovative projects and collaborative learning. This immersive program is more than just coding; it's a dynamic journey blending creativity, technology, and teamwork.At Vinyasa Summer of Code, students can expect a supportive environment to explore their passion for software development and design. Through hands-on projects, mentorship, and workshops, participants will sharpen their technical skills while gaining real-world experience.
    <p className='pt-6'>
    This program isn't just about building software; it's about fostering a community of learners and creators. Vinyasa Summer of Code encourages interdisciplinary collaboration, welcoming diverse perspectives from both computer science and design fields.
<br />
Join us for a summer of innovation, learning, and growth at Vinyasa Summer of Code. Let's code, create, and inspire together!
    </p>
    
    
    </p>
    </section>
    </div>
    <br />
</div>

  )
}

export default About
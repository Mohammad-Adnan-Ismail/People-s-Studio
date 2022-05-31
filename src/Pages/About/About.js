import React from 'react';
import image from '../../images/79501147_834337333691577_7904246769750376448_n.jpg'

const About = () => {
    return (
        <div className='text-center'>
            <h1 className='text-danger'>About Me</h1>
            <img src={image} style={{ height: '300px', width: '200px' }} alt="" />
            <h3>Name: Mohammad Adnan Ismail </h3>
            <div >
                <h5 >My Goal and How i started?</h5>
                <p>Hello! i am Adnan from Noakhali. I am a running student in National University. Being an member of middle class family my life wasn't easy and smooth at all. But i always had passion  and desire to do coding. Make fancy websites. From childhood i always curious how they do it. How google do something like that. After getting in college i jusrt fall down in hard time along with my family. i started job  and working hard to recover ourselves from those hard time. apart from doing all the job things i always tried to follow my passion. So one day i heard about Programming Hero Team from my cousin who was student of Batch 4. He told me that, they teach begainner like who have 0 knowledge in coding. And they are good and supportive. Then i enrolled in batch 5 and started to learning. </p>
                <h5>How i working for it?</h5>
                <p>I started programming  and learningmethod with Programming hero. I always follow their instructions. in free time after class i try to make different websites with following their method. If i stuck in any steps I always took help from google. Also I research about resources daily. And always try to impliment new method.</p>
            </div>



        </div>
    );
};

export default About;
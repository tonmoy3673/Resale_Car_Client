import React, { useEffect } from 'react';
import { GoMailRead } from "react-icons/go";
import { BsFillTelephoneForwardFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-hot-toast';
import './Contact.css';
import Lottie from "lottie-react";
import contact from '../Home/Lottie/contact.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

  const form = useRef();
  useEffect(() => {
        AOS.init();
      }, []);

  const handleSendEmail = (event) => {
    event.preventDefault()

    emailjs.sendForm('service_b23f4pf', 'template_h6dcqro', form.current, 'M_ZpfpVp-QjxlUJBz')
      .then((result) => {
        console.log(result.text);
        toast.success('Message send')
      }, (error) => {
        console.log(error.text);
      });
    form.current.reset();
  }

  return (
    <div className=''>
      

      <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
        <Lottie animationData={contact} loop={true} className='lg:w-8/12 mx-auto rounded' data-aos="zoom-in-down" data-aos-duration="2000" data-aos-delay="2100"/>

        <div data-aos="fade-up-left" data-aos-duration="2000" data-aos-delay="2100">
      <h1 className='text-4xl text1 lg:text-start mb-3 font-bold text-center'>
        Contact US
        </h1>
        <p>Reach out to the seller to express your interest and ask any questions you may have about the car. You can inquire about its condition, maintenance history, ownership, and any additional details you require</p>
      </div>
       
      </div>
      

      <div>

      </div>
      <div className='py-16'>

        <div id='contact' className='rounded banner' style={{ backgroundImage: `url("https://i.ibb.co/rwKqLGz/carBG.jpg")`, backgroundPosition:'center',backgroundSize:'cover' }} data-aos="zoom-in-up" data-aos-duration="1600" data-aos-delay="2500">

          <h1 className='text-center text-4xl font-semibold mt-8 text-white py-16'>Please type here</h1>


          <div className=''>
            <div className="hero lg:w-4/5 w-full mx-auto">
              <div className="flex flex-col items-start lg:gap-x-40 lg:flex-row-reverse">
                <form ref={form} onSubmit={handleSendEmail} className="card-body justify-items-center p-0 text-white">
                  <div className="form-control mb-2">
                    <input name='name' type="text" placeholder="Name" className="input input-bordered lg:w-96 w-full bg-transparent  border border-white" required />
                  </div>
                  <div className="form-control mb-2">
                    <input name='email' type="email" placeholder="Email" className="input input-bordered border-white bg-transparent border" required />
                  </div>
                  <div className='form-control mb-2'>
                    <textarea name='message' className="textarea textarea-bordered border bg-transparent border-white" placeholder="Message" required></textarea>
                  </div>
                  <div className="form-control mt-6 mb-8">
                    <button type='submit' className="btn border-none btn1 text-white"><FaTelegramPlane className='mr-2' /><span>Send Message</span></button>
                  </div>
                </form>
                <div className='flex flex-col pt-4 text-white'>

                  <h1 className='text-3xl flex items-center my-3'><GoMailRead className='mr-3' /> <span className='text-xl font-medium'>cardealer@gmail.com</span></h1>
                  <h1 className='text-3xl flex items-center my-3'><BsFillTelephoneForwardFill className='mr-3' /> <span className='text-xl font-medium'>+880199999999</span></h1>
                  <h1 className='text-3xl flex items-center my-3'><MdLocationOn className='mr-3' /> <span className='text-xl font-medium'>Dhaka, Bangladesh</span></h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
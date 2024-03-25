import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import AboutBanner from '../Components/AboutBanner';

function About() {
    return (
      <div style = {{ fontFamily: 'Copperplate, serif', fontSize: '20px'}}>
        <AboutBanner />
        <Swiper 
          spaceBetween={30}
          slidesPerView={3}>
          
          <SwiperSlide>
          <img style={{ width: 600, height: 400 }} src="https://images.unsplash.com/photo-1615827493656-cbafd73e4408?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
          <h2>Who are we?</h2>
          <p>At Big Cat Rescue, we are not just a sanctuary for tigers and other big cats; 
          we’re a movement. Our mission is twofold: to put an end to the abuse of big cats living 
          in captivity and to work tirelessly to prevent the extinction of big cats in the wild. 
          We’ve been on this journey since November 4, 1992, 
          and every single day we come closer to realizing our vision—a world where the majesty 
          of these magnificent creatures is respected and protected. </p>
          </SwiperSlide>

          <SwiperSlide>
            <img style={{ width: 600, height: 400 }} src="https://images.unsplash.com/photo-1618945197420-dba362b35ff5?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
            <h2>What makes us different?</h2>
            <p>While many organizations work to rescue and rehabilitate, we go a step further. 
            We are at the frontline, combating the very systems that perpetuate the cycle of 
            abuse and endangerment. Through groundbreaking legislation that ended the private 
            possession of big cats and public contact with them and their cubs in 2022 and other 
            impactful educational initiatives, we aim to put a global end to the exotic cat trade.</p>
          </SwiperSlide>

          <SwiperSlide>
            <img style={{ width: 600, height: 400 }} src="https://images.unsplash.com/photo-1692436023156-6581d3f245f2?q=80&w=2129&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <h2>Where are our rescues from?</h2>
            <p>Each resident of Big Cat Rescue has a story—some were abandoned, 
              others were abused to entertain, and many were saved from unthinkable fates. 
              Their stories are a testament to the resilience of spirit and the enduring will to live free.</p>
          </SwiperSlide>

        </Swiper>

        <h2 style={{ textAlign: "center" }}>Dive Deeper</h2>

        <p>Big Cat Rescue, one of the world’s most influential accredited sanctuaries for exotic cats, and a leading advocate in ending the abuse of captive big cats and saving wild cats from extinction.  We are home to tigers, jaguar, bobcats, servals and other species most of whom have been abandoned, abused, orphaned, saved from being turned into fur coats, or retired from performing acts.</p>
 
        <p>Big Cat Rescue was founded in November of 1992 and is a non-profit 501(c)3 charity. The sanctuary is situated on 67 acres in the Citrus Park area of north Tampa, Florida.</p>

        <p>The cats residing at Big Cat Rescue are here for a variety of reasons, including:</p>
        <ul>
          <li>Abandoned by owners who wrongly thought they would make good pets</li>
          <li>Abused by owners in order to force them to perform</li>
          <li>Retired from performing acts</li>
          <li>Saved from being slaughtered to make fur coats</li>
          <li>Rescued as babies after hunters killed their mothers.</li>  
        </ul>

        <p>Big Cat Rescue is:</p>
        <ul>
          <li>Accredited by the Global Federation of Sanctuaries</li>
          <li>Certified by Independent Charities of America as a “Best in America Charity”</li>
          <li>Member of the World Society for Protection of Animals</li>
          <li>Rated 4 Stars by Charity Navigator (their highest rating) and has one of the highest scores of any animal based charity</li>
          <li>Part of a global coalition including HSUS, IFAW, WWF, GFAS, Born Free and other animal protection groups who are working together to end big cat abuse.</li>
        </ul>

        <p>We’re proud to have the endorsement of celebrities, the backing of multiple awards, 
          and extensive media coverage. We maintain complete transparency, sharing our finances 
          and operations, so you can be confident that your support is put to the best possible use.</p>
      </div>
      
    );
  }
  
  export default About;

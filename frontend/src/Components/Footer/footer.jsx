import React from 'react'
import './footer.css'
import video1 from '../../Assets/video1.mp4'
import {FiChevronRight, FiSend} from 'react-icons/fi'
import logo from '../../Assets/logo.png'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiOutlineYoutube} from 'react-icons/ai'
import {AiOutlineInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='footer'>
      <div className='videoDiv'>
        <video src={video1} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <h1>Subsribe to get the latest news about us</h1>
          </div>

          <div className="inputDiv">
            <input type="text" placeholder='Enter Email Address'/>
            <button className="btn flex" type='submit'>
             Subscribe <FiSend className="icon" />
            </button>
          </div>

        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href='#' className='logo flex'>
                <img src={logo} alt="Error" className="icon" ></img>
              </a>
            </div>

            <div className="footerParagraph">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni commodi beatae, magnam, hic voluptatibus fugiat quasi quidem, at dolores quos iusto quibusdam amet minima facere ratione perspiciatis! Ad, ea sapiente!
              Debitis vitae nulla hic voluptas non, ipsam sed soluta cumque nobis numquam officiis, ut corrupti! Dolorem doloremque provident voluptas ipsa ad et fugit nisi! Aut culpa eaque laboriosam cum! Velit!
              Praesentium error recusandae animi illum neque placeat cum numquam cupiditate, natus facilis, est doloremque amet porro assumenda veniam totam nemo reprehenderit exercitationem voluptatibus sit! Deleniti unde placeat vitae ea? Saepe.
              Dicta asperiores consectetur blanditiis impedit maxime non delectus culpa quae omnis quia hic beatae obcaecati aut, qui in et odio ab? Accusamus corporis totam impedit consectetur aliquam eius facilis vel.

            </div>

            <div className="footerSocials flex">
              <AiOutlineTwitter className="icon" />
              <AiOutlineYoutube className="icon" />
              <AiOutlineInstagram className="icon"/>
              <FaTripadvisor className="icon"/>

            </div>
          </div>

          <div className="footerLinks grid">
              <div className="linkGroup">
                <span className="groupTitle">
                  OUR WEBSITE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  About
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Tourism
                </li>
              </div>

              <div className="linkGroup">
                <span className="groupTitle">
                  OUR WEBSITE
                </span>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Services
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  About
                </li>

                <li className="footerList flex">
                  <FiChevronRight className='icon' />
                  Tourism
                </li>
              </div>
          </div>

          <div className="footerDiv flex">
            

          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

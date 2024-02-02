import './App.css';
import { IoIosMail, IoIosStar, IoIosStarHalf, IoIosArrowBack, IoIosArrowForward, IoLogoFacebook, IoLogoTwitter, IoLogoGoogleplus, IoLogoLinkedin, IoLogoInstagram, IoLogoYoutube, IoLogoWhatsapp } from "react-icons/io";
import { HiSun } from "react-icons/hi";
import { FaWhatsapp, FaHandPointRight } from "react-icons/fa";
import { TiSocialTwitter, TiSocialFacebook, TiSocialGooglePlus, TiSocialLinkedin, TiSocialInstagram, TiSocialYoutube, } from "react-icons/ti";
import { PiQuotesFill } from "react-icons/pi";
import { BiSolidBank } from "react-icons/bi";


import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import logo from './image/logo.svg';
import about from './image/aboutus.webp';
import happyper from './image/student.jpg';
import happy1 from './image/happy-students img.webp';
import happy2 from './image/happy student.png';
import flogo from './image/footer logo.svg';


var mainmenu = ['HOME', 'COURSES', 'ACTIVITES', 'BLOG', 'KNOW-US', 'GET IN TOUCH', 'STUDENT ZONE'];

var main_slider1 = [require('./image/slider img 1.webp'), require('./image/slider img 2.webp'), require('./image/slider img 4.webp'), require('./image/slider img 3.webp')]

var offered_courses = [
  { img: require('./image/offered1.webp'), name: 'Full Stack' },
  { img: require('./image/offered2.webp'), name: 'Game development' },
  { img: require('./image/offered3.webp'), name: 'Laravel php' },
  { img: require('./image/offered4.webp'), name: 'Node js' },
  { img: require('./image/offered5.webp'), name: 'Civil-Mech.Engineering' },
  { img: require('./image/offered6.webp'), name: 'Business Devlopment' }
]

var keybord = [
  { img: require('./image/18.png'), num: '14000+', text: 'HAPPY STUDENTS' },
  { img: require('./image/15.png'), num: '10+', text: 'CERTIFICATION APPROVAL' },
  { img: require('./image/16.png'), num: '70+', text: 'CERTIFIED TEACHERS' },
  { img: require('./image/18.png'), num: '9000+', text: 'STUDENTS PLACED' },
]

var read_our = [
  { img: require('./image/111.png'), heading: "Industry Experts As Trainers", des: "Our trainers have 5+ years of industry experience coupled with extensive research and analysis." },
  { img: require('./image/222.png'), heading: "Latest Curriculum", des: "We Provides latest curriculuuch a way that Students will get full knowledge within a short time." },
  { img: require('./image/333.png'), heading: "Latest Technology", des: "We strive to let you have a solid foundational knowledge of technologies shaping the IT World today." },
  { img: require('./image/444.png'), heading: "Interview Assistance", des: "At the end of each training,our tible technical questions technical questions you may be asked." },
  { img: require('./image/555.png'), heading: "Free Upgradation", des: "We will be provided free upgradation for any newer version of the course you have." },
  { img: require('./image/666.png'), heading: "Lifetime Support", des: "We will provide you lifetime support on aaaavfsll the courses you learned from us." }
]

var placement_slider = [require('./image/Zenex-Solutions.png'), require('./image/templatemela.png'), require('./image/sokf.png'), require('./image/Lv-infotech01.png'), require('./image/Codelab7.png'),]

var demand_course = ['Best C++ Programming Langtitute', 'Advance Angular js training institute in surat', 'game design course in katargam', 'game design course in katargam', 'Web design training institute in katargam', 'Web design training institute in katargam', 'Android app development institute', 'Web design training institute in katargam', 'solidworks training institute in Mota Varachha', 'react js training institute in surat', 'Web design training institute in varachha', 'Creo parametrics training institute in varachha', 'Live game development training institute', 'Live game development training institute', 'Best nodejs training institute']

function App() {
  return (
    <div>
      {/* *********Top-Menu Start********* */}
      <div className='top-menu'>
        <div className='container'>
          <div className='flex'>
            <div className='flex'>
              <div className='flex top-right'>
                <IoIosMail></IoIosMail>
                <p className='top-text'>info@cdmi.in</p>
              </div>
              <div className='flex'>
                <HiSun></HiSun>
                <p className='top-text'>Verify Certificate</p>
              </div>
            </div>
            <div className='top-center'>
              <p>HAVE ANY QUESTION ? +91 90333 16003</p>
            </div>
            <div className='flex'>
              <TiSocialFacebook className='top-icon'></TiSocialFacebook>
              <TiSocialTwitter className='top-icon'></TiSocialTwitter>
              <TiSocialGooglePlus className='top-icon'></TiSocialGooglePlus>
              <TiSocialLinkedin className='top-icon'></TiSocialLinkedin>
              <TiSocialInstagram className='top-icon'></TiSocialInstagram>
              <TiSocialYoutube className='top-icon'></TiSocialYoutube>
              <FaWhatsapp className='top-icon'></FaWhatsapp>
            </div>
          </div>
        </div>
      </div>

      {/* Top-menu end */}

      {/* Main- Menu  Start*/}
      <div className='container'>
        <div className='flex main-menu'>
          <div className='main-logo'>
            <img src={logo}></img>
          </div>
          <div className='main-header'>
            <ul className='flexs'>

              {
                mainmenu.map((ele, ind, arr) => {
                  return (
                    <li key={ind}>{ele}</li>
                  )

                })
              }
            </ul>
          </div>
        </div>
      </div>

      {/* Main- Menu  End*/}


      {/* Main-Menu-Slider Start*/}

      <OwlCarousel className='owl-theme' items={1} autoplay autoplayTimeout={2000} loop margin={10} nav dots={false}>
        {
          main_slider1.map((ele) => {
            return (
              <div class='item'>
                <img src={ele}></img>
              </div>
            )
          })
        }
      </OwlCarousel>

      {/* Main-Menu-Slider End*/}


      {/* OFFERED COURSES Start */}

      <div className='spacer container offered'>
        <p className='offered-s'>CREATIVE COURSES
          <div className='offered-courses' ></div>
        </p>
        <h1>OFFERED COURSES</h1>
        <div className='flex offered-row'>
          {
            offered_courses.map((ele, ind) => {
              return (
                <div key={ind}>
                  <img src={ele.img}></img>
                  <h2>{ele.name}</h2>
                  <div className=' flex offered-row2'>
                    <div>
                      <i><IoIosStar></IoIosStar></i>
                      <i><IoIosStar></IoIosStar></i>
                      <i><IoIosStar></IoIosStar></i>
                      <i><IoIosStar></IoIosStar></i>
                      <i><IoIosStarHalf></IoIosStarHalf></i>
                    </div>
                    <button><a>Know more..!</a></button>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>

      <div>
        <button className='view-btn'>View All Courses</button>
      </div>



      {/* OFFERED COURSES End */}


      {/* **************About Us Start************ */}
      <div className='aboutus'>
        <div className='about-left'>
          <p className='about'>ABOUT US
            <div className='about-colorsing'></div>
          </p>
          <h4>IT CAREER IN SURAT, MOVING TOWARDS THE BETTER TOMORROW!</h4>
          <p className='about-text'>Creative Design & Multimedia Institute(CDMI) is a reputed training institute in Gujarat for Data Science, Machine Learning, Blockchain Development, AR/VR Game Development, Full Stack Web Development, Web Design, Game Design, Mobile App Development, Video Editing & All types of IT Courses with 9 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.</p>
          <button className='about-btn'><a>Enroll Now..!</a></button>
        </div>
        <div className='about-right'>
          <img src={about}></img>
          <div className='about-shadow'></div>
        </div>
      </div>

      { /* ***********About Us End***********  */}

      { /* ***********keybord part start***********  */}

      <div className='keybord spacer'>
        <div className='container flex'>
          {
            keybord.map((ele, ind) => {
              return (
                <div>
                  <img src={ele.img}></img>
                  <h2>{ele.num}</h2>
                  <h4>{ele.text}</h4>
                </div>
              )
            })
          }
        </div>
      </div>

      { /* ***********Keybord part End***********  */}

      { /* *************HAPPY STUDENTS Start **************/}

      <div className='container spacer flex happy'>
        <div className='happy-left'>
          <p className='about'>HAPPY STUDENT
            <div className='about-colorsing'></div>
          </p>
          <h1>ALUMUNI SPEAK</h1>
          <div className='flex happystudent-flex'>
            <i className='quotes'><PiQuotesFill></PiQuotesFill></i>
            <div className='icon-flex-right'>
              <i><IoIosArrowBack></IoIosArrowBack></i>
              <i><IoIosArrowForward></IoIosArrowForward></i>
            </div>
          </div>
          <p>Thank you creative multimedia, for best training provided, it's a best training centre for learning softwares like Java,C,C ++ ,python  friendly faculties they clear your doubts and they provide placement facility also finally happy with the training.</p>
          <div className='flex happy-text'>
            <div className='happy-text1'>
              <img src={happyper}></img>
            </div>
            <div className='happy-text2'>
              <h4>GOTI SHRUTI</h4>
              <h5 style={{ fontStyle: 'italic', fontSize: '15px' }}>Android Devloper@ KD Infotech</h5>
            </div>
          </div>
        </div>
        <div className='happy-right'>
          <img src={happy1} className='happy1'></img>
          <img src={happy2} className='happy2'></img>
        </div>
      </div>
      {/* *************HAPPY STUDENTS End************* */}

      {/*************** READ OUR DIFFERENCE SECTION START **********/}

      <div className='read-bg spacer'>
        <div className='pd-y container read'>
          <p className='read-head'>Read Our Difference
            <div className='line'></div>
          </p>
          <h1>Why Choose Creative</h1>

          <div className='flex_wrap read-img flex'>
            {
              read_our.map((ele, ind) => {
                return (
                  <div className='read-1 read1'>
                    <img src={ele.img}></img>

                    <h3>{ele.heading}</h3>
                    <p>{ele.des}</p>
                  </div>
                )
              })

            }
          </div>
        </div>
      </div>
      {/*************** READ OUR DIFFERENCE SECTION END ***************/}

      {/***************STUDENT PLACEMENT  START ***************/}
      <div className='student-place  container'>
        <p className='student-place-p'>STUDENT PLACEMENT
          <div className='student-place-div'></div>
        </p>
        <h1>OUR RECRUITMENT PARTNERS</h1>

        <OwlCarousel className='owl-theme' items={6} className='slider2' autoplay autoplayTimeout={2000} loop margin={10} nav dots={false}>
          {
            placement_slider.map((ele) => {
              return (
                <div class='item'>
                  <img src={ele}></img>
                </div>
              )
            })
          }
        </OwlCarousel>
      {/***************STUDENT PLACEMENT  START ***************/}
      
        {/********DEMANDED COURSE  START ********/}
        <h2>Our Demanded Course -</h2>
        <div className='flex_wrap ancore'>
          {
            demand_course.map((ele, ind) => {
              return (
                <a href=''>{ele}</a>
              )
            })
          }

        </div>
        <h3>Show More</h3>
      </div>
      {/******DEMANDED COURSE  END *******/}


      {/***************STUDENT PLACEMENT SECTION END************** */}

      {/***************FOOTER START ***************/}

      <div className=' footer'>
        <div className=' container spacer footer2'>
          <div className='footer_start'>
            <img src={flogo}></img>
            <p>Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
            <h3>FOLLOW US ON</h3>
            <div className='footer_flex'>
              <IoLogoFacebook className='footer_icon'></IoLogoFacebook>
              <IoLogoTwitter className='footer_icon'></IoLogoTwitter>
              <IoLogoGoogleplus className='footer_icon'></IoLogoGoogleplus>
              <IoLogoLinkedin className='footer_icon'></IoLogoLinkedin>
              <IoLogoInstagram className='footer_icon'></IoLogoInstagram>
              <IoLogoYoutube className='footer_icon'></IoLogoYoutube>
              <IoLogoWhatsapp className='footer_icon'></IoLogoWhatsapp>
            </div>
          </div>
          <div className='footer_center'>
            <h3>FEATURE LINKS</h3>
            <ul>
              <li><i><FaHandPointRight ></FaHandPointRight></i>About Us</li>
              <li><i><FaHandPointRight ></FaHandPointRight></i>Blogs</li>
              <li><i><FaHandPointRight ></FaHandPointRight></i>Join Us</li>
              <li><i><FaHandPointRight ></FaHandPointRight></i>Company Logins</li>
              <li><i><FaHandPointRight ></FaHandPointRight></i>Certificate verification</li>
            </ul>
          </div>
          <div className='footer_end'>
            <h3>CONTACT US</h3>
            <h4>HEAD OFFICE - YOGICHOWK</h4>
            <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat.</p>
            <p>Mo :<font style={{ color: '#EAA800' }}> +91 90333 16003</font></p>
            <h3 style={{ color: '#EAA800' }}>OTHER BRANCHES</h3>
            <ul>
              <li><i><BiSolidBank></BiSolidBank></i>Katargam</li>
              <li><i><BiSolidBank ></BiSolidBank></i>Motavarachha</li>
              <li><i><BiSolidBank ></BiSolidBank></i>Adajan</li>
              <li><i><BiSolidBank ></BiSolidBank></i>Navasari</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='lastsec'>
        <p className='container'>© 2023 All Rights Reserved by Creative Design & Multimedia Institute.</p>
      </div>

    </div>
    // ******************FOOTER END**********************
  );
}

export default App;

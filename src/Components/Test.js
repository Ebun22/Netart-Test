import React from 'react';
import './stylesheet.css'

const Test = () => {
  return (
    <div className="Main">
      <img className="center logo" src={process.env.PUBLIC_URL + '/asserts/logo.png'} alt="logo" />
      <div className="grid">
        <div className="left">
          <img className="" src={process.env.PUBLIC_URL + '/asserts/1.png'} alt="Trophy"/>
        </div>{/*closing left div tag*/}
        <div className="right">
          <p className="bold">C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</p>
          <ul>
            <li> C.R.I.'s energy efficient products are well recognized by various Government Institutions, as
            trustworthy products for various projects across the globe to save energy.</li>
            <li>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
          </ul>
            <img className="img" src={process.env.PUBLIC_URL + '/asserts/2.png'} alt="award"/>
            <p>Government of India has awarded the <span className="bold">"National Energy Conservation Award 2018"</span>.
            Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.</p>
        </div>{/*closing right div tag*/}
      </div>{/*closing grid div tag*/}
      <div className="full-page">
        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.</p>
        <img className="" src={process.env.PUBLIC_URL + '/asserts/3.png'} alt="tools"/>
        <p className="red-border center">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors</p>
      </div>{/*closing full-page div tag*/}
      <div className="bottom">
        <p className="bold center">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</p>
        <p className="list center">
          <span className="red-slash"> CHEMICALS & PROCESS</span><span className="red-slash"> POWER</span>
          <span className="red-slash"> WATER & WASTE WATER</span> <span className="red-slash"> OILS & GAS</span>
          <span className="red-slash"> PHARMA</span><span className="red-slash"> SUGARS & DISTILLERIES</span>
          <span className="red-slash"> PAPER & PULP</span> <span className="red-slash"> MARINE & DEFENCE</span>
          <span className="red-slash"> METAL & MINING</span> <span className="red-slash"> FOOD & BEVERAGE</span>
          <span className="red-slash"> PETROCHEMICAL & REFINERIES</span> <span className="red-slash"> SOLAR</span>
          <span className="red-slash"> BUILDING</span> <span className="red-slash"> HVAC</span><span className="red-slash"> FIRE FIGHTING</span>
          <span className="red-slash"> AGRICULTURE & RESIDENTIAL</span>
         </p>
      </div>{/*closing bottom div tag*/}
      <footer>
        <ul>
          <li><span className="bg"><i className="fa fa-phone"></i></span>Toll free <span className="bold">1800 200 1234</span></li>
          <li><span className="bg"><i className="fa fa-facebook"></i></span>www.facebook.com/cripumps </li>
          <li><img src={process.env.PUBLIC_URL + '/asserts/global.svg'} alt="icon"/><span>www.crigroups.com</span></li>
        </ul>
      </footer>{/*closing full-page div tag*/}
    </div>/*closing left div tag*/
  )
}
export default Test

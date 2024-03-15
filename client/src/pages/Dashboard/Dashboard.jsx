import React, { useState } from 'react';
import Navbar from './Navbar/Navbar';
import { IoIosPeople } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { MdOutlinePoll } from "react-icons/md";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className='contact_info'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='contact_info_sub'>
              <div className='contact_info_item'>
                <IoIosPeople className='voting-icons' />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Voters
                  </div>
                  <div className='contact_info_text'>
                    0
                  </div>
                </div>
              </div>

              <div className='contact_info_item'>
                <FaRegUser className='voting-icons' />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Candidates
                  </div>
                  <div className='contact_info_text'>
                    0
                  </div>
                </div>
              </div>

              <div className='contact_info_item'>
                <MdOutlinePoll className='voting-icons' />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>
                    Total Votes
                  </div>
                  <div className='contact_info_text'>
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

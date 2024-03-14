import React from "react";
import Type from "./Type";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="heading">Safe Votes</div>
      <div className="main-content">
        <div className="content1">
          <div className="type-effect">
            <Type />
          </div>
          <div className="blockchain">A Blockchain Based Voting System🚀.</div>
          <div className="caption">
            "Empower Democracy with Blockchain: Secure, Transparent, <br /> and
            Tamper-proof Voting for All."
          </div>
          <div className="btn-container">
            <div className="btn-section">
              <div>
                <Link to="/signup" className="candidate-btn">
                  Candidate
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clip-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
              <div>
                <Link to="/signup" className="candidate-btn">
                  Voter
                  <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                    <path
                      clip-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <iframe
            className="image1"
            src="https://lottie.host/embed/d63a3a04-ce24-4a5e-a22f-f0e8744242f8/23mDVDdC5R.json"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;

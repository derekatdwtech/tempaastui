import React, { useEffect, useState } from "react";
import PageContent from "../components/layout/PageContent";
import { useAuth0 } from "@auth0/auth0-react";
import Config from "../config/config";
import venmo from '../assets/venmo.JPG'
import wallet from '../assets/wallet.png';

const Donate = () => {
  const { user } = useAuth0();
  return (
    <PageContent title="Donate">
      <section className="no-padding-top no-padding-bottom">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="block">
                <div className="title">
                  <strong className="d-block">Hello, {user.nickname}</strong>
                </div>
                <hr></hr>
                <div className="body">
                  <span className="d-block">
                    Tempaast has hosting costs. I don't mind paying those
                    because I think this is a cool project; however if you'd
                    like to support this project, please use the donation links
                    below.
                  </span>
                  <ol>
                    <li>
                      I'd generate one Api Key for each Raspberry Pi. Adding
                      descriptions to Api Key's will be released soon.
                    </li>
                    <li>
                      Don't share your Api Keys. They are uniquely tied to your
                      user. If you give your friend your key, you will see your
                      friends' data....and that's just naughty.
                    </li>
                    <li>
                      Expired Api Keys will appear in your dashboard if they've
                      epxpired. Delete them if you'd like.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-3 col-sm-12">
              <div className="block">
                <div className="title">
                  <strong className="d-block">Venmo</strong>
                </div>
                <hr></hr>
                <div className="body" style={{margin:"0 auto", alignItems:"center", textAlign:"center"}}>
                    <img src={venmo} alt="@Derek-Williams-18" style={{width:"41%", height:"41%", margin:"0 auto"}}/>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-3 col-sm-12">
              <div className="block">
                <div className="title">
                  <strong className="d-block">Meta Mask Wallet Address</strong>
                </div>
                <hr></hr>
                <div className="body" style={{margin:"0 auto", alignItems:"center", textAlign:"center"}}>
                    <img src={wallet} alt="Meta Mask Wallet" style={{width:"35%", height:"35%", margin:"0 auto"}}/>
                    <p>Wallet Address: 0xb73F32C9e14Ac2e2e964B8A466389e233d5CDAfC</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageContent>
  );
};

export default Donate;

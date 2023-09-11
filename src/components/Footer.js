import React from 'react';
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <Wrapper >
            <section className="contact-short">
                <div className="grid grid-two-column">
                    <div>
                        <h3>Ready to get started?</h3>
                        <h3>Talk to us today</h3>
                    </div>

                    <div>
                        <NavLink to="/products"> <Button className="btn hireme-btn"> Get Started </Button></NavLink>
                    </div>
                </div>
            </section>

            {/* footer section */}
            <footer>
                <div className="container  grid grid-four-column">
                    <div className="footer-about">
                        <h3>Akash Manna</h3>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, natus?</p>
                    </div>
                    <div className="footer-subscribe">
                        <h3>Subscribe</h3>
                        <form action="#">
                            <input type="email" name="email" placeholder="YOUR E-MAIL" />
                            <input type="submit" value="subscribe" />
                        </form>
                    </div>
                    <div className="footer-social">
                        <h3>Follow Us</h3>
                        <div className="footer-social--icons">
                            <div>
                                <FaDiscord className="icons" />
                            </div>
                            <div>
                                <FaInstagram className="icons" />
                            </div>
                            <div>
                                <NavLink
                                    to="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                                    >
                                    <FaYoutube className="icons" />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="footer-contact">
                        <h3>Call Us</h3>
                        <p>+91 220393021</p>
                    </div>
                </div>
                <div className="footer-bottom--section">
                    <hr />
                    <div className="container grid grid-two-column ">
                        <p>
                            @{new Date().getFullYear()} Akash Manna. All Rights Reserved
                        </p>
                        <div>
                            <p>PRIVACY POLICY</p>
                            <p>TERMS & CONDITIONS</p>
                        </div>
                    </div>
                </div>
            </footer>
        </Wrapper>
    )
}
const Wrapper = styled.section`
margin-top: 2rem;
    footer{
        background: ${({ theme }) => theme.colors.footer_bg};
        padding-top:13rem;
        padding-bottom: 2rem;
        width: 100vw;
            h3 {
                color: ${({ theme }) => theme.colors.hr};
                margin-bottom: 2.4rem;
            }
            .footer-social--icons {
            display: flex;
            gap: 2rem;
        
                div {
                    padding: 1rem;
                    border-radius: 50%;
                    border: 2px solid ${({ theme }) => theme.colors.white};
                    height: 5rem;
                    .icons {
                    color: ${({ theme }) => theme.colors.white};
                    font-size: 2.4rem;
                    position: relative;
                    cursor: pointer;
                    
                }   
            }
        }
    }
    .footer-bottom--section {
        padding-top: 9rem;
    
        hr {
          margin-bottom: 2rem;
          color: ${({ theme }) => theme.colors.hr};
          height: 0.1px;
        }
      }
    .contact-short {
        max-width: 60vw;
        margin: auto;
        padding: 5rem 10rem;
        background-color: ${({ theme }) => theme.colors.bg};
        border-radius: 1rem;
        box-shadow: ${({ theme }) => theme.colors.shadowSupport};
        transform: translateY(50%);
    
        .grid div:last-child {
          justify-self: end;
          align-self: center;
        }
      }
    @media (max-width: ${({ theme }) => theme.media.mobile}) {
        .contact-short {
          max-width: 80vw;
          margin: 4.8rem auto;
          transform: translateY(0%);
          text-align: center;
    
          .grid div:last-child {
            justify-self: center;
          }
        }
    
        footer {
          padding: 9rem 0 2rem 0;
        }
    
        .footer-bottom--section {
          padding-top: 4.8rem;
        }
      }
`;
export default Footer
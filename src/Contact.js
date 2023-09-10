import styled from "styled-components";

const Contact = () => {
  return <Wrapper>
    <h2 className="common-heading">Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.1409809594697!2d72.8468088963271!3d19.294545330215712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b19c562b3b19%3A0x6a03f8b31cdd7995!2sMaxus%20Mall!5e0!3m2!1sen!2sin!4v1689096717737!5m2!1sen!2sin"   style={{border:'0', height:"60vh",width:"80vw" }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xaygyleg" className="contact-inputs" method="post">
          <input  type="text" name="Username" id="username" autoComplete="off" required placeholder="Username" />
          <input type="email" name="Email" id="email" autoComplete="off" required placeholder="Email" />
          <textarea name="Message" cols="30" rows="10" autoComplete="off" required placeholder="Enter Your Message"></textarea>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </Wrapper>;
};
const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
export default Contact;
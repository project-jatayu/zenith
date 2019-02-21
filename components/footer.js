import Link from 'next/link'

// styles
import '../styles/Footer.css'

const Footer = () => (
    <div className="footer clearfix">
        <div className="box">
            <h4>Contact</h4>
            <p>+91 83100 32933</p>
            <p><a className="footerLink" href="mailto:jatayurvce@gmail.com">jatayurvce@gmail.com</a></p>
            <p>R V College of Engineering,</p>
            <p>Bengaluru, Karnataka</p>
        </div>
        <div className="box">
            <h4>Social</h4>
            <p><a className="footerLink" href="https://www.instagram.com/projectjatayu/">instagram.com/<b>projectjatayu</b></a></p>
            <p><a className="footerLink" href="https://www.facebook.com/ProjectJatayu">facebook.com/<b>projectjatayu</b></a></p>
            <p><a className="footerLink" href="https://www.linkedin.com/in/project-jatayu-rvce-a9b14781/?originalSubdomain=in">Linkedin</a></p>
        </div>
        <div className="box">
            <h4>More</h4>
            <p>Links</p>
            <p>to our software</p>
            <p>can go here</p>
            <p>i guess</p>
        </div>
        <div>
            <p className="bottom-logo"> J A T A Y U</p>
        </div>
        <style jsx>{`
            @import url('https://rsms.me/inter/inter.css');
            html { font-family: 'Inter', sans-serif; padding: 0; margin: 0, font-size: 16px}
            body {
                margin: 0;
                padding: 0;
            }
            .clearfix::after {
                content: "";
                clear: both;
                display: table
            }
            .box  {
                float: left;
                width: 33.33%;
            }
            h4 {
                font-size: 1rem;
                font-weight: bold;
            }
            .bottom-logo {
                font-weight: light;
                font-size: 1.5rem;
                padding: 15rem 0rem 0rem 0rem;
            }
                    `}
        </style>
    </div>
    )

export default Footer

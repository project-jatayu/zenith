import Link from 'next/link'

const Footer = () => (
    <div className="footer clearfix">
        <div className="box">
            <h4>Contact</h4>
            <p>+91 83100 32933</p>
            <p><a href="mailto:jatayurvce@gmail.com">jatayurvce@gmail.com</a></p>
            <p>R V College of Engineering,</p>
            <p>Bengaluru, Karnataka</p>
        </div>
        <div className="box">
            <h4>Social</h4>
            <p><a href="https://www.instagram.com/projectjatayu/">Instagram</a></p>
            <p><a href="https://www.facebook.com/ProjectJatayu">Facebook</a></p>
            <p><a href="https://www.linkedin.com/in/project-jatayu-rvce-a9b14781/?originalSubdomain=in">Linkedin</a></p>
        </div>
        <div className="box">
            <h4>More</h4>
            <p>Links</p>
            <p>to our software</p>
            <p>can go here</p>
            <p>i guess</p>
        </div>
        <div>
            <p className="bottom-logo">Project Jatayu</p>
        </div>
        <style jsx>{`
            @import url('https://rsms.me/inter/inter.css');
            html { font-family: 'Inter', sans-serif; padding: 0; margin: 0 }
            body {
                margin: 0;
                padding: 0;
            }
            .footer {
                position: relative;
                background-color: #fff;
                bottom: 0;
                right: 0;
                left: 0;
                box-shadow: 0px -1em 4em -0.2em #efefef;
                padding: 2em 10em 2em 10em;
                color: #222;
                font-family: "Inter";
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
                font-size: 18px;
                font-weight: bold;
            }
            a {
                color: #999;
                text-decoration: none;
                transition: 0.5s ease;
            }
            a:hover {
                color: #222;
            }
            .bottom-logo {
                font-size: 22px;
                padding: 14em 0em 0em 0em;
            }
                    `}
        </style>
    </div>
    )

export default Footer

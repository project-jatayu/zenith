import Header from '../components/header.js'
import Footer from '../components/footer.js'

import '../styles/Headings.css'
import '../styles/Card.css'

const About = () => (
    <div className="container">
        <Header />
        <div className="body">
            <div className="info center">
                <h2>
                    About
                </h2>
            </div>
            <div className="info center">
                <div className="story">
                    <p>
                        We are the members of "Project Jatayu", an Autonomous Unmanned
                        Aerial Vehicles (UAV) student team from R V College of Engineering
                        (RVCE), Bangalore. Our aim is to design, fabricate and test fully
                        Autonomous UAVs which can be deployed for real time applications. We use
                        advanced processing technologies (Image processing, way point
                        navigation, auto pilot, obstacle avoidance, target detection etc.)
                        and Artificial Intelligence to develop smart UAVs.
                    </p>
                    <p>
                        Started in 2008 by a group of five students, the team first
                        participated in the ‘Australian Outback Challenge – 2009’, an
                        international event which requires all the student teams to
                        develop autonomous UAVs and we won 3rd place internationally
                        and was the first Indian team in doing so. We actively
                        participate in the Student Unmanned Air Systems competition
                        (SUAS) conducted by the Association for Unmanned Vehicle
                        Systems International (AUVSI) held at Maryland, USA. We have
                        also participated in the competition during June 2015 winning a
                        cash award of USD1200.
                    </p>
                    <p>
                        Since then, we have made it to the 2016 and 2018 editions of
                        this competition becoming part of the global fraternity
                        involved in cutting edge research in the field of Autonomous
                        UAVs. Thus, consistently been able to feature in the top 50
                        teams in the world.
                    </p>
                </div>
            </div>

            <br />
 
            <div className="separator">
                <span></span>
            </div>

            <br />

            <div className="info">
                <h2 className="center">Teamspeak</h2>
                <div className="card">
                    <h4>HARDIK DEVRANGADI, AUTONOMOUS MEMBER</h4>
                    <p>
                        I have been with Project  Jatayu for two years now, and am
                        currently working as part of the autonomy team. Working with
                        Jatayu has been a great experience and has given me an
                        opportunity to develop my skills by applying the concepts
                        taught in classes in Unmanned Vehicle Systems. These concepts
                        learnt in Jatayu helps not only in the development of more
                        efficient and accurate systems but also in personal development
                        which is required for career building. 
                    </p>
                    <p>
                        UAVs are playing an
                        important role in today's world filled with technology. Jatayu
                        is working hard to bring innovation and creativity through the
                        design and implementation of UAVs which are stable, efficient
                        and perform autonomous tasks which can be used to develop
                        mankind in emergency situations.
                    </p>
                </div>
                <div className="card">
                    <h4>AKASH, AUTONOMOUS MEMBER</h4>
                    I have been a part for this club for more than one year
                    now. Its been a very enriching experience. Building a drone
                    from the scratch and then flying it for the first time was
                    a great feeling. Working at Jatayu did tinker my brain to a
                    great extent.  Jatayu is a very closely knit group of
                    dedicated individuals who are working in different systems
                    at a club. The atmosphere of working here is also a very
                    positive one where we take care of all the challenges we
                    face. Looking forward to more innovation and fun!
                </div>
            </div>
            <div></div>
        </div>
        <style jsx>{`
            body {
                height: 100%
                margin: 0;
                padding: 0px;
            }
            .container {
                min-height: 100%;
                position: relative;
                margin: 0;
                padding: 0;
            }
            .body {
                font-size: 1rem;
                padding: 4rem 0em 2rem 0em;
                font-family: "Inter"
            }
            .info {
                padding: 0em 22em 0em 22em;
            }
            .center {
                text-align: center;
            }
            .justify {
                text-align: justify;
            }
            .story {
                text-align: justify;
                font-size: 1rem;
            }
           `}</style>
       <Footer />
   </div>
)

export default About

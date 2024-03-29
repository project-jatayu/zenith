import Header from '../components/header.js';
import Footer from '../components/footer.js';
import Link from 'next/link';

import '../styles/Headings.css'
import '../styles/Card.css'
import '../styles/Responsive.css'

function get_cols() {
    return [
        { title: "Never Say Die"         , year: "2009", content: "Awarded the title of 'Never Say Die' award and finished 3rd in the Australian Outback Challenge becoming the first Indian team to do so."} ,
        { title: "Best Debutant"         , year: "2012", content: "First Indian team to participate in the SUAS competition, awarded title of 'Best Debutant' Award and bagged cash prize of $2000."} ,
        { title: "Boeing Aerospace Event", year: "2013", content: "Table-top finish in IIT-Kharagpur Boeing Aerospace Event."} ,
        { title: "SUAS 2014"             , year: "2014", content: "Successfully participated and completed the SUAS 2014 tasks, won four prize barrels worth 50,000 INR."} ,
        { title: "SUAS 2015"             , year: "2015", content: "Successfully participated in and completed the SUAS 2015 tasks, won prize barrels worth $1200."} ,
        { title: "SUAS 2016"             , year: "2016", content: "Successfully participated in and completed the SUAS 2015 tasks, won 3 prize barrels worth $1000."} ,
    ]
}

const Achievements = () => (
    <div className="container">
        <Header />
        <div className="body">
            <div className="row">
                <div className="col-12 center">
                    <h2>Achievements</h2>
                </div>
            </div>
            {get_cols().map((col) => (
                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-6 inrow">
                        <div className="incol-2 card">
                            <h3>{col.title}</h3>
                            <h4>{col.year}</h4>
                            <p>{col.content}</p>
                        </div>
                    </div>
                </div>
            ))}
            <style>{`
                .inrow {
                    display: flex;
                }
                .incol-1 {
                    flex: 20%;
                }
                .incol-2 {
                     flex: 80%;
                }
                html {
                    font-size: 16px;
                }
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
                .center {
                    text-align: center;
                }
                .body {
                    font-size: 18px;
                    padding: 4rem 0rem 2rem 0rem;
                    font-family: "Inter"
                }
                `}</style>
        </div>
        <Footer />
    </div>
)

export default Achievements

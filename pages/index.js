import Header from '../components/header.js'
import Footer from '../components/footer.js'
import Link from 'next/link'

const Index = () => (
    <div>
        <Header />
        <div className="body">
            <h1>Fly to the Zenith</h1>
            <div className="info">
                <p>
                    Project Jatayu is the Autonomous Unmanned Aerial Vehicle
                    team of RVCE. The project's aim is to build and test a <b>fully autonomous piloting system</b> which has the potential to be
                    deployed.
            </p>
            </div>
            <div className="info">
                <Link href="/about">
                    <a>LEARN MORE</a>
                </Link>
            </div>
            <style jsx>{`
                .body {
                    font-size: 18px;
                    padding: 4em 10em 2em 10em;
                    font-family: "Inter"
                }
                h1 {
                    text-align: center;
                    font-size: 72px;
                    font-vairant: bold;
                }
                .info {
                    text-align: center;
                    padding: 0em 24em 2em 24em;
                }
                .clearfix::after {
                    content: "";
                    clear: both;
                    display: table
                }
                .box  {
                    float: left;
                    width: 40%;
                }
                a {
                    background-color: #222;
                    color: #fff;
                    font-size: 15px;
                    box-shadow: 0em 0.7em 1em 0.3em #ccc;
                    padding: 1em 2em 1em 2em;
                    text-decoration: none;
                    border: 0px solid;
                    border-radius: 0.5em;
                    transition: 0.5s ease;
                    width: 5em;
                    margin: 2em;
                }
                a:hover {
                    box-shadow: 0em 0.7em 4em 0.3em #ccc;
                }
                    `}</style>
            </div>
            <Footer />
        </div>
)

export default Index

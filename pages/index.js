import Header from '../components/header.js'
import Footer from '../components/footer.js'

const Index = () => (
    <div>
        <Header />
        <div className="body">
            <h1>Fly to the Zenith</h1>
            <div className="box">
                <p>
                    Project Jatayu is the Autonomous Unmanned Aerial Vehicle
                    (AUAVs) team of RVCE.The project's aim is to build and test a
                    fully autonomous piloting system which has the potential to be
                    deployed.Our multidisciplinary team comprises members from
                    Mechanical, Aerospace, Computer Science, Electronics,
                    Electrical, Instrumentation and Industrial Engineering
                    backgrounds. We work on the development of technology which
                    amalgamates techniques, such as image processing , image and data
                    transmission , antenna design , autonomy on fixed wing and multirotor
                    systems.
                </p>
            </div>
            <div className="box">

            </div>
            <style jsx>{`
                .body {
                    font-size: 18px;
                    padding: 2em 10em 2em 10em;
                }
                h1 {
                    text-align: center;
                    font-size: 44px;
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
                    `}</style>
            </div>
            <Footer />
        </div>
)

export default Index

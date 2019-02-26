
import Header from '../components/header.js'
import Footer from '../components/footer.js'

import '../styles/Headings.css'
import '../styles/imageCard.css'
import '../styles/Responsive.css'

const ImageCard = (props) => (
    <div className="row">
        <div className="col-2"></div>
        <div className="col-8">
            <div className="card">
                <img src={`/static/${props.name}.jpg`}></img>
                <div className="bottom-text">
                    <h3 style={{ textTransform: 'uppercase' }}>{props.name}</h3>
                    <h4 style={{ color: '#888' }}>{props.date}</h4>
                    {props.content}
                </div>
            </div>
        </div>
    </div>
)

const pastWorks = () => (
    <div className="container">
        <Header />
        <div className="body">
            <div className="row center">
                <div className="col-12">
                    <h2>Past Works</h2>
                </div>
            </div>
            <ImageCard name="vayu"
                content="A plane with a wingspan of 2.4m, aircraft weight of 4.5 kg & endurance of 45min, it can lift an additional payload of 3kg. We entered AUVSI – SUAS 2016 with Vayu and secured 18th position among teams from USA, Israel, Germany and Canada"
                date="June 2016"
            />
            <ImageCard name="senitel"
                content="An Octacopter with total weight of 2.5 kg with camera & gimbal stabilization. It is capable of taking off and hovering in tight spaces to transmit high resolution video."
                date="June 2014"
            />
            <ImageCard name="silver surfer"
                content="A small fixed wing UAV that can be easily carried and deployed anywhere by a single person. It incorporates artificial stability for high endurance."
                date="June 2012"
            />
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
            .center {
                text-align: center;
            }
            .justify {
                text-align: justify;
            }
           `}</style>
       <Footer />
   </div>
)

export default pastWorks

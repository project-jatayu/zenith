import Link from 'next/link'
import '../styles/Responsive.css'

const Header = () => (
    <div className="header" id="nav">
        <div className="row center">
            <div className="col-12">
                <Link href='/'>
                    <a className="logo">Project Jatayu</a>
                </Link>
            </div>
        </div>
        <div className="row center">
            <div className="col-12">
                <Link href='/subsystems'>
                    <a className="navlinks">SUBSYSTEMS</a>
                </Link>
                <Link href='/pastworks'>
                    <a className="navlinks">PAST WORKS</a>
                </Link>
                <Link href='/achievements'>
                    <a className="navlinks">ACHIEVEMENTS</a>
                </Link>
            </div>
        </div>
        <a href="javascript:void(0)" className="menu" onClick="dropdown()">
            down
        </a>

        <style jsx>{`
        @import url('https://rsms.me/inter/inter.css');
        html { font-family: 'Inter', sans-serif; font-size: 16px}
            * {
                box-sizing: border-box;
             }
            .header {
                width: 100%;
                float: left;
                display: block;
                padding: 1rem 0;
                box-shadow: 0rem 1rem 4rem -0.2rem #efefef;
                font-size: 1rem;
                font-family: "Inter";
            }
            .logo {
                font-size: 1.2rem;
                font-weight: bold;
                color: #222;
            }
            .logo:hover {
                background-color: #222;
                color: #fff;
            }
            a {
                border: 0px solid;
                border-radius: 0.5rem;
                background-color: #fff;
                padding: 0.5rem 1rem 0.5rem 1rem;
                margin: 1rem;
                color: #888;
                text-decoration: none;
                transition: 0.5s ease;
                font-weight: light;
            }
            a:hover {
                background-color: #eee;
            }
            .center {
                text-align: center;
            }
            .active {
                color: #fff;
                background-color: #222;
                font-weight: bold
            }
            .menu {
                display: none;
            }
                    `}</style>
            </div>
)

export default Header


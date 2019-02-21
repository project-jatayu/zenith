import Link from 'next/link'

const Header = () => (
    <div className="header">
        <Link href='/'>
            <a className="logo">Project Jatayu</a>
        </Link>
        <div className="right-links">
            <Link href='/'>
                <a>Subsystems</a>
            </Link>
            <Link href='/about'>
                <a>Past Works</a>
            </Link>
            <Link href='/contact'>
                <a>Achievements</a>
            </Link>
        </div>

        <style jsx>{`
        @import url('https://rsms.me/inter/inter.css');
        html { font-family: 'Inter', sans-serif; font-size: 16px}
            .header {
                text-align: left;
                padding: 2rem 10rem 2rem 10rem;
                box-shadow: 0rem 1rem 4rem -0.2rem #efefef;
                font-size: 1rem;
                font-family: "Inter";
            }
            .logo {
                font-size: 1.5rem;
                font-weight: bold;
                color: #222;
            }
            .logo:hover {
                background-color: #fff;
            }
            .right-links {
                float: right;
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
            }
            a:hover {
                background-color: #eee;
            }
            .active {
                color: #fff;
                background-color: #222;
                font-weight: bold
            }
                    `}</style>
    </div>
)

export default Header

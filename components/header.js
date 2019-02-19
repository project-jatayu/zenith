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
        html { font-family: 'Inter', sans-serif; }
            .header {
                text-align: left;
                padding: 2em 10em 2em 10em;
                box-shadow: 0px 1em 4em -0.2em #efefef;
                font-size: 18px;
                font-family: "Inter";
            }
            .logo {
                font-size: 24px;
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
                border-radius: 0.5em;
                background-color: #fff;
                padding: 0.5em 1em 0.5em 1em;
                margin: 1em;
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

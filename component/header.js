import Link from 'next/link'

const Header = () => {
    return(
        <div className="header">
            <div className="navbar">
                <Link href="/">
                    <a>所有問卷</a>
                </Link>
                <Link href="/upload">
                    <a>發布問卷</a>
                </Link>
            </div>
        </div>
    )
}

export default Header;
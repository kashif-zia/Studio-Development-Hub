import React from 'react'
import './style.scss'
import mainLogo from 'assets/images/main-logo.svg'

export default function Header() {
    return (
        <>
            <header>
                <div className="container-fluid p-0">     
                        <nav className="navbar navbar-expand-lg navbar-light main-navbar p-0">
                            <a className="navbar-brand p-0" href="javascript:void(0)">
                                <img src={mainLogo} alt="Main logo image" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-link" href="javascript:void(0)">
                                        <span className='dot'></span> SDHとは</a>
                                    <a className="nav-link" href="javascript:void(0)">
                                        <span className='dot'></span>ソリューション</a>
                                    <a className="nav-link" href="javascript:void(0)">
                                        <span className='dot'></span>ご利用の流れ</a>
                                    <a className="nav-link" href="javascript:void(0)">
                                        <span className='dot'></span>よくある質問</a>
                                </div>
                                <button className='lang-button'>
                                    <span className='lang-en'>EN </span>
                                    <span className='lang-slash'> / </span>
                                    <span className='lang-jp'> JP</span>
                                </button>
                            </div>
                        </nav>                   
                </div>
            </header>
            {/* <header className='mobile-nav d-none'>
                <nav className="navbar navbar-expand-lg navbar-light p-0">
                    <a className="navbar-brand p-0" href="javascript:void(0)">
                        <img src={mainLogo} alt="Main logo image" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <img src={tagleIcon} alt="Main logo image" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="javascript:void(0)">
                            <span className='dot'></span> SDHとは</a>
                            <a className="nav-link" href="javascript:void(0)">
                                <span className='dot'></span>ソリューション</a>
                            <a className="nav-link" href="javascript:void(0)">
                                <span className='dot'></span>ご利用の流れ</a>
                            <a className="nav-link" href="javascript:void(0)">
                                <span className='dot'></span>よくある質問</a>
                        </div>
                        <button className='inquiry-bitton'>
                            お問い合わせ
                        </button>
                    </div>
                </nav>
            </header> */}
        </>
    )
}

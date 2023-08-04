import React from 'react'
import Header from 'components/Header'
import './style.scss'
import peopleImage from 'assets/images/people.png'
import rigtharrow from 'assets/images/right-arrow-circle.svg'
import catImage from 'assets/images/side-contact-img.svg'
import { Swiper, SwiperSlide } from 'swiper/react'
import embank from 'assets/images/brands/embank.png'
import haydockfinance from 'assets/images/brands/haydockfinance.png'
import ikanobank from 'assets/images/brands/ikanobank.png'
import oricobal from 'assets/images/brands/oricobalimorefinance.png'
import maplefinance from 'assets/images/brands/maplefinance.png'
import sellesasecorp from 'assets/images/brands/sclleasecorp.png'
import yamahaimg from 'assets/images/brands/yamahafs.png'
import dancingImage from 'assets/images/dancing.svg'
import sdhImage from 'assets/images/sdh_mv.png'
import { Autoplay} from 'swiper/modules';
import 'swiper/css';

// Import Swiper styles
import 'swiper/css'


export default function index() {
    return (
        <section className='hero-section'>
            <div className="container-fluid">
                <div className="row">
                    <div className='col-md-9 custom-col-9 p-0'>
                        <Header />
                        <div className='hero-section-content'>
                            <div className="row align-items-center">
                                <div className='col-md-6'>
                                    <div className='section-main-col-left-content'>
                                        <div className='offshore-title'>
                                            <h1>パキスタン×オフショア開発</h1>
                                        </div>
                                        <div className='population-title'>
                                            <p>世界人口第5位</p>
                                        </div>
                                        <div className='offshore-development-title'>
                                            <p>IT国家パキスタンの <br />
                                                オフショア開発サービス</p>
                                        </div>
                                        <div className='offshore-development-desc'>
                                            <p>
                                                日本のスタートアップ、中小企業のアプリ、<br /> システム開発をサポートするサイト
                                            </p>
                                        </div>
                                        <div className='section-main-contact-button'>
                                            <button className='main-contact-btn'>
                                                お問い合わせ
                                            </button>
                                            <span className='arrow-icon'>
                                                <img src={rigtharrow} className="arrow-image" alt="rightarrow" /></span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <img src={peopleImage} className="people-image" alt="peopleImage" />
                                </div>
                            </div>                           
                        </div>
                            <div className="companyLogo-Section">
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper">
                                <SwiperSlide><img className='brand-img' src={embank} alt="image" /></SwiperSlide>
                                <SwiperSlide><img className='brand-img' src={haydockfinance} alt="image" /></SwiperSlide>
                                <SwiperSlide><img className='brand-img' src={ikanobank} alt="image" /></SwiperSlide>
                                <SwiperSlide><img className='brand-img' src={oricobal} alt="image" /></SwiperSlide>
                                <SwiperSlide><img className='brand-img' src={maplefinance} alt="image" /></SwiperSlide>
                                <SwiperSlide><img className='brand-img' src={sellesasecorp} alt="image" /></SwiperSlide>
                                <SwiperSlide><img className='brand-img' src={yamahaimg} alt="image" /></SwiperSlide>
                            </Swiper>
                            </div>
                            
                    </div>
                    <div className='col-md-3 custom-col-3 p-0'>
                        <section className='section-contact-form'>
                            <form className='side-contact-form'>
                                <div className='side-contact-form-header text-center'>
                                    <div className='contct-title'>
                                        <p>{"{ Contact }"}</p>
                                    </div>
                                    <div className='contct-heading'>
                                        <p>まずは無料で相談！</p>
                                    </div>
                                    <div className='contct-desc'>
                                        <p>サービスに関するご質問、ご相談など、お気軽にご相談ください。内容確認後、担当者よりご連絡いたします。</p>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className='side-contact-label' htmlFor="maidenName">氏名</label>
                                    <input type="text" className="form-control" id="maidenName" />
                                </div>
                                <div className="form-group">
                                    <label className='side-contact-label' htmlFor="phoneNumber">電話番号</label>
                                    <input type="text" className="form-control" id="phoneNumber" />
                                </div>
                                <div className="form-group">
                                    <label className='side-contact-label' htmlFor="exampleInputEmail1">メールアドレス</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" />
                                </div>
                                <div className="form-group">
                                    <label className='side-contact-label' htmlFor="companyName">会社名</label>
                                    <input type="text" className="form-control" id="companyName" />
                                </div>
                                <div className="form-group">
                                    <label className='side-contact-label' htmlFor="department">部署</label>
                                    <input type="text" className="form-control" id="department" />
                                </div>
                                <div className="form-group">
                                    <label className='side-contact-label' htmlFor="department">役所</label>
                                    <input type="text" className="form-control" id="department" />
                                </div>
                                <div className="form-group">
                                    <label className='side-contact-label' htmlFor="message">ご相談内容</label>
                                    <textarea className="form-control contact-text-area" rows="" cols=""></textarea>
                                </div>
                                <button type="submit" className="btn contac-submit-button">送信する</button>
                                <div className='contact-announcement-image'>
                                    <img src={catImage} alt="image" />
                                </div>
                            </form>
                        </section>
                    </div>
                   
                </div>
                <div className="row">
                <div className="sdh-mv">
                <img src={sdhImage} className="sdh-image" alt="sdhImage" />
                     </div>
                     
                     <div className="problemSection">
                     <div className="aboutSdh">
                                 <div className="">
                                 <img src={dancingImage} alt="dancing image" />
                                 </div>
                                 <div className="about-p">
                                <p>{"{About SDH }"}
                                 </p>
                                 <h2>Studio Development<br/>Hubとは？</h2>
                                 <p>SDHはパキスタンを拠点としたオフショア開発サービスです。エンジニアの人数規模は単独から10人単位のチーム編成まで、
                                    柔軟に対応いたします。当サービスの強みである日本トップクラスの高品質な開発モデルとプロジェクト管理、
                                    そして迅速なコミュニケーションを駆使し、お客様のビジネスを成功へと導きます。
                                 </p>
                                 </div>
                        </div>
                     <p>{"{Problem }"}
                                 </p>
                     </div>
                </div>
            </div>







       
                <section className='section-main-contact-form'>
                    <div className='container'>
                        <div className="row">
                            <div className='col-md-10 mx-auto'>
                                <div className='contact-form-title'>
                                     <h2>{"{ Contact }"}</h2>                                    
                                </div>
                                <div className='contact-form-heading'>
                                    <p>お問い合わせ</p>                                    
                                </div>
                                <div className='contact-form-desc'>
                                    <p>サービスに関するご質問、ご相談など、お気軽にご相談ください。<br/>
                                         内容確認後、担当者よりご連絡いたします。</p>                                    
                                </div>
                                <form className='main-contact-form'>
                                    <div className="form-group">
                                        <label className='main-contact-label' htmlFor="name">氏名(漢字)</label>
                                        <input type="text" className="form-control main-cntct-inputs" id="name" />
                                    </div>
                                    <div className="form-group">
                                        <label className='main-contact-label' htmlFor="phoneNumber">電話番号</label>
                                        <input type="tel" className="form-control main-cntct-inputs" id="phoneNumber" />
                                            
                                    </div>

                                    <div className="form-group">
                                        <label className='main-contact-label' htmlFor="emailAddress">メールアドレス</label>
                                        <input type="email" className="form-control main-cntct-inputs" id="emailAddress"/>
                                    </div>

                                    <div className="form-group">
                                        <label className='main-contact-label' htmlFor="companyName">会社名</label>
                                        <input type="text" className="form-control main-cntct-inputs" id="companyName" />
                                    </div>
                                    <div className="form-group">
                                        <label className='main-contact-label' htmlFor="department">部署</label>
                                        <input type="text" className="form-control main-cntct-inputs" id="department" />
                                    </div>
                                    <div className="form-group">
                                        <label className='main-contact-label' htmlFor="post">役職</label>
                                        <input type="text" className="form-control main-cntct-inputs" id="post" />
                                    </div>
                                    <div className="form-group">
                                        <label className='main-contact-label' htmlFor="message">メッセージ</label>
                                        <textarea className='form-control contact-form-textarea' />
                                    </div>
                                    <button type="submit" className="btn main-contact-submit-btn">送信する</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
        </section>
    )
}

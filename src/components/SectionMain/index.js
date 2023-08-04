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
import sdhmv from 'assets/images/sdh_mv.png'
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
                            <div className='brands-swiper'>
                            <Swiper
                                slidesPerView={3}
                                spaceBetween={30}
                                loop={true}
                                autoplay={{
                                    delay: 2500,
                                }}
                                modules={[Autoplay]}
                                className="mySwiper">
                                <SwiperSlide><img className='brand-img' src={embank} alt="bankimage"/></SwiperSlide>
                                <SwiperSlide><img className='brand-img' src={haydockfinance} alt="financeimage"/></SwiperSlide>
                                <SwiperSlide><img className='brand-img' src={ikanobank} alt="ikanobankimage"/></SwiperSlide>
                                <SwiperSlide><img className='brand-img' src={oricobal} alt="oricobaimage"/></SwiperSlide>
                                <SwiperSlide><img className='brand-img' src={maplefinance} alt="maplefinanceimage"/></SwiperSlide>
                                <SwiperSlide><img className='brand-img' src={sellesasecorp} alt="ellesasecorpimage"/></SwiperSlide>
                                <SwiperSlide><img className='brand-img' src={yamahaimg} alt="yamahaimage"/></SwiperSlide>
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
                    <div class="sdh-mv">
                        <img src={sdhmv} className="sdh-mv" alt="sdh mv" />
                    </div>
                </div>



            </div>






            <section className='section-questions'>
                <div className='container'>
                    <div class="row">
                        <div className='col-md-10 mx-auto'>
                            <div className='section-question-header'>
                            <div className='question-section-title'>
                                <h2>{"{ Question }"}</h2>
                            </div>
                            <div className='question-section-heading'>
                                <p>よくある質問</p>
                            </div>
                            </div>
                            <div className='question-accordian'>
                                <div class="accordion" id="accordionExample">
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingOne">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <span className='question'>Q</span> エンジニアは何人から採用できますか？
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span>  エンジニアは1人から採用可能です。また2-10人ほどのチーム単位でも採用可能です。
                                            </div>
                                        </div>
                                    </div>
                                  <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingTwo">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                               <span className='question'>Q</span> 契約期間はどれくらいですか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span> 契約期間は半年契約及び1年契約の２種類がございます。
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingThree">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <span className='question'>Q</span>  どのような業種の人材がいますか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span> アプリ、システム開発エンジニア、プロジェクトマネージャー、カスタマーサポート、保守エンジニア、テストQAエンジニアが在籍しています。
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingFour">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    <span className='question'>Q</span> 月額の人材費用以外にも何かお金は発生しますか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span>月額のエンジニアや人材の金額のみとなります。
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingFive">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    <span className='question'>Q</span>  契約後キャンセルはできますか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span> 契約期間中のキャンセルは受け付けておりません。
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingSix">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                    <span className='question'>Q</span>どのようなスキルのエンジニアがいますか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span>業務経験年数3-10年ほどのエンジニアが業務に対応します。
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingSeven">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                    <span className='question'>Q</span>どのような開発技術に対応していますか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span>AWS Amplify、Node.js、React.js、Vue.js、その他フロント開発言語に対応しています。

                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingEight">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                    <span className='question'>Q</span>就業時間は何時から何時ですか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span>日本時間の13時から22時を基本としています。

                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingNine">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                    <span className='question'>Q</span>月の稼働時間はどれくらいですか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span>月の稼働時間は160時間をベースとし、140-180時間の精算幅を設定しています。

                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingTen">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                    <span className='question'>Q</span>24時間・土日対応は可能ですか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span>対応可能です、特にカスタマーサポートや保守エンジニアなどでご相談いただきます。


                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingEleven">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                                    <span className='question'>Q</span> コミュニケーションは何語ですか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span> 日本語でのやりとりになりますが、英語をご希望でも対応できます。
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingTwelve">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                                    <span className='question'>Q</span>  定例などはございますか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span>  お客様の体制にお任せしますが、通常はSlackなどのテキストベースにて行なっています。
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingThirteen">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                                    <span className='question'>Q</span>支払いはどのように行いますか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThirteen" class="collapse" aria-labelledby="headingThirteen" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span>銀行振込にてお支払い頂きます。
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingFourteen">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                                    <span className='question'>Q</span>エンジニアの追加は可能ですか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseFourteen" class="collapse" aria-labelledby="headingFourteen" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span>必要な人数をご指示いただきましたらすぐに対応します。
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingFifteen">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                                    <span className='question'>Q</span> 電話での指示は可能ですか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseFifteen" class="collapse" aria-labelledby="headingFifteen" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span>電話やZoomなどのツールを使用してご指示頂けます。
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card accordian-card">
                                        <div class="card-header accordian-card-header" id="headingSixteen">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                                                    <span className='question'>Q</span> プロジェクトの管理・進捗はどのように確認できますか？
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseSixteen" class="collapse" aria-labelledby="headingSixteen" data-parent="#accordionExample">
                                            <div class="card-body">
                                                <span className='answer'>A</span> JiraやAsanaなどのプロジェクト管理ツールにてチケットを生成しています。
                                            </div>
                                        </div>
                                    </div> 
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                <section className='section-main-contact-form'>
                    <div className='container'>
                        <div class="row">
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
                                    <div class="form-group">
                                        <label className='main-contact-label' for="name">氏名(漢字)</label>
                                        <input type="text" class="form-control main-cntct-inputs" id="name" />
                                    </div>
                                    <div class="form-group">
                                        <label className='main-contact-label' for="phoneNumber">電話番号</label>
                                        <input type="tel" class="form-control main-cntct-inputs" id="phoneNumber" />                                          
                                    </div>
                                    <div class="form-group">
                                        <label className='main-contact-label' for="emailAddress">メールアドレス</label>
                                        <input type="email" class="form-control main-cntct-inputs" id="emailAddress"/>
                                    </div>

                                    <div class="form-group">
                                        <label className='main-contact-label' for="companyName">会社名</label>
                                        <input type="text" class="form-control main-cntct-inputs" id="companyName" />
                                    </div>
                                    <div class="form-group">
                                        <label className='main-contact-label' for="department">部署</label>
                                        <input type="text" class="form-control main-cntct-inputs" id="department" />
                                    </div>
                                    <div class="form-group">
                                        <label className='main-contact-label' for="post">役職</label>
                                        <input type="text" class="form-control main-cntct-inputs" id="post" />
                                    </div>
                                    <div class="form-group">
                                        <label className='main-contact-label' for="message">メッセージ</label>
                                        <textarea className='form-control contact-form-textarea' />
                                    </div>
                                    <button type="submit" class="btn main-contact-submit-btn">送信する</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
        </section>
    )
}

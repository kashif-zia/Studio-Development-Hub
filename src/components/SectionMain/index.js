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
import checkIcon from 'assets/images/check_circle.svg'
import { Autoplay} from 'swiper/modules'
import closeIcon from 'assets/images/closeButton.png'
import openIcon from 'assets/images/OpenButton.png'
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
                            <div className="companyLogo-Section pr-4">
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
                {/* <img src={sdhImage} className="sdh-image" alt="sdhImage" /> */}
                     </div>
                     
                     <div className="problemSection">
                     <div className="col-md-9 custom-col-9">
                     <div className="aboutSdh">
                                 <div className="dancing-img">
                                 <img src={dancingImage} alt="dancing image" />
                                 </div>
                                 <div className="about-p">
                                <p className="aboutSdh-subtext">{"{About SDH }"}
                                 </p>
                                 <h2 className="aboutSdh-h2">Studio Development<br/>Hubとは？</h2>
                                 <p className="aboutSdh-text">SDHはパキスタンを拠点としたオフショア開発サービスです。エンジニアの人数規模は単独から10人単位のチーム編成まで、
                                    柔軟に対応いたします。当サービスの強みである日本トップクラスの高品質な開発モデルとプロジェクト管理、
                                    そして迅速なコミュニケーションを駆使し、お客様のビジネスを成功へと導きます。
                                 </p>
                                 <p className="aboutSdh-mobileText">SDHは月額料金で高品質なオフショアエンジニアを提供するサービスです。1人からの採用だけでなく、2-10人のチーム単位も対応可能です。当サービスの強みは日本式の高品質な開発とプロジェクト管理、そしてスムーズなコミュニケーションです。コミュニケーションは即時レスポンス対応を徹底しており、SlackやLINEなどのプラットフォームを使用しています。AsanaやJiraを活用してプロジェクトはチケット管理をし、毎日のクライアントへのレポート提出も欠かしません。</p>
                                 <p className="aboutSdh-mobileText">またすべての案件にプロジェクトマネージャーをアサインしており、プロジェクト管理を徹底し、弊社ならではの強みを発揮しています。そして現在も複数の企業がSDHサービスを利用し、ボトムラインの改善を実感しています。特に同程度の品質で日本人エンジニアに比べて約60%のコスト削減を実現しています。</p>
                                 </div>
                        </div>
                        <div className="problecSection col-md-9 custom-col-9">
                            <div className="problemHeading">
                                  <p className="problemSub-text text-center">{"{Problem }"}</p>
                                  <h3 className="problemSub-h3 text-center">こんなお悩みありませんか？</h3>
                                  </div>
                                  <div className="problemNotes"> <img src={checkIcon} Class="checkIcon" alt="check-icon" /> 開発の品質は担保されるのだろうか</div>
                               
                        </div>
                        </div>
                     </div>
                </div>
            </div>

            <section className='section-questions'>
                <div className='container'>
                    <div className="row">
                        <div className='col-md-10'>
                            <div className='section-question-header'>
                            <div className='question-section-title'>
                                <h2>{"{ Question }"}</h2>
                            </div>
                            <div className='question-section-heading'>
                                <p>よくある質問</p>
                            </div>
                            </div>
                            <div className='question-accordian'>
                                <div className="accordion" id="accordionExample">
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingOne">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <div className='question'>Q</div> エンジニアは何人から採用できますか？
                                                    <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div>  エンジニアは1人から採用可能です。また2-10人ほどのチーム単位でも採用可能です。
                                            </div>
                                        </div>
                                    </div>
                                 <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingTwo">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                               <div className='question'>Q</div> 契約期間はどれくらいですか？
                                                    <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div> 契約期間は半年契約及び1年契約の２種類がございます。
                                            </div>
                                        </div>
                                    </div> 
                                   <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingThree">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    <div className='question'>Q</div>  どのような業種の人材がいますか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div> アプリ、システム開発エンジニア、プロジェクトマネージャー、カスタマーサポート、保守エンジニア、テストQAエンジニアが在籍しています。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingFour">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    <div className='question'>Q</div> 月額の人材費用以外にも何かお金は発生しますか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div>月額のエンジニアや人材の金額のみとなります。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingFive">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                                    <div className='question'>Q</div>  契約後キャンセルはできますか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseFive" className="collapse" aria-labelledby="headingFive" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div> 契約期間中のキャンセルは受け付けておりません。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingSix">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                    <div className='question'>Q</div>どのようなスキルのエンジニアがいますか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseSix" className="collapse" aria-labelledby="headingSix" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div>業務経験年数3-10年ほどのエンジニアが業務に対応します。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingSeven">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                    <div className='question'>Q</div>どのような開発技術に対応していますか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseSeven" className="collapse" aria-labelledby="headingSeven" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div>AWS Amplify、Node.js、React.js、Vue.js、その他フロント開発言語に対応しています。

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingEight">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                                                    <div className='question'>Q</div>就業時間は何時から何時ですか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseEight" className="collapse" aria-labelledby="headingEight" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div>日本時間の13時から22時を基本としています。

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingNine">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                                                    <div className='question'>Q</div>月の稼働時間はどれくらいですか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseNine" className="collapse" aria-labelledby="headingNine" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div>月の稼働時間は160時間をベースとし、140-180時間の精算幅を設定しています。

                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingTen">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                                                    <div className='question'>Q</div>24時間・土日対応は可能ですか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTen" className="collapse" aria-labelledby="headingTen" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div>対応可能です、特にカスタマーサポートや保守エンジニアなどでご相談いただきます。


                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingEleven">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven">
                                                    <div className='question'>Q</div> コミュニケーションは何語ですか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseEleven" className="collapse" aria-labelledby="headingEleven" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div> 日本語でのやりとりになりますが、英語をご希望でも対応できます。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingTwelve">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve">
                                                    <div className='question'>Q</div>  定例などはございますか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseTwelve" className="collapse" aria-labelledby="headingTwelve" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div>  お客様の体制にお任せしますが、通常はSlackなどのテキストベースにて行なっています。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingThirteen">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen">
                                                    <div className='question'>Q</div>支払いはどのように行いますか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseThirteen" className="collapse" aria-labelledby="headingThirteen" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div>銀行振込にてお支払い頂きます。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingFourteen">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen">
                                                    <div className='question'>Q</div>エンジニアの追加は可能ですか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseFourteen" className="collapse" aria-labelledby="headingFourteen" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div>必要な人数をご指示いただきましたらすぐに対応します。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingFifteen">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen">
                                                    <div className='question'>Q</div> 電話での指示は可能ですか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseFifteen" className="collapse" aria-labelledby="headingFifteen" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div>電話やZoomなどのツールを使用してご指示頂けます。
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card accordian-card">
                                        <div className="card-header accordian-card-header" id="headingSixteen">
                                            <h2 className="mb-0">
                                                <button className="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" data-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen">
                                                    <div className='question'>Q</div> プロジェクトの管理・進捗はどのように確認できますか？
                                                      <div className='clsoeIcon question-icon'>
                                                        <img src={closeIcon} alt="closeIcon" />                                                     
                                                    </div>
                                                    <div className='openIcon question-icon'>
                                                        <img src={openIcon} alt="openIcon" />                                                     
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>
                                        <div id="collapseSixteen" className="collapse" aria-labelledby="headingSixteen" data-parent="#accordionExample">
                                            <div className="card-body">
                                                <div className='answer'>A</div> JiraやAsanaなどのプロジェクト管理ツールにてチケットを生成しています。
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

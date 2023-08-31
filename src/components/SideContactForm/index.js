import React from 'react'
import './style.scss'
import catImage from 'assets/images/side-contact-img.svg'
// import rigtharrow from 'assets/images/right-arrow-circle.svg'

export default function index() {
    return (
        <>
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
                        <img src={catImage} alt="cat" />                        
                    </div>
                </form>
            </section>
        </>
    )
}

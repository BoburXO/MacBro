import React from 'react'
import "../Sect1/Sect1.css"

const Sect1 = () => {
  return (
    <>
        {/* FT code start */}
            <section>
                <div className="container">
                    <h1 className='sect1__h1'><b>Apple</b></h1>
                    <div className="sect1__otadiv">
                        <div className="sect1__otadiv__card">
                            <h4 className='sect1__otadiv__card__h4'>Mac</h4>
                            <div className="sect1__otadiv__card__img1">
                                <img className='sect1__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/38f5c97f-48a9-4582-b508-df528b6faf4d"} alt="" />
                            </div>
                        </div>

                        <div className="sect1__otadiv__card">
                            <h4 className='sect1__otadiv__card__h4'>iPhone</h4>
                            <div className="sect1__otadiv__card__img1">
                                <img className='sect1__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/74f8a955-bba9-400c-92b2-4b30d01761e0"} alt="" />
                            </div>
                        </div>

                        <div className="sect1__otadiv__card">
                            <h4 className='sect1__otadiv__card__h4'>iPad</h4>
                            <div className="sect1__otadiv__card__img1">
                                <img className='sect1__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/3ae993dd-8c51-40e1-800e-b9b24bea91f8"} alt="" />
                            </div>
                        </div>

                        <div className="sect1__otadiv__card">
                            <h4 className='sect1__otadiv__card__h4'>Watch</h4>
                            <div className="sect1__otadiv__card__img1">
                                <img className='sect1__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/16737fa4-faf4-49fc-a74d-b117e036a86c"} alt="" />
                            </div>
                        </div>

                        <div className="sect1__otadiv__card">
                            <h4 className='sect1__otadiv__card__h4'>AirPods</h4>
                            <div className="sect1__otadiv__card__img1">
                                <img className='sect1__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/ac271b93-ed5a-449e-bf2a-2fb7350068ee"} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {/* FT code end */}
    </>
  )
}

export default Sect1
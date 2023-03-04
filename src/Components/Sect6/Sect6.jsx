import React from 'react'
import "../Sect6/Sect6.css"

const Sect6 = () => {
  return (
    <>
      {/* FT code start */}
      <section>
                <div className="container">
                    <h1 className='sect6__h1'><b>Xiaomi</b></h1>
                    <div className="sect6__otadiv">
                        <div className="sect6__otadiv__card">
                            <h4 className='sect6__otadiv__card__h4'>Watches</h4>
                            <div className="sect6__otadiv__card__img1">
                                <img className='sect6__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/7e33d1c4-bae9-43fa-b1a3-172460f1d145"} alt="" />
                            </div>
                        </div>

                        <div className="sect6__otadiv__card">
                            <h4 className='sect6__otadiv__card__h4'>EarBuds</h4>
                            <div className="sect6__otadiv__card__img1">
                                <img className='sect6__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/51ef914c-2680-45e4-9285-394703c1e57f"} alt="" />
                            </div>
                        </div>

                        <div className="sect6__otadiv__card">
                            <h4 className='sect6__otadiv__card__h4'>Others</h4>
                            <div className="sect6__otadiv__card__img1">
                                <img className='sect6__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/0449eb75-b0e2-46a3-9b9c-fdc3668dbd92"} alt="" />
                            </div>
                        </div>
  
                    </div>
                </div>
            </section>
            <br />
        {/* FT code end */}
    </>
  )
}

export default Sect6
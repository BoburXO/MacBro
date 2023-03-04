import React from 'react'
import "../Sect9/Sect9.css"

const Sect9 = () => {
  return (
    <>
     {/* FT code start */}
     <section>
        <div className="container">
            <h1 className='sect9__h1'><b>Подержанные гаджеты</b></h1>
            <div className="sect9__otadiv">
                <div className="sect9__otadiv__card">
                    <h5 className='sect9__otadiv__card__h4'>Подержанные гаджеты</h5>
                    <br />
                    <div className="sect9__otadiv__card__img1">
                        <img className='sect9__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/a14e00df-3404-4544-a5a6-4bec3cae3b38"} alt="" />
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

export default Sect9
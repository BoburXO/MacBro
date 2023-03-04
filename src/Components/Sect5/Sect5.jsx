import React from 'react'
import { Link } from 'react-router-dom'
import "../Sect5/Sect5.css"

const Sect5 = ({data}) => {
    const sam = data?.filter(el => el.name === "SAMSUNG Galaxy Note 20 Ultra 5G 12/256GB Black/2 SIM")
    const sam1 = data?.filter(el => el.name === "Samsung Galaxy S23+")
    const sam3 = data?.filter(el => el.name === "Samsung Galaxy A32")
    const sam4 = data?.filter(el => el.name === "SAMSUNG Galaxy Z Fold 4")
    const sam5 = data?.filter(el => el.name === "Motorola Moto Razr 5G XT2071-3 8/256GB Polished Graphite")
    const sam6 = data?.filter(el => el.name === "Motorola Moto Razr 5G XT2071-3 8/256GB Polished Graphite")
  return (
    <>
      {/* FT code start */}
      <section>
                <div className="container">
                    <h1 className='sect5__h1'><b>Samsung</b></h1>
                    <div className="sect5__otadiv">
                        {sam?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect3__otadiv__card">
                            <h4 className='sect3__otadiv__card__h4'>Galaxy Series Note</h4>
                            <div className="sect3__otadiv__card__img1">
                                <img className='sect3__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/4b06f2c8-140e-4a3c-a526-c623f00c7ea3"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })}

                        {sam1?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect5__otadiv__card">
                            <h4 className='sect5__otadiv__card__h4'>Galaxy Series S</h4>
                            <div className="sect5__otadiv__card__img1">
                                <img className='sect5__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/610ee12c-ce8c-4ca2-a102-234bebab98f5"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })}
                       
                       {sam3?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect5__otadiv__card">
                            <h4 className='sect5__otadiv__card__h4'>Galaxy Series A</h4>
                            <div className="sect5__otadiv__card__img1">
                                <img className='sect5__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/009811b0-d2aa-4233-96b8-a02127faa544"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })}
                        
                        {sam4?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect5__otadiv__card">
                            <h4 className='sect5__otadiv__card__h4'>Galaxy Series Z</h4>
                            <div className="sect5__otadiv__card__img1">
                                <img className='sect5__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/1feec1cd-71f4-434f-9fc8-2b1d4a485cb8"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })}

                        <div className="sect5__otadiv__card">
                            <h4 className='sect5__otadiv__card__h4'>Galaxy Series M</h4>
                            <div className="sect5__otadiv__card__img1">
                                <img className='sect5__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/56f7a258-dc99-418b-a96d-c4b76071e364"} alt="" />
                            </div>
                        </div>

                        <div className="sect5__otadiv__card">
                            <h4 className='sect5__otadiv__card__h4'>Galaxy Tab</h4>
                            <div className="sect5__otadiv__card__img1">
                                <img className='sect5__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/d33a56a9-0804-4c5e-b02b-310f0f85bb12"} alt="" />
                            </div>
                        </div>

                        <div className="sect5__otadiv__card">
                            <h4 className='sect5__otadiv__card__h4'>Galaxy Buds</h4>
                            <div className="sect5__otadiv__card__img1">
                                <img className='sect5__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/50a9410d-e3d0-405a-92bc-8079ae7b23e2"} alt="" />
                            </div>
                        </div>

                        <div className="sect5__otadiv__card">
                            <h4 className='sect5__otadiv__card__h4'>Galaxy Watch</h4>
                            <div className="sect5__otadiv__card__img1">
                                <img className='sect5__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/03149a6f-49ac-4ad0-918d-8c3e4cb70f21"} alt="" />
                            </div>
                        </div>

                        <div className="sect5__otadiv__card">
                            <h4 className='sect5__otadiv__card__h4'>Gusto</h4>
                            <div className="sect5__otadiv__card__img1">
                                <img className='sect5__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/84ab5b47-0507-4c60-9079-74e2913759de"} alt="" />
                            </div>
                        </div>

                        <div className="sect5__otadiv__card">
                            <h4 className='sect5__otadiv__card__h4'>Others</h4>
                            <div className="sect5__otadiv__card__img1">
                                <img className='sect5__otadiv__card__img3' src={"https://cdn.macbro.uz/macbro/38b7c3e9-c836-41df-9665-a9fd5f81619e"} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <br />

            <section>
              <div className="container">
                <div className="sect5__img">
                  <img className='sect5__img__img' src={"https://cdn.macbro.uz/macbro/ddcc0457-3c72-47bf-8e23-64f1f0fc304d"} alt="" />
                </div>
              </div>
            </section>
        {/* FT code end */}
    </>
  )
}

export default Sect5
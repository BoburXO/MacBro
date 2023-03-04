import React from 'react'
import { Link } from "react-router-dom"
import "../Sect4/Sect4.css"

const Sect4 = ({data}) => {
    const sm = data?.filter(el => el.name === "Redmi 10 4/64GB Carbon Gray")
    const sm1 = data?.filter(el => el.name === "Xiaomi Redmi 9C 3/64GB Gray")
    const sm3 = data?.filter(el => el.name === "Google Pixel 6")
    const sm4 = data?.filter(el => el.name === "Poco F4 8/256GB Moonlight Silver 5G")
    const sm5 = data?.filter(el => el.name === "Motorola Moto Razr 5G XT2071-3 8/256GB Polished Graphite")
    const sm6 = data?.filter(el => el.name === "Redmi Note 11 pro")
  return (
    <>
     {/* FT code start */}
     <section>
                <div className="container">
                    <h1 className='sect4__h1'><b>Смартфоны</b></h1>
                    <div className="sect4__otadiv">

                        {sm?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect3__otadiv__card">
                            <h4 className='sect3__otadiv__card__h4'>Redmi Series</h4>
                            <div className="sect3__otadiv__card__img1">
                                <img className='sect3__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/a1781283-c2ef-4e95-b410-d45867e4119f"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })}

                        {sm1?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect3__otadiv__card">
                            <h4 className='sect3__otadiv__card__h4'>MI</h4>
                            <div className="sect3__otadiv__card__img1">
                                <img className='sect3__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/acef728d-2cd5-4f4a-bfc9-fc2006c99963"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })}

                        {sm3?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect3__otadiv__card">
                            <h4 className='sect3__otadiv__card__h4'>Google Pixel</h4>
                            <div className="sect3__otadiv__card__img1">
                                <img className='sect3__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/9e5b6ad5-4b79-47a2-97d4-2add4e629d7e"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })}

                        {sm5?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect3__otadiv__card">
                            <h4 className='sect3__otadiv__card__h4'>Poco</h4>
                            <div className="sect3__otadiv__card__img1">
                                <img className='sect3__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/0da9583a-9e0d-466e-930b-da2be5f2b516"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })}

                        {sm4?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect3__otadiv__card">
                            <h4 className='sect3__otadiv__card__h4'>motorolla</h4>
                            <div className="sect3__otadiv__card__img1">
                                <img className='sect3__otadiv__card__img2' src={"https://cdn.macbro.uz/macbro/232112c3-bc69-4050-b7b2-1d548b49f35b"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })}
                        
                        {sm6?.map((el) => {
                            return (
                        <Link key={el._id} to={`/data/${el.desc}`}>
                            <div className="sect4__otadiv__card">
                            <h4 className='sect4__otadiv__card__h4'>Redmi Note Series</h4>
                            <br />
                            <div className="sect4__otadiv__card__img1">
                                <img className='sect4__otadiv__card__img' src={"https://cdn.macbro.uz/macbro/4d6b8f70-79b4-4dd9-a306-e1659cfd0a02"} alt="" />
                            </div>
                        </div>
                        </Link>
                            )
                        })}
                        

                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="sect4__img">
                        <img className='sect4__img__img' src={"https://cdn.macbro.uz/macbro/41506fdb-2979-4d12-bdb9-9bde4dc1e055"} alt="" />
                    </div>
                </div>
            </section>

        {/* FT code end */}
    </>
  )
}

export default Sect4
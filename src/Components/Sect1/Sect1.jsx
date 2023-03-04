import React from "react";
import { Link } from "react-router-dom";
import "../Sect1/Sect1.css";

const Sect1 = ({ data }) => {
  const apl = data?.filter((el) => el.name == "MacBook Pro 16-inch");
  const apl1 = data?.filter((el) => el.name == "iPhone 14 Pro");
  const apl3 = data?.filter((el) => el.name == "AirPods Pro 2");
  const apl4 = data?.filter((el) => el.name == "Apple Watch Ultra");
  const apl5 = data?.filter((el) => el.name == "iPad Pro 12.9-inch 5th GEN");
  return (
    <>
      {/* FT code start */}
      <section>
        <div className="container">
          <div className="sect1__img">
            <img
              className="sect1__img__img"
              src={
                "https://cdn.macbro.uz/macbro/8edef17b-e87b-4ac4-94e6-4bb822b94817"
              }
              alt=""
            />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1 className="sect1__h1">
            <b>Apple</b>
          </h1>
          <div className="sect1__otadiv">
            {apl?.map((el) => {
              return (
                <Link key={el._id} to={`/data/${el.desc}`}>
                  <div className="sect1__otadiv__card">
                    <h4 className="sect1__otadiv__card__h4">{el.desc}</h4>
                    <div className="sect1__otadiv__card__img1">
                      <img
                        className="sect1__otadiv__card__img"
                        src={el.image}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              );
            })}

            {apl1?.map((el) => {
              return (
                <Link key={el._id} to={`/data/${el.desc}`}>
                  <div className="sect1__otadiv__card">
                    <h4 className="sect1__otadiv__card__h4">{el.desc}</h4>
                    <div className="sect1__otadiv__card__img1">
                      <img
                        className="sect1__otadiv__card__img"
                        src={el.image}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              );
            })}

            {apl5?.map((el) => {
              return (
                <Link key={el._id} to={`/data/${el.desc}`}>
                  <div className="sect1__otadiv__card">
                    <h4 className="sect1__otadiv__card__h4">{el.desc}</h4>
                    <div className="sect1__otadiv__card__img1">
                      <img
                        className="sect1__otadiv__card__img"
                        src={el.image}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              );
            })}

            {apl4?.map((el) => {
              return (
                <Link key={el._id} to={`/data/${el.desc}`}>
                  <div className="sect1__otadiv__card">
                    <h4 className="sect1__otadiv__card__h4">{el.desc}</h4>
                    <div className="sect1__otadiv__card__img1">
                      <img
                        className="sect1__otadiv__card__img"
                        src={el.image}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              );
            })}

            {apl3?.map((el) => {
              return (
                <Link key={el._id} to={`/data/${el.desc}`}>
                  <div className="sect1__otadiv__card">
                    <h4 className="sect1__otadiv__card__h4">{el.desc}</h4>
                    <div className="sect1__otadiv__card__img1">
                      <img
                        className="sect1__otadiv__card__img"
                        src={el.image}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      {/* FT code end */}
    </>
  );
};

export default Sect1;

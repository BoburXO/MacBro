import React from 'react'
import "../Asid1/Asid1.css"

const Asid1 = () => {
  return (
    <>
        <section>
          <div className="container">
            <div className='asid1__btnla'>
                 <button className='asid1__btnla__activ'>Обзор</button>
                 <button>Характеристики</button>
                 <button>Описание</button>
            </div><br />
            <div className="asid1__text">
                <p>Устройство работает на базе современной операционной системы iOS 13. Надёжный чипсет A13 Bionic обеспечивает непревзойдённую
                скорость и производительность для выполнения любой задачи. Мощнейший 6-ядерный процессор, с системой Neural Engine третьего
                поколения, отлично справляется с архивацией, декодированием видео, работой современных видеоигр и т.д. А новые ускорители
                машинного обучения позволяют центральному процессору выполнять более 1 триллиона операций в секунду.</p>
            </div>
          </div>
        </section>
    </>
  )
}

export default Asid1
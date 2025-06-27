import React from 'react'
import './program.css'
import program1 from '../../assets/program-1.png'
import program2 from '../../assets/program-2.png'
import program3 from '../../assets/program-3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

  function Program () {
     return (
      <div className='programs'>
        <div className="program">
          <img src={program1} alt="" />
          <div className="caption">
            <img src={program_icon_1} alt="" />
            <p>Graduation Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={program2} alt="" />
          <div className="caption">
            <img src={program_icon_2} alt="" />
            <p>Masters Degree</p>
          </div>
        </div>
        <div className="program">
          <img src={program3} alt="" />
          <div className="caption">
            <img src={program_icon_3} alt="" />
            <p>Post Graduate Degree</p>
          </div>
        </div>
        </div>
     )
  }

export default Program




.programs {
  margin: 80px auto;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.program img {
  width: 100%;
  border-radius: 10px;
  display: block;
}

.program {
  flex-basis: 31%;
  position: relative;
}

.caption {
  border-radius: 10px;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0,15, 152, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #fff;
  cursor: pointer;
  opacity: 0;
  padding-top: 70%;
  transition: 0.3s;
}

.program:hover .caption {
  opacity: 1;
  padding-top: 0;
}

.caption img {
  width: 60px;
  margin-bottom: 10px;
}
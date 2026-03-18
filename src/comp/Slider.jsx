import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

let style={height:"500px", width:"100%", margin:"150px 0"}
let slideimg={height:"400px", width:"100%", objectFit:"cover",
    position:"relative"
}
let slidetxt={
    position:"absolute", 
    backgroundColor:"#01012DCC", 
    color:"white",
    padding:"30px",
    width:"100%",
    margin:"0",
    bottom:"0",
    left:"0",
    zIndex:"1000",
    boxSizing:"border-box",
    textAlign:"left"
}
let slidetxtb={
   fontSize:"15px",
   paddingBottom:"",
   display:"block"
}
let slidetxtspan={
   fontSize:"11px",
   paddingBottom:"",
   display:"block"
}

function Slider() {
  return (
    <>
      <Swiper
        style={style}
        spaceBetween={30}//간격 (Space between)
        slidesPerView={2}//몇개씩 보여줄지 (Slides per view)
        centeredSlides={true}//중앙 양쪽에 앞뒤 슬라이드 잘려서 나오게 (Centered) 
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div>
                <p style={slidetxt}>
                    <b style={slidetxtb}>Beautiful Flowers</b><br/>
                    <span style={slidetxtspan}>Lorem ipsum dolor sit amet consectetur. 
                        Purus ultrices etiam etiam amet volutpat nullam. 
                        Aliquam fringilla volutpat magna rhoncus tellus purus interdum. 
                        Quis adipiscing in rhoncus adipiscing dui suspendisse pulvinar. 
                        Mi diam egestas laoreet risus diam.</span>
                </p>
                <img src="./images/s1.jpg" alt="" style={slideimg}></img>
                    {/* src폴더안에 있는 것들은 나중에 public으로 들어가고 현재 페이지는 index.html로 가서
                    images는 같은 폴더상에 있으므로 ./images가 맞다  
                    f12로 sources 가서 (index)와 images폴더는 같은 형제 
                    ../하면 아예 top으로 나가버림(../해도 알아서 찾아서 넣어주긴하는데 나중에 깃 올리면 오류남)*/}
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <p style={slidetxt}>
                    <b style={slidetxtb}>Beautiful Flowers</b><br/>
                    <span style={slidetxtspan}>Lorem ipsum dolor sit amet consectetur. 
                        Purus ultrices etiam etiam amet volutpat nullam. 
                        Aliquam fringilla volutpat magna rhoncus tellus purus interdum. 
                        Quis adipiscing in rhoncus adipiscing dui suspendisse pulvinar. 
                        Mi diam egestas laoreet risus diam.</span>
                </p>
                <img src="./images/s2.jpg" alt="" style={slideimg}></img>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div>
                <p style={slidetxt}>
                    <b style={slidetxtb}>Beautiful Flowers</b><br/>
                    <span style={slidetxtspan}>Lorem ipsum dolor sit amet consectetur. 
                        Purus ultrices etiam etiam amet volutpat nullam. 
                        Aliquam fringilla volutpat magna rhoncus tellus purus interdum. 
                        Quis adipiscing in rhoncus adipiscing dui suspendisse pulvinar. 
                        Mi diam egestas laoreet risus diam.</span>
                </p>
                <img src="./images/s3.jpg" alt="" style={slideimg}></img>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider
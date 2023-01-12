import React from 'react'
import "./whyChooseBF.css"


export const WhyChooseBF = () => {

  const WhyChooseData = [
    {
      icon: "Images/Trading-investing-App/icons/customize.png",
      title: "100% Customization",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "Images/Trading-investing-App/icons/expand-arrows.png",
      title: "Highly Scalable",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "Images/Trading-investing-App/icons/support.png",
      title: "Dedicated Support",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    },

    {
      icon: "Images/Trading-investing-App/icons/web.png",
      title: "Global Solution",
      para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae provident quibusdam illo esse iste eligendi,"
    }
    
  ]
  return (
    <div className='RG-whyChoose-BF-Container'>

        <div className='RG-whyChoose-BF-Left-Main-Div'>{WhyChooseData.map((e) => {
            return (

              <div className='RG-whyChoose-BF-Left-Boxes-Div'>
                <div className='RG-whyChoose-BF-div-For-Flex-icon-Head'>
                  <div><img src={e.icon} alt="" /> </div>
                       <h3>{e.title}</h3>
                  </div>
                  <div className='RG-whyChoose-BF-lorem-para'>
                   <p >{e.para}</p>
                   </div>
                 
              </div>
              

            )
          })}
        </div>


            <div className='RG-whyChoose-BF-Right-Main-Div'>
                <div className='RG-whyChoose-BF-Right-Div-For-Text'>
                  <h1>Why Choose Bottom Funnel For Trading & Investing</h1>
                  <div className='RG-whyChoose-BF-Right-HR-Line-container' >
                  <div className='RG-whyChoose-BF-Right-HR-Line'></div>
                  <div className='RG-whyChoose-BF-Right-HR-Line2'></div>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eveniet, amet quas velit labore doloribus atque aperiam beatae eaque minus perferendis quae odit veniam obcaecati! Est, laudantium consequuntur! Adipisci, vero.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eveniet, amet quas velit labore doloribus atque aperiam beatae eaque minus perferendis quae odit veniam obcaecati! Est, laudantium consequuntur! Adipisci, vero.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eveniet, amet quas velit labore doloribus atque aperiam beatae eaque minus perferendis quae odit veniam obcaecati! Est, laudantium consequuntur! Adipisci, vero.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus eveniet, amet quas velit labore doloribus atque aperiam beatae eaque minus perferendis quae odit veniam obcaecati! Est, laudantium consequuntur! Adipisci, vero.</p>
                </div>
            </div>


    </div>
  )
}

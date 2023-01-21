import React from 'react'
import './Revenue.css';


export const Revenue = () => {
  return (
    <div className='Revenue-maindiv'>
    <div className='Revenue-maindivheading'>
        <h1>How can Bottom Funnel Sales helps you accelerate revenue?</h1>
    </div>
    <div className='Revenue-div'>
        <div className='Revenue-innerdiv'>
            <div className='Revenue-innerdivimage'>
                <img src="/Images/SalesPagePhotos/view1.png" alt="logo" />
            </div>
            <h5>Improve seller effectiveness by streamlining your sales process</h5>
        </div>

        {/* <div className='Revenue-innerdiv'>
            <div>
                <img src="/Images/SalesPagePhotos/360view.png" alt="logo" />
            </div>
            <p>Close deals faster with a  360° view of customers </p>
        </div> */}
        <div className='Revenue-innerdiv'>
            <div className='Revenue-innerdivimage'>
                <img src="/Images/SalesPagePhotos/360view.png" alt="logo" />
            </div>
            <h5> Close deals faster with a  360° view of customers </h5>
        </div>

        <div className='Revenue-innerdiv'>
            <div className='Revenue-innerdivimage'>
                <img src="/Images/SalesPagePhotos/view.png" alt="logo" />
            </div>
            <h5>Reduce IT Complexity & cost with a comprehensive solution</h5>
        </div>
    </div>

    </div>
  )
}

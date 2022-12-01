import React from 'react'

const Presentation = () => {
    const backgroundColor = 'https://artsinitiative.columbia.edu/wp-content/uploads/2022/07/Oyu-Oro-1440x1000.jpg'
  return (
    <div style={{position:'relative'}}>
        <div>
            <div style={{backgroundImage: `url(`+ backgroundColor+ `)`,position:'relative', 
  backgroundSize: '100% ',
  backgroundRepeat: 'no-repeat'}}>
                <div style={{height: '370px'}}></div>
                <div style={{height: '190px',display: 'flex',justifyContent:'center', }}>
                    Shobana Jeyasingh Dance creates internationally acclaimed works for stage, site and screen that 
                    are intellectually adventurous and visually exhilarating.
                </div>
            </div>
           
           
        </div>
        <div style={{padding: '45px', display: 'flex', justifyContent: 'space-around', backgroundColor:'black'}}>
           <div style={{ display: 'flex', flexDirection: 'column',justifyContent: 'center'}}>
                <img src='https://ctmd.org/wp-content/uploads/2018/01/Oyu-Oro-1.jpg' alt='al'  
                style={{width: '600px', height: '500px', border: '1px solid white'}} />
                <h4>Shobana Jeyasingh Dance creates internationally acclaimed works </h4>
           </div>
           <div style={{display: 'flex',flexDirection: 'column', justifyContent: 'center'}}>
               <img src='https://static.wixstatic.com/media/ea7ee9_e42d169e363a40eb95a785aff951c28e~mv2_d_2248_1500_s_2.jpg/v1/fill/w_578,h_386,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/ea7ee9_e42d169e363a40eb95a785aff951c28e~mv2_d_2248_1500_s_2.jpg' alt=''
                style={{width: '600px', height: '500px',border: '1px solid white'}}  />
               <h4>Shobana Jeyasingh Dance creates internationally acclaimed works </h4>
           </div> 
        </div>
        <div>
        <div>
                <img src='' alt='' />
                <h3>Shobana Jeyasingh Dance creates internationally acclaimed works </h3>
           </div>
           <div>
               <img src='' alt='' />
               <h3>Shobana Jeyasingh Dance creates internationally acclaimed works </h3>
           </div> 
        </div>
        <div>
            <h2>About</h2>
            <div>We initiate and deliver a range of high-quality projects, workshops, professional 
                development and educational resources for ages 14+.</div>
                <p>More..</p>
        </div>
        <div>
            <h2>About</h2>
            <div>We initiate and deliver a range of high-quality projects, workshops, professional 
                development and educational resources for ages 14+.</div>
                <p>More..</p>
        </div>
    </div>
  )
}

export default Presentation
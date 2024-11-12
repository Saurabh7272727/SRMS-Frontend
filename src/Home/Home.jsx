import React from 'react'
import './Home.scss';
const Home = ({ id }) => {
    return (
        <>
            <div className="home_container">
                <div className='text_home_slider'>
                    <h3>World class education</h3><br /><br />
                    <p>
                        Enriching our brains with new and valuable information improves our ability to think, analyze and process the world around us. The learning process is important because it results in new knowledge — knowledge that opens our minds to new perspectives, ideas, beliefs, cultures and solutions.

                        Learning about different perspectives and worldviews helps any person quickly adapt to new and unfamiliar environments. It also sparks the imagination and helps us tackle unfamiliar challenges.

                        These favorite education quotes encourage us to think about our own perspectives on the world we live in.
                    </p>
                    <p>                      ......saurabh sharma</p>
                    <br /><br />
                    <h2>“The purpose of learning is growth, and our minds, unlike our bodies, can continue growing as we continue to live.”</h2>
                </div>
                <div className='img_home_slider'>
                    <img src="https://img.freepik.com/premium-photo/successful-indian-young-woman-student-freelancer-using-laptop-watching-webinars-working-remotely-elearning-ecommerce-online-isolated-white-background-generative-ai_117038-5437.jpg" alt="img_home_slider" />
                </div>
            </div>
        </>
    )
}

export default Home;
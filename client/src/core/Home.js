import React from 'react'
import Allpost from '../post/Allpost';
function Home() {
    return (
        <div className='mb-5'>
            <div className="jumbotron">
                <h2>Home</h2>
                <p className='lead'>Welcome To Blog CMS</p>
            </div>
            <div className='container-fluid'>
                    <Allpost />
            </div>
        </div>
    )
}

export default Home;

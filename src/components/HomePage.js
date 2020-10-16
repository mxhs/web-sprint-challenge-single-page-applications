import React from 'react'
import {Link} from 'react-router-dom'
import {StyledHero, StyledHomePage} from './styles/StyledHomePage'

const HomePage = () => {



    return (
        <StyledHomePage>
            <StyledHero className="heroContainer">
                <h2>Your Favorite Food, Deliver While Coding</h2>
                <Link to='/pizza'>Pizza?</Link>
            </StyledHero>
            <div>Food Delivery in Gotham City</div>
            <div className='rstrntCard'>
                <img src='https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80' width="300"/>
                <section>
                    <h3>McDonalds</h3>
                    <p>$ - Fast-Food - Burgers</p>
                    <div className='deliveryParams'>
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                    {/* <h3>{rstrnt.name}</h3>
                    <p>{rstrnt.price} - {rstrnt.category} - {rstrnt.food}</p>
                    <div className='deliveryParams'>
                        <p>{rstrnt.distance}</p>
                        <p>{rstrnt.fee}</p>
                    </div> */}
                </section> 
            </div>
        </StyledHomePage>
    )
}

export default HomePage

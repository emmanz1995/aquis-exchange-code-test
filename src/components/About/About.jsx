import React from 'react';
import './about.scss';
import London from '../../assets/london_city-1000x640.jpeg';

const About = () => {
    return (
        <div className="about">
            <div className="about__image__container">
                <img src={London} alt="" className="about__image" />
            </div>
            <div className="about__info">
                <h1>About the stock</h1>
                <p>The Company will look to identify investment opportunities in the high growth FinTech sector within the UK, the USA and Canada. The Board intends to deploy the majority of the Company’s cash resources in the acquisition of minority interests in a number of different, yet to be identified, companies in the broad FinTech sector, and to apply expertise to the business operations and strategic plans of these companies. The Company will focus on investments in DeFi, or decentralised finance otherwise known as open finance, a disruptive technology that uses the blockchain and cryptocurrencies to remove financial intermediaries from transactions creating a quicker, cheaper, more efficient and more secure way of providing financial services. The experience, operational skills and contacts of the Board are intended to act as an accelerator to start-ups and early-stage companies to maximise their profit opportunity. It is anticipated that returns to Shareholders will be delivered through a combination of an appreciation in the Company’s share price and through the adoption of a progressive dividend policy. The Company’s Directors have an established track record, experience and networks in the crypto currency sector, digital assets management and decentralised finance, as well as the media industry to drive value creation.</p>
            </div>
        </div>
    );
}

export default About;
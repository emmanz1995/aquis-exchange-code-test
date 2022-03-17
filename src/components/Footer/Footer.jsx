import React from 'react';
import './footer.scss';
import { blogPosts } from '../../Data';

const Footer = ({}) => {
    return (
        <div className="footer">
            <div className="footer__wrapper">
                <div className="footer__links">
                    <h2>Navigate</h2>
                    <ul>
                        <li><a href="#about">About</a></li>
                        <li><a href="">Aquis Exchange</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Investors</a></li>
                    </ul>
                </div><hr />
                <div className="footer__links">
                    <h2>Content</h2>
                    <ul>
                        <li><a href="">Login</a></li>
                        <li><a href="">Register</a></li>
                        <li><a href="">Videos</a></li>
                        <li><a href="">Media</a></li>
                    </ul>
                </div><hr />
                <div className="footer__links">
                    <h2>Articles</h2>
                    {blogPosts.map(posts => (
                        <ul key={posts?.title}>
                            <li><a href={`/post/${posts?.title}`}>{posts?.title}</a></li>
                        </ul>
                    ))}
                </div><hr />
                <div className="footer__links">
                    <h2>Contact</h2>
                    <ul>
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Offical Website</a></li>
                        <li><a href="">Twitter</a></li>
                        <li><a href="">Email</a></li>
                    </ul>
                </div>
            </div><hr />
            <div style={{ maxWidth: '1200px', margin: '0px auto' }}>
                <div className="footer__copyright">
                    <p>This is a redesign of an existing website, I claim no rights to the images and icons used in this website.</p>
                    <p>Designed by <a href="https://github.com/EmmanuelOkuchukwu">emmanz95</a> &copy; {new Date().getFullYear()}</p>
                </div>
            </div>

        </div>
    );
}

export default Footer;

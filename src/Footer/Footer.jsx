import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <div style={styles.column}>
                    <h4>About Us</h4>
                    <ul>
                        <li><a href="/mission">Our Mission</a></li>
                        <li><a href="/team">Our Team</a></li>
                        <li><a href="/history">History</a></li>
                        <li><a href="/careers">Careers</a></li>
                    </ul>
                </div>
                <div style={styles.column}>
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="/blog">Blog</a></li>
                        <li><a href="/events">Events</a></li>
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                    </ul>
                </div>
                <div style={styles.column}>
                    <h4>Follow Us</h4>
                    <div style={styles.socialIcons}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                    </div>
                </div>
                <div style={styles.column}>
                    <h4>Contact</h4>
                    <p>Email: feeling@gmail.com</p>
                    <p>Phone: +123 456 7890</p>
                </div>
            </div>
            <div style={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} Your Education Site. All rights reserved.</p>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#81b29a',
        color: '#ffffff',
        padding: '20px 0',
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        maxWidth: '1200px',
        margin: '0 auto',
    },
    column: {
        flex: '1',
        margin: '10px',
        minWidth: '200px',
    },
    socialIcons: {
        display: 'flex',
        gap: '10px',
    },
    bottom: {
        textAlign: 'center',
        marginTop: '20px',
    },
};

export default Footer;
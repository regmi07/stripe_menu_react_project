import phoneImg from './phone.svg';
import './CSS/Hero.css';
import { useGlobalContext } from './Context';

const Hero = () => {
    const {closeSubMenu} = useGlobalContext();
    return (
        <section className="hero" onMouseOver={closeSubMenu}>
            <div className="hero-center">
                <article className="hero-info">
                    <h1>
                        Payments infrastructure for the internet
                    </h1>
                    <p>
                        Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.
                    </p>
                    <button className="btn">
                        start now
                    </button>
                </article>
                <article className="hero-image">
                    <img src={phoneImg} alt="phoneImg" className="phone-img" />
                </article>
            </div>
        </section>
    );
}

export default Hero;
import dynamic from 'next/dynamic';
// COMPONENTS
import ArrowButton from '../button/arrow';
import IpDetails from './ip-details';
// STYLES
import classes from './home.module.css';

const Map = dynamic(() => import("../map"), {
    ssr: false
});

export default function Home({ isLoading, state, onSearchHandler }) {
    return (
        <>
            <header className={classes.header}>
                <div className={classes.header__img}>
                    <img src="/images/pattern-bg.png" alt="header" />
                </div>

                <h1> IP Address Tracker </h1>
                <form
                    className={`${classes.header__form} ${isLoading ? classes.header__disabledForm : ''}`}
                    onSubmit={onSearchHandler}
                >
                    <input
                        autoFocus
                        id="input"
                        placeholder="Search for any IP address or domain"
                        aria-label="IP address"
                    />
                    <ArrowButton />
                </form>

                <IpDetails details={state} />
            </header>

            <div className={classes.map}>
                <Map pos={[state.location.lat, state.location.lng]} />
            </div>

            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Asma Mir</a>.
            </div>
        </>
    )
}
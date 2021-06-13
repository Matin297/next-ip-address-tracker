import classes from './ip-details.module.css';

export default function IpDetails({ details }) {
    return (
        <div className={classes.ip__details}>
            <div>
                <div className={classes.ip__details__title}>IP Address</div>
                <div className={classes.ip__details__value}>{details.ip}</div>
            </div>

            <div>
                <div className={classes.ip__details__title}>Location</div>
                <div className={classes.ip__details__value}>
                    {`${details.location.country}, ${details.location.region}, ${details.location.city}`}
                </div>
            </div>

            <div>
                <div className={classes.ip__details__title}>Timezone</div>
                <div className={classes.ip__details__value}>UTC {details.location.timezone}</div>
            </div>

            <div>
                <div className={classes.ip__details__title}>ISP</div>
                <div className={classes.ip__details__value}>{details.isp}</div>
            </div>
        </div>
    );
}
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

export const Statistics = ({ title = '', stats }) => {
    function randomColor() {
        return `rgb(
    ${Math.floor(Math.random() * 256)},
    ${Math.floor(Math.random() * 256)}, 
    ${Math.floor(Math.random() * 256)})
    `;
    }

    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>{title}</h2>}

            <ul className={styles.statList}>
                {stats.map(item => (
                    <li
                        className={styles.item}
                        key={item.id}
                        style={{ backgroundColor: randomColor() }}
                    >
                        <span className={styles.label}>{item.label}</span>
                        <span className={styles.percentage}>{item.percentage}%</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

Statistics.defaultProps = {
    title: '',
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};
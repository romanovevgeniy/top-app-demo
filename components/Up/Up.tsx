import styles from './Up.module.css';
import cn from 'classnames';
import UpIcon from './up.svg';

export const Up = (): JSX.Element => {
	return (
		<div className={styles.up}>
			<UpIcon />
		</div>
	)
};
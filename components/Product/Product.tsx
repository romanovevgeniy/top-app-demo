import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import cn from 'classnames';
import { Card } from '../Card/Card';
import { Rating } from '../Rating/Rating';
import { Tag } from '../Tag/Tag';

export const Product = ({ product, className, ...props }: ProductProps): JSX.Element => {
	return (
		<Card className={styles.product}>
			<div className={styles.logo}><img src={process.env.NEXT_PUBLIC_DOMAIN + product.image} alt={product.title} /></div>
			<div className={styles.title}>{product.title}</div>
			<div className={styles.price}>{product.price}</div>
			<div className={styles.credit}>{product.credit}</div>
			<div className={styles.rating}><Rating rating={product.reviewAvg ?? product.initialRating} /></div>
			<div className={styles.tags}>{product.categories.map(c => <Tag key={c} color='ghost'>{c}</Tag>)}</div>
			<div className={styles.priceTitle}>цена</div>
			<div className={styles.creditTitle}>кредит</div>
			<div className={styles.rateTitle}>{product.reviewCount} отзывов</div>

		</Card>
	);
};
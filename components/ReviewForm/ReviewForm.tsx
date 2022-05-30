import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Input } from '../Input/Input';
import { Rating } from '../Rating/Rating';



export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element => {
	return (
		<div className={cn(styles.reviewForm, className)} {...props}>
			<Input />
			<Input />
			<div>
				<span>Оценка:</span>
				<Rating rating={ } />
			</div>
		</div>
	)
};
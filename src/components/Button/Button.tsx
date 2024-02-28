import React from 'react';
import styles from './Button.module.scss';

interface Props {
	children: React.ReactNode;
	variant: 'background' | 'outline';
	onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
	className?: string;
}

const Button = (props: Props) => {
	const { children, variant, className, onClick } = props;

	const style = variant === 'background' ? styles.background : styles.outline;

	return (
		<>
			<button
				onClick={onClick}
				className={`${styles.btn} ${style} ${className || ''}`}
			>
				{variant === 'background' ? (
					<span>{children}</span>
				) : (
					<>{children}</>
				)}
			</button>
		</>
	);
};

export default Button;

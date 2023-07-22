import { IItem } from '../types/item';

interface StatsProps {
	items: IItem[];
}

const Stats = ({ items }: StatsProps) => {
	if (!items.length) {
		return (
			<footer className="stats">
				<em>Start adding some to your packing list 🚀</em>
			</footer>
		);
	}

	const total = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const percentage = Math.round((numPacked * 100) / total);

	return (
		<footer className="stats">
			<em>
				{percentage === 100
					? 'You got everything! Ready to go 🛫'
					: `You have ${total} items on your list, and you have already packed ${numPacked} (${percentage}%)`}
			</em>
		</footer>
	);
};

export default Stats;

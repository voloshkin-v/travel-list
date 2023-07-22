import { IItem } from '../types/item';

interface IItemProps {
	item: IItem;
	onDeleteItem: (id: number) => void;
	onToggleItem: (id: number) => void;
}

const Item = ({ item, onDeleteItem, onToggleItem }: IItemProps) => {
	return (
		<li>
			<input
				type="checkbox"
				checked={item.packed}
				onChange={() => onToggleItem(item.id)}
			/>
			<span style={item.packed ? { textDecoration: 'line-through' } : {}}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}>❌</button>
		</li>
	);
};

export default Item;

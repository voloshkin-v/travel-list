import { useState } from 'react';

import { IItem } from '../types/item';

import Item from './Item';

interface IPackingListProps {
	items: IItem[];
	onDeleteItem: (id: number) => void;
	onToggleItem: (id: number) => void;
	onClear: () => void;
}

const PackingList = ({
	items,
	onDeleteItem,
	onToggleItem,
	onClear,
}: IPackingListProps) => {
	const [sortBy, setSortBy] = useState('input');

	let sortedItems: IItem[] = [];

	switch (sortBy) {
		case 'description':
			sortedItems = items
				.slice()
				.sort((a, b) => a.description.localeCompare(b.description));
			break;

		case 'packed':
			sortedItems = items
				.slice()
				.sort((a, b) => Number(a.packed) - Number(b.packed));
			break;

		default:
			sortedItems = items;
	}

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setSortBy(e.target.value);
	};

	return (
		<div className="list">
			<ul>
				{sortedItems.map((item) => (
					<Item
						key={item.id}
						item={item}
						onDeleteItem={onDeleteItem}
						onToggleItem={onToggleItem}
					/>
				))}
			</ul>

			<div className="actions">
				<select value={sortBy} onChange={handleSelectChange}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="packed">Sort by packed status</option>
				</select>

				<button onClick={onClear}>Clear list</button>
			</div>
		</div>
	);
};

export default PackingList;

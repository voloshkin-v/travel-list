import React, { useState } from 'react';

import { IItem } from '../types/item';

import Logo from './Logo';
import Form from './Form';
import PackingList from './PackingList';
import Stats from './Stats';

const App = () => {
	const [items, setItems] = useState<IItem[]>([]);

	const handleAddItems = (item: IItem) => {
		setItems((items) => [...items, item]);
	};

	const handleDeleteItem = (id: number) => {
		setItems((items) => items.filter((item) => item.id !== id));
	};

	const handleToggleItem = (id: number) => {
		setItems((items) =>
			items.map((item) =>
				item.id === id ? { ...item, packed: !item.packed } : item
			)
		);
	};

	const handleClearList = () => {
		if (window.confirm('Are you sure you want to delete all items?')) {
			setItems([]);
		}
	};

	return (
		<div className="app">
			<Logo />
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClear={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
};

export default App;

import { useState } from 'react';

import { IItem } from '../types/item';

interface IFormProps {
	onAddItems: (item: IItem) => void;
}

const Form = ({ onAddItems }: IFormProps) => {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!description) {
			return;
		}

		const newItem = {
			id: Date.now(),
			description,
			quantity,
			packed: false,
		};

		onAddItems(newItem);
		setDescription('');
		setQuantity(1);
	};

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(e.target.value);
	};

	const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		setQuantity(+e.target.value);
	};

	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your trip?</h3>
			<select value={quantity} onChange={handleSelectChange}>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option key={num} value={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={handleInputChange}
			/>
			<button type="submit">Add</button>
		</form>
	);
};

export default Form;

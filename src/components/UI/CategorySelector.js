import React from "react";
import { categories } from "../../constants/categories";

const CategorySelector = ({ handleSelectorChange, isPublic }) => {
	return (
		<div>
			<select onChange={(e) => handleSelectorChange(e, isPublic)}>
				<option>Select a category</option>
				<option value="all">All</option>
				{categories.map((category, index) => {
					return (
						<option key={index} value={category}>
							{category}
						</option>
					);
				})}
			</select>
		</div>
	);
};

export default CategorySelector;

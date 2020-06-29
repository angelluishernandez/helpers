import React from "react";
import { categories } from "../../../constants/categories";

const TextInputs = ({ helper, setHelper }) => {
	return (
		<React.Fragment>
			<div className="form-group">
				{/* This will help to determine whether the helper has to be public or not */}
				<label htmlFor="">Do you want anyone to see your helper? </label>
				<div>
					<label htmlFor="">
						Yes
						<input
							type="radio"
							value={true}
							checked={helper.isPublic === true}
							onChange={(e) => setHelper({ ...helper, isPublic: true })}
						/>
					</label>{" "}
					<br />
					<label htmlFor="">
						No
						<input
							type="radio"
							value={false}
							checked={helper.isPublic === false}
							onChange={(e) => setHelper({ ...helper, isPublic: false })}
						/>
					</label>{" "}
					<br />
				</div>
			</div>

			{/* Category used to filter helpers */}

			<div className="form-group">
				<label htmlFor="">
					Which category do you think fits best your helper?
				</label>
				<select
					name="category"
					onChange={(e) => setHelper({ ...helper, category: e.target.value })}
				>
					<option defaultValue>Choose one</option>
					{categories.map((category, index) => (
						<option value={category} key={index}>
							{/* Parse category string to uppercase the first letter */}
							{category.charAt(0).toUpperCase() + category.slice(1)}
						</option>
					))}
				</select>
			</div>
			{/* Title */}

			<div className="form-group">
				<label htmlFor="">Title</label>
				<input
					type="text"
					className="form-control"
					value={helper.title}
					placeholder="title"
					onChange={(e) => setHelper({ ...helper, title: e.target.value })}
				/>
			</div>

			{/* Description */}
			<div className="form-group">
				<label htmlFor="">Description</label>
				<input
					type="text"
					className="form-control"
					value={helper.description}
					placeholder="Description"
					onChange={(e) =>
						setHelper({ ...helper, description: e.target.value })
					}
				/>
			</div>
		</React.Fragment>
	);
};

export default TextInputs;

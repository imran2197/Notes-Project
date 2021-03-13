import React, { useState } from "react";
import "../styles/NoteItems.css";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";

const NoteItems = (props) => {
	const [editedTitle, setEditedTitle] = useState(props.title);
	const [editedDescription, setEditedDescription] = useState(props.description);
	const [editMode, setEditMode] = useState(false);

	const saveItem = () => {
		props.editHandler(editedTitle, editedDescription, props.idx);
		setEditMode(false);
	};

	return (
		<div className="note_container">
			<QuestionAnswerIcon id="icon" />
			<div className="note_item">
				{editMode ? (
					<>
						<input
							type="text"
							placeholder="Edit Title"
							onChange={(e) => setEditedTitle(e.target.value)}
							value={editedTitle}
						/>
						<input
							type="text"
							placeholder="Edit Description"
							onChange={(e) => setEditedDescription(e.target.value)}
							value={editedDescription}
						/>
						<button
							className="save_button"
							onClick={saveItem}
							disabled={
								editedTitle.length === 0 || editedDescription.length === 0
							}
						>
							Save
						</button>
					</>
				) : (
					<>
						<h3>{props.title}</h3>
						<p>{props.description}</p>
						<div className="buttons">
							<button onClick={() => setEditMode(true)}>Edit</button>
							<button onClick={() => props.deleteHandler(props.idx)}>
								Delete
							</button>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default NoteItems;

import {Box, Button, Grid, TextField} from "@mui/material";
import {useState} from "react";
import {CardState} from "../../types";
import FileInput from "../../components/UI/FileInput/Fileinput";
import {useAppDispatch} from "../../app/hooks";
import {newCard} from "../MainPage/MainPageThunks";

const Form = () => {

	const dispatch = useAppDispatch();

	const initialState:CardState = {
		author: '',
		image: null,
		message: '',
	}

	const [post, setPost] = useState<CardState>(initialState)

	const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, files} = e.target;
		if (files) {
			setPost(prev => ({
				...prev, [name]: files[0]
			}));
		}
	};

	const postMessage = async (e:React.FormEvent) => {
		e.preventDefault();
		await dispatch(newCard(post));
		setPost(initialState);
	}

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setPost(prev => ({...prev, [name]: value}));
	};

	return (
		<Box border={2} borderRadius={2} borderColor='#000' sx={{ bgcolor: '#FFF' }} marginBottom={3}>
			<form onSubmit={postMessage}>
				<TextField name='author' required fullWidth label="Author Name: " id="fullWidth" onChange={onChange} value={post.author}
						   margin='normal'/>
				<TextField name='message' required fullWidth label="Message: " id="fullWidth" onChange={onChange} value={post.message}
						   margin='normal'/>
				<Grid item xs>
					<FileInput
						label="Image"
						name="image"
						onChange={fileInputChangeHandler}
					/>
				</Grid>
				<Button type='submit' variant='contained'>Post</Button>
			</form>
		</Box>
	);
};

export default Form;
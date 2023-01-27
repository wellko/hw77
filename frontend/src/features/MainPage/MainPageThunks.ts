import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../axios-api";
import {CardState} from "../../types";

export const newCard = createAsyncThunk<void, CardState>(
	'cards/addNew',
	async (arg) => {
		const formData = new FormData();
		formData.append('author', arg.author);
		formData.append('message', arg.message);
		if (arg.image) {
			formData.append('image', arg.image);
		}
		await axiosApi.post('/cards', formData);
	}
)

export const getCards = createAsyncThunk<CardState[]>(
	'cards/getAll',
	async () => {
		const response = await axiosApi.get('/cards');
		return response.data;
	}
)
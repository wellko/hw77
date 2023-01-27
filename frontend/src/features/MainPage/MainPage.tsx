import {CircularProgress, Container, Grid, Typography} from "@mui/material";
import Form from "../Form/Form";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectGetting, selectState} from "./MainPageSlice";
import {useEffect} from "react";
import {getCards} from "./MainPageThunks";
import CardItem from "../../components/CardItem/CardItem";

const MainPage = () => {
	const dispatch = useAppDispatch();
	const items = useAppSelector(selectState);
	const getting = useAppSelector(selectGetting);

	useEffect( () => {
		dispatch(getCards());
	}, [dispatch])

	return (
		<Container>
			<Form/>
			<Grid container spacing={2}>
				{getting? <CircularProgress/> : items.length > 0? items.map(item => {
					return <CardItem key={Math.random()} props={item}/>
				}) : <Typography variant='h2'>There is no Posts yet</Typography>}
			</Grid>
		</Container>
	);
};

export default MainPage;
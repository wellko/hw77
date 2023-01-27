import {Container, Grid} from "@mui/material";
import Form from "../Form/Form";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {selectState} from "./MainPageSlice";
import {useEffect} from "react";
import {getCards} from "./MainPageThunks";
import CardItem from "../../components/CardItem/CardItem";

const MainPage = () => {
	const dispatch = useAppDispatch();
	const items = useAppSelector(selectState);

	useEffect( () => {
		dispatch(getCards());
	}, [dispatch])

	return (
		<Container>
			<Form/>
			<Grid container spacing={2}>
			{items.map(item => {
				return <CardItem key={Math.random()} props={item}/>
			})}
			</Grid>
		</Container>
	);
};

export default MainPage;
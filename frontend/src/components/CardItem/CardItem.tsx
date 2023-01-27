import React from 'react';
import {CardState} from "../../types";
import {Card, CardContent, CardMedia, Grid, Typography} from "@mui/material";
import {apiUrl} from "../../constants";

interface Props {
	props: CardState
}

const CardItem: React.FC<Props> = ({props}) => {
	const ImageUrl = apiUrl + '/images/' + props.image;
	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Card>
				{props.image ? <CardMedia
					component="img"
					image={ImageUrl}
					title={props.image}
				/>: null}
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						Posted by : <br/> <b>{props.author}</b>
					</Typography>
					<Typography variant="body2" color="text.secondary">
						<b>Message:</b> <br/> {props.message}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default CardItem;
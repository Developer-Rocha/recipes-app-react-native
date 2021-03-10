import { StyleSheet, Dimensions } from "react-native";
import { RecipeCard } from "../../AppStyles";

const { width: viewportWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
	image: {
		// ...StyleSheet.absoluteFillObject,
		width: "100%",
		height: 250,
		borderRadius: 5,
	},

	infoDescriptionRecipe: {
		textAlign: "left",
		fontSize: 16,
		marginTop: 30,
		margin: 15,
	},
	infoRecipeName: {
		fontSize: 28,
		margin: 10,
		fontWeight: "bold",
		color: "black",
		textAlign: "center",
	},
});

export default styles;

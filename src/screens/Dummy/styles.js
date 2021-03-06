import { StyleSheet, Dimensions } from "react-native";
import { RecipeCard } from "../../AppStyles";

const { width: viewportWidth } = Dimensions.get("window");

const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		flex: 1,
		padding: 10,
	},
	image: {
		// ...StyleSheet.absoluteFillObject,
		width: "100%",
		height: 250,
		borderRadius: 5,
	},
	buttonContainer: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "flex-start",
	},
	infoPhoto: {
		height: 20,
		width: 20,
		marginRight: 0,
	},
	infoRecipe: {
		fontSize: 14,
		fontWeight: "bold",
		marginLeft: 5,
	},
	category: {
		fontSize: 14,
		fontWeight: "bold",
		margin: 10,
		color: "#2cd18a",
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

import React from "react";
import { Text, View, Image, useWindowDimensions } from "react-native";
import HTML from "react-native-render-html";
import styles from "./styles";

const InfoBox = (props) => {
	const contentWidth = useWindowDimensions().width;

	return (
		<View>
			<Text style={{ fontSize: 25, color: "red" }}>
				{props.data.title ? props.data.title : ""}
			</Text>
			<Image
				style={styles.image}
				source={{
					uri: props.data.fieldMedia
						? props.data.fieldMedia.entity.fieldMediaImage.url
						: null,
				}}
			/>
			<HTML
				source={{ html: props.data.paragraph.value }}
				contentWidth={contentWidth}
			/>
			<Text>{props.data.fieldLink ? props.data.fieldLink.title : ""}</Text>
		</View>
	);
};

export default InfoBox;

import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, useWindowDimensions } from "react-native";
import styles from "./styles";
import { ApolloProvider } from "@apollo/client";
// import { useQuery } from "@apollo/react-hooks";
import { useQuery } from "@apollo/client";
import { GET_NODE, client } from "../../data/Queries";
import HTML from "react-native-render-html";

function InfoBox(props) {
	const contentWidth = useWindowDimensions().width;

	return (
		<View>
			<Text style={{ fontSize: 25, color: "red" }}>
				{props.data.title ? props.data.title : ""}
			</Text>
			<HTML
				source={{ html: props.data.paragraph.value }}
				contentWidth={contentWidth}
			/>
			<Text>{props.data.fieldLink ? props.data.fieldLink.title : ""}</Text>
		</View>
	);
}

function RootComponent() {
	const [infoTitle, setInfoTitle] = useState("");
	const [infoParagraph, setInfoPagraph] = useState("");

	// useEffect(() => {
	// }, [infoTitle]);

	let $nid = "1";

	const { loading, error, data } = useQuery(GET_NODE, {
		variables: { id: $nid, language: "PT_PT" },
	});

	if (loading) return <p>Loading...</p>;

	if (error) {
		console.log("Error fetching starship", error);
	}

	console.log(data);

	return (
		<View>
			<Text>Hello world</Text>
			<View>
				<Text>{data.page.title}</Text>
				{data.page.paragraphs.map((data) => {
					if (data.entity.__typename == "ParagraphInfobox") {
						return <InfoBox data={data.entity} />;
					}
				})}
			</View>
		</View>
	);
}

const DummyScreen = ({}) => {
	return (
		<ApolloProvider client={client}>
			<RootComponent />
		</ApolloProvider>
	);
};

DummyScreen["navigationOptions"] = (navigator) => ({
	title: "Dummy Page",
});

export default DummyScreen;

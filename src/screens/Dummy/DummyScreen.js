import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { ApolloProvider } from "@apollo/client";
import { useQuery } from "@apollo/client";
import { GET_NODE, client } from "../../data/Queries";
import InfoBox from "../../components/InfoBox/InfoBox";

function RootComponent() {
	// Id of the page
	let $nid = "1";

	const { loading, error, data } = useQuery(GET_NODE, {
		variables: { id: $nid, language: "PT_PT" },
	});

	if (error) {
		console.log("Error fetching starship", error);
	}

	console.log(data);

	return (
		<View style={styles.container}>
			<Text>Hello world</Text>
			<View>
				<Text>
					Título da Página: {data != undefined ? data.page.title : ""}
				</Text>
				{data != undefined ? (
					data.page.paragraphs.map((data, key) => {
						if (data.entity.__typename == "ParagraphInfobox") {
							return <InfoBox key="key" data={data.entity} />;
						}
					})
				) : (
					<Text>""</Text>
				)}
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

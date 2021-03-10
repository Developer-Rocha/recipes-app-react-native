import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const defaultOptions = {
	watchQuery: {
		fetchPolicy: "cache-and-network",
		errorPolicy: "ignore",
	},
	query: {
		fetchPolicy: "no-cache",
		errorPolicy: "all",
	},
	mutate: {
		errorPolicy: "all",
	},
};
export const client = new ApolloClient({
	// uri: "http://freelancer.lndo.site/graphql",
	uri: "https://www.fabricio-rocha.com/graphql",
	cache: new InMemoryCache(),
	defaultOptions: defaultOptions,
});

export const GET_TEST = gql`
	query page($id: String!) {
		page: nodeById(id: $id) {
			title
		}
	}
`;

export const GET_NODE = gql`
	query page($language: LanguageId!, $id: String!) {
		page: nodeById(language: $language, id: $id) {
			title
			bundle: entityBundle
			... on NodePage {
				paragraphs: fieldParagraphs {
					entity {
						... on ParagraphInfoContact {
							text: fieldAddress
						}
						... on ParagraphClients {
							title: fieldTitle
							clients: fieldClients {
								targetId
							}
						}
						... on ParagraphInfobox {
							title: fieldTitle
							paragraph: fieldParagraph {
								value: value
							}
							fieldLink {
								title: title
								url: url {
									routed
									path
								}
							}
							fieldMedia {
								entity {
									... on MediaImage {
										fieldMediaImage {
											alt
											title
											url
										}
									}
								}
							}
						}
						... on ParagraphBannerMd {
							title: fieldTitle
							media: fieldMedia {
								entity {
									entityUrl {
										path
									}
								}
							}
						}
					}
				}
			}
		}
	}
`;

/*
query Node($bundle: String!) {
    info: nodeQuery(
        filter: {
            conjunction: AND
            conditions: [
      { field: "type", value: [$bundle], operator: EQUAL }
      { field: "status", value: ["1"], operator: EQUAL }
    ]
        }
    ) {
        entities {
    entityLabel
    entityType
    ... on Node {
      title
    }
  }
    }
}
*/

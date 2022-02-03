/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDocument = /* GraphQL */ `
  query GetDocument($id: ID!) {
    getDocument(id: $id) {
      id
      title
      content
      expirationData
    }
  }
`;
export const listDocuments = /* GraphQL */ `
  query ListDocuments(
    $filter: TableDocumentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDocuments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        content
        expirationData
      }
      nextToken
    }
  }
`;

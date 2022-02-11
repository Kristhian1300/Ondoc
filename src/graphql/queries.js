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
export const getInformationDocuments = /* GraphQL */ `
  query GetInformationDocuments($id: ID!) {
    getInformationDocuments(id: $id) {
      id
      title
      modality
      minerals
      municipalitiesDepartments
      codeRMN
      codeFile
      groupWork
      dateRegistration
      dateEnds
      dateContract
    }
  }
`;
export const listInformationDocuments = /* GraphQL */ `
  query ListInformationDocuments(
    $filter: TableInformationDocumentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInformationDocuments(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        modality
        minerals
        municipalitiesDepartments
        codeRMN
        codeFile
        groupWork
        dateRegistration
        dateEnds
        dateContract
      }
      nextToken
    }
  }
`;

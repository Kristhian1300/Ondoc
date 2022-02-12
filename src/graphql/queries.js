/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      email
      cellPhone
      address
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
        email
        cellPhone
        address
      }
      nextToken
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDocument = /* GraphQL */ `
  mutation CreateDocument($input: CreateDocumentInput!) {
    createDocument(input: $input) {
      id
      title
      content
      expirationData
    }
  }
`;
export const updateDocument = /* GraphQL */ `
  mutation UpdateDocument($input: UpdateDocumentInput!) {
    updateDocument(input: $input) {
      id
      title
      content
      expirationData
    }
  }
`;
export const deleteDocument = /* GraphQL */ `
  mutation DeleteDocument($input: DeleteDocumentInput!) {
    deleteDocument(input: $input) {
      id
      title
      content
      expirationData
    }
  }
`;
export const createInformationDocuments = /* GraphQL */ `
  mutation CreateInformationDocuments(
    $input: CreateInformationDocumentsInput!
  ) {
    createInformationDocuments(input: $input) {
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
export const updateInformationDocuments = /* GraphQL */ `
  mutation UpdateInformationDocuments(
    $input: UpdateInformationDocumentsInput!
  ) {
    updateInformationDocuments(input: $input) {
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
export const deleteInformationDocuments = /* GraphQL */ `
  mutation DeleteInformationDocuments(
    $input: DeleteInformationDocumentsInput!
  ) {
    deleteInformationDocuments(input: $input) {
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

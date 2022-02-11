/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDocument = /* GraphQL */ `
  subscription OnCreateDocument(
    $id: ID
    $title: String
    $content: String
    $expirationData: AWSDate
  ) {
    onCreateDocument(
      id: $id
      title: $title
      content: $content
      expirationData: $expirationData
    ) {
      id
      title
      content
      expirationData
    }
  }
`;
export const onUpdateDocument = /* GraphQL */ `
  subscription OnUpdateDocument(
    $id: ID
    $title: String
    $content: String
    $expirationData: AWSDate
  ) {
    onUpdateDocument(
      id: $id
      title: $title
      content: $content
      expirationData: $expirationData
    ) {
      id
      title
      content
      expirationData
    }
  }
`;
export const onDeleteDocument = /* GraphQL */ `
  subscription OnDeleteDocument(
    $id: ID
    $title: String
    $content: String
    $expirationData: AWSDate
  ) {
    onDeleteDocument(
      id: $id
      title: $title
      content: $content
      expirationData: $expirationData
    ) {
      id
      title
      content
      expirationData
    }
  }
`;
export const onCreateInformationDocuments = /* GraphQL */ `
  subscription OnCreateInformationDocuments(
    $id: ID
    $title: String
    $modality: String
    $minerals: String
    $municipalitiesDepartments: String
  ) {
    onCreateInformationDocuments(
      id: $id
      title: $title
      modality: $modality
      minerals: $minerals
      municipalitiesDepartments: $municipalitiesDepartments
    ) {
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
export const onUpdateInformationDocuments = /* GraphQL */ `
  subscription OnUpdateInformationDocuments(
    $id: ID
    $title: String
    $modality: String
    $minerals: String
    $municipalitiesDepartments: String
  ) {
    onUpdateInformationDocuments(
      id: $id
      title: $title
      modality: $modality
      minerals: $minerals
      municipalitiesDepartments: $municipalitiesDepartments
    ) {
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
export const onDeleteInformationDocuments = /* GraphQL */ `
  subscription OnDeleteInformationDocuments(
    $id: ID
    $title: String
    $modality: String
    $minerals: String
    $municipalitiesDepartments: String
  ) {
    onDeleteInformationDocuments(
      id: $id
      title: $title
      modality: $modality
      minerals: $minerals
      municipalitiesDepartments: $municipalitiesDepartments
    ) {
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

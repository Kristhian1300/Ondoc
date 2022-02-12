/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      email
      cellPhone
      address
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
      email
      cellPhone
      address
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
      email
      cellPhone
      address
    }
  }
`;

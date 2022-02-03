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
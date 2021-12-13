import { gql } from "@apollo/client";

export const ADD_EMAIL_FOR_NEWSLETTER = gql`
  mutation AddEmailForNewsLetter($email: String!) {
    createNewsletterEmail(email: $email) {
      email: email
    }
  }
`;

export const CREATE_REGULAR_USER = gql`
  mutation CreateRegularUser($email: String!, $fullName: String!) {
    createRegularUser(email: $email, fullName: $fullName) {
      _id
      email
      fullName
      imageUrl
      favorites {
        _id
      }
      cart {
        _id
      }
    }
  }
`;

export const ADD_TO_FAVORITES = gql`
  mutation AddRecordToFavorites($userId: ID!, $recordId: ID!) {
    addRecordToFavorites(userId: $userId, recordId: $recordId) {
      favorites {
        _id
        name
        imageUrl
        creatorArtist
        price
      }
    }
  }
`;

export const REMOVE_FROM_FAVORITES = gql`
  mutation removeRecordFromFavorites($userId: ID!, $recordId: ID!) {
    removeRecordFromFavorites(userId: $userId, recordId: $recordId) {
      favorites {
        _id
        name
        imageUrl
        creatorArtist
        price
      }
    }
  }
`;

export const ADD_ITEM_TO_CART = gql`
  mutation ($userId: ID!, $recordId: ID!) {
    addRecordToCart(userId: $userId, recordId: $recordId) {
      record {
        _id
        name
        price
        imageUrl
      }
      _id
      quantity
    }
  }
`;

export const UPDATE_CART_ITEM_QUANTITY = gql`
  mutation ($userId: ID!, $cartItem: ID!, $quantity: Int!) {
    updateItemQuanityInCart(
      userId: $userId
      cartItem: $cartItem
      quantity: $quantity
    ) {
      quantity
      record {
        name
      }
    }
  }
`;

export const DELTE_CART_ITEM = gql`
  mutation ($cartItem: ID!) {
    deleteItemFromCart(cartItem: $cartItem) {
      _id
      record {
        name
      }
    }
  }
`;

export const CREATE_NEW_RECORD = gql`
  mutation Mutation(
    $name: String!
    $year: Int!
    $creatorArtist: String!
    $label: String!
    $imageUrl: String!
    $category: String!
    $price: Float!
    $description: String!
  ) {
    createNewRecord(
      name: $name
      year: $year
      creatorArtist: $creatorArtist
      label: $label
      imageUrl: $imageUrl
      category: $category
      price: $price
      description: $description
    ) {
      _id
    }
  }
`;

export const DELETE_RECORD = gql`
  mutation ($recordId: ID!) {
    deleteRecord(recordId: $recordId) {
      name
    }
  }
`;

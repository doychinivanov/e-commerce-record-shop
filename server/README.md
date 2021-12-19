# Graphql Apollo Server (Express)

## Generic info
This is not a REST service, so there are no endpoints. The client fetches the needed data with a query. Some requests require a certain authorization. The authorization happens with firebase.


## Data Structure
### Collections
* users
```javascript
{
    _id: String
    email: String,
    fullname: String,
    imageUrl: String,
    favorites: Array,
    cart: Array,
}
```
* records
```javascript
{
    _id: String
    year: Number,
    name: String,
    creatorArtist: String,
    label: String,
    imageUrl: String,
    price: Number,
    description: String,

}
```
* itemcarts
```javascript
{
    _id: String
    record: ID
    custumer: ID,
    quantity: Number,
}
```
* newsletteremails
```javascript
{
    _id: String
    email: String,
}
```
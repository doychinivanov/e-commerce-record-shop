# Graphql Apollo Server (Express)

## Generic info
This is not a REST service, so there are no endpoints. The client fetches the needed data with a query. Some requests require a certain authorization. The authorization happens with firebase.


## Technologies
* graphql
* apollo-server-core
* apollo-server-express
* express
* mongoose
* firebase-admin
* cors
* dotenv


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

# For more detailed information:

<a href="https://github.com/doychinivanov/e-commerce-record-shop/tree/master/client" > Client Documentation </a>

<a href="https://github.com/doychinivanov/e-commerce-record-shop" > Genral Information </a>
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
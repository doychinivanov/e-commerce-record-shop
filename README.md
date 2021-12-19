# Vinyled - Online Record Shop
<a href="https://vinyled-266bb.web.app/" > Open Vinyled </a>

## What is Vinyled
Vinyled is a prototype of an online record shop. The application supports two authorized roles as well as guest user:

    Roles:
    * admin
    * customer
    * guest

## Guest
    Guests can browse the records, meaning they can use the search and filter features, as well as seeing record details.

## Customer
    Customers are all users that register in the application.

    Customers are granted all the rights a guest user has, as well as access to the cart and favorites features. Customers can add records to their favorites collection. In case they decide they can add a record to their cart and manipulate the cart content before purchasing.

## Admin
    The admin is hard coded in the database, so no user can register with admin rights.

    The admin has access to all the feature a regual customer has, but they can create new records in the shop, as well as editing already existing ones.

    ! IMPORTANT
    If you want to test the admin funcionallity use the following credentials: 
    email: superadmin@abv.bg
    password: 123456s.
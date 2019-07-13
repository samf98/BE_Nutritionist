# NUTRITIONIST

## Documentation

### Users Controller

The Users controller helps to manage the users in the application. The functions that includes this controller are:
* Create: creates a new User to access the application, it receives the parameters shown below, using a POST request.
  ```json
  {
    "name": "UserName",
    "password": "UserPassword",
    "lastname": "UserLastName",
    "username": "UserEmail"
  }
  ```
  It returns the the next response.
   ```json
  {
    "created": true
  }
  ```
* Update: modifies a User given the User id and the modified parameters, using a PATCH request.
  ```json
  {
    "id": 1,
    "name": "UserNameModified",
    "password": "UserPasswordModified",
    "lastname": "UserLastNameModified",
    "username": "UserEmailModified"
  }
  ```
  It returns the next response.
  ```json
  {
    "updated": true
  }
  ```

* Delete: deletes a User from the database given the User id, using a DELETE request.
  ```json
  {
    "id": 1
  }
  ```
  It returns the next response.
   ```json
  {
    "deleted": true
  }
  ```
  
* List: it returns all the Users using a GET request with no parameters.

### Roles Controller

The Roles controller helps to manage roles. A Role helps to know what permissions a user has when they log into the aplication. The functions that includes this controller are:
* Create: creates a new Role, it receives the parameters shown below, using a POST request.
  ```json
  {
    "name": "RoleName",
    "color": "RoleColor",
    "description": "RoleDescription"
  }
  ```
  It returns the the next response.
   ```json
  {
    "created": true
  }
  ```
* Update: modifies a Role given the Role id and the modified parameters, using a PATCH request.
  ```json
  {
    "id": 1,
    "name": "RoleNameModified",
    "color": "RoleColorModified",
    "description": "RoleDescriptionModified"
  }
  ```
  It returns the next response.
  ```json
  {
    "updated": true
  }
  ```
* Delete: deletes a Role from the database given the Role id, using a DELETE request.
  ```json
  {
    "id": 1
  }
  ```
  It returns the next response.
   ```json
  {
    "deleted": true
  }
  ```
  
* List: it returns all the Roles in the database using a GET request with no parameters.

### RolesUsers Controller

This controller allows to manage the relationships between Users and Roles. The functions that includes this controller are:
* Create: creates a new relationship between one User and one Role, it receives the ids of both entities as shown below, using a POST request.
  ```json
  {
    "userId": 1,
    "roleId": 1
  }
  ```
  It returns the the next response.
   ```json
  {
    "created": true
  }
  ```
* Update: modifies a relationship given the id of the relationship and the modified parameters, using a PATCH request.
  ```json
  {
    "id": 1,
    "foodId": 10,
    "tagId": 20
  }
  ```
  It returns the next response.
  ```json
  {
    "updated": true
  }
  ```

* Delete: deletes a relationship given the ID of the relationship, using a DELETE request.
  ```json
  {
    "id": 1
  }
  ```
  It returns the next response.
   ```json
  {
    "deleted": true
  }
  ```
  
* List: it returns all the relationships between Users and Roles using a GET request with no parameters.


### Categories Controller

A category is used to distinguish if a patient has been diagnosed with a disease such as diabetes, hypertension, etc. To avoid adding food to the menu that the patient can not eat. The functions that includes this controller are:
* Create: creates a new Category, it receives the parameters shown below, using a POST request.
  ```json
  {
    "name": "CategoryName",
    "description": "CategoryDescription"
  }
  ```
  It returns the the next response.
   ```json
  {
    "created": true
  }
  ```
* Update: modifies a category given the Category ID and the new parameters, using a PATCH request.
  ```json
  {
    "id": 1,
    "name": "CategoryNameModified",
    "description": "CategoryDescriptionModified"
  }
  ```
  It returns the next response.
  ```json
  {
    "updated": true
  }
  ```

* Delete: deletes a Category given the Category ID, using a DELETE request.
  ```json
  {
    "id": 1
  }
  ```
  It returns the next response.
   ```json
  {
    "deleted": true
  }
  ```
  
* List: it returns all Categories using a GET request with no parameters.

### CategoriesUsers Controller

This controller allows to manage the relationships between Categories and Users. The functions that includes this controller are:
* Create: creates a new relationship between one Category and one User, it receives the ids of both entities as shown below, using a POST request.
  ```json
  {
    "userId": 1,
    "categoriesId": 1
  }
  ```
  It returns the the next response.
   ```json
  {
    "created": true
  }
  ```
* Update: modifies a relationship given the id of the relationship and the modified parameters, using a PATCH request.
  ```json
  {
    "id": 1,
    "userId": 101,
    "categoriesId": 1
  }
  ```
  It returns the next response.
  ```json
  {
    "updated": true
  }
  ```

* Delete: deletes a relationship given the ID of the relationship, using a DELETE request.
  ```json
  {
    "id": 1
  }
  ```
  It returns the next response.
   ```json
  {
    "deleted": true
  }
  ```
  
* List: it returns all the relationships between Users and Categories using a GET request with no parameters.

### Entries Controller

An Entry is the general information that a user can register dayli to meassure their progress. The functions that includes this controller are:
* Create: creates a new Entry, it receives the parameters shown below using a POST request.
  ```json
  {
    "userId": 1,
    "date": "dd/mm/yyyy",
    "water": 2.5,
    "steps": 2100,
    "weight": 130,
    "hours_of_sleep": 8
  }
  ```
  It returns the the next response.
   ```json
  {
    "created": true
  }
  ```
* Update: modifies an Entry given the id of the Entry and the modified parameters, using a PATCH request.
  ```json
  {
    "id": 1,
    "userId": 1,
    "date": "dd/mm/yyyy",
    "water": 0.5,
    "steps": 100,
    "weight": 160,
    "hours_of_sleep": 5
  }
  ```
  It returns the next response.
  ```json
  {
    "updated": true
  }
  ```

* Delete: deletes an Entry given the id of th Entry, using a DELETE request.
  ```json
  {
    "id": 1
  }
  ```
  It returns the next response.
   ```json
  {
    "deleted": true
  }
  ```
  
* List: it returns all the Entries using a GET request with no parameters.

### Foods Controller

A Food is a complete meal defined by the nutritionist, and assigned to one or more patients. The functions that includes this controller are:
* Create: creates a new Food, it receives the parameters shown below using a POST request.
  ```json
  {
    "name": "FoodName",
    "image": "Base64Code",
    "description": "FoodDescription"
  }
  ```
  It returns the the next response.
   ```json
  {
    "created": true
  }
  ```
* Update: modifies a Food given the id of the Food and the modified parameters, using a PATCH request.
   ```json
  {
    "id": 1,
    "name": "FoodName",
    "image": "Base64Code",
    "description": "FoodDescription"
  }
  ```
  It returns the next response.
  ```json
  {
    "updated": true
  }
  ```

* Delete: deletes a Food given the id of the Food, using a DELETE request.
  ```json
  {
    "id": 1
  }
  ```
  It returns the next response.
   ```json
  {
    "deleted": true
  }
  ```
  
* List: it returns all the Foods using a GET request with no parameters.

### Tags Controller

A Tag is used to label Foods to know if a Food belongs to Breakfast, Lunch, Dinner or other group. The functions that includes this controller are:
* Create: creates a new Tag, it receives the parameters shown below, using a POST request.
  ```json
  {
    "name": "TagName",
    "description": "TagDescription"
  }
  ```
  It returns the the next response.
   ```json
  {
    "created": true
  }
  ```
* Update: modifies a Tag given the Tag ID and the new parameters, using a PATCH request.
  ```json
  {
    "id": 1,
    "name": "TagNameModified",
    "description": "TagDescriptionModified"
  }
  ```
  It returns the next response.
  ```json
  {
    "updated": true
  }
  ```

* Delete: deletes a Tag given the Category ID, using a DELETE request.
  ```json
  {
    "id": 1
  }
  ```
  It returns the next response.
   ```json
  {
    "deleted": true
  }
  ```
  
* List: it returns all Tags using a GET request with no parameters.

### FoodsTags Controller

This controller allows to manage the relationships between Foods and Tags. The functions that includes this controller are:
* Create: creates a new relationship between one Food and one Tag, it receives the ids of both entities as shown below, using a POST request.
  ```json
  {
    "foodId": 1,
    "tagId": 1
  }
  ```
  It returns the the next response.
   ```json
  {
    "created": true
  }
  ```
* Update: modifies a relationship given the id of the relationship and the modified parameters, using a PATCH request.
  ```json
  {
    "id": 1,
    "foodId": 10,
    "tagId": 20
  }
  ```
  It returns the next response.
  ```json
  {
    "updated": true
  }
  ```

* Delete: deletes a relationship given the ID of the relationship, using a DELETE request.
  ```json
  {
    "id": 1
  }
  ```
  It returns the next response.
   ```json
  {
    "deleted": true
  }
  ```
  
* List: it returns all the relationships between Foods and Tags using a GET request with no parameters.

# GROUP PROJECT BE - 20

## Built With

- expressjs
- mongodb
- mongoose
- jsonwebtoken
- bcrypt
- dotenv
- validator

## How to use

1. Clone this repository

```
git clone https://github.com/dianaPermata/Project-BE20.git
```

2. Installing all dependencies

```
npm install
```

3. run project

```
npm run dev
```

# APIs Specifications

## Users

### A. Register

Serves for creating new users.

- Method : POST
- Endpoint : /user/register
- Body :

```
{
        name: String,
        email: String,
        password: String,
        phone: String
}
```

- Response

```
{
        "message": "User saved successfuly!!"
}
```

### B. Login

Serves for enter the apps.

- Method: POST
- Endpoint: /user/login
- Body:

```
{
    "email":"string",
    "password": "string"
}
```

- Response:

```
{
          "message": "Login Succesfull!",
          "token",
}
```

### C. Get All User

Serves to get all user

- method : GET
- Endpoint: /user
- HTTP Header :
- Response :

```
{
  "message": "Getting Data",
  "data": [
    {
      "_id": "ObjectId",
      "name": "string",
      "user": {
        "_id": "ObjectId",
        "name": "string"
      }
    }
]
}
```

## ToDo

### A. Get All Todo

Serves to get all todo

- method : GET
- Endpoint: /todo
- HTTP Header :
  - auth-token : `token`
- Response :

```
{
  "message": "Getting Data",
  "data": [
    {
      "_id": "ObjectId",
      "name": "string",
      "user": {
        "_id": "ObjectId",
        "name": "string"
      }
    }
]
}
```

### B. Get Todo By ID

Serves to get Todo by ID

- method : GET
- Endpoint: todo/:id
- HTTP Header:
  - auth-token: `token`
- Response:

```
{
  "message": "You Searched for",
  "data": {
    "_id": "ObjectId",
    "name": "string",
    "user": "ObjectId"
  }
}
```

### C. Update Todo By ID

Serves to update todo by ID

- Method : PATCH
- Endpoint: todo/:id
- HTTP Header:
  - auth-token: `token`

- Body : 
```
{
  "name" : "updated name"
}

```  
- Response :

```
    {
  "message": "Todo updated",
  "data": {
    "_id": "ObjectId",
    "name": "updated name",
    "user": "ObjectId"
  }
}
```

### D. Delete Task By ID

Serves to delete Taskk by ID

- Method : DELETE
- Endpoint: todo/:id
- HTTP Header:
  - auth-token: `token`
- Response :

```
{
  "message": "Data Deleted!"
}
```

### E. Delete All Todos

serves to delete All Todos

- Method : DELETE
- Endpoint: todo/
- HTTP Header:
  - auth-token : `token`
- Response :

```
{
    message: "All Data Deleted!",
}
```

### F. Add Todo

serves to add new Todo

- Method : POST
- Endpoint : todo/add
- HTTP Header : 
  - auth-token : `token`
- Response : 

```
{
  "name" : "string",
  "user" : "user.ObjectId"
}
```
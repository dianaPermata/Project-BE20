# **GROUP PROJECT BE - 20**

## **Built With**

- expressjs
- mongodb
- mongoose
- jsonwebtoken
- bcrypt
- dotenv
- validator

## **How to use**

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

# **APIs Specifications**

## **Users**

### A. Register

Serves for creating new users.

- Method : POST
- Endpoint : /user/register
- Body :

```
{
    "nama":"diana permata putri",
    "email":"dianapermata@gmail.com",
    "password":"diana942",
    "phone":"081216060546"
}
```
  
- Response succes :

```
{
         "message": "Register Succes!"
}
```

- response failed : 

```
{
  "message":"server error"
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
    "password":"string",
}
```

- Response succes:

```
{
    "message": "Login Succesfull!",
     token,
    id,
}
```


response failed : 

```
{
  "message":"wrong Password or email"
}
```

### C. Get All User

Serves to get all user

- method : GET
- Endpoint: /user/
- HTTP Header :
- Response succes:

```
{
    "message": "Getting Data User",
    "data": [
     {
        "_id": "637a86db82e2e9fe6bf1b0f0",
        "email": "dianapermata@gmail.com",
        "password": "$2b$10$4mMndu6g9JQ8IZRDzr90DOld5bGbxtYHhOr8uuNu7GPbD8ebaUkB.",
        "phone": "081216060546"
      }
    ]
}
```
response failed : 

```
{
  "message":"server error"
}
```

### D. Get User By ID

Serves to get User by ID

- method : GET
- Endpoint: /user/:id
- HTTP Header:
- Response succes:

```
{
   "message": "You Searched for",
    "data": {
      "_id": "637a86db82e2e9fe6bf1b0f0",
      "email": "dianapermata@gmail.com",
      "password": "$2b$10$4mMndu6g9JQ8IZRDzr90DOld5bGbxtYHhOr8uuNu7GPbD8ebaUkB.",
      "phone": "081216060546"
    }
}
```

response failed : 

```
{
  "message":"Could not found"
}
```

### E. Update User By ID

Serves to update todo by ID

- Login by user first
- User can be updated by himself
- Method : PATCH
- Endpoint: /user/:id
- HTTP Header:
  - user-token: `token`
- Must confirm password

- Method : PATCH
- Endpoint: /user/:id
- HTTP Header:

- Body : 
```
{
  "name" : "updated name",
  "password":"string"
}

```  
- Response :

```
  {
      "message": "User updated!",
      "data": {
       "_id": "637a86db82e2e9fe6bf1b0f0",
      "email": "dianapermata@gmail.com",
      "password": "$2b$10$qR5BYVt96JPOpsHdyr/t8erdamWO349tqvhekIzJ7.z1yuNdE3SYC",
      "phone": "081216060546"
      }
  }
```

response failed : 

```
{
  "message":"server error"
}
```
### F. Delete User By ID

Serves to delete user by ID

- Login by user first
- User can be deleted by himself
- Method : DELETE
- Endpoint: /user/:id
- HTTP Header:
  - user-token: `token`

- Method : DELETE
- Endpoint: /user/:id
- HTTP Header:
- Response succes :

```
{
  "message": "Data Deleted"
}
```
- response failed : 

```
{
  "message":"server error"
}
```

## **Doctors**

### A. Get All Doctor

Serves to get all doctor

- method : GET
- Endpoint: /doctor/
- HTTP Header :
- Response succes:

```
{
  "message": "Get Doctors Data",
  "data": [
    {
      "_id": "63784753926c71f1b15bd9b7",
      "name": "Aprilian",
      "email": "aprilian@gmail.com",
      "password": "$2b$10$VLpjdYpOKpw2RLaHq22ovunq/Q4Cqo8ratebYY8HvZVhSbfZuBzCy",
      "hospital": "RS. ISKAK, TULUNGAGUNG",
      "alumnus": "STIKES MALANG",
      "cost": 250000,
      "phone": "081238280572",
      "biography": "Hello World"
    }
```

- response failed : 

```
{
  "message":"server error"
}
```

### B. Get Doctor By ID

Serves to get Doctor by ID

- method : GET
- Endpoint: /doctor/:id
- HTTP Header:
- Response succes :

```
{
  "message": "You Searched for",
  "data": {
    "_id": "63784753926c71f1b15bd9b7",
    "name": "Aprilian",
    "email": "aprilian@gmail.com",
    "password": "$2b$10$VLpjdYpOKpw2RLaHq22ovunq/Q4Cqo8ratebYY8HvZVhSbfZuBzCy",
    "hospital": "RS. ISKAK, TULUNGAGUNG",
    "alumnus": "STIKES MALANG",
    "cost": 250000,
    "phone": "081238280572",
    "biography": "Hello World"
  }
}
```

- response failed : 

```
{
  "message":"Could not found"
}
```

### C. Login

Serves for doctor login to get token for acces add/update/delete article.

- Method: POST
- Endpoint: /doctor/login
- Body:

```
{
    "email":"string",
    "password": "string"
}
```

- Response succes :

```
{
          "message": "Login Succesfull!",
          "token",
}
```

- response failed : 

```
{
  "message":"Wrong password and email"
}
```

### D. Update Doctor By ID

Serves to update doctor by ID

- Login by doctor first
- Doctor can be updated by himself
- Method : PATCH
- Endpoint: /doctor/:id
- HTTP Header:
  - doctor-token: `token`
- Must confirm password
- Body : 
```
{
  "name" : "updated name",
  "password" : "aprilian"
}

```  
- Response succes :

```
    {
  "message": "Doctor's Profile Updated!",
  "data": {
    "_id": "63784753926c71f1b15bd9b7",
    "name": "updated name",
    "email": "aprilian@gmail.com",
    "password": "$2b$10$dMgMRin/Le9IMRwmmrEcz.fL2nYKVRVN1jwJuQtUj2b2PUOlHas3S",
    "hospital": "RS. ISKAK, TULUNGAGUNG",
    "alumnus": "STIKES MALANG",
    "cost": 250000,
    "phone": "081238280572",
    "biography": "Hello World"
  }
}
```

- response failed : 

```
{
  "message":"server error"
}
```

### E. Delete Doctor By ID

Serves to delete Doctor by ID

- Login by doctor first
- Doctor can be deleted by himself
- Method : DELETE
- Endpoint: /doctor/:id
- HTTP Header:
  - doctor-token: `token`
- Response succes :

```
{
  "message": "Data Deleted!"
}
```

- response failed : 

```
{
  "message":"server error"
}
```

### F. Register Doctor

serves to register doctor

- Method : POST
- Endpoint : /doctor/register
- HTTP Header : 
- Body : 

```
{
 "name" : "Aprilian",
 "email" : "aprilian@gmail.com",
 "password" : "aprilian",
 "hospital" : "RS. ISKAK, TULUNGAGUNG",
 "alumnus" : "STIKES MALANG",
 "cost" : 250000,
 "phone" : "081238280572",
 "biography" : "Hello World"
}
```

- Response succes :
```
{
  "message": "Register Succes!"
}
```

- response failed : 

```
{
  "message":"server error"
}
```

## **Article**

### A. Get All Article

Serves to get all article

- method : GET
- Endpoint: /article/
- HTTP Header :
- Response succes :

```
{
  "message": "Get Articles Data",
  "data": [
    {
      "_id": "6378795e50e560be09601f89",
      "title": "Article Pertama",
      "category": "Lifestyle",
      "content": "Self-diagnosis adalah asumsi yang menyatakan bahwa seseorang terkena suatu penyakit berdasarkan pengetahuannya sendiri. Self-diagnosis sangat membahayakan kesehatan seseorang apabila salah dalam mengambil metode pengobatan dan mengonsumsi obat yang salah. Selain membahayakan kesehatan, Self-diagnosis juga dapat mempengaruhi kesehatan mental yang menyebabkan kecemasan berlebihan.",
      "date": "17 November 2022",
      "writter": {
        "_id": "637870d35402652fe40d4900",
        "name": "Aprilian"
      }
    }
  ]
}
```

- response failed : 

```
{
  "message":"server error"
}
```

### B. Get Article By ID

Serves to get article by ID

- method : GET
- Endpoint: article/:id
- HTTP Header:
- Response succes :

```
{
  "message": "You Searched for",
  "data": {
    "_id": "637848ffc071a69fa600c91c",
    "title": "first art",
    "category": "Healthy Food",
    "content": "Self-diagnosis adalah asumsi yang menyatakan bahwa seseorang terkena suatu penyakit berdasarkan pengetahuannya sendiri. Self-diagnosis sangat membahayakan kesehatan seseorang apabila salah dalam mengambil metode pengobatan dan mengonsumsi obat yang salah. Selain membahayakan kesehatan, Self-diagnosis juga dapat mempengaruhi kesehatan mental yang menyebabkan kecemasan berlebihan.",
    "date": "17 November 2022",
    "writter": {
      "_id": "63784753926c71f1b15bd9b7",
      "name": "updated name"
    }
  }
}
```
- response failed : 

```
{
  "message":"server error"
}
```

### C. Update Article By ID

Serves to update article by ID

- Login by doctor first
- Article only can updated by the writter himself
- Method : PATCH
- Endpoint: article/:id
- HTTP Header:
  - doctor-token: `token`
- Body : 
```
{
  "title" : "updated title"
}

```  
- Response succes :

```
 {
  "message": "Article Updated!",
  "data": {
    "_id": "637848ffc071a69fa600c91c",
    "title": "updated title",
    "category": "Healthy Food",
    "content": "Self-diagnosis adalah asumsi yang menyatakan bahwa seseorang terkena suatu penyakit berdasarkan pengetahuannya sendiri. Self-diagnosis sangat membahayakan kesehatan seseorang apabila salah dalam mengambil metode pengobatan dan mengonsumsi obat yang salah. Selain membahayakan kesehatan, Self-diagnosis juga dapat mempengaruhi kesehatan mental yang menyebabkan kecemasan berlebihan.",
    "date": "17 November 2022",
    "writter": {
      "_id": "63784753926c71f1b15bd9b7",
      "name": "updated name"
    }
  }
}
```
- response failed : 

```
{
  "message":"server error"
}
```

### D. Delete Article By ID

Serves to deleted article by ID

- Login by doctor first
- Article only can deleted by the writter himself
- Method : DELETE
- Endpoint: article/:id
- HTTP Header:
  - doctor-token: `token`
- Response succes :

```
{
  "message": "Article Deleted!"
}
```

- response failed : 

```
{
  "message":"server error"
}
```

### E. Add Article

serves to add article

- Login by doctor first
- Method : POST
- Endpoint : /article/add
- HTTP Header : 
- Body : 

```
{
 "title" : "Article Pertama",
 
 "category" : "Lifestyle",

 "content" : "Self-diagnosis adalah asumsi yang menyatakan bahwa seseorang terkena suatu penyakit berdasarkan pengetahuannya sendiri. Self-diagnosis sangat membahayakan kesehatan seseorang apabila salah dalam mengambil metode pengobatan dan mengonsumsi obat yang salah. Selain membahayakan kesehatan, Self-diagnosis juga dapat mempengaruhi kesehatan mental yang menyebabkan kecemasan berlebihan.",
 
 "date" : "17 November 2022"
}
```
- Writter ID is auto fill from doctor-token 

- Response
```
{
  "message": "Add Article Succes!"
}
```

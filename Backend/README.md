# Backend API Documentation

## `/users/register` Endpoint

### Description
Creates a new user account with the provided information.

### HTTP Method

`POST`

### Request Body
The request body should be in JSON format
```json
{
    "fullname": {
        "firstname": "string",
        "lastname": "string"
    },
    "email": "string",
    "password": "string", 
}
```

### Required Fields
- `name`: User's full name
- `email`: Valid email address
- `password`: Password (minimum 6 characters)

### Example Request
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "password123"
}
```

### Example Response
```json
{
    "token": "your_generated_jwt_token",
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "_id": "user_id",
        "email": "john.doe@example.com",
    "password": "securepassword123"
    }
}
```

## `/users/login` Endpoint

### Description
Authenticates a user and returns a JWT token.

### HTTP Method

`POST`

### Request Body
The request body should be in JSON format
```json
{
    "email": "string",
    "password": "string"
}
```

### Required Fields
- `email`: Valid email address
- `password`: Password (minimum 6 characters)

### Example Request
```json
{
    "email": "john.doe@example.com",
    "password": "password123"
}
```

### Example Response
```json
{
    "token": "your_generated_jwt_token",
    "user": {
        "fullname": {
            "firstname": "John",
            "lastname": "Doe"
        },
        "_id": "user_id",
        "email": "john.doe@example.com"
    }
}
```

## `/users/profile` Endpoint

### Description
Fetches the profile of the authenticated user.

### HTTP Method

`GET`

### Headers
- `Authorization`: Bearer token

### Example Request
```http
GET /users/profile HTTP/1.1
Authorization: Bearer your_generated_jwt_token
```

### Example Response
```json
{
    "fullname": {
        "firstname": "John",
        "lastname": "Doe"
    },
    "_id": "user_id",
    "email": "john.doe@example.com"
}
```

## `/users/logout` Endpoint

### Description
Logs out the authenticated user by invalidating the JWT token and blacklist the token provided in cookie or headers.

### HTTP Method

`GET`

### Headers
- `Authorization`: Bearer token

### Example Request
```http
GET /users/logout HTTP/1.1
Authorization: Bearer your_generated_jwt_token
```

### Example Response
```json
{
    "message": "Logged out successfully"
}
```

## `/captains/register` Endpoint

### Description
Creates a new captain account with the provided information.

### HTTP Method

`POST`

### Request Body
The request body should be in JSON format
```json
{
    "fullname": {
        "firstname": "string", // minimum 3 characters
        "lastname": "string"
    },
    "email": "string", // valid email
    "password": "string", // minimum 6 characters
    "vehicle": {
        "color": "string", // minimum 3 characters
        "plate": "string", // minimum 3 characters
        "capacity": "number", // minimum 1
        "vehicleType": "string" // must be one of 'car', 'motorcycle', 'auto'
    }
}
```

### Required Fields
- `fullname.firstname`: Captain's first name (minimum 3 characters)
- `fullname.lastname`: Captain's last name
- `email`: Valid email address
- `password`: Password (minimum 6 characters)
- `vehicle.color`: Vehicle color (minimum 3 characters)
- `vehicle.plate`: Vehicle plate (minimum 3 characters)
- `vehicle.capacity`: Vehicle capacity (minimum 1)
- `vehicle.vehicleType`: Vehicle type (must be one of 'car', 'motorcycle', 'auto')

### Example Request
```json
{
    "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "password123",
    "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
    }
}
```

### Example Response
```json
{
    "captain": {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
            "color": "red",
            "plate": "ABC123",
            "capacity": 4,
            "vehicleType": "car"
        },
        "_id": "captain_id"
    },
    "token": "your_generated_jwt_token"
}
```

## `/captains/login` Endpoint

### Description
Authenticates a captain and returns a JWT token.

### HTTP Method

`POST`

### Request Body
The request body should be in JSON format
```json
{
    "email": "string", // valid email
    "password": "string" // minimum 6 characters
}
```

### Example Request
```json
{
    "email": "jane.doe@example.com",
    "password": "password123"
}
```

### Example Response
```json
{
    "token": "your_generated_jwt_token",
    "captain": {
        "fullname": {
            "firstname": "Jane",
            "lastname": "Doe"
        },
        "_id": "captain_id",
        "email": "jane.doe@example.com",
        "password": "$2b$10$d7ZaPxPC2M6odPoa5oOgo.tuUtI.tW/AdKehE3YU5sMR9k7sady0u"
    }
}
```

## `/captains/profile` Endpoint

### Description
Fetches the profile of the authenticated captain.

### HTTP Method

`GET`

### Headers
- `Authorization`: Bearer token

### Example Request
```http
GET /captains/profile HTTP/1.1
Authorization: Bearer your_generated_jwt_token
```

### Example Response
```json
{
    "fullname": {
        "firstname": "Jane",
        "lastname": "Doe"
    },
    "vehicle": {
        "color": "red",
        "plate": "ABC123",
        "capacity": 4,
        "vehicleType": "car"
    },
    "_id": "captain_id",
    "email": "jane.doe@example.com",
    "status": "Inactive"
}
```

## `/captains/logout` Endpoint

### Description
Logs out the authenticated captain by invalidating the JWT token and blacklist the token provided in cookie or headers.

### HTTP Method

`GET`

### Headers
- `Authorization`: Bearer token

### Example Request
```http
GET /captains/logout HTTP/1.1
Authorization: Bearer your_generated_jwt_token
```

### Example Response
```json
{
    "message": "Logged out successfully"
}
```
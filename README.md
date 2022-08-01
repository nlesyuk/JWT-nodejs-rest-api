# JWT NodeJS ExpressJS Authentitication
## Parts
[Access token](https://www.bezkoder.com/node-js-jwt-authentication-postgresql/)
[Refresh token](https://bezkoder.com/jwt-refresh-token-node-js/)

## Choose prefer header
[-] The Client typically attaches JWT in Authorization header with Bearer prefix:
`Authorization: Bearer [header].[payload].[signature]`

[+] Or only in x-access-token header:
`x-access-token: [header].[payload].[signature]`


## Endpoints table
| Methods | Urls             | Actions                    |
| ------- | ---------------- | -------------------------- |
| POST    | /api/auth/signup | signup new account         |
| POST    | /api/auth/signin | login an account           |
| GET     | /api/test/all    | retrieve public content    |
| GET     | /api/test/user   | access User’s content      |
| GET     | /api/test/mod    | access Moderator’s content |
| GET     | /api/test/admin  | access Admin’s content     |



## Database: PG (postgres)
*pg for PostgreSQL and pg-hstore for converting data into the PostgreSQL hstore format.
### Roles table
| id  | name      | createdAt                  | updatedAt                  |
| --- | --------- | -------------------------- | -------------------------- |
| 1   | user      | 2022-08-01 12:31:48.278+03 | 2022-08-01 12:31:48.278+03 |
| 2   | moderator | 2022-08-01 12:31:48.279+03 | 2022-08-01 12:31:48.279+03 |
| 3   | admin     | 2022-08-01 12:31:48.279+03 | 2022-08-01 12:31:48.279+03 |


## test data

// signup http://localhost:8080/api/auth/signup
{
    "username": "test",
    "email": "test@gmail.com",
    "password": "123",
    "roles": ["user"]
}

// signin http://localhost:8080/api/auth/signin
{
    "username": "test",
    "password": "123",
}

// signin response
{
  "id": 1,
  "username": "test",
  "email": "test@gmail.com",
  "roles": [
    "ROLE_USER"
  ],
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjU5MTI1MjYwLCJleHAiOjE2NTkyMTE2NjB9.mgaaXq9446iB_A_VbpvYsDfqUNrKYMANqVnP4BfKO5A",
  "refreshToken": "147b9c51-a8b9-4f81-b2e0-ac7a6eed9f4c"
}
# back-end

POST /api/auth/register

Expects an object with the following key constraints

| name        | type   | required | Unique |
| ------------| ------ | -------- | ------ | 
| `username`  | String | Yes      | Yes    | 
| `password`  | string | Yes      | No     |
| `firstname` | String | yes      | No     |
| `location`  | String | yes      | No     |


Possible status codes

201 User created
409 Username Already Taken
400 Missing username, password, firstname, or location (Error Message should indicate which one)
500 Server Issue


POST /api/auth/login

Expects an object with the following key constraints

| name       | type   | required |
| ---------- | ------ | -------- | 
| `Username` | String | Yes      | 
| `Password` | string | Yes      |

Possible status codes

200 `Welcome ${user.username}`
401 Invalid credentials
400 Password or Username is Missing
500 server error


REQUIRES AUTHENTICATION

| Method |      Endpoint        |             Description                     |
| ------ | -------------------- | ------------------------------------------- |
| `GET`  | /api/story           | Returns a list of all stories               |
| `GET`  | /api/story/:id       | Returns a specific story by an id           |
| `GET`  | /api/story/:id/story | Returns all stories made by a specific user | 
| `POST` | /api/story/:id/story | Creates a story with that specific user id  | 
| `PUT`  | /api/story/:id       | Updates a story with that specific user id  | 
|`DELETE`| /api/story/:id       | Deletes a story with that specific id       |



EXAMPLE

{
 "id": 5,
 "title": "Late night",
 "location": "Seoul, South Korea",
 "description: "Late night in Seoul",
 "date": "Septembper 21, 2020",
 "image_url": "https://images.unsplash.com/photo-1581319266831-d40929c204ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
 "user_id": 1
}


|    name      | type    | required |
| ------------ | ------  | ---------|
| `title`      | String  | Yes      |
| `location`   | String  | Yes      |
| `description`| String  | Yes      | 
| `date`       | String  | Yes      | 
| `image`      | String  | Yes      | 
| `user_id`    | Integer | No       |
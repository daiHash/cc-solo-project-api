# 📝 Reviews API Endpoints

CRUD operations to handle a box reviews data

|                                                               | Method | Endpoint                     |
| ------------------------------------------------------------- | ------ | ---------------------------- |
| [Create New Box Review](#post---create-new-box-review)        | POST   | `/api/v1/box/review/:id`     |
| [Delete Box Review By ID](#delete---delete-box-review-by-id)  | DELETE | `/api/v1/box/review/:id`     |
| [Get All Reviews By Box ID](#get---get-all-reviews-by-box-id) | GET    | `/api/v1/box/reviews/:boxId` |

&nbsp;

# Review `/api/v1/box/review`

Endpoints to handle single box review

> ## `POST` - Create New Box Review

```
http://localhost:3000/api/v1/box/review/:boxId
```

> ### Request Body

```json
{
  "content": "This box is amazing!💩",
  "author": "Pickleman",
  "rating": 4.5
}
```

> ### Response
>
> Return newly added box review

```json
{
  "id": "059cb1dc-dfd5-4419-8921-513ae6b74ae5",
  "comment": "This box is amazing!💩",
  "author": "Pickleman2",
  "createdAt": "2021-07-09T18:28:14.704Z",
  "boxId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
  "rating": 4.5,
  "box": {
    "id": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
    "name": "testman",
    "description": "test test test",
    "url": null,
    "address": "some new test address",
    "subaddress": null,
    "mainImage": null,
    "images": [],
    "lat": 1.2132323121232,
    "lng": 2.1231323212312
  }
}
```

&nbsp;

---

&nbsp;

> ## `DELETE` - Delete Box Review By ID

```
http://localhost:3000/api/v1/box/review/:add-the-review-id
```

> ### Response

Return message below

```json
{
  "message": "Box review with id:${review.id} was deleted successfully"
}
```

&nbsp;

---

&nbsp;

# Reviews - `/api/v1/box/reviews`

Endpoints to get all review of the given box id

> ## `GET` - Get All Reviews By Box ID

```
http://localhost:3000/api/v1/box/reviews/:boxId
```

> ### Response

Return an array of reviews by the given box id

```json
[
  {
    "id": "b7700ad0-653b-4f27-bd4e-a6f40d560419",
    "comment": "This box is amazing!💩",
    "author": "Pickleman2",
    "createdAt": "2021-07-09T13:08:17.679Z",
    "boxId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
    "rating": 4.5
  },
  {
    "id": "57f1bcc7-4a22-458c-a14a-d5290df4767d",
    "comment": "This box is amazing!💩",
    "author": "Pickleman2",
    "createdAt": "2021-07-09T18:28:13.881Z",
    "boxId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
    "rating": 4.5
  },
  {
    "id": "059cb1dc-dfd5-4419-8921-513ae6b74ae5",
    "comment": "This box is amazing!💩",
    "author": "Pickleman2",
    "createdAt": "2021-07-09T18:28:14.704Z",
    "boxId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
    "rating": 4.5
  }
]
```

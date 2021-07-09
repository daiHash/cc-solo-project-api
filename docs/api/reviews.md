# 📝 Reviews API Endpoints

CRUD operations to handle a place reviews data

|                                                                   | Method | Endpoint                   |
| ----------------------------------------------------------------- | ------ | -------------------------- |
| [Create New Place Review](#post---create-new-place-review)        | POST   | `/api/v1/review/:id`       |
| [Delete Place Review By ID](#delete---delete-place-review-by-id)  | DELETE | `/api/v1/review/:id`       |
| [Get All Reviews By Place ID](#get---get-all-reviews-by-place-id) | GET    | `/api/v1/reviews/:placeId` |

&nbsp;

# Review `/api/v1/review`

Endpoints to handle single place review

> ## `POST` - Create New Place Review

```
http://localhost:3000/api/v1/review/:placeId
```

> ### Request Body

```json
{
  "content": "This place is amazing!💩",
  "author": "Pickleman",
  "rating": 4.5
}
```

> ### Response
>
> Return newly added place review

```json
{
  "id": "059cb1dc-dfd5-4419-8921-513ae6b74ae5",
  "comment": "This place is amazing!💩",
  "author": "Pickleman2",
  "createdAt": "2021-07-09T18:28:14.704Z",
  "placeId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
  "rating": 4.5,
  "place": {
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

> ## `DELETE` - Delete Place Review By ID

```
http://localhost:3000/api/v1/review/:add-the-review-id
```

> ### Response

Return message below

```json
{
  "message": "Place review with id:${review.id} was deleted successfully"
}
```

&nbsp;

---

&nbsp;

# Reviews - `/api/v1/reviews`

Endpoints to get all review of the given place id

> ## `GET` - Get All Reviews By Place ID

```
http://localhost:3000/api/v1/reviews/:placeId
```

> ### Response

Return an array of reviews by the given place id

```json
[
  {
    "id": "b7700ad0-653b-4f27-bd4e-a6f40d560419",
    "comment": "This place is amazing!💩",
    "author": "Pickleman2",
    "createdAt": "2021-07-09T13:08:17.679Z",
    "placeId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
    "rating": 4.5
  },
  {
    "id": "57f1bcc7-4a22-458c-a14a-d5290df4767d",
    "comment": "This place is amazing!💩",
    "author": "Pickleman2",
    "createdAt": "2021-07-09T18:28:13.881Z",
    "placeId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
    "rating": 4.5
  },
  {
    "id": "059cb1dc-dfd5-4419-8921-513ae6b74ae5",
    "comment": "This place is amazing!💩",
    "author": "Pickleman2",
    "createdAt": "2021-07-09T18:28:14.704Z",
    "placeId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
    "rating": 4.5
  }
]
```

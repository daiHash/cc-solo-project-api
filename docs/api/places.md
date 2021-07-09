# Places API Endpoints

CRUD operations to handle the places data

|       | Method | Endpoint |
| ------- | ------- | ------- |
| [Create New Place](#post---create-new-place) | POST | `/api/v1/place` |
| [Get Place By ID](#get---place-by-id) | GET | `/api/v1/place/:id` |
| [Update Place By ID](#put---update-place-by-id) | PUT | `/api/v1/place/:id` |
| [Delete Place By ID](#delete---delete-place-by-id) | DELETE | `/api/v1/place/:id` |
| [Get Places](#get---get-places) | GET | `/api/v1/places` |

# Place `/api/v1/place`

Endpoints to handle single place

> ## `POST` - Create New Place

```
http://localhost:3000/api/v1/place
```

> ### Request Body

```json
{
  "name": "test",
  "description": "test test test",
  "address": "some test address",
  "subaddress": "some test subaddress",
  "url": "https://places.com",
  "mainImage": "https://cdn.forimage.com",
  "images": [],
  "tags": ["cafe", "neko"],
  "lat": 1.2132323121232,
  "lng": 2.1231323212312
}
```

> ### Response

Return the newly added Place

```json
{
  "name": "test",
  "description": "test test test",
  "address": "some test address",
  "subaddress": "some test subaddress",
  "url": "https://places.com",
  "mainImage": "https://cdn.forimage.com",
  "images": [],
  "tags": ["cafe", "neko"],
  "lat": 1.2132323121232,
  "lng": 2.1231323212312
}
```

---

> ## `GET` - Place By ID

```
http://localhost:3000/api/v1/place/:add-the-place-id
```

> ### Response

Return the Place by the given id

```json
{
  "id": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
  "name": "test0",
  "description": "test test test",
  "url": null,
  "address": "some test address",
  "subaddress": null,
  "mainImage": null,
  "images": [],
  "lat": 1.2132323121232,
  "lng": 2.1231323212312,
  "tags": [
    {
      "id": "49d47306-6087-4882-93f3-40160d463ff0",
      "name": "cafe"
    },
    {
      "id": "e304f3dc-42f1-425f-9281-e15ac241e2a4",
      "name": "test"
    }
  ],
  "reviews": [
    {
      "id": "b7700ad0-653b-4f27-bd4e-a6f40d560419",
      "comment": "This place is amazing!💩",
      "author": "Pickleman2",
      "createdAt": "2021-07-09T13:08:17.679Z",
      "placeId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
      "rating": 4.5
    }
  ]
}
```

---

> ## `PUT` - Update Place By ID

```
http://localhost:3000/api/v1/place/:add-the-place-id
```

> ### Request Body

You can send only the data you want to update

```json
{
  "name": "test",
  "description": "test test test",
  "address": "some test address",
  "subaddress": "some test subaddress",
  "url": "https://places.com",
  "mainImage": "https://cdn.forimage.com",
  "images": [],
  "tags": ["cafe", "neko"],
  "lat": 1.2132323121232,
  "lng": 2.1231323212312
}
```

> ### Response

Return the updated Place

```json
{
  "id": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
  "name": "test0",
  "description": "test test test",
  "url": null,
  "address": "some test address",
  "subaddress": null,
  "mainImage": null,
  "images": [],
  "lat": 1.2132323121232,
  "lng": 2.1231323212312,
  "tags": [
    {
      "id": "49d47306-6087-4882-93f3-40160d463ff0",
      "name": "cafe"
    },
    {
      "id": "e304f3dc-42f1-425f-9281-e15ac241e2a4",
      "name": "test"
    }
  ],
  "reviews": [
    {
      "id": "b7700ad0-653b-4f27-bd4e-a6f40d560419",
      "comment": "This place is amazing!💩",
      "author": "Pickleman2",
      "createdAt": "2021-07-09T13:08:17.679Z",
      "placeId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
      "rating": 4.5
    }
  ]
}
```

---

> ## `DELETE` - Delete Place By ID

```
http://localhost:3000/api/v1/place/:add-the-place-id
```

> ### Response

Return message below

```json
{
  "message": "Place with id: {place.id} was deleted successfully"
}
```

---

# Places - `/api/v1/places`

Endpoints to get places

---

> ## `GET` - Get Places

```
http://localhost:3000/api/v1/places/
```

### Queries

```
limit: limit of places you want to get. If it's not passed default is 10 places
search: String to search through places name
tags: Filter with tags
```

> ### Response

Return an array of places by the specified queries if passed

```json
[
  {
    "id": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
    "name": "testman",
    "description": "test test test",
    "url": null,
    "address": "some new test address",
    "subaddress": null,
    "mainImage": null,
    "images": [],
    "lat": 1.2132323121232,
    "lng": 2.1231323212312,
    "tags": [
      {
        "id": "49d47306-6087-4882-93f3-40160d463ff0",
        "name": "cafe"
      },
      {
        "id": "e304f3dc-42f1-425f-9281-e15ac241e2a4",
        "name": "test"
      },
      {
        "id": "44ec5017-14d3-4764-84eb-3f31b3612e91",
        "name": "newTag"
      }
    ],
    "reviews": [
      {
        "id": "b7700ad0-653b-4f27-bd4e-a6f40d560419",
        "comment": "This place is amazing!💩",
        "author": "Pickleman2",
        "createdAt": "2021-07-09T13:08:17.679Z",
        "placeId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
        "rating": 4.5
      }
    ]
  }
  ...
]
```

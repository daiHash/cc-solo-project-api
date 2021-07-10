# 🏠 Boxs API Endpoints

CRUD operations to handle the boxes data

|                                                | Method | Endpoint          |
| ---------------------------------------------- | ------ | ----------------- |
| [Create New Box](#post---create-new-box)       | POST   | `/api/v1/box`     |
| [Get Box By ID](#get---box-by-id)              | GET    | `/api/v1/box/:id` |
| [Update Box By ID](#put---update-box-by-id)    | PUT    | `/api/v1/box/:id` |
| [Delete Box By ID](#delete---delete-box-by-id) | DELETE | `/api/v1/box/:id` |
| [Get Boxs](#get---get-boxes)                   | GET    | `/api/v1/boxes`   |

&nbsp;

# Box `/api/v1/box`

Endpoints to handle single box

> ## `POST` - Create New Box

```
http://localhost:3000/api/v1/box
```

> ### Request Body

```json
{
  "name": "test",
  "description": "test test test",
  "address": "some test address",
  "url": "https://boxes.com",
  "mainImage": "https://cdn.forimage.com",
  "images": [],
  "tags": ["cafe", "neko"],
  "lat": 1.2132323121232,
  "lng": 2.1231323212312,
  "dropInFee": 3000
}
```

> ### Response

Return the newly added Box

```json
{
  "name": "test",
  "description": "test test test",
  "address": "some test address",
  "subaddress": "some test subaddress",
  "url": "https://boxes.com",
  "mainImage": "https://cdn.forimage.com",
  "images": [],
  "tags": ["cafe", "neko"],
  "lat": 1.2132323121232,
  "lng": 2.1231323212312,
  "reviews": []
}
```

&nbsp;

---

&nbsp;

> ## `GET` - Box By ID

```
http://localhost:3000/api/v1/box/:add-the-box-id
```

> ### Response

Return the Box by the given id

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
      "comment": "This box is amazing!💩",
      "author": "Pickleman2",
      "createdAt": "2021-07-09T13:08:17.679Z",
      "boxId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
      "rating": 4.5
    }
  ]
}
```

&nbsp;

---

&nbsp;

> ## `PUT` - Update Box By ID

```
http://localhost:3000/api/v1/box/:add-the-box-id
```

> ### Request Body

You can send only the data you want to update

```json
{
  "name": "test",
  "description": "test test test",
  "address": "some test address",
  "subaddress": "some test subaddress",
  "url": "https://boxes.com",
  "mainImage": "https://cdn.forimage.com",
  "images": [],
  "tags": ["cafe", "neko"],
  "lat": 1.2132323121232,
  "lng": 2.1231323212312
}
```

> ### Response

Return the updated Box

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
      "comment": "This box is amazing!💩",
      "author": "Pickleman2",
      "createdAt": "2021-07-09T13:08:17.679Z",
      "boxId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
      "rating": 4.5
    }
  ]
}
```

&nbsp;

---

&nbsp;

> ## `DELETE` - Delete Box By ID

```
http://localhost:3000/api/v1/box/:add-the-box-id
```

> ### Response

Return message below

```json
{
  "message": "Box with id: {box.id} was deleted successfully"
}
```

&nbsp;

---

&nbsp;

# Boxs - `/api/v1/boxes`

Endpoints to get boxes

> ## `GET` - Get Boxs

```
http://localhost:3000/api/v1/boxes/
```

### Queries

```
limit: limit of boxes you want to get. If it's not passed default is 10 boxes
search: String to search through boxes name
tags: Filter with tags
```

> ### Response

Return an array of boxes by the specified queries if passed

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
        "comment": "This box is amazing!💩",
        "author": "Pickleman2",
        "createdAt": "2021-07-09T13:08:17.679Z",
        "boxId": "bcd2c563-8df7-4e33-a492-b4fb267d7e38",
        "rating": 4.5
      }
    ]
  }
  ...
]
```

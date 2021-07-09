# Tags API Endpoints

CRUD operations to handle the places tags data

|                                                   | Method | Endpoint           |
| ------------------------------------------------- | ------ | ------------------ |
| [Get All Places Tags](#get---get-all-places-tags) | GET    | `/api/v1/tags`     |
| [Get Place By ID](#delete---delete-tag-by-id)     | DELETE | `/api/v1/tags/:id` |

&nbsp;

# Tags `/api/v1/tags`

Endpoints to handle single place

> ## `GET` - Get All Places Tags

```
http://localhost:3000/api/v1/tags
```

> ### Response
>
> Return an array with all the tags

```json
[
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
]
```

&nbsp;

---

&nbsp;

> ## `DELETE` - Delete Tag By ID

```
http://localhost:3000/api/v1/tags/:add-the-tag-id
```

> ### Response

Return message below

```json
{
  "message": "Tag with id:${tag.id} was deleted successfully"
}
```

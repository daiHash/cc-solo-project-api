# API reference
[Published API Documentation](https://documenter.getpostman.com/view/3992616/Tzm6jv1Y)

> ## [Places endpoints](./places.md)

|                                                               | Method | Endpoint            |
| ------------------------------------------------------------- | ------ | ------------------- |
| [Create New Place](./places.md#post---create-new-place)       | POST   | `/api/v1/place`     |
| [Get Place By ID](./places.md#get---place-by-id)              | GET    | `/api/v1/place/:id` |
| [Update Place By ID](./places.md#put---update-place-by-id)    | PUT    | `/api/v1/place/:id` |
| [Delete Place By ID](./places.md#delete---delete-place-by-id) | DELETE | `/api/v1/place/:id` |
| [Get Places](./places.md#get---get-places)                    | GET    | `/api/v1/places`    |

&nbsp;

---

&nbsp;

> ## [Tags endpoints](./tags.md)

|                                                            | Method | Endpoint           |
| ---------------------------------------------------------- | ------ | ------------------ |
| [Get All Places Tags](./tags.md#get---get-all-places-tags) | GET    | `/api/v1/tags`     |
| [Get Place By ID](./tags.md#delete---delete-tag-by-id)     | DELETE | `/api/v1/tags/:id` |

&nbsp;

---

&nbsp;

> ## [Reviews endpoints](./reviews.md)

|                                                                               | Method | Endpoint                   |
| ----------------------------------------------------------------------------- | ------ | -------------------------- |
| [Create New Place Review](./reviews.md#post---create-new-place-review)        | POST   | `/api/v1/review/:id`       |
| [Delete Place Review By ID](./reviews.md#delete---delete-place-review-by-id)  | DELETE | `/api/v1/review/:id`       |
| [Get All Reviews By Place ID](./reviews.md#get---get-all-reviews-by-place-id) | GET    | `/api/v1/reviews/:placeId` |

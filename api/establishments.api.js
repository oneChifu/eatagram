const establishments = [
  {
    id: 1,
    title: 'Mangal Meat House',
    img: 'establishment-1.jpg',
    country: 'England',
    countryId: 1,
    city: 'London',
    cityId: 1,
    status: 1,
  },
  {
    id: 2,
    title: 'Long name of a vegetarian restaurant',
    img: 'establishment-2.jpg',
    country: 'England',
    countryId: 1,
    city: 'London',
    cityId: 1,
    status: 1,
  },
  {
    id: 3,
    title: 'Wedding Event Cafe',
    img: 'establishment-3.jpg',
    country: 'England',
    countryId: 1,
    city: 'London',
    cityId: 1,
    status: 1,
  },
  {
    id: 4,
    title: 'Mangal Meat House',
    img: 'establishment-1.jpg',
    country: 'England',
    countryId: 1,
    city: 'London',
    cityId: 1,
    status: 1,
  },
  {
    id: 5,
    title: 'Mangal Meat House',
    img: 'establishment-2.jpg',
    country: 'England',
    countryId: 1,
    city: 'London',
    cityId: 1,
    status: 1,
  },
  {
    id: 6,
    title: 'Long name of a vegetarian restaurant',
    img: 'establishment-2.jpg',
    country: 'England',
    countryId: 1,
    city: 'Bristol',
    cityId: 2,
    status: 1,
  },
  {
    id: 7,
    title: 'Wedding Event Cafe',
    img: 'establishment-3.jpg',
    country: 'England',
    countryId: 1,
    city: 'Bristol',
    cityId: 2,
    status: 1,
  },
  {
    id: 8,
    title: 'Mangal Meat House',
    img: 'establishment-1.jpg',
    country: 'England',
    countryId: 1,
    city: 'Bristol',
    cityId: 2,
    status: 1,
  },
  {
    id: 9,
    title: 'Mangal Meat House',
    img: 'establishment-2.jpg',
    country: 'England',
    countryId: 1,
    city: 'Bristol',
    cityId: 2,
    status: 1,
  },
  {
    id: 10,
    title: 'Mangal Meat House',
    img: 'establishment-1.jpg',
    country: 'Germany',
    countryId: 2,
    city: 'Berlin',
    cityId: 3,
    status: 1,
  },
  {
    id: 11,
    title: 'Mangal Meat House',
    img: 'establishment-2.jpg',
    country: 'Germany',
    countryId: 2,
    city: 'Berlin',
    cityId: 3,
    status: 1,
  },
]

export const establishmentsApi = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(establishments)
      }, 100)
    })
  },

  getByCountry(countryId) {
    const result = establishments.filter((item) => {
      return item.countryId === countryId
    })

    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(result)
      }, 100)
    })
  },

  getByCity(cityId) {
    const result = establishments.filter((item) => {
      return item.cityId === cityId
    })

    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(result)
      }, 100)
    })
  },
}

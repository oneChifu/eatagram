/* eslint-disable no-undef */
const establishments = [
  {
    id: '1',
    title: 'Mangal Meat House',
    img: 'establishment-1.jpg',
    country: 'England',
    countryId: '1',
    city: 'London',
    cityId: '1',
    status: '1',
  },
  {
    id: '2',
    title: 'Long name of a vegetarian restaurant',
    img: 'establishment-2.jpg',
    country: 'England',
    countryId: '1',
    city: 'London',
    cityId: '1',
    status: '1',
  },
  {
    id: '3',
    title: 'Wedding Event Cafe',
    img: 'establishment-3.jpg',
    country: 'England',
    countryId: '1',
    city: 'London',
    cityId: '1',
    status: '1',
  },
  {
    id: '4',
    title: 'Mangal Meat House',
    img: 'establishment-1.jpg',
    country: 'England',
    countryId: '1',
    city: 'London',
    cityId: '1',
    status: '1',
  },
  {
    id: '5',
    title: 'Mangal Meat House',
    img: 'establishment-2.jpg',
    country: 'England',
    countryId: '1',
    city: 'London',
    cityId: '1',
    status: '1',
  },
]

export const establishmentsService = {
  get() {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(establishments)
      }, 100)
    })
  },
}

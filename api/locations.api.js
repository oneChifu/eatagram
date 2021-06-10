const countries = [
  {
    id: 1,
    title: 'England',
    code: 'uk',
    status: 1,
  },
  {
    id: 2,
    title: 'Germany',
    code: 'de',
    status: 1,
  },
]

const cities = [
  {
    id: 1,
    title: 'London',
    img: 'london.jpg',
    slug: 'london',
    countryId: 1,
    status: 1,
  },
  {
    id: 2,
    title: 'Bristol',
    img: 'bristol.jpg',
    slug: 'bristol',
    countryId: 1,
    status: 1,
  },
  {
    id: 6,
    title: 'Birmingham',
    img: 'birmingham.jpg',
    slug: 'birmingham',
    countryId: 1,
    status: 1,
  },
  {
    id: 7,
    title: 'Leeds',
    img: 'leeds.jpg',
    slug: 'leeds',
    countryId: 1,
    status: 1,
  },
  {
    id: 3,
    title: 'Berlin',
    img: 'berlin.jpg',
    slug: 'berlin',
    countryId: 2,
    status: 1,
  },
  {
    id: 4,
    title: 'Hamburg',
    img: 'hamburg.jpg',
    slug: 'hamburg',
    countryId: 2,
    status: 1,
  },
  {
    id: 5,
    title: 'Frankfurt am Main',
    img: 'frankfurt-am-main.jpg',
    slug: 'frankfurt-am-main',
    countryId: 2,
    status: 1,
  },
]

export const locationsCountriesApi = {
  getAll() {
    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(countries)
      }, 100)
    })
  },
}

export const locationsCitiesApi = {
  getByCountry(countryId) {
    const result = cities.filter((item) => {
      return item.countryId === countryId
    })

    return new Promise((resolve) => {
      setTimeout(() => {
        return resolve(result)
      }, 100)
    })
  },
}

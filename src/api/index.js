const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const db = {
  products: [
    {
      id: 0, name: 'cotesyma', desc: 'cozy test mananagement system', configured: true
    }, {
      id: 1, name: 'SimTo-I', desc: 'managing personal backlogs', configured: false
    }, {
      id: 2, name: 'Muninn', desc: 'programming notes', configured: false
    }, {
      id: 3, name: 'hoc-wrapper', desc: 'a utility for structuring HOC creation', configured: false
    }
  ],

  testCycles: [
    {
      id: 0, name: 'Test Cycles new feature testing',
      configured: true, status: 'Planning',
      desc: 'To reach 0 critical bugs in Test Cycles; to define coverage'
    }, {
      id: 1, name: 'Products new feature testing',
      configured: false, status: 'In Progress',
      desc: 'To reac 0 critical bugs; to enchance coverage'
    }
  ],

  productsWithConfig: [
    {
      id: 1, name: 'SimTo-I', desc: 'managing personal backlogs', configured: false,
      config: {
        fields: [
          {type: 'list', name: 'Coverage Type', options: ['Sanity', 'Full']},
          {type: 'input', name: 'Author'}
        ],
        features: [
          {
            name: 'Home',
            childrens: [
              {name: 'Favorites'},
              {name: 'Admin tools access'}
            ]
          }, {
            name: 'Products List', childrens: [
              {name: 'CRUD product'},
              {name: 'Filtering products'}
            ]
          }, {
            name: 'Product Config', childrens: [
              {name: 'Otward config'},
              {
                name: 'Fields for tests config', childrens: [
                  {name: 'Input type field'},
                  {name: 'Combo type field'}
                ]
              },
              {
                name: 'Product features', childrens: [
                  {name: 'CRUD parent level feature'},
                  {name: 'CRUD child level feature'}
                ]
              }
            ]
          }
        ]
      }
    }
  ]
}

export const fetchProductWithConfig = (id) => delay(100).then(() => {
  return db.products.find(p => p.id === id)
})

export const fetchTestCycles = () => delay(300).then(() => {
  return db.testCycles
})

export const saveTestCycle = (cycle) => delay(200).then(() => {
  const instance = {
    ...cycle,
    id: db.testCycles.length,
    configured: false,
    status: 'Planning'
  }
  db.testCycles = [...db.testCycles, instance]
  return instance
})

export const fetchProducts = () => delay(500).then(() => {
  return db.products
})

export const saveProduct = product => delay(500).then(() => {
  const instance = {
    id: db.products.length,
    name: product.name,
    desc: product.desc,
    configured: false
  }
  db.products = [...db.products, instance]
  return instance
})

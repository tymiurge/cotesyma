const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

const db = {
  products: [
    {
      id: 0, name: 'cotesyma', desc: 'cozy test mananagement system', configured: true,
      tests: [
          {
            id:0, title: 'Home sanity', feature: 'Home'
          }, {
            id: 1, title: 'Products list sanity', feature: 'Products List'
          }, {
            id: 2, title: 'Product config sanity', feature: 'Rroduct config'
          }
        ]
      }, {
      id: 1, name: 'SimTo-I', desc: 'managing personal backlogs', configured: false,
      tests: [
        {
          id:10, title: 'Home sanity', feature: 'Home'
        }, {
          id: 11, title: 'Products list sanity', feature: 'Products List'
        }, {
          id: 12, title: 'Product config sanity', feature: 'Rroduct config'
        }
      ]
    }, {
      id: 2, name: 'Muninn', desc: 'programming notes', configured: false,
      tests: [
        {
          id:20, title: 'Home sanity', feature: 'Home'
        }, {
          id: 21, title: 'Products list sanity', feature: 'Products List'
        }, {
          id: 22, title: 'Product config sanity', feature: 'Rroduct config'
        }
      ]
    }, {
      id: 3, name: 'hoc-wrapper', desc: 'a utility for structuring HOC creation', configured: false,
      tests: [
        {
          id:30, title: 'Home sanity', feature: 'Home'
        }, {
          id: 31, title: 'Products list sanity', feature: 'Products List'
        }, {
          id: 32, title: 'Product config sanity', feature: 'Rroduct config'
        }
      ]
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

export const fetchProductTests = productId => 
  delay(50).then(() => {
    const product = db.products.find(product => product.id === productId);
    return product.tests;    
  })

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

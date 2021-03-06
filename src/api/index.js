import uidV4 from 'uuid/v4' 

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

  productConfigs: [
    {
      productId: 0, 
      testFields: [
        {
          system: true, field: 'title', title: 'Test Name', type: 'string',
          desc: 'Test Name that follows special convention'
        }, 
        {
          system: true, field: 'description', title: 'Test Description', type: 'text',
          desc: 'Short description of the test representing its objective.'
        }, {
          system: false, field: 'target_level', title: 'Target Level', type: 'single-select',
          desc: 'Specifies what piece of the AUT is going to be under testing.',
          options: ['System', 'Feature', 'Page', 'Operation', 'Wizard'],
          defaultOption: 'N/A'
        }, {
          system: false, field: 'coverage_level', title: 'Coverage Level', type: 'single-select',
          desc: 'Specifies level of investigation put into the test subject.',
          options: ['Sanity', 'Medium', 'Full'],
          defaultOption: 'N/A'
        }
        
        /*
          here are just examples of possible field types
          {
            system: true, field: 'feature', title: 'Feature', type: 'feature-select'
          },
          {
            system: false, field: 'businessPriority', title: 'Business Priority', type:'single-select',
            options: ['Critical', 'High', 'Medium', 'Low', 'Undefined'], defaultOption: 'Undefined'
          },
          {
            system: false, field: 'author', title: 'Created by', type: 'user-select'
          },
          {
            system: false, field: 'creationWorkflow', title: 'Creation Forkflow', type: 'workflow', 
            source: [{
              title: 'To Create',
            }, {
              title: 'Creation In Progress',
            }, {
              title: 'To Review',
            }, {
              title: 'Review in progress'
            }, {
              title: 'Ready'
            }, {
              title: 'Not actual'
            }]
          }, {
            system: false, field: 'maintenanceWorkflow', title: 'Maintenance Workflow', type: 'workflow',
            source: [{
              title: '
            }]
          }
        */
      ]
    }
  ]
}

export const addFieldToProductConfig = (productId, data) => 
  delay(30).then(() => {
    const config = db.productConfigs.find(config => config.productId === productId)
    const field = Object.assign({}, data, {system: false, field: uidV4()})
    config.testFields.push(field)
    return field
  })

export const updateFieldConfig = (productId, fieldConfig) => 
  delay(30).then(() => {
    const config = db.productConfigs.find(config => config.productId === productId)
    let theField = config.testFields.find(elmnt => elmnt.field === fieldConfig.field)
    theField = Object.assign({}, theField, fieldConfig)
    return theField
  })

export const fetchProductFields = productId => 
  delay(30).then(() => {
    const config = db.productConfigs.find(config => config.productId === productId)
    return config.testFields
  })

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

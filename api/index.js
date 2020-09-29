const app = require('express')()
const bodyParser = require('body-parser')
module.exports = { path: '/api', handler: app }

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
var azure = require('azure-storage')
app.get('/createtable', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )

  tableService.createTableIfNotExists('Complaint', function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)
    }
  })
})
app.get('/addentity', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String('part2'),
    RowKey: entGen.String('row2'),
    boolValueTrue: entGen.Boolean(true),
    boolValueFalse: entGen.Boolean(false),
    intValue: entGen.Int32(42),
    taskDone: entGen.Boolean(false),
    dateValue: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
    complexDateValue: entGen.DateTime(
      new Date(Date.UTC(2013, 02, 16, 01, 46, 20))
    ),
  }
  tableService.insertEntity('sakshi2', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)

      // result contains the ETag for the new entity
    }
  })
})
app.post('/addstudent', async (req, res) => {
  // await res.send(req.body.PartitionKey)
  console.log('hgjhg')
  try {
    console.log('try')
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    var entGen = azure.TableUtilities.entityGenerator
    var entity = {
      PartitionKey: entGen.String(req.body.PartitionKey),
      RowKey: entGen.String(req.body.RowKey),
      Name: entGen.String(req.body.name),
      Class: entGen.String(req.body.class),
      DOB: entGen.String(req.body.dob),
      Age: entGen.String(req.body.age),
      BloodGroup: entGen.String(req.body.bloodGroup),
      ContactNo: entGen.String(req.body.contact1),
      AlternateContactNo: entGen.String(req.body.contact2),
      EmailAddress: entGen.String(req.body.email1),
      AlternateEmailAddress: entGen.String(req.body.email2),
      Address: entGen.String(req.body.address),
      FatherName: entGen.String(req.body.f_name),
      ContactNo: entGen.String(req.body.f_contact),git
      EmailAddress: entGen.String(req.body.f_email),
      MotherName: entGen.String(req.body.m_name),
      ContactNo: entGen.String(req.body.m_contact),
      EmailAddress: entGen.String(req.body.m_email),
    }
    tableService.insertEntity('myprofile', entity, function (
      error,
      result,
      response
    ) {
      if (!error) {
        res.send(result)

        // result contains the ETag for the new entity
      }
    })
  } catch (error) {
    console.log(error)
  }
})
app.get('/showfees', async (req, res) => {
 
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
   var query = new azure.TableQuery()
     .top(5)
     .where('PartitionKey eq ?', ' req.body.PartitionKey')

   tableService.queryEntities('fees', query, null, function (
     error,
     result,
     response
   ) {
     if (!error) {
       console.log(result)
       // result.entries contains entities matching the query
     }
   })
    
    // PartitionKey: req.body.PartitionKey;
    // RowKey: req.body.RowKey;
    
    // tableService.retrieveEntity('fees', 'PartitionKey', ' RowKey', function (
    //   error,
    //   result,
    //   response
    // ) {
    //   if (!error) {
    //     console.log(result)
    //     // result contains the entity
    //   }
    // })
  } )

app.post('/addfees', async (req, res) => {
  try {
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    var entGen = azure.TableUtilities.entityGenerator
    var entity = {
      PartitionKey: entGen.String(req.body.PartitionKey),
      RowKey: entGen.String(req.body.RowKey),
      totalFees: entGen.String(req.body.totalFees),
      paidFees: entGen.String(req.body.paidFees),
      remainingFees: entGen.String(req.body.remainingFees),
      monthlyInstallement: entGen.String(req.body.monthlyInstallement),
      paidUpto: entGen.String(req.body.paidUpto),
      lastPaidOn: entGen.String(req.body.lastPaidOn),
      lastDate: entGen.String(req.body.lastDate),
    }

    tableService.insertEntity('fees', entity, function (
      error,
      result,
      response
    ) {
      if (!error) {
        res.send(result)

        // result contains the ETag for the new entity
      }
    })
  } catch (error) {
    console.log(error)
  }
}),
  app.get('/deletefees',async (req, res) => {
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    var entGen = azure.TableUtilities.entityGenerator
    var entity = {
      PartitionKey: entGen.String(req.body.PartitionKey),
      RowKey: entGen.String(req.body.RowKey),
    }
    tableService.deleteEntity('fees', entity, function (error, response) {
      if (!error) {
        console.log(response)
        // result contains true if created; false if already exists
      }
    })
  })
  app.post('/addcomplaint', async (req, res) => {
  try {
   
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    var entGen = azure.TableUtilities.entityGenerator
    var entity = {
      PartitionKey: entGen.String(req.body.PartitionKey),
      RowKey: entGen.String(req.body.RowKey),
      to: entGen.String(req.body.to),
      complaint1: entGen.String(req.body.description),
    }
    
    
    tableService.insertEntity('Complaint', entity, function (
      error,
      result,
      response
    ) {
      if (!error) {
        res.send(result)

        // result contains the ETag for the new entity
      }
    })
  } catch (error) {
    console.log(error)
  }
})
app.get('/updateentity', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String('teacher12'),
    RowKey: entGen.String('row1'),
    // taskDone: entGen.Boolean(true),
    boolValueTrue: entGen.Boolean(true),
    boolValueFalse: entGen.Boolean(false),
    intValue: entGen.Int32(42),
    taskDone: entGen.Boolean(false),
    dateValue: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
    complexDateValue: entGen.DateTime(
      new Date(Date.UTC(2013, 02, 16, 01, 46, 20))
    ),
  }

  tableService.insertOrReplaceEntity('teacher', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)
      // result contains the entity with field 'taskDone' set to `true`
    }
  })
})
app.get('/deletetable', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )

  tableService.deleteTable('sakshi', function (error, response) {
    if (!error) {
      console.log(response)
      // result contains true if created; false if already exists
    }
  })
})
app.get('/deleteentity', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String('test'),
    RowKey: entGen.String('c1'),
  }
  tableService.deleteEntity('Complaint', entity, function (error, response) {
    if (!error) {
      console.log(response)
      // result contains true if created; false if already exists
    }
  })
})
app.get('/readentity', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )

  tableService.retrieveEntity('fees', 'test', 's1', function (
    error,
    result,
    response
  ) {
    if (!error) {
      console.log(result)
      // result contains the entity
    }
  })
})

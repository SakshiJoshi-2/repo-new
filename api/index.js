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

  tableService.createTableIfNotExists('myprofile', function (
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
  await res.send(req.body.PartitionKey)
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    Name: entGen.String(req.body.name),
    // Class: entGen.String(''),
    // DOB: entGen.Int32(),
    // Age: entGen.Int32(),
    // BloodGroup: entGen.String(''),
    // ContactNo: entGen.Int32(),
    // AlternateContactNo: entGen.Int32(),
    // EmailAddress: entGen.String(''),
    // AlternateEmailAddress: entGen.String(''),
    // Address: entGen.String(''),
    // FatherName: entGen.String(''),
    // ContactNo: entGen.Int32(),
    // EmailAddress: entGen.String(''),
    // MotherName: entGen.String(''),
    // ContactNo: entGen.Int32(42),
    // EmailAddress: entGen.String(''),
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
})
app.get('/updateentity', (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String('sakshi123'),
    RowKey: entGen.String('row1'),
    taskDone: entGen.Boolean(true),
  }

  tableService.insertOrReplaceEntity('sakshi', entity, function (
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
    PartitionKey: entGen.String('part2'),
    RowKey: entGen.String('row1'),
  }
  tableService.deleteEntity('sakshi', entity, function (error, response) {
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

  tableService.retrieveEntity('sakshi', 'part1', 'row1', function (
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

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

  tableService.createTableIfNotExists('teacherprofile', function (
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
    PartitionKey: entGen.String('teacher'),
    RowKey: entGen.String('row1'),
    boolValueTrue: entGen.Boolean(true),
    boolValueFalse: entGen.Boolean(false),
    intValue: entGen.Int32(42),
    taskDone: entGen.Boolean(false),
    dateValue: entGen.DateTime(new Date(Date.UTC(2011, 10, 25))),
    complexDateValue: entGen.DateTime(
      new Date(Date.UTC(2013, 02, 16, 01, 46, 20))
    ),
  }
  tableService.insertEntity('teacher', entity, function (
    error,
    result,
    response
  ) {
    if (!error) {
      res.send(result)

      // result contains the ETag for the new entity
    }
    //   tableService.insertEntity('teacher', entity, function (
    //   error,
    //   result,
    //   response
    // ) {
    //   if (!error) {
    //     res.send(result)

    //     // result contains the ETag for the new entity

    //   }
    // });
  })
  app.get('/updateentity', (req, res) => {
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    var entGen = azure.TableUtilities.entityGenerator
    var entity = {
      PartitionKey: entGen.String('teacher'),
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
        console.log(result)
        // result contains the entity with field 'taskDone' set to `true`
      }
    })
  })
  app.get('/deletetable', (req, res) => {
    var tableService = azure.createTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )
    var entGen = azure.TableUtilities.entityGenerator
    var entity = {
      PartitionKey: entGen.String('teacher'),
      RowKey: entGen.String('row1'),
    }
    tableService.deleteTable('teacher', entity, function (
      error,
      result,
      response
    ) {
      if (!error) {
        console.log(response)
        res.send(result)
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
    tableService.deleteEntity('teacher', entity, function (error, response) {
      if (!error) {
        // console.log(response)
        // result contains true if created; false if already exists
        res.send(result)
      }
    })
  })
  app.get('/readentity', (req, res) => {
    var tableService = azure.ceateTableService(
      'projmgt',
      'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
    )

    // tableService.retrieveEntity('sakshi', 'part1', 'row1', function (
    //   error,
    //   result,
    //   response
    // ) {
    //   if (!error) {
    //     console.log(result)
    //     // result contains the entity
    //   }
    // })
    // );

    tableService.retrieveEntity('teacher', 'part1', 'row1', function (
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
})
// teacher 
app.get('/addDetails',async (req, res) => {
  var tableService = azure.createTableService(
    'projmgt',
    'z5PY9Bq52vjFI8R52I0TjQBGt6VXaDahQ0gvlxQ8PZ9EBaSYYwcYh6l091EFc/9pnXiJw0Q2I3fiXml/DDjcPA=='
  )
  var entGen = azure.TableUtilities.entityGenerator
  var entity = {
    PartitionKey: entGen.String(req.body.PartitionKey),
    RowKey: entGen.String(req.body.RowKey),
    teachername: entGen.String(req.body.teachername),
    teacheremail: entGen.String(req.body.teacheremail),
    teacheraddress: entGen.String(req.body.teacheraddress),
    teacherdepartment: entGen.String(req.body.teacherdepartment),
    teachernumber: entGen.String(req.body.teachernumber),
    teacherDOB: entGen.String(req.body.teacherDOB),
    teacherExper: entGen.String(req.body.teacherExper),
  }
  tableService.insertEntity('teacher', entity, function (
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
export default {}
export const teacherform = [
  {
    t: 'input',
    f: 'PartitionKey',
    id: 'PartitionKey',
    p: 'PartitionKey',
    l: 'PartitionKey',
  },
  { t: 'input', f: 'RowKey', id: 'RowKey', p: 'RowKey', l: 'RowKey' },
  { t: 'input', f: 'name', id: 'name', p: 'Name', l: 'name' },
  { t: 'input', f: 'email', id: 'email', p: 'Email', l: 'email' },
  { t: 'input', f: 'number', id: 'number', p: 'Mob No', l: 'number' },
  { t: 'input', f: 'DOB', id: 'DOB', p: 'DOB', l: 'DOB:' },
  { t: 'input', f: 'Address', id: 'Address', p: 'Address', l: 'Address:' },
  {
    t: 'input',
    f: 'Department',
    id: 'Department',
    p: 'Department',
    l: 'Department:',
  },
]
assignment = [
  {
    t: 'input',
    f: 'PartitionKey',
    id: 'PartitionKey',
    p: 'PartitionKey',
    l: 'PartitionKey',
  },
  { t: 'input', f: 'RowKey', id: 'RowKey', p: 'RowKey', l: 'RowKey' },
  {
    t: 'dropdown',
    f: 'class',
    datatoggle: 'dropdown',
    l: 'Class:',
    menu: ['1st', '2nd', '3rd'],
  },
  {
    t: 'dropdown',
    l: 'Subject',
    datatoggle: 'dropdown',
    menu: ['Maths', 'Science', 'History'],
  },
  {
    t: 'button',
    f: 'createassignment',
    class: 'btn btn-secondary',
    datatoggle: 'modal',
    datatarget: '#exampleModalCenter',
    l: 'Create Assignment',
  },
]
// createassignment =[
//     { t: "input", f: "PartitionKey", id: "PartitionKey", p: "PartitionKey", l: "PartitionKey" },
//     { t: "input", f: "RowKey", id: "RowKey", p: "RowKey", l: "RowKey" },
//     {t:"button",datatoggle:"modal", datatarget:"#exampleModalCenter",l:"create Assignment"},
//     {t:"modal",id:"exampleModalCenter", class:"modal fade",  tabindex:"-1",role:"dialog",arialabelledby:"exampleModalCenterTitle",ariahidden:"true",class:"modal-content modal-header modal-title",l:"Assignment"},
//     {t:"button",class:"close",datadismiss:"modal",arialabel:"Close"},
//     {t:"textarea",id="w3review",name="w3review", rows="4", cols="50",t:"Write"},
//     {t:"button",class:"btn btn-secondary",datadismiss:"modal",l:"Close"},
//     {t:"button",class:"btn  btn-primary",l:" Save changes"}
// ]

complaint = [
  {
    t: 'input',
    f: 'PartitionKey',
    id: 'PartitionKey',
    p: 'PartitionKey',
    l: 'PartitionKey',
  },
  { t: 'input', f: 'RowKey', id: 'RowKey', p: 'RowKey', l: 'RowKey' },
  {
    t: 'input',
    f: 'complaint',
    rows: '8',
    id: 'complant',
    p: 'Write your complaint....',
    l: 'To:',
    rows: '8',
    cols: '50',
  },
]
syllabus = [
  {
    t: 'input',
    f: 'PartitionKey',
    id: 'PartitionKey',
    p: 'PartitionKey',
    l: 'PartitionKey',
  },
  { t: 'input', f: 'RowKey', id: 'RowKey', p: 'RowKey', l: 'RowKey' },
  {
    t: 'button',
    datatoggle: 'dropdown',
    ariahaspopup: 'true',
    ariaexpanded: 'false',
    l: 'Class',
    menu: ['1st', '2nd', '3rd'],
  },
  {
    t: 'button',
    l: 'Subject',
    datatoggle: 'dropdown',
    menu: ['Maths', 'Science', 'History'],
  },
  {
    t: 'dropdown',
    f: 'class',
    datatoggle: 'dropdown',
    l: 'Class:',
    menu: ['1st', '2nd', '3rd'],
  },
]
mysalary = [
  {
    t: 'input',
    f: 'PartitionKey',
    id: 'PartitionKey',
    p: 'PartitionKey',
    l: 'PartitionKey',
  },
  { t: 'input', f: 'RowKey', id: 'RowKey', p: 'RowKey', l: 'RowKey' },
  {
    t: 'dropdown',
    f: 'class',
    datatoggle: 'dropdown',
    l: 'year:',
    menu: ['2018', '2019', '202'],
  },
  {
    t: 'button',
    datatoggle: 'dropdown',
    l: 'Month',
    datatoggle: 'dropdown',
    menu: [
      'jan',
      'feb',
      'mar',
      'apr',
      'may',
      'jun',
      'jul',
      'aug',
      'sep',
      'oct',
      'nov',
      'dec',
    ],
  },
]

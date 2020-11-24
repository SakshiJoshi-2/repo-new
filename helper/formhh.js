const teacherprofile = [
  // {
  //   type: 'input',
  //   f: 'PartitionKey',
  //   id: 'PartitionKey',
  //   p: 'PartitionKey',
  //   l: 'PartitionKey',
   
  // },
  // {
  //   type: 'input',
  //   f: 'RowKey',
  //   id: 'RowKey',
  //   p: 'RowKey',
  //   l: 'RowKey',
  // },
  {
    type: 'text',
    id: 'teachername',
    l: 'Full Name',
    p: 'Enter your name...',
  },

  {
    type: 'textarea',
    id: 'teacheremail',
    l: 'Email Address',
    p: 'Enter Email...',
  },
  {
    type: 'textarea',
    id: 'teacheraddress',
    l: 'Address',
    p: 'Enter Address...',
  },
  {
    type: 'text',
    id: 'teacherdepartment',
    l: 'Department',
    p: 'Enter Department...',
  },
  {
    type: 'text',
    id: 'teachernumber',
    l: 'Mob No',
    p: 'Enter Number...',
  },
  {
    type: 'date',
    id: 'teacherDOB',
    l: 'D.O.B',
    p: 'Enter Date...',
  },
  {
    type: 'text',
    id: 'teacherExper',
    l: 'Experience(year)',
    p: 'Experience',
  },
]
 const Personal = [
  {
    type: 'input',
    f: 'PartitionKey',
    id: 'PartitionKey',
    p: 'PartitionKey',
    l: 'PartitionKey',
   
  },
  {
    type: 'input',
    f: 'RowKey',
    id: 'RowKey',
    p: 'RowKey',
    l: 'RowKey',
  },
  { type: 'text', id: 'Tname', label: 'Name:' },
  {
    type: 'text',
    id: 'Tdays',
    label: 'Days Worked:',
  },
  {
    type: 'text',
    id: 'TLeave',
    label: 'Leave Taken::',
  },
  {
    type: 'text',
    id: 'Tjoin',
    label: 'Joining Date:',
  },
  {
    type: 'text',
    id: 'Tdept',
    label: 'Department:',
  },
  {
    type: 'text',
    id: 'Twork',
    label: 'Days Worked:',
  },
  
  {
    type: 'text',
    id: 'TAllow',
    label: 'Allowed Leaves:',
  },
  {
    type: 'text',
    id: 'Ttotal',
    label: 'Total Amount:',
  },

  {
    type: 'text',
    id: 'THRA',
    label: 'HRA:',
  },
  {
    type: 'text',
    id: 'Tconv',
    label: 'Conv Allowance:',
  },
  {
    type: 'text',
    id: 'Tmed',
    label: 'Medical Allowance:',
  },

  
  {
    type: 'text',
    id: 'TDOT',
    label: 'Date of Transfer:',
  },

  {
    type: 'text',
    id: 'TBname',
    label: 'Bank Name:',
  },
]

const teacherassignment = [
  // {
  //   t: 'input',
  //   f: 'PartitionKey',
  //   id: 'PartitionKey',
  //   p: 'PartitionKey',
  //   l: 'PartitionKey',
   
  // },
  {
    t: 'input',
    f: 'RowKey',
    id: 'RowKey',
    p: 'Subject',
    l: 'Subject',
  },
  
  // {
  //   t: 'text',
  //   id: 'Wassignment',
  //   label: 'Write',
  //   style: 'height:180px',
  //   class:'col-10'
  // },
  {
    t: 'date',
    id: 'Cassignment',
    l: 'Created-In',
  },
  {
    t: 'date',
    id: 'Dassignment',
    l: 'Submit-In',
  },
  
]

const teachertimetable = [
  // {
  //   type: 'input',
  //   f: 'PartitionKey',
  //   id: 'PartitionKey',
  //   p: 'PartitionKey',
  //   l: 'PartitionKey',
   
  // },
  {
    type: 'input',
    f: 'class',
    id: 'class',
    p: 'Class',
    l: 'class',
  },
  
  {
    type: 'input',
    f: 'teachersection',
    id: 'teachersection',
    p: 'Section',
    l: 'section',
  },
  // {
  //   type: 'input',
  //   f: 'RowKey',
  //   id: 'RowKey',
  //   p: 'number',
  //   l: 'Number',
  // },
  // {
  //   type: 'input',
  //   f: 'days',
  //   id: 'days',
  //   p: 'Enter Days',
  //   l: 'Days',
    
  // },
  {
    type: 'input',
    f: 'lecture1',
    id: 'lecture1',
    p: 'Enter lecture time',
    l: ' Lecture time',
    class:'col-5',
  },
 
  {
    type: 'input',
    f: 'subject1',
    id: 'subject1',
    p: 'subject',
    l: 'Subject1',
    class:'col-5',
  },
  {
    type: 'input',
    f: 'lecture2',
    id: 'lecture2',
    p: 'Enter lecture time',
    l: ' Lecture time',
    class:'col-5',
  },
  {
    type: 'input',
    f: 'subject2',
    id: 'subject2',
    p: 'subject2',
    l: 'Subject2',
    class:'col-5',
  },
  {
    type: 'input',
    f: 'lecture3',
    id: 'lecture3',
    p: 'Enter lecture time',
    l: ' Lecture time',
    class:'col-5',
  },
  {
    type: 'input',
    f: 'subject3',
    id: 'subject3',
    p: 'subject3',
    l: 'Subject3',
    class:'col-5',
  },
  {
    type: 'input',
    f: 'lecture4',
    id: 'lecture4',
    p: 'Enter lecture time',
    l: ' Lecture time',
    class:'col-5',
  },
  {
    type: 'input',
    f: 'subject4',
    id: 'subject4',
    p: 'subject4',
    l: 'subject4',
    class:'col-5',
  },
  {
    type: 'input',
    f: 'lecture5',
    id: 'lecture5',
    p: 'Enter lecture time',
    l: ' Lecture time',
    class:'col-5',
  },
  {
    type: 'input',
    f: 'subject5',
    id: 'subject5',
    p: 'subject5',
    l: 'Subject5',
    class:'col-5',
  },

 
]
const createsyllabus = [
  // {
  //   type: 'input',
  //   f: 'PartitionKey',
  //   id: 'PartitionKey',
  //   p: 'PartitionKey',
  //   l: 'Class',
   
  // },
  //  {
  //   type: 'input',
  //   f: 'Class',
  //   id: 'Class',
  //   p: 'Class',
  //   l: 'Class',
   
  // },
  //  {
  //   type: 'input',
  //   f: 'Section',
  //   id: 'syllabussection',
  //   p: 'Section',
  //   l: 'Section',
  // },
  
  // {
  //   type: 'input',
  //   f: 'Subjects',
  //   id: 'Subjects',
  //   p: 'Subjects',
  //   l: 'Subjects',
  // },
  
  {
    type: 'input',
    f: 'RowKey',
    id: 'RowKey',
    p: 'Chapter',
    l: 'Chapter',
  },
 
  
]

const login_form = [
  { type: 'email', id: 'userEmail', l: 'Email:' },
  { type: 'password', id: 'userPass', l: 'Password:' },
]

const signup_form = [
  { type: 'text', id: 'Schoolname', l: 'School Name:' },
  { type: 'email', id: 'userSignUpEmail', l: 'Email:' },
  
  { type: 'password', id: 'userSignUpPass', l: 'Password:' },
  { type: 'password', id: 'userSignUpConfirmPass', l: 'Confirm Password:' },
]

const billingAddress = [
  { type: 'text', id: 'name', label: 'Full Name', class: 'col-6' },
  { type: 'text', id: 'company', label: 'Company', class: 'col-6' },
  { type: 'text', id: 'address1', label: 'Address', class: 'col-12' },
  { type: 'text', id: 'address2', label: 'Address2', class: 'col-12' },
  { type: 'text', id: 'state', label: 'State', class: 'col-4' },
  { type: 'text', id: 'city', label: 'City', class: 'col-4' },
  { type: 'text', id: 'postalcode', label: 'Zip Code', class: 'col-4' },
]
export {
  teacherprofile,
  Personal,
  teacherassignment,
  teachertimetable,
  createsyllabus,
  login_form,
  signup_form,
  billingAddress,
}

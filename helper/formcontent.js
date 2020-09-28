 const sellerForm = [ 
  {type:"email",id:"sellerEmail",label:"Enter you Email",p:"Email Address..."},
  {type:"text",id:"sellerName",label:"Full Name",p:"Enter Name..."},
  {type:"password",id:"sellerPassword",label:"Set Password",p:"Enter Pass..."}
]

 const sellerLogin = [
  {type:"email",id:"sellerLoginEmail",label:"Email:",class:"col-12"},
  {type:"password",id:"sellerLoginPass",label:"Password:",class:"col-12"}
]

 const adminForm = [
  {type:"email",id:"adminEmail",label:"Email:"},
  {type:"password",id:"adminPass",label:"Password:"}
]

 const adminSignUpForm = [
  {type:"email",id:"adminSignUpEmail",label:"Email:"},
  {type:"text",id:"adminSignUpName",label:"Full Name:"},
  {type:"password",id:"adminSignUpPass",label:"Password:"},
  {type:"password",id:"adminSignUpConfirmPass",label:"Confirm Password:"}
]

 const sellerBuisnessFrom = [
  {type:"text",id:"firstname",label:"First Name",class:"col-5"},
  {type:"text",id:"lastname",label:"Last Name",class:"col-7"},
  {type:"text",id:"businessname",label:"Business Name",class:"col-12"},
  {type:"tel",id:"contactno",label:"Contact Number",class:"col-6"},
  {type:"email",id:"email",label:"Email",class:"col-6"},
  {type:"text",id:"address",label:"Address",class:"col-12"},
  {type:"text",id:"city",label:"City",class:"col-6"},
  {type:"text",id:"state",label:"State / Province",class:"col-6"},
  {type:"number",id:"zipcode",label:"Zip Code",class:"col-6"},
  {type:"text",id:"country",label:"Country",class:"col-6"},
  {type:"text",id:"businesstype",label:"Type of Business",class:"col-12"}

]

const productEditForm = [
  {type:"text",id:"productname",label:"Product Name",class:"col-8"},
  {type:"number",id:"quantity",label:"Product Quantity",class:"col-4"},
  // {type:"text",id:"price",label:"Image",class:"col-6"},
  // {type:"text",id:"tags",label:"Tag",class:"col-6"},
  
]

const categoryForm = [
  {type:"text",id:"name",label:"Add Category",class:"col-4"},
  {type:"text",id:"subcategory",label:"Add SubCategory",class:"col-4"}
]

const userLogin = [
  {type:"email",id:"userEmail",label:"Email:"},
  {type:"password",id:"userPass",label:"Password:"}
]

const userSignup = [
  {type:"email",id:"userSignUpEmail",label:"Email:"},
  {type:"text",id:"userSignUpName",label:"Full Name:"},
  {type:"password",id:"userSignUpPass",label:"Password:"},
  {type:"password",id:"userSignUpConfirmPass",label:"Confirm Password:"}
]

const billingAddress = [
  {type:"text",id:"name",label:"Full Name",class:"col-6"},
  {type:"text",id:"company",label:"Company",class:"col-6"},
  {type:"text",id:"address1",label:"Address",class:"col-12"},
  {type:"text",id:"address2",label:"Address2",class:"col-12"},
  {type:"text",id:"state",label:"State",class:"col-4"},
  {type:"text",id:"city",label:"City",class:"col-4"},
  {type:"text",id:"postalcode",label:"Zip Code",class:"col-4"}
]
export {sellerForm,sellerLogin,adminForm,adminSignUpForm,sellerBuisnessFrom,productEditForm,categoryForm,userLogin,userSignup,billingAddress}
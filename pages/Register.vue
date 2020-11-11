<template>
  <div>
    <h4>Register</h4>
    <form @submit.prevent="register">
      <label for="name">Name</label>
      <div>
        <input id="name" type="text" />
      </div>

      <label for="email">E-Mail Address</label>
      <div>
        <input id="email" type="email" />
      </div>

      <label for="password">Password</label>
      <div>
        <input id="password" type="password" />
      </div>

      <label for="password-confirm">Confirm Password</label>
      <div>
        <input id="password-confirm" type="password" />
      </div>

      <div>
        <button type="submit">Register</button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  mounted() {
    var teacher = []
    teacher[0] = 'name:xyz'
    teacher[1] = 'email:teacher@gmail.com'
    teacher[2] = 'MObno:123456'
    teacher[3] = 'add:xyz'
    teacher[4] = 'id:dfghjk'

    localStorage.setItem('teacher', JSON.stringify(teacher))
    var storedNames = JSON.parse(localStorage.getItem('teacher'))

    var admin = []
    admin[0] = 'name:xyz'
    admin[1] = 'email:admin@gmail.com'
    admin[2] = 'MObno:123456'
    admin[3] = 'add:xyz'
    admin[4] = 'id:dfghjk'

    localStorage.setItem('admin', JSON.stringify(admin))
    var storedNames = JSON.parse(localStorage.getItem('admin'))

    var student = []
    student[0] = 'name:xyz'
    student[1] = 'email:student@gmail.com'
    student[2] = 'MObno:123456'
    student[3] = 'add:xyz'
    student[4] = 'id:dfghjk'

    localStorage.setItem('student', JSON.stringify(student))
    var storedNames = JSON.parse(localStorage.getItem('student'))
  },
  methods: {
    // persist() {
    //   localStorage.name = this.name;
    //   localStorage.email = this.email;
    //   localStorage.password = this.password;
    // console.log('teacher');
    // }
    // add: function(){
    //   localStorage.setItem((this.name).val(),(this.email).val());
    //   locction.reload(true);
    // },
    // clear: function() {
    //   localStorage.clear();
    //   Location.reload(true);
    // }
  },
  // created:function() {
  //   for(i= 0;i<localStorage.length;i++){
  //     this.name = localStorage.key(i);
  //     this.email = localStorage.getItem()
  //   }

  // }
}
</script>
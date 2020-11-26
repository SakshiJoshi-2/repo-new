export default function ({ store, redirect, route }) {
  const user = store.getters['modules/user/user']
  const AdminRoute = /\/admin\/*/g
  const TeacherRoute = /\/teacher\/*/g
  const StudentRoute = /\/student\/*/g
  if (user) {
    if (user['custom:role'] == 'admin') {
      if (route.path.match(TeacherRoute) || route.path.match(StudentRoute)) {
        console.log('route if', route.path)
        redirect('/admin')
      }
    } else if (user['custom:role'] == 'teacher') {
      if (route.path.match(AdminRoute) || route.path.match(StudentRoute)) {
        redirect('/teacher')
      }
    } else if (user['custom:role'] == 'student') {
      if (route.path.match(AdminRoute) || !route.path.match(TeacherRoute)) {
        redirect('/student')
      }
    } else {
      redirect('/')
    }
  }
}

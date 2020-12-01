export default function ({ store, redirect, route }) {
  const user = store.getters['modules/user/user']
  const AdminRoute = /\/admin\/*/g
  const TeacherRoute = /\/teacher\/*/g
  const StudentRoute = /\/student\/*/g
  const PrincipalRoute = /\/principal\/*/g
  const SystemAdminRoute = /\/systemadmin\/*/g
  if (user) {
    if (user['custom:role'] == 'admin') {
      if (
        route.path.match(TeacherRoute) ||
        route.path.match(StudentRoute) ||
        route.path.match(PrincipalRoute) ||
        route.path.match(SystemAdminRoute)
      ) {
        // console.log('route if', route.path)
        redirect('/admin')
      }
    } else if (user['custom:role'] == 'teacher') {
      if (
        route.path.match(AdminRoute) ||
        route.path.match(StudentRoute) ||
        route.path.match(PrincipalRoute) ||
        route.path.match(SystemAdminRoute)
      ) {
        redirect('/teacher')
      }
    } else if (user['custom:role'] == 'student') {
      if (
        route.path.match(AdminRoute) ||
        route.path.match(TeacherRoute) ||
        route.path.match(PrincipalRoute) ||
        route.path.match(SystemAdminRoute)
      ) {
        redirect('/student')
      }
    } else if (user['custom:role'] == 'principal') {
      if (
        route.path.match(AdminRoute) ||
        route.path.match(TeacherRoute) ||
        route.path.match(StudentRoute) ||
        route.path.match(SystemAdminRoute)
      ) {
        redirect('/principal')
      }
    } else if (user['custom:role'] == 'systemadmin') {
      if (
        route.path.match(AdminRoute) ||
        route.path.match(TeacherRoute) ||
        route.path.match(StudentRoute) ||
        route.path.match(PrincipalRoute)
      ) {
        redirect('/systemadmin')
      }
    } else {
      redirect('/')
    }
  }
}

<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h2 class="heading-center">Assignment</h2>

      <div id="ex">
        <div class="container p-2 my-2 border">
          <div class="btn-group">
            <button
              class="btn btn-secondary btn-sm dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Class
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">1st</a>
              <a class="dropdown-item" href="#">2nd</a>
              <a class="dropdown-item" href="#">3rd</a>
            </div>
          </div>
          <div class="btn-group">
            <button class="btn btn-secondary btn-sm" type="button">
              Subject
            </button>
            <button
              type="button"
              class="btn btn-sm btn-secondary dropdown-toggle dropdown-toggle-split"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span class="sr-only">Toggle Dropdown</span>
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">Maths</a>
              <a class="dropdown-item" href="#">Science</a>
              <a class="dropdown-item" href="#">History</a>
            </div>
          </div>
        </div>
        <div>
          <div class="text-center">
            <!-- Button trigger modal -->
            <button
              type="button"
              class="btn btn-secondary"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Create Assignment
            </button>

            <!-- Modal -->
            <div
              class="modal fade"
              id="exampleModalCenter"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalCenterTitle"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">
                      Assignment
                    </h5>
                    <button
                      type="button"
                      class="close"
                      data-dismiss="modal"
                      aria-label="Close"
                    >
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div class="modal-body">Write</div>

                  <form action="/action_page.php">
                    <textarea
                      id="w3review"
                      name="w3review"
                      rows="4"
                      cols="50"
                    ></textarea>
                    <input type="submit" value="Done" />
                  </form>
                  <div class="row">
                    <div class="col-10 mx-auto text-center">
                      <client-only>
                        <date-picker
                          placeholder="MM/DD/YYYY"
                          format="MM/dd/yyyy"
                          v-model="date_today"
                          class="ml-5"
                        />
                      </client-only>
                    </div>
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="button" class="btn btn-primary">
                      Save changes
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div class="container">
          <table class="table table-bordered table table-hover">
            <thead class="thead-dark">
              <tr>
                <th colspan="4">Personal Details:</th>
              </tr>
            </thead>

            <thead>
              <tr>
                <th>Created In</th>
                <th>Topics</th>
                <th>Submit In</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>12/03/19</td>
                <td>Write a Table from 1 to 20.</td>
                <td>20/03/19</td>
                <td><button class="link">More</button></td>
              </tr>
              <tr>
                <td>12/03/19</td>
                <td>Practice Lesson no. 1 and 2 for tommorow test.</td>
                <td>21/03/19</td>
                <td><button class="link">More</button></td>
              </tr>
              <tr>
                <td>13/09/20</td>
                <td>Write Solution of lessson no 3 from Q1. to Q7.</td>
                <td>22/03/20</td>
                <td><button class="link">More</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: 'teacherlayout',
  data() {
    return {
      date_today: '',
    }
  },
}
</script>

<style type="text/css">
.heading-center {
  text-align: center;
}
#ex {
  border: 1px solid black;
  padding: 25px;
  background-size: auto;
}
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
  padding: 40px;
  text-align: center;
}
</style>

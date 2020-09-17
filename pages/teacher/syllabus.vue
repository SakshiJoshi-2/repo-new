<template>
  <div class="container-fluid" style="background-color: #f5f5ef">
    <div
      class="container1"
      style="background-color: #ffffff; width: 80%; margin: 30px 0px 30px 160px"
    >
      <h2 class="heading-center">Syllabus</h2>

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
        </div>
        <div class="container">
          <table class="table table-bordered table table-hover">
            <thead class="thead-dark">
              <tr>
                <th class="text-center thead-dark">Chapter</th>
                <th class="thead-dark">Maths</th>

                <th class="thead-dark">Science</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="text-center">1</td>
                <td>
                  Matrices
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" value />
                    </label>
                  </div>
                </td>

                <td>
                  Plants
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" value />
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center">2</td>
                <td>
                  Sets
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" value />
                    </label>
                  </div>
                </td>
                <td>
                  Herbs
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" value />
                    </label>
                  </div>
                </td>
              </tr>
              <tr>
                <td class="text-center">3</td>
                <td>
                  Trignometry
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" value />
                    </label>
                  </div>
                </td>
                <td>
                  Carnivorus
                  <div class="form-check-inline">
                    <label class="form-check-label">
                      <input type="checkbox" class="form-check-input" value />
                    </label>
                  </div>
                </td>
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
}
</script>

<style type="text/css">
.heading-center {
  text-align: center;
}
.container1 {
  box-shadow: 10px 10px 5px lightgrey;
  padding: 40px;
  text-align: center;
}
</style>

<template>
  <div>
    <div class="container">
      <h2 class="heading-center">Assignment</h2>
    </div>

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

      <div class="container">
        <button type="button-center" class="btn btn-secondary btn-lg">
          Create Assignment
        </button>
      </div>

      <div class="container">
        <form action="/action_page.php">
        <i class="fa fa-id-card" aria-hidden="true"></i>
          <i class="fa fa-address-book" aria-hidden="true"></i>
          <label for="w3review">Write</label>
          <textarea id="w3review" name="w3review" rows="4" cols="50"></textarea>
          <input type="submit" value="Submit" />
        </form>
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
#ex {
  border: 1px solid black;
  padding: 25px;
  background-size: auto;
}
</style>

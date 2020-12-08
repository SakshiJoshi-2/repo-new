<template>
  <div class="container">
    <!-- Button to Open the Modal -->
    <slot name="button">
      <button
        type="button"
        class="btn btn-primary btn-xs"
        data-toggle="modal"
        data-target="#myModal"
      >
        open
      </button>
    </slot>

    <!-- The Modal -->
    <div class="modal fade" id="myModal">
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title"><slot name="header">header</slot></h4>
            <!-- <button type="button" class="close" data-dismiss="modal">&times;</button> -->
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <slot name="body"> Modal body..</slot>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <slot name="footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style  scoped>


</style>
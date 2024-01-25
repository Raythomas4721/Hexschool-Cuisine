export default {
  template: `<div
    class="modal fade"
    id="delProductModal"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-danger text-white">
          <h1 class="modal-title fs-5" id="delProductModalLabel">
            Delete Product
          </h1>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Delete product
          <strong class="text-danger">{{tempProduct.title}} </strong
          >(cannot be recovered after deletion).
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="delProduct(tempProduct.id)"
          >
            Confirm Deletion
          </button>
        </div>
      </div>
    </div>
  </div>`,
  props: ["tempProduct", "delProduct"],
};

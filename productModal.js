export default {
  template: `<div
        class="modal fade"
        id="productModal"
        tabindex="-1"
        aria-labelledby="productModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-xl">
          <div class="modal-content">
            <div class="modal-header bg-dark text-white">
              <h5 class="modal-title fs-5" id="productModalLabel">
                New Product
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-4">
                  <div class="mb-3">
                    <label for="imageInput" class="form-label h6"
                      >Main image for product</label
                    >
                    <img
                      :src="tempProduct.imageUrl"
                      class="img-fluid"
                    />
                    <input
                      type="text"
                      class="form-control"
                      id="imageInput"
                      name="imageInput"
                      placeholder="enter image url"
                      v-model="tempProduct.imageUrl"
                    />
                  </div>
                  <div class="bg-secondary" style="height: 1px"></div>
                  <div class="mt-3">
                    <h6>Place more Images</h6>
                    <input
                      type="text"
                      class="form-control"
                      id="imagesInput"
                      name="imagesInput"
                      v-model="newPictureUrl"
                    />
                    <button
                      type="button"
                      class="mt-1 btn btn-outline-primary w-100"
                      @click="addPicture"
                    >
                      Add more picture
                    </button>
                  </div>
                  <div
                    v-for="(pic,key) in tempProduct.imagesUrl"
                    :key="key"
                    class="mt-3"
                  >
                    <img
                      :src="pic"
                      :alt="tempProduct.title"
                      class="img-fluid"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-danger w-100"
                      @click="delPicture(key)"
                    >
                      Delete picture
                    </button>
                  </div>
                </div>
                <div class="col-8">
                  <div class="mb-3">
                    <label for="productTitle" class="form-label"
                      >Product Title</label
                    >
                    <input
                      type="text"
                      id="productTitle"
                      name="productTitle"
                      class="form-control"
                      placeholder="enter product title"
                      v-model="tempProduct.title"
                    />
                  </div>
                  <div class="row">
                    <div class="col-6 mb-3">
                      <label for="productCategory" class="form-label"
                        >Category</label
                      >
                      <input
                        type="text"
                        id="productCategory"
                        name="productCategory"
                        class="form-control"
                        placeholder="enter category"
                        v-model="tempProduct.category"
                      />
                    </div>
                    <div class="col-6 mb-3">
                      <label for="productUnit" class="form-label"
                        >Unit</label
                      >
                      <input
                        type="text"
                        id="productUnit"
                        name="productUnit"
                        class="form-control"
                        placeholder="enter unit"
                        v-model="tempProduct.unit"
                      />
                    </div>
                    <div class="col-6 mb-3">
                      <label for="productReg" class="form-label"
                        >Regular Price</label
                      >
                      <input
                        id="productReg"
                        name="productReg"
                        class="form-control"
                        type="number"
                        min="0"
                        placeholder="enter regular price"
                        v-model.number="tempProduct.origin_price"
                      />
                    </div>
                    <div class="col-6 mb-3">
                      <label for="productPrice" class="form-label"
                        >Sale Price</label
                      >
                      <input
                        id="productPrice"
                        name="productPrice"
                        class="form-control"
                        type="number"
                        min="0"
                        placeholder="enter price"
                        v-model.number="tempProduct.price"
                      />
                    </div>
                  </div>
                  <div class="mb-3">
                    <label for="productDescription" class="form-label"
                      >Product Description</label
                    >
                    <textarea
                      type="text"
                      id="productDescription"
                      name="productDescription"
                      class="form-control"
                      v-model="tempProduct.description"
                    ></textarea>
                  </div>
                  <div class="mb-3">
                    <label for="productContent" class="form-label"
                      >Product Content</label
                    >
                    <textarea
                      type="text"
                      id="productContent"
                      name="productContent"
                      class="form-control"
                      v-model="tempProduct.content"
                    ></textarea>
                  </div>
                  <div class="form-check mb-3">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="is_enabled"
                      name="is_enabled"
                      v-model="tempProduct.is_enabled"
                    />
                    <label for="is_enabled" class="form-check-label"
                      >In Stock</label
                    >
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="updateProduct"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      `,
  props: [
    "tempProduct",
    "updateProduct",
    "delPicture",
    "addPicture",
    "newPictureUrl",
  ],
};

export default {
  template: `<div class="d-flex flex-row-reverse">
    <nav aria-label="ProductPagination">
      <ul class="pagination">
        <li
          class="page-item"
          :class="{'disabled': pagination.current_page === 1} "
        >
          <a
            class="page-link"
            href="#"
            @click.prevent="getProducts(page = pagination.current_page-1)"
            >Previous</a
          >
        </li>
        <li
          class="page-item"
          v-for="(item,key) in pagination.total_pages
        "
          :key="key"
          :class="{'active' : item === pagination.current_page}"
        >
          <a class="page-link" href="#" @click="getProducts(item)">
            {{item}}</a
          >
        </li>
        <li
          class="page-item"
          :class="{'disabled': pagination.has_next == false} "
        >
          <a class="page-link" href="#" @click.prevent="getProducts(page = pagination.current_page+1)">Next</a>
        </li>
      </ul>
    </nav>
  </div>`,
  props: ["getProducts", "pagination"],
};

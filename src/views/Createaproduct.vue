<template>
   <div class="modal fade" id="update-modal${i}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">update a product</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
      TITLE<input type="text" id="update-title${i}"/> <br>
      CATEGORY<select name="category" id="update-category${i}"><br>
          <option value="select">-select one-</option><br>
      <option value="Laptops">laptops</option>
      <option value="Cellphone">cellphones</option>
      <option value="speakers">speakers</option>
      <option value="earpods">earpods</option>
    </select><br>
    PRICE<input type="text" id="update-price${i}" value=""/><br>
    IMG LINK<input type="text" id="update-img${i}" value=""/><br>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary" onclick="updateProducts(${i})" data-bs-toggle="modal" data-bs-target="#update-modal${i}">Save changes</button>
        </div>
      </div>
    </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      title: "",
      category: "",
      price: "",
      img: "",
    };
  },
  methods: {
    createProduct() {
      if (!localStorage.getItem("jwt")) {
        alert("User not logged in");
        return this.$router.push({ name: "Login" });
      }
      fetch("https://eds-backend.herokuapp.com/products", {
        method: "POST",
        body: JSON.stringify({
          title: this.title,
          category: this.category,
          price: this.price,
          img: this.img,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
        .then((response) => response.json())
        .then((json) => {
          alert("Product Created");
          this.$router.push({ title: "Products" });
        })
        .catch((err) => {
          alert(err);
        });
    },
  },
};
</script> 
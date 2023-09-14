let deliveryProduct = localStorage.allCarts
  ? (carts = JSON.parse(localStorage.getItem("allCarts")))
  : (carts = []);
document.getElementById("badg").innerHTML =
  carts.length == 0 ? "" : carts.length;

let uploadedProduct = localStorage.productUpload
  ? JSON.parse(localStorage.productUpload)
  : [];
  
  let firstBtn=document.getElementById("shbtn")
  let secondBtn=document.getElementById("snbtn")
  let secondBtn1=document.getElementById("snbtn1")
  firstBtn.style.display="none"
  secondBtn1.style.display="none"
const uploadProduct=() => {
  if(!productCategory.value || !totalProduct.value || !productPrice.value || !productDisc.value || !productImage.value){
    alert("field is required")
    productCategory.className="form-control is-invalid"
    totalProduct.className="form-control is-invalid"
    productPrice.className="form-control is-invalid"
    productDisc.className="form-control is-invalid"
    productImage.className="form-control is-invalid"
  }
  else if(secondBtn.style.display="none"){
    productCategory.className="form-control is-valid"
    totalProduct.className="form-control is-valid"
    productPrice.className="form-control is-valid"
    productDisc.className="form-control is-valid"
    productImage.className="form-control is-valid"
    // productCategory.value=""
    // totalProduct.value=""
    // productPrice.value=""
    // productDisc.value=""
    // productImage.value=""
      firstBtn.style.display="block"
      setTimeout(()=>{
        secondBtn1.style.display="block"
        firstBtn.style.display="none"
        productCategory.value=""
        totalProduct.value=""
        productPrice.value=""
        productDisc.value=""
        productImage.value=""
      },8000)
    }
 
  let imageInput = document.getElementById("productImage");

  if (imageInput.files.length > 0) {
    let file = imageInput.files[0];

    let reader = new FileReader();
    reader.onload = function (e) {
      let imageData = e.target.result;

      let uploadProduct = {
        product_image: imageData,
        product_description:productDisc.value,
        product_price: productPrice.value,
        product_category: productCategory.value,
        total_product: totalProduct.value,

      };
 

      uploadedProduct.push(uploadProduct);
      localStorage.setItem("productUpload", JSON.stringify(uploadedProduct));
      console.log(uploadedProduct);
    };
    reader.readAsDataURL(file);
  } else {
    console.log("No file selected.");
  }

};

const logOut=()=>{
  window.location.href="index.html"
}








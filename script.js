axios.get("https://contact-arifbillah.herokuapp.com/data").then((res) => {
  res.data.users.map((data) => {
    document.write(`<div class="container" style="  width: max-content;
    height: max-content;
    display: inline-block;
  padding: 10px;
  background-color: rgb(32, 31, 31);
  text-align: justify;
  border: 2px solid rgb(129, 129, 129);
  margin: 10px;">
       <div class="name" style="padding:5px;">Name: <span>${data.name}</span></div>
       <div class="email" style="padding:5px;">Email: <span>${data.email}</span></div>
       <div class="msg" style="padding:5px;">Message: <span>${data.msg}</span></div>
     </div>
         `);
    document.body.style.backgroundColor = "black";
    document.body.style.color = "rgb(245, 245, 245)";
    document.body.style.fontFamily = " Arial, Helvetica, sans-serif";
    document.body.style.letterSpacing = "1px";
  });
});

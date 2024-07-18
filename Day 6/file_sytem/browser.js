// useing the FileReader api some restrictions

const input = document.querySelector('input[type="file"]');
input.addEventListener("change", (event) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = () => {
    console.log(reader.result);
  };
  reader.readAsText(file);
});

const uploadBtn = document.getElementById("uploadBtn");

uploadBtn.addEventListener("click", () => {
  const fileInput = document.getElementById("fileInput");
  const file = fileInput.files;
  const formData = new FormData();
  forData.append("file", file);

  const response = axios.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
});

//module.exports = fileupload;

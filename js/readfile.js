export const onFileRead = () => {
    const fileInput = document.querySelector("#uploadFile");
    const divOutput = document.querySelector("#outputDiv");
    let file = fileInput.files[0];
    let reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
        divOutput.textContent = reader.result;
    };
    divOutput.innerHTML = reader.result;
    reader.onerror = () => {
        console.log(reader.error);
    };
    return reader;
}

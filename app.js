import {onFileRead} from "./js/readfile.js";
import {downloadToFile} from "./js/exporttofile.js";
import {SampleTxt} from "./js/utils.js";

document.addEventListener('DOMContentLoaded', () => {
    const userBtn = document.querySelector("#userBtn");
    const fileInput = document.querySelector("#uploadFile");
    const searchBtn = document.querySelector("#searchBtn");
    const insertBtn = document.querySelector("#insertBtn");
    const textDiv = document.querySelector("#outputDiv");
    const userInput = document.querySelector("#userInput");
    const searchInput = document.querySelector("#searchInput");
    const hiddenEls = document.getElementsByClassName("span-replace");
    fileInput.addEventListener('change', onFileRead, false);

    insertBtn.addEventListener('click', () => {
        textDiv.innerHTML = SampleTxt;
    });
    userBtn.addEventListener('click', (e) => {
        // !toLowerCase() is not applied in order to keep importance of the case validity
        textDiv.innerHTML = SampleTxt;
        userInput.value = userInput.value.trim();
        textDiv.innerHTML = textDiv.innerHTML.replaceAll(userInput.value.trim(), (matched) => {
            if (matched) {
                return `<span style="color: rebeccapurple;" class="span-replace">
                            <b class="span-replace__mask">XXXX</b>
                            <b class="span-replace__value">${userInput.value}
                            </b>
                       </span>`
            }
        });
        userInput.value = '';
    });
    searchBtn.addEventListener('click', (e) => {
        for (let i = 0; i < hiddenEls.length; i++) {
            let searchStr = searchInput.value.toString();
            let textStr = hiddenEls[i].children[1].innerText.trim().toString();
            if (searchStr === textStr) {
                // console.log('TRUE', true);
                hiddenEls[i].children[1].classList.remove('span-replace__value');
                hiddenEls[i].classList.add('span-reveal');
            }
        }

    });

});

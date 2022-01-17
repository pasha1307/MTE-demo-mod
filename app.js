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
        userInput.value = userInput.value.trim();
        textDiv.innerHTML = textDiv.innerHTML.replace(userInput.value.trim(), (matched) => {
            if (matched) {
                // userInput.value = '';
                return `<span style="color: rebeccapurple;" class="span-replace">
                            <b class="span-replace__mask">XXX</b>
                            <b class="span-replace__value">${userInput.value}
                            </b>
                       </span>`
            }
        });
        userInput.value = '';
    });
    searchBtn.addEventListener('click', (e) => {
        console.log('IN VAL', searchInput.value);
        console.log('MASKED SPANS', hiddenEls);
        for (let i = 0; i < hiddenEls.length; i++) {
            let searchStr = searchInput.value.toString();
            let textStr = hiddenEls[i].children[1].innerText.trim().toString();
            if (searchStr === textStr) {
                hiddenEls[i].children[1].classList.remove('span-replace__value');
                hiddenEls[i].classList.add('span-reveal');
            }
        }

    });

});

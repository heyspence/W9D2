const partyHeader = document.getElementById('party');
// const title = document.querySelector('.welcome');

export const htmlGenerator = (string, htmlElement) => {
    let ele = document.createElement("p")
    ele.innerText = string
    htmlElement.appendChild(ele)
};

htmlGenerator('Party Time.', partyHeader);
// htmlGenerator("I <3 Vanilla DOM manipulation.", title);
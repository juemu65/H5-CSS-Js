const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = '面对凶猛的:insertX:，道士一边念咒，一边用朱砂飞速在符咒上写下：“:insertZ:！” 扔到:insertY:，符咒却半天都没有反应。道士拍拍脑袋，把符咒抓了回来，用朱砂在前头又勾了一个@。';
let insertX = ['怪兽威利', '大老爹', '圣诞老人'];
let insertY = ['肯德基', '迪士尼乐园', '白宫'];
let insertZ = ['自燃了', '在人行道化成了一坨泥', '变成一只鼻涕虫爬走了'];

randomize.addEventListener('click', result);

function result() {
    let newStory = storyText;

    let xItem = randomValueFromArray(insertX);
    let yItem = randomValueFromArray(insertY);
    let zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(':insertX:', xItem);
    newStory = newStory.replace(':insertY:', yItem);
    newStory = newStory.replace(':insertZ:', zItem);

    if(customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replace('李雷', name);
    }

    

    story.textContent = newStory;
    story.style.visibility = 'visible';
}
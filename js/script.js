console.log("labas");

const comments = [
    {
      stars: 4,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, nisl eget tristique
            molestie. Quisque pharetra tincidunt interdum nunc, ac eget nisi, lectus interdum. Cras aliquet
            curabitur in morbi facilisi imperdiet non sollicitudin.`,
      img: 18,
      name: "Designation",
    },
    {
      stars: 4,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, nisl eget tristique
            molestie. Quisque pharetra tincidunt interdum nunc, ac eget nisi, lectus interdum. Cras aliquet
            vulputate sit. Varius neque accumsan libero, augue tortor.`,
      img: 17,
      name: "Production",
    },
    {
      stars: 5,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, nisl eget tristique
            molestie. Quisque pharetra tincidunt interdum nunc, ac eget nisi, lectus interdum. Cras aliquet
            bibendum. Diam libero morbi aliquet mi gravida velit enim.`,
      img: 16,
      name: "Result",
    },
  ];
  
  const commentsSection = document.querySelector(".comments");
  const commentContainer = document.querySelector(".commentContainer");
  const commentStars = document.querySelector(".stars");
  const commentContent = document.querySelector(".comment");
  const commentImage = document.querySelector(".commentImage");
  const commentName = document.querySelector(".commentName");
  
  updateComment();


  function updateComment() {
    const fullStars = comments[0]["stars"];
    const emptyStars = 5 - fullStars;
  
    const fullStarsHtml = "<img src='./img/Star.svg'>".repeat(fullStars);
    const emptyStarsHtml = "<img src='./img/starEmpty.png'>".repeat(emptyStars);
  
    commentStars.innerHTML = `
      ${fullStarsHtml}
      ${emptyStarsHtml}
    `;
    commentContent.textContent = comments[0]["comment"];
    commentImage.src = `./img/avatarai/Ellipse ${comments[0]["img"]}.svg`;
    commentName.textContent = comments[0]["name"];
  }
  
  function shiftCommentsRight() {
    const firstEl = comments.shift();
    comments.push(firstEl);
    updateComment();
  }
  
  function shiftCommentsLeft() {
    const last = comments.pop();
    comments.unshift(last);
    updateComment();
  }
  
  const leftArr = document.querySelector(".leftArrow");
  const rightArr = document.querySelector(".rightArrow");
  
  rightArr.addEventListener("click", shiftCommentsRight);
  leftArr.addEventListener("click", shiftCommentsLeft);
  



const basicMonth = document.getElementById('basicMonth');
const essentialMonth = document.getElementById('essentialMonth');
const checkBtn = document.getElementById('check');

checkBtn.addEventListener('click', function(){
    if(checkBtn.checked){
        basicMonth.innerHTML=`Rs. 500`;
        essentialMonth.innerHTML=`Rs. 600`;
    }else{
        basicMonth.innerHTML=`Rs. 50000`;
        essentialMonth.innerHTML=`Rs. 605000`;
    }
})



// How does Collab-app help section


const firstComment = document.getElementById('first');
const secondComment = document.getElementById('second');
const thirdComment = document.getElementById('third');
const fourthComment = document.getElementById('fourth');

const helpBtn = document.getElementById('helpBtn');
const helpBtn2 = document.getElementById('helpBtn2');


helpBtn.addEventListener('click', function(){
   
        firstComment.innerHTML=`<b>Work/Material request:</b> Whenever a client wants to
        start, a work request notifications with date
        and time for materials and artisians will be promted through their app.</p>`;
        secondComment.innerHTML=` <b>Project Management:</b> Work on multiple projects <a
        href="#"><b>...see
            more </b></a>`;
        thirdComment.innerHTML=`<b>Payment:</b> Get paid for the work step by step <a
        href="#"><b>...see
            more </b></a>`;
        fourthComment.innerHTML=`<b>Tutorials:</b> Explore the video tutorials to learn more <a
        href="#"><b>...see
            more </b></a>`;

})

helpBtn2.addEventListener('click', function(){
   
    fourthComment.innerHTML=`<b>Work/Material request:</b> Whenever a client wants to
    start, a work request notifications with date
    and time for materials and artisians will be promted through their app.</p>`;
    thirdComment.innerHTML=` <b>Project Management:</b> Work on multiple projects <a
    href="#"><b>...see
        more </b></a>`;
    firstComment.innerHTML=`<b>Payment:</b> Get paid for the work step by step <a
    href="#"><b>...see
        more </b></a>`;
    secondComment.innerHTML=`<b>Tutorials:</b> Explore the video tutorials to learn more <a
    href="#"><b>...see
        more </b></a>`;

})



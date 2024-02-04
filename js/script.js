console.log("labas");

const comments = [
    {
      stars: 3,
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
            curabitur in morbi facilisi imperdiet non sollicitudin. Molestie volutpat vulputate eu nunc in
            vulputate sit. Varius neque accumsan libero, augue tortor.`,
      img: 17,
      name: "Production",
    },
    {
      stars: 5,
      comment: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi, nisl eget tristique
            molestie. Quisque pharetra tincidunt interdum nunc, ac eget nisi, lectus interdum. Cras aliquet
            curabitur in morbi facilisi imperdiet non sollicitudin. Molestie volutpat vulputate eu nunc in
            vulputate sit. Varius neque accumsan libero, augue tortor. Id metus rutrum fringilla nibh neque, at
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
  
  updateComment();



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

//   const vendorBtn = document.querySelector(".b1");
//   const supervisorBtn = document.querySelector(".b2");

//   const vendorApp = [
//     {
//       bold: "Work/Material request:",
//       text: "Whenever a client wants to start a work, request notifications with date and time for materials and artisians will be promted through their app",
//     },
//     {
//       bold: "Project Management:",
//       text: "Work on multiple projects",
//     },
//     {
//       bold: "Payment:",
//       text: "Get paid for the step by step work",
//     },
//     {
//       bold: "Tutorials:",
//       text: "Explore the video tutorials to learn",
//     },
//   ];
//   const supervisorApp = [
//     {
//       bold: "Project Management:",
//       text: "Work on multiple projects",
//     },
//     {
//       bold: "Payment:",
//       text: "Get paid for the step by step work",
//     },
//     {
//       bold: "Tutorials:",
//       text: "Explore the video tutorials to learn",
//     },
//   ];

//   const helpUl = document.querySelector(".help-list");

//   function helpHtml(arr) {
//     let list = "";
//     arr.forEach((el) => {
//       list += `
//       <li><b>${el["bold"]}</b> ${el["text"]}<a class="see-more" href="#"> ...see more</a></li>
//       `;
//     });
//     return  helpUl.innerHTML = list;
//   }

//   helpHtml(vendorApp);

//   vendorBtn.addEventListener("click", function () {
//     if (vendorBtn.classList.contains("inactive")) {
//       vendorBtn.classList.remove("inactive");
//       supervisorBtn.classList.add("inactive");
//       helpHtml(vendorApp);
//     }
//   });
//   supervisorBtn.addEventListener("click", function () {
//     if (supervisorBtn.classList.contains("inactive")) {
//       supervisorBtn.classList.remove("inactive");
//       vendorBtn.classList.add("inactive");
//       helpHtml(supervisorApp);
//     }
//   });

$(document).ready(function() {
  //   const request = new XMLHttpRequest();
  //   const url = 'https://jsonplaceholder.typicode.com/comments';

  //   //   request.onload = function(resp) {
  //   //     console.log(resp);
  //   //   }
  //   //   request.addEventListener('loadend', function(response) {
  //   //     console.log(response);
  //   //   });
  //   //   request.open('GET', url);
  //   //   request.send();

  //   //   console.log('test');

  //   function getCommentItem({ body, name, email, id, postId }) {
  //     return $(`
  //       <div class="comment-item" data-comment-id='${id}' data-post-id='${postId}'>
  //         <div class="name">
  //             <h4>${name}</h4>
  //         </div>
  //         <div class="body">${body}</div>
  //         <div class="author">${email}</div>
  //       </div>
  //       `);
  //   }

  //   $('#get-comments').on('click', function() {
  //     $.ajax({
  //       url: url,
  //       method: 'GET',
  //       beforeSend: function() {
  //         $('.loading').addClass('active');
  //       },
  //       success: function(comments) {
  //         $('.loading').removeClass('active');
  //         comments.forEach((comment) => {
  //           $('.comment-list').append(getCommentItem(comment));
  //         });
  //       }
  //     });
  //   });

  //   const user = {
  //     name: 'John',
  //     surname: 'Doe',
  //     age: 21,
  //   };

  //   const student = {
  //     age: 22,
  //   };

  //   const newUser = {
  //     ...student,
  //     ...user,
  //     typer: 'example',
  //   };

  //   //   newUser.subObj.value = '2';

  //   console.log(user);
  //   console.log(newUser);
  //   //   console.log(user.subObj === newUser.subObj);

  //   const a = [1, 2, 3];
  //   const b = [4, 5, 6];

  //   const c = [...a, ...b];

  //   console.log(c);

  //   console.log(document.cookie);

  //   document.cookie = document.cookie + `;theme=dark`;

  //   $("#get-comments").on('click', function() {
  //     window.sessionStorage.setItem('theme', 'dark');
  //     window.sessionStorage.setItem('user', 'jamil.alio');
  //     window.sessionStorage.setItem('id', '2123');
  //   })

  $('.task-list')
    .on('dragover', false)
    .on('drop', function(e) {
      const originalEvent = e.originalEvent;
      const draggedElementId = originalEvent.dataTransfer.getData('dragged-element-id');
      const element = $(`.task-item[data-task-id='${draggedElementId}']`);
      const clone = element.clone();
      element.remove();

      $(this).append(clone);
    });

  $(document).on('dragstart', '.task-item', function(e) {
    const elementId = $(this).attr('data-task-id');
    const originalEvent = e.originalEvent;
    originalEvent.dataTransfer.setData('dragged-element-id', elementId);
  });

  $('.task-item')
    .on('webkitAnimationEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      $(this).remove();
    });
});

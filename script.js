document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn việc gửi form mặc định

    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Tạo một phần tử bình luận mới
    const commentItem = document.createElement('li');
    commentItem.textContent = `${name}: ${comment}`;

    // Thêm bình luận vào danh sách bình luận
    document.getElementById('commentsDisplay').appendChild(commentItem);

    // Xóa form sau khi gửi
    document.getElementById('commentForm').reset();
});
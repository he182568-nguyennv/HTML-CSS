import axios from 'axios';
/** Bài 1: Gọi API GET đơn giản

Yêu cầu:

Dùng Fetch để gọi API https://jsonplaceholder.typicode.com/posts

In danh sách tiêu đề (title) ra console

👉 Mục tiêu: Làm quen với fetch, .then(), .json() */

//     fetch('https://jsonplaceholder.typicode.com/posts')
// .then(res =>  res.json())
// .then(rs => rs.forEach(item => console.log(item.title)))
// .catch(error => console.error(error.message))

/** Bài 2: Hiển thị dữ liệu ra HTML

Yêu cầu:

Hiển thị danh sách các bài viết (title, body) lên trình duyệt

👉 Mục tiêu: Kết hợp fetch với DOM manipulation */

// async function getData() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if (!res.ok) {
//             console.log('Response status', res.status);
//         }
//         const rs = await res.json();
//         document.getElementById('abc').innerHTML = rs.map(element =>
//             `<h3><strong>${element.title}</strong></h3><p>${element.body}</p>`
//         ).join('');

//         console.log(rs);
//     } catch (error) {
//         console.error(error.message);
//     }
// }

/** Bài 3: Gửi dữ liệu bằng POST

API: https://jsonplaceholder.typicode.com/posts

Yêu cầu:

Tạo form nhập title và body, gửi lên server bằng POST

Hiển thị lại dữ liệu đã gửi

Kỹ năng:

fetch(..., { method: 'POST', headers, body })

JSON.stringify() */

const request1 = new Request('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
});

// async function getData() {
//     try {
//         const res = await fetch(request1);
//         if (!res.ok) {
//             console.log('Response status', res.status);
//         }
//         const rs = await res.json();
//         console.log(rs);
//     } catch (error) {
//         console.error(error.message);
//     }
// }

/** 🔹 Bài 4: Gọi nhiều API cùng lúc

Yêu cầu:

Gọi danh sách users và posts song song.

    Hiển thị post kèm tên tác giả (gắn userId với user).

Kỹ năng:

Promise.all()

Kết hợp dữ liệu từ 2 API */

const request2 = new Request('https://jsonplaceholder.typicode.com/users', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json',
  },
});

// async function getData2() {
//     try {
//         const res = await fetch(request2);
//         if (!res.ok) {
//             console.log('Response status', res.status);
//         }
//         const rs = await res.json();
//         console.log(rs);
//     } catch (error) {
//         console.error(error.message);
//     }
// }

const getPost = async () => {
  const a = await axios.get('https://jsonplaceholder.typicode.com/posts');
  return a;
};
const getUser = async () => {
  const a = await axios.get('https://jsonplaceholder.typicode.com/users');
  return a;
};

async function getData3() {
  try {
    const [p, u] = await Promise.all([getPost, getUser]);
    const all = p.map((po) => {
      const author = u.find((us) => us.id === po.userId);
      return {
        ...po,
        authorName: author ? author.name : 'Unknown',
      };
    });
    const html = all
      .map(
        (item) => `<h3><strong> Title: ${item.title}</strong></h3>
                <address>Author: ${item.authorName}</address>
                <p>Body: ${item.body}</p>`,
      )
      .join('');

    document.getElementById('abc').innerHTML = html;
  } catch (error) {
    console.error(error.message);
  }
}

getData3();

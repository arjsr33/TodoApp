const todolist = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
          const data = JSON.parse(request.responseText);
          callback(undefined, data);
      } else if (request.readyState === 4) {
          callback("Could not fetch data", undefined);
      }
  });
  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send();
};

const processTodos = () => {
  return new Promise((resolve, reject) => {
      todolist((err, data) => {
          if (err) {
              reject(err);
          } else {
              resolve(data);
          }
      });
  });
};

const addrtot = (item) => {
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.title}</td>
      <td><input type="checkbox" ${item.completed ? 'checked' : ''}></td>`;
const checkbox = row.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', handleCheckboxChange);
  document.getElementById("fillrows").appendChild(row);
};

const handleCheckboxChange = (() => {
  let Counter = 0;
  return (event) => {
      if (event.target.checked) {
          Counter++;
      } else {
          Counter--;
      }

      if (Counter === 5) {
          alert("5 tasks completed!");
      }
  };
})();

processTodos()
  .then(data => {
      data.forEach(item => addrtot(item));
  })
  .catch(err => {
      console.log(err);
  });

function logout() {
  alert('You have been logged out. Please log in again.');
}
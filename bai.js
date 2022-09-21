let arr = [];

function addProduct() {
    let pro = document.getElementById('product').value;
    let result = '';
    arr.push(pro);
    for (let i = 0; i < arr.length; i++) {
        result += '<tr>' + '<td>'+arr[i]+'</td>'
                + '<td><button style="background: lightblue;border-radius: 30px;width: 60px;height: 40px" type="button" onclick="edit(this)">Edit</button></td>' +
                  '<td><button style="background: lightblue;border-radius: 30px;width: 60px;height: 40px" type="button" onclick="remove(this)">Delete</button></td>'
                 +'</tr>';
        document.getElementById('num').innerHTML=i;
    }
    document.getElementById('result').innerHTML = result;
    return arr;
}

function edit(edtBtn) {
    let currentProduct = edtBtn.parentElement.previousSibling;//lấy giá trị trước đó trong html
    currentProduct.innerHTML = prompt('Nhập tên cần sửa');
}

function remove(removeBtn) {
    let currentProduct = removeBtn.parentElement.parentElement;// lấy hàm trước đó trong html
    currentProduct.remove();
}

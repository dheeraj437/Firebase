function renderEmployee(document) {
        let item = `<tr data-id="${document.id}">
        <td>
            <span class="custom-checkbox">
                <input type="checkbox" id="${document.id}" name="options[]" value="${document.id}">
                <label for="${document.id}"></label>
            </span>
        </td>
        <td>${document.data().crop}</td>
        <td>${document.data().name}</td>
        <td>${document.data().father}</td>
        <td>${document.data().khata}</td>
        <td>${document.data().survey}</td>
        
        <td>${document.data().phone}</td>
        <td>${document.data().aadhaar}</td>
        <td>${document.data().account}</td>
        <td>${document.data().ifsc}</td>
        <td>${document.data().bank}</td>
       
        <td>
            <a href="#" id="${document.id}" class="edit js-edit-employee"><i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
            </a>
            <a href="#" id="${document.id}" class="delete js-delete-employee"><i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
            </a>
        </td>

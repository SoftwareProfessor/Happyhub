let form = document.querySelector("form"),
    btnSubmit = form.querySelector(".submit input"),
    result = form.querySelector(".result");

    form.onsubmit = (e)=>{
      e.preventDefault();
    }
    let xhr = new XMLHttpRequest;

    xhr.open("POST", "App/src/register.php",true);

    btnSubmit.onclick = ()=>{
      xhr.onload = ()=>{
        console.log(xhr.response);
      }
    }

    let formdata = new FormData(form);
    xhr.send(formdata);

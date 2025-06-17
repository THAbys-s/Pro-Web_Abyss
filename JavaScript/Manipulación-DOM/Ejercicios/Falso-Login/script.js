const boton_login = document.getElementById("boton-login");

const user = document.getElementById("input-user");
const pw = document.getElementById("input-pw");

boton_login.addEventListener("click", function () {
  if (user.value === "" && pw.value === "") {
    alert("Nombre de Usuario y Contraseña faltantes.");
  }
  else if (user.value === "" || user.value.replace(/\s+/g, "") !== user.value) {
    alert(
      "Nombre de Usuario faltante. Por favor, ingrese un nombre de usuario válido."
    );
  } else if (pw.value === "" || pw.value.includes(" ")) {
    alert("Contraseña faltante. Por favor, ingrese una contraseña válida.");
  } else {
    console.log("Usuario:", user.value);
    console.log("Contraseña:", pw.value);
    localStorage.setItem("Usuario", user.value);
    localStorage.setItem("Contraseña", pw.value);
  }
});

const obtenerEmpleados = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const dataEmpleados = await response.json(); // Es necesario que aguarde la respuesta antes de seguir.
  return dataEmpleados;
};

if (localStorage.getItem("Usuario") !== "") {
  console.log("Empleados: ", obtenerEmpleados());
}

const divGrilla = document.getElementById("div-grilla");
obtenerEmpleados().then((empleados) => {
  empleados.forEach((empleado) => {
    
    const elementList = document.createElement("li");
    const tarjetaNombre = document.createElement("h5");
    const tarjetaEmail = document.createElement("h5");
    const tarjetaCompania = document.createElement("h5");
    tarjetaNombre.textContent = "Empleado: " + empleado.name;

    tarjetaEmail.textContent = "Email: " + empleado.email;
    tarjetaCompania.textContent = " Compania: " + empleado.company.name;
    
    divGrilla.appendChild(elementList);
    elementList.appendChild(tarjetaNombre);
    elementList.appendChild(tarjetaEmail);
    elementList.appendChild(tarjetaCompania);
  });
});
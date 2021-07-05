function Usuario(nombre, apellido, libros = [], mascotas = []) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.libros = libros;
  this.mascotas = mascotas;
}

Usuario.prototype.getFullName = function () {
  return `${this.nombre} ${this.apellido}`;
};

Usuario.prototype.addMascota = function (mascota) {
  this.mascotas.push(mascota);
};

Usuario.prototype.getMascotas = function () {
  return this.mascotas;
};

Usuario.prototype.addBook = function (book, autor) {
  const libro = {
    nombre: book,
    autor: autor,
  };
  this.libros.push(libro);
};

Usuario.prototype.getBook = function () {
  return this.libros;
};

const juan = new Usuario(
  "juan",
  "Perez",
  [{ nombre: "Lengua", autor: "Fernandez" }],
  ["Nina", "Moncho", "Hermano", "Perico"]
);

juan.getFullName();
juan.addMascota("Firulay");
juan.getMascotas();
juan.addBook("Programación", "Roman");
juan.getBook();

<main id="main" class="main">
  <div class="pagetitle">
    <h1>Agregar Inmueble</h1>
    <nav>
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="index.php">Inicio</a></li>
        <li class="breadcrumb-item">Inmuebles</li>
        <li class="breadcrumb-item active">Crear Inmuebles</li>
      </ol>
    </nav>
  </div>
  <!-- End Page Title -->
  <section class="section">
    <div class="row">
      <div class="col-lg-8">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Datos del Inmueble</h5>

            <!-- Horizontal Form -->
            <form>
              <div class="row mb-3">
                <div class="col-sm-12">
                  <label for="inputEmail3" class="col-sm-12 col-form-label"
                    >Titulo del Inmueble</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="inputText"
                    placeholder="Nombre del inmueble Visible"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputState" class="form-label"
                    >Estado de la Publicacion</label
                  >
                  <select id="inputState" class="form-select">
                    <option selected>Destacado</option>
                    <option>Promocion</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="inputState" class="form-label"
                    >Matricula Inmobiliaria</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="inputNumber"
                    placeholder="Identificador Unico "
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputState" class="form-label"
                    >Precio de Venta</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="inputNumber"
                    placeholder="123456789"
                  />
                </div>
                <div class="col-md-3">
                  <label for="inputState" class="form-label">
                    Precio de Arriendo
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="123456789"
                  />
                </div>
                <div class="col-md-3">
                  <label for="inputState" class="form-label">Tiempo</label>
                  <select name="" class="form-select">
                    <option value="" selected>Mensual</option>
                    <option value="">Quincenal</option>
                    <option value="">Trimestral</option>
                    <option value="">Semestral</option>
                    <option value="">Anual</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="inputState" class="form-label"
                    >Administracion</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    id="inputNumber"
                    placeholder="123456789"
                  />
                </div>
                <div class="col-md-6">
                  <label for="inputState" class="form-label"
                    >Tipo de Moneda</label
                  >
                  <select name="" class="form-select">
                    <option value="" selected>Pesos Colombianos</option>
                    <option value="">Euro</option>
                    <option value="">Dolar</option>
                    <option value="">Sol</option>
                  </select>
                </div>
                <div class="col-md-6">
                  <label for="inputState" class="form-label"
                    >Estado Físico de la propiedad</label
                  >
                  <select name="" class="form-select">
                    <option value="" selected>Usado</option>
                    <option value="">Nuevo</option>
                    <option value="">Remodelado</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputState" class="form-label">
                    Año de Construcción</label
                  >
                  <input
                    type="number"
                    class="form-control"
                    placeholder="Ej: 2004"
                  />
                </div>
                <div class="col-md-3">
                  <label for="inputState" class="form-label">
                    Precio de Arriendo
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    placeholder="123456789"
                  />
                </div>

                <div class="col-md-3">
                  <label for="inputState" class="form-label">Baños</label>
                  <select name="" class="form-select">
                    <option value="" selected>0</option>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                    <option value="">+4</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputState" class="form-label">Garaje</label>
                  <select name="" class="form-select">
                    <option value="" selected>0 Vehiculos</option>
                    <option value="">1 Vehiculos</option>
                    <option value="">2 Vehiculos</option>
                    <option value="">3 Vehiculos</option>
                    <option value="">4 Vehiculos o más</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputState" class="form-label">Estrato</label>
                  <select name="" class="form-select">
                    <option value="" selected>N/D</option>
                    <option value="">Estrato 1</option>
                    <option value="">Estrato 2</option>
                    <option value="">Estrato 3</option>
                    <option value="">Estrato 4</option>
                    <option value="">Estrato 5</option>
                    <option value="">Estrato 6</option>
                  </select>
                </div>
                <div class="col-md-3">
                  <label for="inputState" class="form-label">Pisos</label>
                  <input type="number" class="form-control" placeholder="0" />
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label"
                    >Area Privada</label
                  >
                  <input type="number" class="form-control" placeholder="M²" />
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label"
                    >Area Construida</label
                  >
                  <input type="number" class="form-control" placeholder="M²" />
                </div>
                <div class="col-md-4">
                  <label for="inputState" class="form-label">Area Total</label>
                  <input type="number" class="form-control" placeholder="M²" />
                </div>
                <div class="col-md-6">
                  <label for="inputNumber" class="col-form-label"
                    >Imagen Principal</label
                  >
                  <input class="form-control" type="file" id="formFile" />
                </div>
                <div class="col-md-6">
                  <label for="inputNumber" class="col-form-label"
                    >Imagenes</label
                  >
                  <input class="form-control" type="file" id="formFile" />
                </div>
              </div>
            </form>
            <!-- End Horizontal Form -->
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Ubicación Geográfica</h5>

            <!-- Vertical Form -->
            <form class="row g-3">
              <div class="col-12">
                <label for="inputNanme4" class="form-label">País</label>
                <select name="" id="" class="form-select">
                  <option value="">Colombia</option>
                  <option value="">Ecuador</option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputNanme4" class="form-label">Departamento</label>
                <select name="" id="" class="form-select">
                  <option value="">Córdoba</option>
                  <option value="">Ecuador</option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputEmail4" class="form-label">Zona</label>
                <select name="" id="" class="form-select">
                  <option value="">Rural</option>
                  <option value="" selected>Urbana</option>
                </select>
              </div>
              <div class="col-12">
                <label for="inputPassword4" class="form-label"
                  >Código Postal</label
                >
                <input type="number" class="form-control" id="inputPassword4" />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Direccion</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder="Solo el visible al Administrador"
                />
              </div>
              <div class="col-12">
                <label for="" class="form-label"
                  >Ubicación en Google Maps</label
                >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63092.32271905635!2d-75.91698968283247!3d8.76063172018435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2fe5a57031ad%3A0x92e1cbad2ed7c0a0!2zTW9udGVyw61hLCBDw7NyZG9iYQ!5e0!3m2!1ses!2sco!4v1680145580588!5m2!1ses!2sco"
                  width="100%"
                  height="300"
                  style="border: 0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </form>
            <!-- Vertical Form -->
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
function getViewVentas(){
    let view = {
        plantilla:()=>{
            return `
            <div class="card">
                <div class="card-header">
                    <h1>Listado de Ventas</h1>
                    <div class="row">

                        <div class="col-6">
                            <div class="form-group">
                                <label>Fecha</label>
                                <input type="date" class="form-control datetime-picker flatpickr-input active" id="txtFecha">
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="card-body">
                    
                    <div class="table-responsive">
                        <table class="table table-responsive table-hover table-bordered">
                            <thead>
                                <tr>
                                    <td>CLIENTE</td>
                                    <td>POLLOS</td>
                                    <td>LIBRAS</td>
                                    <td>IMPORTE</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblVentas">
                            
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            <div class="boton-derecha">
                <button class="btn btn-success btn-xl btn-circle" id="btnNuevaVenta">
                    +
                </button>
            </div>
            ${view.modalNueva()}
            `
        },
        modalNueva:()=>{
            return `
            <div class="modal fade" tabindex="-1" role="dialog" id="modalNuevaVenta">
                <div class="modal-dialog modal-xl" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5>Nueva Venta</h5>
                        </div>
                        <div class="modal-body">
                            <div class="form-group">
                                <label>Cliente</label>
                                <input type="text" class="form-control" placeholder="Cliente" autocomplete="false">
                            </div>
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Cantidad Pollos</label>
                                        <input type="number" class="form-control" value="1" autocomplete="false">
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Libras</label>
                                        <input type="number" class="form-control" value="2" autocomplete="false">
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label>Importe Q</label>
                                        <input type="number" class="form-control" value="1.00" autocomplete="false">
                                    </div>
                                </div>
                            </div>

                            <div class="form-group">
                                <label>Observaciones</label>
                                <textarea class="form-control" rows="4" placeholder="Observaciones" autocomplete="false"></textarea>
                            </div>
                        </div>
                        <div class="modal-footer">
                        
                        <button type="button" class="btn btn-primary" id="btnVentasGuardar">Guardar</button>
                        
                        </div>
                    </div>
                </div>
            </div>
            `
        }
    }

    root.innerHTML = view.plantilla();

};

function addListenerVentas(){
    let btnNuevaVenta = document.getElementById('btnNuevaVenta');
    btnNuevaVenta.addEventListener('click',()=>{
        $('#modalNuevaVenta').modal('show');
    })


};

function initViewVentas(){
    getViewVentas();
    addListenerVentas();

};
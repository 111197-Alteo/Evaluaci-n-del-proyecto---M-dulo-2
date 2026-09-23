onRefresh(args: any) {

    const pullRefresh = args.object;

    setTimeout(() => {

        const nuevoProducto = {
            id: Date.now(),
            nombre: 'Producto ' + Math.floor(Math.random() * 100),
            precio: Math.floor(Math.random() * 5000),
            categoria: 'Nuevo'
        };

        this.productos.unshift(nuevoProducto);
        this.filtrarProductos();

        pullRefresh.notifyPullToRefreshFinished();

        this.mostrarToast('Se agregó un producto nuevo');

    }, 1000);
}

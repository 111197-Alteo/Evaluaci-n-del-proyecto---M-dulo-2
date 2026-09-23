import { RouterExtensions } from '@nativescript/angular';

constructor(
    private routerExtensions: RouterExtensions
) {}

onProductoTap(producto: any) {
    this.routerExtensions.navigate(
        ['/productos/detalle', producto.id]
    );
}

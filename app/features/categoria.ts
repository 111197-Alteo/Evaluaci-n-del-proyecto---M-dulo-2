import { action } from '@nativescript/core/ui/dialogs';

async seleccionarCategoria(producto: any) {

    const categoria = await action({
        message: 'Selecciona una categoría',
        cancelButtonText: 'Cancelar',
        actions: [
            'Tecnología',
            'Accesorios',
            'Oficina',
            'Gaming'
        ]
    });

    if (categoria !== 'Cancelar') {
        producto.categoria = categoria;
        this.mostrarToast(
            `Categoría modificada a ${categoria}`
        );
    }
}

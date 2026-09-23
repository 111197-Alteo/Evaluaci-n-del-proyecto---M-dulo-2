actualizar() {

    const button = this.refreshButton.nativeElement;

    button.animate({
        rotate: 360,
        duration: 700
    });

    this.mostrarToast('Lista actualizada');
}

@ViewChild('refreshButton', { static: false })
refreshButton: ElementRef;

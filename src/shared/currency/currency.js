export function currency(currencyAmount){
    return new Intl.NumberFormat(('es-CO'), {
        style: 'currency',
        currency: 'COP'
    }).format(currencyAmount).replace(/\D00$/, '')

}
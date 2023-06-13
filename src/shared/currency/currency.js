export function currency(currencyAmount){
    const formatNumber = new Intl.NumberFormat(('es-CO'), {
        style: 'currency',
        currency: 'COP'
    })

    return formatNumber.format(currencyAmount)
}
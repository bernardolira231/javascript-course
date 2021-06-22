var month = 'Enero'

switch (month) {
  case 'Enero' || 'Marzo' || 'Mayo' || 'Julio' || 'Agosto' || 'Octubre' || 'Diciembre':
    console.log(`El mes de ${month} tiene 31 dias`);
    break;

  case 'Febrero':
    console.log('El mes de Febrero tiene 28/29 dias');
    break;

  case 'Abril' || 'Junio' || 'Septiembre' || 'Noviembre':
    console.log(`El mes de ${month} tiene 30 dias`);

  default:
    break;
		
}

function somar(primeiroNumero, segundoNumero) {
	return primeiroNumero + segundoNumero;
}

function subtrair(primeiroNumero, segundoNumero) {
	return primeiroNumero - segundoNumero;
}

function dividir(dividendo, divisor) {
	if (divisor === 0) {
		throw new Error('Não é possível dividir por zero');
	}

	return dividendo / divisor;
}

module.exports = { somar, subtrair, dividir };
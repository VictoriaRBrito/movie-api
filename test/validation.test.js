const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

it('Caso válido', () => {
    const result = Validation.create({
        nome: "Luca",
        produtora: "Pixar",
        atores: "Jacob Tremblay, Jack Dylan Grazer, Emma Berman, Maya Rudolph",
        ano: "2021"
    });
    expect(result).toEqual(undefined);
});

it('Caso inválido - sem o parâmetro nome', () => {
    const result = Validation.create({
        produtora: "Pixar",
        atores: "Jacob Tremblay, Jack Dylan Grazer, Emma Berman, Maya Rudolph",
        ano: "2021"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro produtora', () => {
    const result = Validation.create({
        nome: "Luca",
        atores: "Jacob Tremblay, Jack Dylan Grazer, Emma Berman, Maya Rudolph",
        ano: "2021"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro atores', () => {
    const result = Validation.create({
        nome: "Luca",
        produtora: "Pixar",
        ano: "2021"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

it('Caso inválido - sem o parâmetro ano', () => {
    const result = Validation.create({
        nome: "Luca",
        produtora: "Pixar",
        atores: "Jacob Tremblay, Jack Dylan Grazer, Emma Berman, Maya Rudolph"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});

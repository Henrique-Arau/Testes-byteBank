test('Deve retornar o valor do saldo com rendimento', ()=>{
    const calcularRendimento = jest.fn(saldo => saldo + saldo * 0.005);

    const saldo = 100;

    const novoSaldo = calcularRendimento(saldo);

    expect(novoSaldo).toBe(100.5);
    expect(calcularRendimento).toBeCalled();
    expect(calcularRendimento).toHaveBeenCalledWith(saldo);
})
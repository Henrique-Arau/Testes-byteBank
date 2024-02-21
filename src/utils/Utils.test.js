import { calculaNovoSaldo } from './index';



describe('Quando eu realizo uma transação', ()=>{
    test('Que é um deposito, o saldo deve aumentar', ()=>{
        const transacao = {
            transacao: 'Depósito',
            valor: 50,
        };

        const novoSaldo = calculaNovoSaldo(transacao, 100);
        expect(novoSaldo).toBe(150);
    });

    test('Que é um deposito, o saldo deve diminuir', ()=>{
        const transacao = {
            transacao: 'Transferência',
            valor: 50,
        };

        const novoSaldo = calculaNovoSaldo(transacao, 100);
        expect(novoSaldo).toBe(50);
    });
});





test('Deve retornar o valor do saldo com rendimento', ()=>{
    const calcularRendimento = jest.fn(saldo => saldo + saldo * 0.005);

    const saldo = 100;

    const novoSaldo = calcularRendimento(saldo);

    expect(novoSaldo).toBe(100.5);
    expect(calcularRendimento).toBeCalled();
    expect(calcularRendimento).toHaveBeenCalledWith(saldo);
});
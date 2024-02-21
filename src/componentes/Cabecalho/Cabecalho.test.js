import { render, screen } from '@testing-library/react'
import Cabecalho from './index';


test("Deve inderizar o nome do usuário logado", ()=> {
    render(<Cabecalho/>);
    const nomeUsuario = screen.getByText('Joana Fonseca Gomes');
    expect(nomeUsuario).toBeInTheDocument();
})
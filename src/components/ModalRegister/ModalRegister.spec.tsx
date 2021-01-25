import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import ModalRegister from '.';

const onCloseMock = () => { };

describe('ModalRegister component', () => {
  it('shoud render form inputs', () => {
    render(<ModalRegister onClose={onCloseMock} />);

    expect(screen.getByLabelText(/collaborator input/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/photoName input/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/photoLocation input/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/dateRegister input/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/photo file/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contract text/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/signature input/i)).toBeInTheDocument();
    expect(screen.getByText(/Enviar/i)).toBeInTheDocument();
  });

  it('should information error message', () => {
    const { getByLabelText } = render(<ModalRegister onClose={onCloseMock} />);

    const button = screen.getByText(/Enviar/i);

    fireEvent.change(getByLabelText(/collaborator input/i), { target: { value: '' } });
    fireEvent.click(button);
    expect(screen.getByText(/Campo Obrigatório!/i)).toBeInTheDocument();
    fireEvent.change(getByLabelText(/collaborator input/i), { target: { value: 'a' } });
    fireEvent.change(getByLabelText(/photoName input/i), { target: { value: '' } });
    fireEvent.click(button);
    expect(screen.getByText(/Campo Obrigatório!/i)).toBeInTheDocument();
    fireEvent.change(getByLabelText(/photoName input/i), { target: { value: 'a' } });
    fireEvent.change(getByLabelText(/photoLocation input/i), { target: { value: '' } });
    fireEvent.click(button);
    expect(screen.getByText(/Campo Obrigatório!/i)).toBeInTheDocument();
    fireEvent.change(getByLabelText(/photoLocation input/i), { target: { value: 'a' } });
    fireEvent.change(getByLabelText(/dateRegister input/i), { target: { value: '' } });
    fireEvent.click(button);
    expect(screen.getByText(/Campo Obrigatório!/i)).toBeInTheDocument();
    fireEvent.change(getByLabelText(/dateRegister input/i), { target: { value: '01/05/2020' } });
    fireEvent.change(getByLabelText(/photo file/i), { target: { files: '' } });
    fireEvent.click(button);
    expect(screen.getByText(/Campo Obrigatório!/i)).toBeInTheDocument();
    fireEvent.change(getByLabelText(/photo file/i), { target: { files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })] } });
    fireEvent.change(getByLabelText(/signature input/i), { target: { checked: true } });

    expect(fireEvent.click(button)).toBeTruthy();
  });

  it('should register information', () => {
    const { getByLabelText } = render(<ModalRegister onClose={onCloseMock} />);

    fireEvent.change(getByLabelText(/collaborator input/i), { target: { value: 'a' } });
    fireEvent.change(getByLabelText(/photoName input/i), { target: { value: 'a' } });
    fireEvent.change(getByLabelText(/photoLocation input/i), { target: { value: 'a' } });
    fireEvent.change(getByLabelText(/dateRegister input/i), { target: { value: '01/05/2020' } });
    fireEvent.change(getByLabelText(/photo file/i), { target: { files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })] } });
    fireEvent.change(getByLabelText(/signature input/i), { target: { checked: true } });
    const button = screen.getByText(/Enviar/i);
    expect(fireEvent.click(button)).toBeTruthy();
  });
});

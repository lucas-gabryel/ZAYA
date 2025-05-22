import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import FormLogin from "../FormLogin";
import "@testing-library/jest-dom";

let alertSpy: jest.SpyInstance;
let consoleLogSpy: jest.SpyInstance;

beforeAll(() => {
  alertSpy = jest.spyOn(window, 'alert').mockImplementation(() => {});
  consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  alertSpy.mockClear();
  consoleLogSpy.mockClear();
});

afterAll(() => {
  alertSpy.mockRestore();
  consoleLogSpy.mockRestore();
});

describe("FormLogin", () => {
    it("TU01 - Deve renderizar os campos de e-mail e senha", () => {
        render(<FormLogin />);
        expect(screen.getByPlaceholderText("Digite seu e-mail")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("Digite sua senha")).toBeInTheDocument();
    });

    it("TU02 - Deve exibir erros de validação ao enviar campos vazios", async () => {
        render(<FormLogin />);
        fireEvent.click(screen.getByRole("button", {name: /entrar/i}));

        await waitFor(() => {
            expect(screen.getByText("Por favor, insira um e-mail válido!")).toBeInTheDocument();
            expect(screen.getByText("A senha precisa ter mais de 7 caracteres")).toBeInTheDocument();
        })
    });

    it("TU03 - Deve exibir alerta de sucesso ao submeter dados válidos", async () => {
        render(<FormLogin />);

        fireEvent.change(screen.getByPlaceholderText("Digite seu e-mail"), {
            target: { value: "teste@teste.com" },
        });

        fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), {
            target: { value: "12345678" },
        });

        fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

        await waitFor(() => {
            expect(screen.getByText("Login realizado com sucesso!")).toBeInTheDocument();
        }, { timeout: 2500 });
    });

    it("TU04 - Deve exibir erro ao digitar um e-mail inválido", async () => {
        render(<FormLogin />);

        fireEvent.change(screen.getByPlaceholderText("Digite seu e-mail"), {
            target: { value: "invalido" },
        });

        fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), {
            target: { value: "12345678" },
        });

        fireEvent.click(screen.getByRole("button", { name: /entrar/i }));

        await waitFor(() => {
            expect(screen.getByText(/insira um e-mail válido/i)).toBeInTheDocument();
        });
    });

    it("TU05 - Deve desabilitar o botão enquanto está enviando", async () => {
        render(<FormLogin />);

        fireEvent.change(screen.getByPlaceholderText("Digite seu e-mail"), {
            target: { value: "teste@email.com" },
        });

        fireEvent.change(screen.getByPlaceholderText("Digite sua senha"), {
            target: { value: "12345678" },
        });

        const botao = screen.getByRole("button", { name: /entrar/i });

        fireEvent.click(botao);

        expect(botao).toBeDisabled();

        await waitFor(() => {
            expect(botao).not.toBeDisabled();
        }, { timeout: 2500 });
    });

})
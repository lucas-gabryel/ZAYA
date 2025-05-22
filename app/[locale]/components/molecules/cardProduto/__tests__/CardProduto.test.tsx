import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { CardProduto } from "../CardProduto";
import { CurtidasProvider } from "@/app/[locale]/context/CurtidasContext";

Object.assign(navigator, {
  clipboard: {
    writeText: jest.fn(),
  },
});

const toggleCurtida = jest.fn();
const compartilhar = jest.fn();

jest.mock("@/app/hooks/useCurtidas", () => ({
  useCurtidas: () => ({
    isCurtido: jest.fn((id: string) => id === "curtido"),
    toggleCurtida,
  }),
}));

jest.mock("@/app/hooks/useCompartilhar", () => ({
  useCompartilhar: () => ({
    compartilhar,
  }),
}));

function AllProviders({ children }: { children: React.ReactNode }) {
  return <CurtidasProvider>{children}</CurtidasProvider>;
}

describe("CardProduto", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("TU01 - Deve renderizar imagem, título e preço corretamente", () => {
    render(
      <CardProduto
        id="1"
        image="/camisaMinimal.png"
        title="Tênis ZAYA"
        price="199.99"
      />,
      { wrapper: AllProviders }
    );

    expect(screen.getByAltText("Tênis ZAYA")).toBeInTheDocument();
    expect(screen.getByText("Tênis ZAYA")).toBeInTheDocument();
    expect(screen.getByText("R$ 199,99")).toBeInTheDocument();
    expect(screen.getByText("R$ 219,99")).toBeInTheDocument();
  });

  it("TU02 - Deve chamar toggleCurtida ao clicar no botão de curtir", () => {
    render(
      <CardProduto
        id="1"
        image="/camisaMinimal.png"
        title="Produto"
        price="100.00"
      />,
      { wrapper: AllProviders }
    );

    const btnCurtida = screen.getByRole("button", { name: /curtir/i });
    fireEvent.click(btnCurtida);

    expect(toggleCurtida).toHaveBeenCalledWith("1");
  });

  it("TU03 - Deve aplicar classe de curtido quando o item estiver curtido", () => {
    render(
      <CardProduto
        id="curtido"
        image="/camisaMinimal.png"
        title="Produto"
        price="100.00"
      />,
      { wrapper: AllProviders }
    );

    const btn = screen.getByRole("button", { name: /curtir/i });
    expect(btn).toHaveClass("bg-red-500");
  });

  it("TU04 - Deve chamar compartilhar com URL, título e mensagem ao clicar", () => {
    render(
      <CardProduto
        id="5"
        image="/camisaMinimal.png"
        title="Produto"
        price="100.00"
      />,
      { wrapper: AllProviders }
    );

    const btn = screen.getByRole("button", { name: /compartilhar/i });
    fireEvent.click(btn);

    expect(compartilhar).toHaveBeenCalledWith(
      "https://zaya-omega.vercel.app/produto/5",
      "Produto",
      "Dá uma olhada nesse produto que eu encontrei!"
    );
  });

  it("TU05 - Deve conter dois botões com ícones de curtir e compartilhar", () => {
    render(
      <CardProduto
        id="3"
        image="/camisaMinimal.png"
        title="Produto"
        price="99.00"
      />,
      { wrapper: AllProviders }
    );

    const btns = screen.getAllByRole("button");
    expect(btns.length).toBeGreaterThanOrEqual(2);
    expect(screen.getByRole("button", { name: /curtir/i })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /compartilhar/i })
    ).toBeInTheDocument();
  });

  it("TU06 - Deve renderizar a imagem com src e alt corretos", () => {
    render(
      <CardProduto
        id="10"
        image="/camisaMinimal.png"
        title="Tênis ZAYA"
        price="150.00"
      />,
      { wrapper: AllProviders }
    );

    const img = screen.getByAltText("Tênis ZAYA") as HTMLImageElement;

    expect(img).toBeInTheDocument();
    expect(img.src).toContain("/camisaMinimal.png");
    expect(img.alt).toBe("Tênis ZAYA");
  });
});

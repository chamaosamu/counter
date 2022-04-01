import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from ".";

describe("Componente Counter", () => {
  beforeEach(() => {
    render(<Counter />);
  });
  describe("Title", () => {
    let counterTitle;
    beforeEach(() => {
      counterTitle = screen.getByText("0");
    });
    // primeiramente, componente deve iniciar com valor 0
    test("O componente devera iniciar o titulo com o valor = 0", () => {
      expect(counterTitle).toBeInTheDocument();
    });

    // o titulo deve conter a classe counter__title, pois tem um modificador
    test("O titulo devera conter a classe counter__title", () => {
      expect(counterTitle).toHaveClass("counter__title");
    });

    // ao iniciar, o titulo não deve conter a modificador na classe, pois o valor é 0
    test("O título não devera conter modificador no início", () => {
      expect(counterTitle).not.toHaveClass("counter__title--increment");
      expect(counterTitle).not.toHaveClass("counter__title--increment");
    });
  });

  // ao iniciar, o componente deve ter o botao de incremento
  test("O componente devera conter um botão incrementar", () => {
    const incrementButton = screen.getByRole("button", {
      name: "+",
    });
    expect(incrementButton).toBeInTheDocument();
  });

  // ao iniciar, o componente deve ter o botao de decremento
  test("O componente devera conter um botão decrementar", () => {
    const decrementButton = screen.getByRole("button", {
      name: "-",
    });

    expect(decrementButton).toBeInTheDocument();
  });

  test("O componente devera conter um botão para incrementar com as classes button e button--increment", () => {
    const incrementButton = screen.getByRole("button", {
      name: "+",
    });

    expect(incrementButton).toHaveClass("button");
    expect(incrementButton).toHaveClass("button--increment");
  });

  test("O componente devera conter um botão para decrementar com as classes button e button--decrement", () => {
    const decrementButton = screen.getByRole("button", {
      name: "-",
    });

    expect(decrementButton).toHaveClass("button");
    expect(decrementButton).toHaveClass("button--decrement");
  });

  //// TESTES DE EVENTOS ////

  test("O componente devera incrementar +1 ao clicar no botão +", () => {
    const incrementButton = screen.getByRole("button", {
      name: "+",
    });

    // verifica se antes do evento do clique, o valor esta como null
    expect(screen.queryByText("1")).toBeNull();
    userEvent.click(incrementButton);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  test("O componente devera decrementar -1 ao clicar no botão -", () => {
    const decrementButton = screen.getByRole("button", {
      name: "-",
    });

    expect(screen.queryByText("-1")).toBeNull();
    userEvent.click(decrementButton);
    expect(screen.getByText("-1")).toBeInTheDocument();
  });

  // Teste de modificadores do titulo, para mudanca das cores
  test("O componente devera adicionar a classe counter__title--increment no titulo, quando o valor for positivo", () => {
    const incrementButton = screen.getByRole("button", {
      name: "+",
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--increment"
    );
    userEvent.click(incrementButton);
    expect(screen.getByText("1")).toHaveClass("counter__title--increment");
  });

  test("O componente devera adicionar a classe counter__title--decrement no titulo, quando o valor for negativo", () => {
    const decrementButton = screen.getByRole("button", {
      name: "-",
    });

    expect(screen.queryByText("0")).not.toHaveClass(
      "counter__title--decrement"
    );
    userEvent.click(decrementButton);
    expect(screen.getByText("-1")).toHaveClass("counter__title--decrement");
  });
});
